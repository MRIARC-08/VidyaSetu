export type ErrorDetails = Record<string, unknown>;

export type ErrorCode =
  | 'APP_ERROR'
  | 'VALIDATION_ERROR'
  | 'UNAUTHORIZED_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'CONFLICT_ERROR'
  | 'SERVER_ERROR';

export interface ErrorResponseBody {
  success: false;
  error: {
    name: string;
    code: ErrorCode;
    message: string;
    statusCode: number;
    details?: ErrorDetails;
  };
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly details?: ErrorDetails;
  public readonly isOperational: boolean;

  constructor(
    message = 'Something went wrong',
    statusCode = 500,
    code: ErrorCode = 'APP_ERROR',
    details?: ErrorDetails,
    isOperational = true
  ) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.isOperational = isOperational;

    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Invalid input provided', details?: ErrorDetails) {
    super(message, 400, 'VALIDATION_ERROR', details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized access', details?: ErrorDetails) {
    super(message, 401, 'UNAUTHORIZED_ERROR', details);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found', details?: ErrorDetails) {
    super(message, 404, 'NOT_FOUND_ERROR', details);
  }
}

export class ConflictError extends AppError {
  constructor(
    message = 'Resource already exists or conflicts with current state',
    details?: ErrorDetails
  ) {
    super(message, 409, 'CONFLICT_ERROR', details);
  }
}

export class ServerError extends AppError {
  constructor(message = 'Internal server error', details?: ErrorDetails) {
    super(message, 500, 'SERVER_ERROR', details, false);
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new ServerError(error.message);
  }

  return new ServerError();
}

export function getErrorStatusCode(
  error: unknown,
  fallbackStatusCode = 500
): number {
  if (error instanceof AppError) {
    return error.statusCode;
  }

  return fallbackStatusCode;
}

export function getClientErrorMessage(error: unknown): string {
  if (error instanceof AppError) {
    return error.message;
  }

  return 'Internal server error';
}

export function formatErrorResponse(
  error: unknown,
  statusCode?: number,
  details?: ErrorDetails
): ErrorResponseBody {
  const normalizedError = normalizeError(error);
  const resolvedStatusCode = statusCode ?? normalizedError.statusCode;

  return {
    success: false,
    error: {
      name: normalizedError.name,
      code: normalizedError.code,
      message: getClientErrorMessage(normalizedError),
      statusCode: resolvedStatusCode,
      ...(normalizedError.details || details
        ? { details: normalizedError.details ?? details }
        : {}),
    },
  };
}

export function serializeError(error: unknown, context?: string): ErrorDetails {
  if (error instanceof AppError) {
    return {
      context,
      name: error.name,
      code: error.code,
      message: error.message,
      statusCode: error.statusCode,
      details: error.details,
      stack: error.stack,
    };
  }

  if (error instanceof Error) {
    return {
      context,
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    context,
    error,
  };
}

export function logError(error: unknown, context?: string): ErrorDetails {
  return serializeError(error, context);
}
