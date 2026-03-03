export interface PostMetadata {
  layout: string;
  title: string;
  date: string;
  tags: string[];
  comments: boolean;
  author: string;
  toc: boolean;
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
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // 处理数组（如 tags）
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else {
      // 移除引号
      value = value.replace(/^["']|["']$/g, '');
    }

    data[key] = value;
  });

  return { data, content: markdown };
}

// 导入所有 markdown 文件
const postFiles = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const [path, content] of Object.entries(postFiles)) {
    const slug = path.replace('/src/posts/', '').replace('.md', '');
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

export function getPostBySlug(slug: string): Post | undefined {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
}
