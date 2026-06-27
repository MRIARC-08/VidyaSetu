export class AiServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = 'AiServiceError';
  }
}

export class AiServiceUnavailableError extends AiServiceError {
  constructor(cause?: unknown) {
    super('AI service is unavailable', 503, cause);
    this.name = 'AiServiceUnavailableError';
  }
}

export class AiServiceUnauthorizedError extends AiServiceError {
  constructor() {
    super('AI service rejected the internal API key', 401);
    this.name = 'AiServiceUnauthorizedError';
  }
}

export class AiServiceTimeoutError extends AiServiceError {
  constructor() {
    super('AI service request timed out', 504);
    this.name = 'AiServiceTimeoutError';
  }
}
