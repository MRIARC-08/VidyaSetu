import { describe, expect, it } from 'vitest';
import {
  LoginSchema,
  RegisterSchema,
  RefreshTokenSchema,
  PasswordResetSchema,
} from './auth.validator';

// ---------------------------------------------------------------------------
// RegisterSchema
// ---------------------------------------------------------------------------
describe('RegisterSchema', () => {
  const validPayload = {
    name: 'Student User',
    email: 'student@example.com',
    password: 'Password@123',
  };

  it('accepts the payload sent by the registration form (name, email, password)', () => {
    const result = RegisterSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('returns parsed data that matches the validated fields', () => {
    const result = RegisterSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data).toEqual(validPayload);
  });

  it('strips unknown extra keys (e.g. confirmPassword sent accidentally by a client)', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      confirmPassword: 'Password@123',
    });
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data).not.toHaveProperty('confirmPassword');
  });

  it('rejects when name is missing', () => {
    const { email, password } = validPayload;
    const result = RegisterSchema.safeParse({ email, password });
    expect(result.success).toBe(false);
  });

  it('rejects a name shorter than 2 characters', () => {
    const result = RegisterSchema.safeParse({ ...validPayload, name: 'A' });
    expect(result.success).toBe(false);
  });

  it('rejects a name longer than 50 characters', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      name: 'A'.repeat(51),
    });
    expect(result.success).toBe(false);
  });

  it('rejects a name with numbers or special characters', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      name: 'User123!',
    });
    expect(result.success).toBe(false);
  });

  it('rejects an invalid email', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a password shorter than 8 characters', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      password: 'P@ss1',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a password without an uppercase letter', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      password: 'password@123',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a password without a lowercase letter', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      password: 'PASSWORD@123',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a password without a number', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      password: 'Password@abc',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a password without a special character', () => {
    const result = RegisterSchema.safeParse({
      ...validPayload,
      password: 'Password123',
    });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// LoginSchema
// ---------------------------------------------------------------------------
describe('LoginSchema', () => {
  const validPayload = {
    email: 'student@example.com',
    password: 'anypassword',
  };

  it('accepts a valid email and password', () => {
    const result = LoginSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('rejects an invalid email', () => {
    const result = LoginSchema.safeParse({ ...validPayload, email: 'bad' });
    expect(result.success).toBe(false);
  });

  it('rejects an empty password', () => {
    const result = LoginSchema.safeParse({ ...validPayload, password: '' });
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// RefreshTokenSchema
// ---------------------------------------------------------------------------
describe('RefreshTokenSchema', () => {
  it('accepts a non-empty refresh token', () => {
    const result = RefreshTokenSchema.safeParse({ refreshToken: 'some-token' });
    expect(result.success).toBe(true);
  });

  it('rejects an empty refresh token', () => {
    const result = RefreshTokenSchema.safeParse({ refreshToken: '' });
    expect(result.success).toBe(false);
  });

  it('rejects when refreshToken field is missing', () => {
    const result = RefreshTokenSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// PasswordResetSchema
// ---------------------------------------------------------------------------
describe('PasswordResetSchema', () => {
  it('accepts a valid email', () => {
    const result = PasswordResetSchema.safeParse({
      email: 'student@example.com',
    });
    expect(result.success).toBe(true);
  });

  it('rejects an invalid email', () => {
    const result = PasswordResetSchema.safeParse({ email: 'not-valid' });
    expect(result.success).toBe(false);
  });
});
