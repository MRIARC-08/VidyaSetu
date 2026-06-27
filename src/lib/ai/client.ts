import 'server-only';
import type {
  PingResponse,
  EmbedRequest,
  EmbedResponse,
  SimilaritySearchRequest,
  SimilaritySearchResponse,
} from './types';
import {
  AiServiceError,
  AiServiceUnavailableError,
  AiServiceUnauthorizedError,
  AiServiceTimeoutError,
} from './errors';

const DEFAULT_TIMEOUT_MS = 30_000;

function getBaseUrl(): string {
  const url = process.env.AI_SERVICE_URL;
  if (!url) throw new Error('AI_SERVICE_URL is not set');
  return url.replace(/\/$/, '');
}

function getApiKey(): string {
  const key = process.env.AI_SERVICE_API_KEY;
  if (!key) throw new Error('AI_SERVICE_API_KEY is not set');
  return key;
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  timeoutMs = DEFAULT_TIMEOUT_MS
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${getBaseUrl()}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'X-Internal-API-Key': getApiKey(),
        ...options.headers,
      },
      signal: controller.signal,
    });

    if (res.status === 401) throw new AiServiceUnauthorizedError();
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new AiServiceError(
        `AI service returned ${res.status}: ${body}`,
        res.status
      );
    }

    return res.json() as Promise<T>;
  } catch (err) {
    if (err instanceof AiServiceError) throw err;
    if (err instanceof Error && err.name === 'AbortError') {
      throw new AiServiceTimeoutError();
    }
    throw new AiServiceUnavailableError(err);
  } finally {
    clearTimeout(timer);
  }
}

export const aiClient = {
  async ping(): Promise<PingResponse> {
    return request<PingResponse>('/api/v1/internal/ping');
  },

  async embed(body: EmbedRequest): Promise<EmbedResponse> {
    return request<EmbedResponse>('/api/v1/internal/embed', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  async search(
    body: SimilaritySearchRequest
  ): Promise<SimilaritySearchResponse> {
    return request<SimilaritySearchResponse>('/api/v1/internal/search', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
};
