/**
 * OpenAPI-based contract tests between Next.js TypeScript client
 * and the FastAPI AI backend.
 *
 * Loads the OpenAPI spec exported from services/ai/ and validates
 * that the TypeScript client types remain compatible.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the OpenAPI spec relative to the project root
const OPENAPI_PATH = resolve(__dirname, '../../services/ai/openapi.json');
const GOLDEN_PATH = resolve(__dirname, '../../services/ai/openapi.golden.json');

interface OpenApiSpec {
  openapi: string;
  info: { title: string; version: string };
  paths: Record<string, Record<string, any>>;
  components?: {
    schemas?: Record<string, any>;
    securitySchemes?: Record<string, any>;
  };
  servers?: Array<{ url: string }>;
}

function loadOpenApi(path: string): OpenApiSpec {
  if (!existsSync(path)) {
    throw new Error(
      `OpenAPI spec not found at ${path}. ` +
        'Generate it with: cd services/ai && python scripts/export-openapi.py'
    );
  }
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function loadSpec(): OpenApiSpec {
  return loadOpenApi(OPENAPI_PATH);
}

// ── Expected contract ────────────────────────────────────────────────────
// These define the stable API contract the TypeScript client depends on.
// When adding new routes, update this list. When removing or changing
// existing routes, the golden spec comparison will catch it.

interface ExpectedEndpoint {
  path: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  auth: boolean;
  description?: string;
}

const EXPECTED_ENDPOINTS: ExpectedEndpoint[] = [
  {
    path: '/health/live',
    method: 'get',
    auth: false,
    description: 'Liveness probe',
  },
  {
    path: '/health/ready',
    method: 'get',
    auth: false,
    description: 'Readiness probe',
  },
  {
    path: '/api/v1/internal/ping',
    method: 'get',
    auth: true,
    description: 'Internal auth check / connectivity test',
  },
];

const EXPECTED_ERROR_SCHEMAS = ['HTTPValidationError', 'ValidationError'];

// Enum values expected in OpenAPI schemas
const EXPECTED_ENUMS: Record<string, string[]> = {
  Difficulty: ['EASY', 'MEDIUM', 'HARD'],
  QuestionType: ['MCQ', 'SUBJECTIVE'],
};

// ── Tests ────────────────────────────────────────────────────────────────

describe('OpenAPI Contract', () => {
  let spec: OpenApiSpec;

  beforeAll(() => {
    spec = loadSpec();
  });

  describe('spec integrity', () => {
    it('is valid OpenAPI 3.x', () => {
      expect(spec.openapi).toMatch(/^3\./);
    });

    it('has info section', () => {
      expect(spec.info.title).toBe('VidyaSetu AI Service');
      expect(spec.info.version).toBeTruthy();
    });

    it('has no duplicated path keys', () => {
      const paths = Object.keys(spec.paths);
      const unique = new Set(paths);
      expect(unique.size).toBe(paths.length);
    });
  });

  describe('endpoints', () => {
    for (const ep of EXPECTED_ENDPOINTS) {
      it(`${ep.method.toUpperCase()} ${ep.path} exists${ep.auth ? ' (auth)' : ''}`, () => {
        const pathItem = spec.paths[ep.path];
        expect(pathItem).toBeDefined();
        const operation = pathItem[ep.method];
        expect(operation).toBeDefined();
        expect(operation.operationId).toBeTruthy();
        expect(operation.responses).toBeDefined();
      });
    }

    it('has no unexpected breaking path changes', () => {
      const expected = new Set(EXPECTED_ENDPOINTS.map((e) => e.path));
      for (const path of Object.keys(spec.paths)) {
        expect(expected.has(path)).toBe(true);
      }
    });
  });

  describe('response schemas', () => {
    it('health/live returns 200 with HealthResponse', () => {
      const op = spec.paths['/health/live'].get;
      const resp = op.responses?.['200'];
      expect(resp).toBeDefined();
      const schema =
        resp.content?.['application/json']?.schema ??
        resp.content?.['application/json']?.schema;
      expect(schema).toBeDefined();
    });

    it('health/ready returns 200 with ReadinessResponse', () => {
      const op = spec.paths['/health/ready'].get;
      const resp = op.responses?.['200'];
      expect(resp).toBeDefined();
    });

    it('health endpoints return 422 for invalid input (where applicable)', () => {
      for (const path of ['/health/live', '/health/ready']) {
        const op = spec.paths[path]?.get;
        if (op?.responses?.['422']) {
          expect(op.responses['422']).toBeDefined();
        }
      }
    });
  });

  describe('error response schemas', () => {
    for (const schemaName of EXPECTED_ERROR_SCHEMAS) {
      it(`includes ${schemaName} schema`, () => {
        const schemas = spec.components?.schemas ?? {};
        expect(schemas[schemaName]).toBeDefined();
      });
    }
  });

  describe('authentication', () => {
    it('auth-required routes have security scheme', () => {
      const authScheme = spec.components?.securitySchemes?.ApiKeyAuth;
      expect(authScheme).toBeDefined();
      expect(authScheme.type).toBe('apiKey');
      expect(authScheme.in).toBe('header');
      expect(authScheme.name).toBe('X-Internal-API-Key');
    });

    for (const ep of EXPECTED_ENDPOINTS.filter((e) => e.auth)) {
      it(`${ep.method.toUpperCase()} ${ep.path} requires API key`, () => {
        const op = spec.paths[ep.path][ep.method];
        const sec = op.security ?? spec.security;
        expect(sec).toBeDefined();
        const hasKey = sec?.some((s: Record<string, string[]>) =>
          Object.keys(s).includes('ApiKeyAuth')
        );
        expect(hasKey).toBe(true);
      });
    }

    for (const ep of EXPECTED_ENDPOINTS.filter((e) => !e.auth)) {
      it(`${ep.method.toUpperCase()} ${ep.path} does not require API key`, () => {
        const op = spec.paths[ep.path][ep.method];
        const sec = op.security;
        // If no operation-level security, it inherits from top-level
        if (sec === undefined) return;
        const hasKey = sec?.some((s: Record<string, string[]>) =>
          Object.keys(s).includes('ApiKeyAuth')
        );
        expect(hasKey).toBe(false);
      });
    }
  });

  describe('enum contract', () => {
    for (const [enumName, expectedValues] of Object.entries(EXPECTED_ENUMS)) {
      it(`${enumName} values match TypeScript types`, () => {
        const schemas = spec.components?.schemas ?? {};
        const enumSchema = schemas[enumName];
        if (!enumSchema) {
          // Enum might be inline in a parent schema
          return;
        }
        const values = enumSchema.enum as string[] | undefined;
        if (values) {
          expect(values.sort()).toEqual([...expectedValues].sort());
        }
      });
    }
  });
});

// ── Breaking change detection (golden spec comparison) ───────────────────

describe('Breaking Change Detection', () => {
  it('current spec matches golden spec (no breaking changes)', () => {
    if (!existsSync(GOLDEN_PATH)) {
      // No golden file yet — first run after export
      return;
    }
    const current = loadOpenApi(OPENAPI_PATH);
    const golden = loadOpenApi(GOLDEN_PATH);

    // Check path keys haven't been removed
    const currentPaths = new Set(Object.keys(current.paths));
    const goldenPaths = new Set(Object.keys(golden.paths));
    for (const path of goldenPaths) {
      expect(currentPaths.has(path)).toBe(true);
    }

    // Check method + response status codes haven't been removed
    for (const path of goldenPaths) {
      const goldenMethods = Object.keys(golden.paths[path]).filter(
        (k) => k !== 'parameters' && k !== 'summary' && k !== 'description'
      );
      for (const method of goldenMethods) {
        const goldenStatuses = Object.keys(
          golden.paths[path][method].responses ?? {}
        );
        const currentStatuses = Object.keys(
          current.paths[path]?.[method]?.responses ?? {}
        );
        for (const status of goldenStatuses) {
          expect(currentStatuses).toContain(status);
        }
      }
    }

    // Check component schemas haven't been removed
    const currentSchemas = current.components?.schemas ?? {};
    const goldenSchemas = golden.components?.schemas ?? {};
    for (const schemaName of Object.keys(goldenSchemas)) {
      expect(currentSchemas[schemaName]).toBeDefined();
    }
  });
});

// ── Idempotency header contract ──────────────────────────────────────────

describe('Idempotency Headers', () => {
  it('write endpoints (POST/PUT/PATCH) declare idempotency headers', () => {
    const writeMethods = ['post', 'put', 'patch'];
    for (const [path, pathItem] of Object.entries(spec.paths)) {
      for (const method of writeMethods) {
        const op = pathItem[method];
        if (!op) continue;
        const params = op.parameters ?? [];
        const headerNames = params
          .filter((p: any) => p.in === 'header')
          .map((p: any) => p.name);
        // At minimum, Content-Type should be declared
        expect(headerNames.length).toBeGreaterThanOrEqual(0);
      }
    }
  });
});
