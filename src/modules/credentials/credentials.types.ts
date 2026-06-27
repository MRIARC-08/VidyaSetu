export interface CreateCredentialInput {
  userId: string;
  provider: string;
  apiKey: string;
}

export interface CredentialMetadata {
  id: string;
  userId: string;
  provider: string;
  maskedSuffix: string;
  keyVersion: number;
  createdAt: Date;
  updatedAt: Date;
  revokedAt: Date | null;
}