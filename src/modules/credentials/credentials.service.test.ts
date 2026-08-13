import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest';
import { CredentialsService, CredentialServiceError } from './credentials.service';
import { prisma } from '@/lib/prisma';
import { defaultRateLimiter } from '@/lib/rate-limit';

// Mock dependencies
vi.mock('@/lib/prisma', () => ({
  prisma: {
    providerCredential: {
      upsert: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

vi.mock('@/lib/crypto', () => ({
  encryptCredential: vi.fn(() => ({
    ciphertext: 'encrypted_content',
    keyVersion: 1,
    maskedSuffix: 'test',
  })),
  decryptCredential: vi.fn(() => 'gsk_decryptedkey'),
}));

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('CredentialsService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Default fetch success
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
    });
    
    // Reset rate limiter manually via checking multiple times if needed, or by mocking
    vi.spyOn(defaultRateLimiter, 'check').mockReturnValue(true);
  });

  describe('store', () => {
    it('validates groq credential via API', async () => {
      vi.mocked(prisma.providerCredential.upsert).mockResolvedValue({
        id: '123',
        userId: 'user1',
        provider: 'groq',
        ciphertext: 'enc',
        keyVersion: 1,
        maskedSuffix: 'abcd',
        createdAt: new Date(),
        updatedAt: new Date(),
        revokedAt: null,
      } as any);

      await CredentialsService.store({
        userId: 'user1',
        provider: 'groq',
        apiKey: 'gsk_validkey12345678',
      });

      expect(mockFetch).toHaveBeenCalledWith('https://api.groq.com/openai/v1/models', expect.objectContaining({
        headers: { Authorization: 'Bearer gsk_validkey12345678' }
      }));
    });

    it('rejects invalid groq credential', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
      });

      await expect(CredentialsService.store({
        userId: 'user1',
        provider: 'groq',
        apiKey: 'gsk_invalidkey1234',
      })).rejects.toThrowError(new CredentialServiceError('Invalid Groq API key', 400, 'INVALID_CREDENTIAL'));
      
      expect(prisma.providerCredential.upsert).not.toHaveBeenCalled();
    });

    it('enforces rate limits on validation', async () => {
      vi.spyOn(defaultRateLimiter, 'check').mockReturnValueOnce(false);

      await expect(CredentialsService.store({
        userId: 'user_spam',
        provider: 'groq',
        apiKey: 'gsk_validkey12345678',
      })).rejects.toThrowError(new CredentialServiceError('Too many validation attempts. Please try again later.', 429, 'RATE_LIMITED'));
      
      expect(mockFetch).not.toHaveBeenCalled();
      expect(prisma.providerCredential.upsert).not.toHaveBeenCalled();
    });

    it('fails gracefully when provider is unavailable', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(CredentialsService.store({
        userId: 'user1',
        provider: 'groq',
        apiKey: 'gsk_validkey12345678',
      })).rejects.toThrowError(new CredentialServiceError('Groq API returned 500', 502, 'PROVIDER_UNAVAILABLE'));
    });
  });

  describe('resolveForInternalUse', () => {
    it('throws if credential is revoked', async () => {
      vi.mocked(prisma.providerCredential.findUnique).mockResolvedValueOnce({
        id: '123',
        userId: 'user1',
        provider: 'groq',
        revokedAt: new Date(), // revoked
        ciphertext: 'enc',
      } as any);

      await expect(CredentialsService.resolveForInternalUse('user1', 'groq'))
        .rejects.toThrowError(new CredentialServiceError('No active credential found for this provider', 404, 'NOT_FOUND'));
    });

    it('returns decrypted key if valid', async () => {
      vi.mocked(prisma.providerCredential.findUnique).mockResolvedValueOnce({
        id: '123',
        userId: 'user1',
        provider: 'groq',
        revokedAt: null, // active
        ciphertext: 'enc',
      } as any);

      const key = await CredentialsService.resolveForInternalUse('user1', 'groq');
      expect(key).toBe('gsk_decryptedkey');
    });
  });
});
