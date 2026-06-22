import { prisma } from '@/lib/prisma';
import { encryptCredential, decryptCredential } from '@/lib/crypto';
import type { CreateCredentialInput, CredentialMetadata } from './credentials.types';

export class CredentialServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 400
  ) {
    super(message);
    this.name = 'CredentialServiceError';
  }
}

export class CredentialsService {
  static async store(input: CreateCredentialInput): Promise<CredentialMetadata> {
    if (!input.apiKey || input.apiKey.length < 8) {
      throw new CredentialServiceError('API key is too short', 400);
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
      throw new CredentialServiceError('Credential not found', 404);
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
      throw new CredentialServiceError('No active credential found for this provider', 404);
    }

    return decryptCredential(credential.ciphertext);
  }
}