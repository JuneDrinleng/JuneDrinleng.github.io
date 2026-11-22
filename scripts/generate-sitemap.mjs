import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const SITE_URL = 'https://lune.ltd';

// Only the public gate root is listed; all knowledge base entries are private
// and fetched from an authenticated Worker proxy.
const staticRoutes = ['/'];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const urls = staticRoutes.map(route => ({
    loc: `${SITE_URL}${route}`,
    changefreq: 'weekly',
    priority: '1.0',
  }));

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
  console.log(`✅ sitemap.xml generated with ${urls.length} URL(s)`);
}

generateSitemap();
