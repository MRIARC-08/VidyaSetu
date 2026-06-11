import { describe, expect, it } from 'vitest';

import { collectMarkdownHeadings } from './markdown-headings';

describe('collectMarkdownHeadings', () => {
  it('creates stable unique ids for repeated headings', () => {
    const headings = collectMarkdownHeadings(`
# Overview
## Summary
## Summary
### Summary
`);

    expect(headings.map((heading) => heading.id)).toEqual([
      'overview',
      'summary',
      'summary-2',
      'summary-3',
    ]);
  });
});
