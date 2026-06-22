import { describe, expect, it, beforeEach, vi } from 'vitest';

const MOCK_MASTER_KEY = 'a'.repeat(32);

beforeEach(() => {
  vi.stubEnv('CREDENTIAL_MASTER_KEY', MOCK_MASTER_KEY);
});

import { encryptCredential, decryptCredential } from './crypto';

describe('encryptCredential', () => {
  it('returns ciphertext, keyVersion, and maskedSuffix', () => {
    const result = encryptCredential('gsk_testkey1234');
    expect(result.ciphertext).toBeTruthy();
    expect(result.keyVersion).toBe(1);
    expect(result.maskedSuffix).toBe('1234');
  });

  it('never stores plaintext in ciphertext', () => {
    const apiKey = 'gsk_supersecretkey';
    const { ciphertext } = encryptCredential(apiKey);
    expect(ciphertext).not.toContain(apiKey);
    expect(Buffer.from(ciphertext, 'base64').toString()).not.toContain(apiKey);
  });

  it('produces different ciphertext each call (random IV)', () => {
    const { ciphertext: c1 } = encryptCredential('gsk_samekey1234');
    const { ciphertext: c2 } = encryptCredential('gsk_samekey1234');
    expect(c1).not.toBe(c2);
  });
});

describe('decryptCredential', () => {
  it('round-trips correctly', () => {
    const apiKey = 'gsk_myrealkey5678';
    const { ciphertext } = encryptCredential(apiKey);
    const decrypted = decryptCredential(ciphertext);
    expect(decrypted).toBe(apiKey);
  });

  it('throws on tampered ciphertext', () => {
    const { ciphertext } = encryptCredential('gsk_testkey1234');
    const tampered = ciphertext.slice(0, -4) + 'XXXX';
    expect(() => decryptCredential(tampered)).toThrow();
  });

  it('throws on invalid format', () => {
    expect(() => decryptCredential('bm90dmFsaWQ=')).toThrow('Invalid ciphertext format');
  });
});