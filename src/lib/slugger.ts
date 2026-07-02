import GithubSlugger from 'github-slugger';

export function buildHeadingIds(content: string) {
  const slugger = new GithubSlugger();

  return content
    .split('\n')
    .map((line) => {
      const match = line.trim().match(/^(#{1,6})\s+(.+)$/);

      if (!match) return null;

      const text = match[2].trim();

      return {
        text,
        level: match[1].length,
        id: slugger.slug(text),
      };
    })
    .filter(Boolean);
}

export function createHeadingSlugger() {
  return new GithubSlugger();
}
