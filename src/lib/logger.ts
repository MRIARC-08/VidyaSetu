import pino from 'pino';

const SENSITIVE_KEYS = [
  'password',
  'token',
  'accessToken',
  'refreshToken',
  'authorization',
  'cookie',
  'secret',
];

function sanitize(data: unknown): unknown {
  if (data === null || typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(sanitize);
  }

  return Object.fromEntries(
    Object.entries(data as Record<string, unknown>).map(([key, value]) => {
      const shouldMask = SENSITIVE_KEYS.some((sensitiveKey) =>
        key.toLowerCase().includes(sensitiveKey.toLowerCase())
      );

      return [key, shouldMask ? '[REDACTED]' : sanitize(value)];
    })
  );
}

export const logger = pino({
  level:
    process.env.LOG_LEVEL ||
    (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
});

export const log = {
  debug(message: string, data?: unknown) {
    logger.debug(sanitize(data), message);
  },

  info(message: string, data?: unknown) {
    logger.info(sanitize(data), message);
  },

  warn(message: string, data?: unknown) {
    logger.warn(sanitize(data), message);
  },

  error(message: string, error?: unknown, data?: unknown) {
    logger.error(
      {
        error:
          error instanceof Error
            ? {
                name: error.name,
                message: error.message,
                stack: error.stack,
              }
            : sanitize(error),
        data: sanitize(data),
      },
      message
    );
  },
};
