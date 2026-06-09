'use client';

import clsx from 'clsx';
import { type ReactNode } from 'react';

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3 | 4; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'code'; language: string; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'hr' };

const generateId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

const safeUrl = (url: string) => {
  if (url.startsWith('/') || url.startsWith('#')) {
    return url;
  }

  try {
    const parsed = new URL(url);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol)
      ? url
      : '#';
  } catch {
    return '#';
  }
};

const isTableSeparator = (line: string) =>
  /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);

const parseTableRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

const isBlockStart = (line: string) =>
  /^#{1,4}\s+/.test(line) ||
  /^[-*_]{3,}\s*$/.test(line) ||
  /^>\s?/.test(line) ||
  /^[-*]\s+/.test(line) ||
  /^\d+\.\s+/.test(line) ||
  /^```/.test(line) ||
  line.includes('|');

const parseMarkdown = (content: string): MarkdownBlock[] => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const fence = trimmed.match(/^```(\w+)?/);
    if (fence) {
      const language = fence[1] ?? '';
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length) {
        index += 1;
      }

      blocks.push({ type: 'code', language, text: codeLines.join('\n') });
      continue;
    }

    if (
      trimmed.includes('|') &&
      index + 1 < lines.length &&
      isTableSeparator(lines[index + 1])
    ) {
      const headers = parseTableRow(line);
      const rows: string[][] = [];
      index += 2;

      while (index < lines.length && lines[index].trim().includes('|')) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }

      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: 'heading',
        level: heading[1].length as 1 | 2 | 3 | 4,
        text: heading[2],
      });
      index += 1;
      continue;
    }

    if (/^[-*_]{3,}\s*$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      index += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quoteLines: string[] = [];

      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ''));
        index += 1;
      }

      blocks.push({ type: 'blockquote', text: quoteLines.join(' ') });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const ordered = /^\d+\.\s+/.test(trimmed);
      const itemPattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
      const items: string[] = [];

      while (index < lines.length && itemPattern.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(itemPattern, ''));
        index += 1;
      }

      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (
      index < lines.length &&
      lines[index].trim() &&
      (paragraphLines.length === 0 || !isBlockStart(lines[index].trim()))
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks;
};

const renderInline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith('`')) {
      nodes.push(
        <code
          className="rounded-sm bg-primary/8 px-1.5 py-0.5 font-mono text-sm text-primary"
          key={`${match.index}-code`}
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**')) {
      nodes.push(
        <strong className="font-bold text-primary" key={`${match.index}-bold`}>
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*')) {
      nodes.push(
        <em className="text-primary/80" key={`${match.index}-em`}>
          {token.slice(1, -1)}
        </em>
      );
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (link) {
        const href = safeUrl(link[2]);

        nodes.push(
          <a
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            href={href}
            key={`${match.index}-link`}
            rel="noreferrer"
            target={href.startsWith('http') ? '_blank' : undefined}
          >
            {link[1]}
          </a>
        );
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderHighlightedCode = (code: string): ReactNode[] => {
  const tokenPattern =
    /(\/\/.*$|#.*$|"[^"]*"|'[^']*'|`[^`]*`|\b(?:async|await|break|case|catch|class|const|continue|def|else|export|for|from|function|if|import|in|interface|let|return|try|type|var|while)\b|\b\d+(?:\.\d+)?\b)/gm;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(code)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(code.slice(lastIndex, match.index));
    }

    const token = match[0];
    const className =
      token.startsWith('//') || token.startsWith('#')
        ? 'text-primary-foreground/50'
        : token.startsWith('"') ||
            token.startsWith("'") ||
            token.startsWith('`')
          ? 'text-emerald-200'
          : /^\d/.test(token)
            ? 'text-amber-200'
            : 'text-sky-200';

    nodes.push(
      <span className={className} key={`${match.index}-${token}`}>
        {token}
      </span>
    );
    lastIndex = match.index + token.length;
  }

  if (lastIndex < code.length) {
    nodes.push(code.slice(lastIndex));
  }

  return nodes;
};

const renderBlock = (block: MarkdownBlock, index: number) => {
  switch (block.type) {
    case 'heading': {
      const headingId = generateId(block.text);

      if (block.level === 1) {
        return (
          <h1
            id={headingId}
            className="mt-2 border-b border-primary/20 pb-4 text-3xl font-extrabold leading-tight text-primary md:text-4xl"
            key={index}
          >
            {renderInline(block.text)}
          </h1>
        );
      }

      if (block.level === 2) {
        return (
          <h2
            id={headingId}
            className="mt-10 text-2xl font-bold leading-tight text-primary"
            key={index}
          >
            {renderInline(block.text)}
          </h2>
        );
      }

      if (block.level === 3) {
        return (
          <h3
            id={headingId}
            className="mt-8 text-xl font-semibold leading-snug text-primary"
            key={index}
          >
            {renderInline(block.text)}
          </h3>
        );
      }

      return (
        <h4
          id={headingId}
          className="mt-6 text-lg font-semibold leading-snug text-primary"
          key={index}
        >
          {renderInline(block.text)}
        </h4>
      );
    }
    case 'paragraph':
      return (
        <p className="my-4 text-base leading-7 text-primary/80" key={index}>
          {renderInline(block.text)}
        </p>
      );
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';

      return (
        <ListTag
          className={clsx(
            'my-5 space-y-2 pl-6 text-primary/80',
            block.ordered ? 'list-decimal' : 'list-disc'
          )}
          key={index}
        >
          {block.items.map((item, itemIndex) => (
            <li className="leading-7" key={`${index}-${itemIndex}`}>
              {renderInline(item)}
            </li>
          ))}
        </ListTag>
      );
    }
    case 'blockquote':
      return (
        <blockquote
          className="my-6 border-l-4 border-primary bg-white px-5 py-3 text-primary/75"
          key={index}
        >
          {renderInline(block.text)}
        </blockquote>
      );
    case 'code':
      return (
        <div className="my-6 overflow-hidden bg-primary" key={index}>
          {block.language && (
            <div className="border-b border-white/10 px-4 py-2 font-mono text-xs uppercase text-primary-foreground/60">
              {block.language}
            </div>
          )}
          <pre className="overflow-x-auto p-4 text-sm leading-6 text-primary-foreground">
            <code data-language={block.language || undefined}>
              {renderHighlightedCode(block.text)}
            </code>
          </pre>
        </div>
      );
    case 'table':
      return (
        <div
          className="my-6 w-full overflow-x-auto border border-primary/15 bg-white"
          key={index}
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr>
                {block.headers.map((header, headerIndex) => (
                  <th
                    className="border-b border-primary/15 bg-accent/20 px-4 py-3 font-bold text-primary"
                    key={`${index}-header-${headerIndex}`}
                  >
                    {renderInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${index}-row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td
                      className="border-b border-primary/10 px-4 py-3 align-top text-primary/80"
                      key={`${index}-cell-${rowIndex}-${cellIndex}`}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'hr':
      return <hr className="my-10 border-primary/15" key={index} />;
  }
};

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const blocks = parseMarkdown(content);

  return (
    <article className={clsx('max-w-none', className)}>
      {blocks.map((block, index) => renderBlock(block, index))}
    </article>
  );
}
