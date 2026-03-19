// Token is kept in memory only — never written to localStorage/sessionStorage,
// so it cannot be stolen by XSS. The trade-off is that the user must re-login
// after a page refresh.
let _token: string | null = null;

export const getToken = (): string | null => _token;
export const setToken = (t: string): void => { _token = t; };
export const clearToken = (): void => { _token = null; };

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
  excerpt: string;
  body: string;
}): string {
  const tagList = fields.tags.length ? `[${fields.tags.join(', ')}]` : '[]';
  const parts = ['---',
    'layout: post',
    `title: "${fields.title.replace(/"/g, '\\"')}"`,
    `date: ${fields.date}`,
    `tags: ${tagList}`,
    `comments: ${fields.comments}`,
    'author: junedrinleng',
    `toc: ${fields.toc}`,
    '---',
    '',
  ];
  if (fields.excerpt.trim()) {
    parts.push(fields.excerpt.trim(), '', '<!-- more -->', '', fields.body.trim());
  } else {
    parts.push(fields.body.trim());
  }
  return parts.join('\n');
}
