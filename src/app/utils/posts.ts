export interface PostMetadata {
  layout: string;
  title: string;
  date: string;
  tags: string[];
  comments: boolean;
  author: string;
  toc: boolean;
  draft?: boolean;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  excerpt: string;
  content: string;
}

// 简单的 frontmatter 解析器（浏览器兼容）
function parseFrontmatter(content: string): { data: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatter, markdown] = match;
  const data: any = {};

  // 解析 YAML frontmatter
  let lastKey: string | null = null;
  frontmatter.split('\n').forEach(line => {
    // 处理多行数组项（- value）
    if (/^\s+-\s/.test(line) && lastKey) {
      const item = line.trim().slice(2).trim().replace(/^["']|["']$/g, '');
      if (!Array.isArray(data[lastKey])) {
        data[lastKey] = [];
      }
      data[lastKey].push(item);
      return;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    lastKey = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // 处理内联数组（如 tags: [tag1, tag2]）
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((v: string) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }

    data[lastKey] = value;
  });

  return { data, content: markdown };
}

function parsePostFiles(postFiles: Record<string, unknown>, prefix: string): Post[] {
  const posts: Post[] = [];

  for (const [path, content] of Object.entries(postFiles)) {
    const slug = path.replace(prefix, '').replace('.md', '');
    const { data, content: markdownContent } = parseFrontmatter(content as string);
    
    // 提取摘要（<!-- more --> 之前的内容）
    const parts = markdownContent.split('<!-- more -->');
    const excerpt = parts[0].trim();
    const fullContent = parts.length > 1 ? parts[1].trim() : markdownContent;

    posts.push({
      slug,
      metadata: data as PostMetadata,
      excerpt,
      content: fullContent,
    });
  }

  // 按日期排序（最新的在前）
  return posts.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

// 导入所有 markdown 文件
const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });
const postFilesEn = import.meta.glob('/src/posts-en/*.md', { as: 'raw', eager: true });

let cachedZhPosts: Post[] | null = null;
let cachedEnPosts: Post[] | null = null;

export function getAllPosts(lang: 'zh' | 'en' = 'zh'): Post[] {
  if (lang === 'en') {
    if (!cachedEnPosts) {
      cachedEnPosts = parsePostFiles(postFilesEn, '/src/posts-en/');
    }
    return cachedEnPosts;
  }
  if (!cachedZhPosts) {
    cachedZhPosts = parsePostFiles(postFiles, '/src/posts/');
  }
  return cachedZhPosts;
}

export function getPostBySlug(slug: string, lang: 'zh' | 'en' = 'zh'): Post | undefined {
  const allPosts = getAllPosts(lang);
  return allPosts.find(post => post.slug === slug);
}

export function getAdjacentPosts(slug: string, lang: 'zh' | 'en' = 'zh'): { prev: Post | undefined; next: Post | undefined } {
  const allPosts = getAllPosts(lang);
  const index = allPosts.findIndex(post => post.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? allPosts[index - 1] : undefined,
    next: index < allPosts.length - 1 ? allPosts[index + 1] : undefined,
  };
}
