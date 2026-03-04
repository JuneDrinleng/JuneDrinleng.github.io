import { readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const SITE_URL = 'https://junedrinleng.github.io';

// Static routes from src/app/routes.ts
const staticRoutes = ['/', '/visualspt', '/focus-timer', '/blog'];

// Scan blog posts from src/posts/
function getBlogPostSlugs() {
  const postsDir = resolve(ROOT, 'src/posts');
  if (!existsSync(postsDir)) return [];
  const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(f => f.replace('.md', ''));
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const slugs = getBlogPostSlugs();

  const urls = [
    ...staticRoutes.map(route => ({
      loc: `${SITE_URL}${route}`,
      changefreq: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '/' ? '1.0' : '0.8',
    })),
    ...slugs.map(slug => ({
      loc: `${SITE_URL}/blog/${slug}`,
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  if (!existsSync(DIST)) mkdirSync(DIST, { recursive: true });
  writeFileSync(resolve(DIST, 'sitemap.xml'), xml, 'utf-8');
  console.log(`✅ sitemap.xml generated with ${urls.length} URLs`);
}

generateSitemap();
