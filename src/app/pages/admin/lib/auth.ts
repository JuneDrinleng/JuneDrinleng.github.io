const KEY = 'lune_gh_token';

export const getToken = (): string | null => localStorage.getItem(KEY);
export const setToken = (t: string): void => { localStorage.setItem(KEY, t); };
export const clearToken = (): void => { localStorage.removeItem(KEY); };

/** Derive file path from lang + slug */
export function postFilePath(lang: 'zh' | 'en', slug: string): string {
  return lang === 'zh' ? `src/posts/${slug}.md` : `src/posts-en/${slug}.md`;
}

/** Build a slug from a title and date */
export function buildSlug(date: string, title: string): string {
  const sanitized = title
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 50) || 'untitled';
  return `${date}-${sanitized}`;
}

/** Serialize frontmatter + body to a markdown string */
export function buildPostContent(fields: {
  title: string;
  date: string;
  tags: string[];
  comments: boolean;
  toc: boolean;
  body: string;
}): string {
  const tagList = fields.tags.length ? `[${fields.tags.join(', ')}]` : '[]';
  return [
    '---',
    'layout: post',
    `title: "${fields.title.replace(/"/g, '\\"')}"`,
    `date: ${fields.date}`,
    `tags: ${tagList}`,
    `comments: ${fields.comments}`,
    'author: junedrinleng',
    `toc: ${fields.toc}`,
    '---',
    '',
    fields.body,
  ].join('\n');
}
