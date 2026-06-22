import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const KEY_VERSION = 1;

function getMasterKey(): Buffer {
  const key = process.env.CREDENTIAL_MASTER_KEY;
  if (!key || key.length < 32) {
    throw new Error('CREDENTIAL_MASTER_KEY is missing or too short');
  }
  return Buffer.from(key.slice(0, 32), 'utf8');
}

export function encryptCredential(plaintext: string): {
  ciphertext: string;
  keyVersion: number;
  maskedSuffix: string;
} {
  const masterKey = getMasterKey();
  const dataKey = crypto.randomBytes(32);

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, dataKey, iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, 'utf8'),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  const keyIv = crypto.randomBytes(IV_LENGTH);
  const keyCipher = crypto.createCipheriv(ALGORITHM, masterKey, keyIv);
  const encryptedDataKey = Buffer.concat([
    keyCipher.update(dataKey),
    keyCipher.final(),
  ]);
  const keyAuthTag = keyCipher.getAuthTag();

  const parts = [
    keyIv.toString('hex'),
    keyAuthTag.toString('hex'),
    encryptedDataKey.toString('hex'),
    iv.toString('hex'),
    authTag.toString('hex'),
    encrypted.toString('hex'),
  ].join(':');

  return {
    ciphertext: Buffer.from(parts).toString('base64'),
    keyVersion: KEY_VERSION,
    maskedSuffix: plaintext.slice(-4),
  };
}

export function decryptCredential(ciphertext: string): string {
  const masterKey = getMasterKey();

  const parts = Buffer.from(ciphertext, 'base64').toString('utf8').split(':');
  if (parts.length !== 6) throw new Error('Invalid ciphertext format');

  const [keyIvHex, keyAuthTagHex, encryptedDataKeyHex, ivHex, authTagHex, encryptedHex] = parts;

  const keyIv = Buffer.from(keyIvHex, 'hex');
  const keyAuthTag = Buffer.from(keyAuthTagHex, 'hex');
  const encryptedDataKey = Buffer.from(encryptedDataKeyHex, 'hex');

  const keyDecipher = crypto.createDecipheriv(ALGORITHM, masterKey, keyIv);
  keyDecipher.setAuthTag(keyAuthTag);
  const dataKey = Buffer.concat([
    keyDecipher.update(encryptedDataKey),
    keyDecipher.final(),
  ]);

  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const encrypted = Buffer.from(encryptedHex, 'hex');

  const decipher = crypto.createDecipheriv(ALGORITHM, dataKey, iv);
  decipher.setAuthTag(authTag);

  return Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]).toString('utf8');
}