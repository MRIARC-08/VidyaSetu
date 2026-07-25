import { describe, expect, it } from 'vitest';
import { ZodError } from 'zod';

import { parseNcertQuery, requireNcertParam } from './ncert.validator';

describe('NCERT query validation', () => {
  it('accepts current route aliases for valid ids', () => {
    const query = parseNcertQuery(
      'https://example.test/api/ncert/chapters?class=10&subject=sub_1&chapter=chap_1'
    );

    expect(requireNcertParam(query, ['classId', 'class'])).toBe('10');
    expect(requireNcertParam(query, ['subjectId', 'subject'])).toBe('sub_1');
    expect(requireNcertParam(query, ['chapterId', 'chapter'])).toBe('chap_1');
  });

  it('accepts explicit id parameter names', () => {
    const query = parseNcertQuery(
      'https://example.test/api/ncert/chapter?classId=10&subjectId=sub_1&chapterId=chap_1'
    );

    expect(requireNcertParam(query, ['classId', 'class'])).toBe('10');
    expect(requireNcertParam(query, ['subjectId', 'subject'])).toBe('sub_1');
    expect(requireNcertParam(query, ['chapterId', 'chapter'])).toBe('chap_1');
  });

  it('rejects missing required ids before service calls', () => {
    const query = parseNcertQuery('https://example.test/api/ncert/chapter');

    expect(() => requireNcertParam(query, ['chapterId', 'chapter'])).toThrow(
      ZodError
    );
  });

  it('rejects null-like and blank ids', () => {
    expect(() =>
      parseNcertQuery(
        'https://example.test/api/ncert/chapters?subject=null&chapter=%20'
      )
    ).toThrow(ZodError);
  });

  it('rejects non-numeric class ids', () => {
    expect(() =>
      parseNcertQuery(
        'https://example.test/api/ncert/subjects?classId=class-ten'
      )
    ).toThrow(ZodError);
  });
});
