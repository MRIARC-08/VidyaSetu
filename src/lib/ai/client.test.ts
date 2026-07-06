import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('server-only', () => ({}));

const mockFetch = vi.fn();
global.fetch = mockFetch;

process.env.AI_SERVICE_URL = 'http://localhost:8001';
process.env.AI_SERVICE_API_KEY = 'test-key-at-least-32-characters-long';

import { aiClient } from './client';
import {
  AiServiceError,
  AiServiceUnauthorizedError,
  AiServiceUnavailableError,
} from './errors';

function mockResponse(status: number, body: unknown) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(JSON.stringify(body)),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe('aiClient.ping', () => {
  it('returns ping response on success', async () => {
    mockFetch.mockResolvedValue(
      mockResponse(200, { status: 'ok', service: 'vidyasetu-ai' })
    );
    const result = await aiClient.ping();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('vidyasetu-ai');
  });

  it('sends X-Internal-API-Key header', async () => {
    mockFetch.mockResolvedValue(
      mockResponse(200, { status: 'ok', service: 'vidyasetu-ai' })
    );
    await aiClient.ping();
    const headers = mockFetch.mock.calls[0][1].headers;
    expect(headers['X-Internal-API-Key']).toBe(
      'test-key-at-least-32-characters-long'
    );
  });

  it('throws AiServiceUnauthorizedError on 401', async () => {
    mockFetch.mockResolvedValue(mockResponse(401, { detail: 'Unauthorized' }));
    await expect(aiClient.ping()).rejects.toThrow(AiServiceUnauthorizedError);
  });

  it('throws AiServiceError on 500', async () => {
    mockFetch.mockResolvedValue(
      mockResponse(500, { detail: 'Internal error' })
    );
    await expect(aiClient.ping()).rejects.toThrow(AiServiceError);
  });

  it('throws AiServiceUnavailableError on network failure', async () => {
    mockFetch.mockRejectedValue(new Error('ECONNREFUSED'));
    await expect(aiClient.ping()).rejects.toThrow(AiServiceUnavailableError);
  });
});

describe('aiClient.embed', () => {
  it('posts texts and returns embeddings', async () => {
    const mockEmbed = { embeddings: [[0.1, 0.2]], model: 'test-model', dim: 2 };
    mockFetch.mockResolvedValue(mockResponse(200, mockEmbed));
    const result = await aiClient.embed({ texts: ['hello'] });
    expect(result.embeddings).toHaveLength(1);
    expect(result.model).toBe('test-model');
    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.texts).toEqual(['hello']);
  });
});

describe('aiClient.search', () => {
  it('posts query and returns results', async () => {
    const mockSearch = {
      results: [
        {
          chunk_id: '1',
          document_id: '2',
          chunk_text: 'hi',
          heading_path: null,
          score: 0.9,
        },
      ],
      query: 'hello',
      model: 'test-model',
    };
    mockFetch.mockResolvedValue(mockResponse(200, mockSearch));
    const result = await aiClient.search({ query: 'hello', top_k: 5 });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].score).toBe(0.9);
  });
});
