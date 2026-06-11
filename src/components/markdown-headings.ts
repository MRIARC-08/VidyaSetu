export type MarkdownHeading = {
  id: string;
  level: 1 | 2 | 3;
  text: string;
};

export const slugifyMarkdownHeading = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';

export const collectMarkdownHeadings = (content: string): MarkdownHeading[] => {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const headingCounts = new Map<string, number>();
  const headings: MarkdownHeading[] = [];

  for (const line of lines) {
    const heading = line.trim().match(/^(#{1,3})\s+(.+)$/);

    if (!heading) {
      continue;
    }

    const level = heading[1].length as 1 | 2 | 3;
    const text = heading[2];
    const slug = slugifyMarkdownHeading(text);
    const count = (headingCounts.get(slug) ?? 0) + 1;

    headingCounts.set(slug, count);

    headings.push({
      id: count === 1 ? slug : `${slug}-${count}`,
      level,
      text,
    });
  }

  return headings;
};
