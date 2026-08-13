import { prisma } from '@/lib/prisma';
import { encryptCredential, decryptCredential } from '@/lib/crypto';
import { defaultRateLimiter } from '@/lib/rate-limit';
import type { CreateCredentialInput, CredentialMetadata } from './credentials.types';

export class CredentialServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 400,
    public readonly code: string = 'BAD_REQUEST'
  ) {
    super(message);
    this.name = 'CredentialServiceError';
  }
}

export class CredentialsService {
  private static async validateGroqCredential(apiKey: string): Promise<void> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    try {
      const response = await fetch('https://api.groq.com/openai/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
        signal: controller.signal,
      });

      if (response.status === 401 || response.status === 403) {
        throw new CredentialServiceError('Invalid Groq API key', 400, 'INVALID_CREDENTIAL');
      }

      if (!response.ok) {
        throw new CredentialServiceError(`Groq API returned ${response.status}`, 502, 'PROVIDER_UNAVAILABLE');
      }
    } catch (error: unknown) {
      if (error instanceof CredentialServiceError) {
        throw error;
      }
      const isAbort = (error as Error).name === 'AbortError';
      if (isAbort) {
        throw new CredentialServiceError('Validation timed out', 504, 'PROVIDER_UNAVAILABLE');
      }
      throw new CredentialServiceError('Failed to validate credential', 502, 'PROVIDER_UNAVAILABLE');
    } finally {
      clearTimeout(timeoutId);
    }
  }

  static async store(input: CreateCredentialInput): Promise<CredentialMetadata> {
    if (!input.apiKey || input.apiKey.length < 8) {
      throw new CredentialServiceError('API key is too short', 400, 'INVALID_CREDENTIAL');
    }

    if (input.provider === 'groq') {
      if (!defaultRateLimiter.check(input.userId)) {
        throw new CredentialServiceError('Too many validation attempts. Please try again later.', 429, 'RATE_LIMITED');
      }
      await this.validateGroqCredential(input.apiKey);
    }

    const { ciphertext, keyVersion, maskedSuffix } = encryptCredential(input.apiKey);

    const credential = await prisma.providerCredential.upsert({
      where: { userId_provider: { userId: input.userId, provider: input.provider } },
      create: {
        userId: input.userId,
        provider: input.provider,
        ciphertext,
        keyVersion,
        maskedSuffix,
        revokedAt: null,
      },
      update: {
        ciphertext,
        keyVersion,
        maskedSuffix,
        revokedAt: null,
        updatedAt: new Date(),
      },
    });

    const { ciphertext: _c, ...metadata } = credential;
    return metadata;
  }

  static async list(userId: string): Promise<CredentialMetadata[]> {
    const credentials = await prisma.providerCredential.findMany({
      where: { userId, revokedAt: null },
    });

    return credentials.map(({ ciphertext: _c, ...metadata }) => metadata);
  }

  static async revoke(id: string, userId: string): Promise<void> {
    const credential = await prisma.providerCredential.findUnique({ where: { id } });

    if (!credential || credential.userId !== userId) {
      throw new CredentialServiceError('Credential not found', 404, 'NOT_FOUND');
    }

    await prisma.providerCredential.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  }

  // SERVER-SIDE ONLY — never call from client code or pass result to queues
  static async resolveForInternalUse(userId: string, provider: string): Promise<string> {
    const credential = await prisma.providerCredential.findUnique({
      where: { userId_provider: { userId, provider } },
    });

    if (!credential || credential.revokedAt) {
      throw new CredentialServiceError('No active credential found for this provider', 404, 'NOT_FOUND');
    }

    return decryptCredential(credential.ciphertext);
  }
}