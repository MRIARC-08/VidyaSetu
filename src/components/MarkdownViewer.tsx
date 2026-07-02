'use client';

import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Copy, Check } from 'lucide-react';
import clsx from 'clsx';
import type { Components } from 'react-markdown';
import { createHeadingSlugger } from '@/lib/slugger';

interface MarkdownViewerProps {
  content: string;
  imageBaseUrl?: string;
  className?: string;
}
function CodeBlock({
  language,
  children,
}: {
  language?: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [children]);

  return (
    <div className="my-6 overflow-hidden bg-primary">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs uppercase text-primary-foreground/60">
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-primary-foreground/60 transition hover:text-primary-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-primary-foreground">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number' || typeof node === 'boolean')
    return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (
    node &&
    typeof node === 'object' &&
    'props' in node &&
    node.props !== null &&
    typeof node.props === 'object'
  ) {
    const props = node.props as { children?: React.ReactNode };
    if (props.children) return extractText(props.children);
  }
  return '';
}

export default function MarkdownViewer({
  content,
  imageBaseUrl,
  className,
}: MarkdownViewerProps) {
  const slugger = createHeadingSlugger();
  slugger.reset();

  const components: Components = {
    h1: ({ children, ...props }) => {
      const text = extractText(children);
      return (
        <h1
          id={slugger.slug(text)}
          className="mt-2 border-b border-primary/20 pb-4 text-3xl font-extrabold leading-tight text-primary md:text-4xl"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }) => {
      const text = extractText(children);
      return (
        <h2
          id={slugger.slug(text)}
          className="mt-10 text-2xl font-bold leading-tight text-primary"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const text = extractText(children);
      return (
        <h3
          id={slugger.slug(text)}
          className="mt-8 text-xl font-semibold leading-snug text-primary"
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }) => {
      const text = extractText(children);
      return (
        <h4
          id={slugger.slug(text)}
          className="mt-6 text-lg font-semibold leading-snug text-primary"
          {...props}
        >
          {children}
        </h4>
      );
    },
    p: ({ children, ...props }) => (
      <p className="my-4 text-base leading-7 text-primary/80" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-primary/80" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="my-5 list-decimal space-y-2 pl-6 text-primary/80"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-7" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-primary bg-white px-5 py-3 text-primary/75"
        {...props}
      >
        {children}
      </blockquote>
    ),
    pre: ({ children }) => <>{children}</>,
    code: ({ className, children, ...props }) => {
      const isInline = !className;
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : undefined;

      if (isInline) {
        return (
          <code
            className="rounded-sm bg-primary/8 px-1.5 py-0.5 font-mono text-sm text-primary"
            {...props}
          >
            {children}
          </code>
        );
      }

      const codeText = extractText(children);
      return <CodeBlock language={language}>{codeText}</CodeBlock>;
    },
    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto border border-primary/15 bg-white">
        <table
          className="w-full min-w-[640px] border-collapse text-left text-sm"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b border-primary/15 bg-accent/20 px-4 py-3 font-bold text-primary"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-b border-primary/10 px-4 py-3 align-top text-primary/80"
        {...props}
      >
        {children}
      </td>
    ),
    img: ({ src, alt, ...props }) => (
      <span className="my-6 block">
        <img
          src={src}
          alt={alt || ''}
          loading="lazy"
          className="mx-auto max-w-full rounded-lg"
          {...props}
        />
      </span>
    ),
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    hr: () => <hr className="my-10 border-primary/15" />,
  };

  const transformedContent = imageBaseUrl
    ? content.replace(
        /!\[([^\]]*)\]\(((?!https?:\/\/)[^)]+)\)/g,
        `![$1](${imageBaseUrl.replace(/\/$/, '')}/$2)`
      )
    : content;

  return (
    <article className={clsx('max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {transformedContent}
      </ReactMarkdown>
    </article>
  );
}
