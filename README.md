# Readme

English | [中文说明 (Chinese)](./README.zh-CN.md)

Source code for my personal website and blog, built with Vite + React and deployed to GitHub Pages.

Live site: <https://junedrinleng.github.io/>

## Features

- Multi-page personal site: Home, Blog, VisualSPT, and Focus Timer
- Bilingual blog content (`src/posts` for Chinese, `src/posts-en` for English)
- Markdown rendering with GFM and KaTeX math support
- Theme and language switching
- Giscus comments (GitHub Discussions)
- Automatic GitHub Pages deployment via GitHub Actions

## Tech Stack

- React 18
- React Router 7
- Vite 6
- Tailwind CSS 4
- React Markdown + `remark-gfm` + `remark-math` + `rehype-katex`
- Giscus

## Project Structure

```text
.
|- src/
|  |- app/
|  |  |- pages/                # Home / Blog / BlogPost / VisualSPT / FocusTimer
|  |  |- components/           # Shared UI and comment-related components
|  |  |- contexts/             # ThemeContext / LanguageContext
|  |  |- utils/posts.ts        # Markdown post loading and parsing
|  |  \- routes.ts             # Route definitions
|  |- posts/                   # Chinese posts
|  \- posts-en/                # English posts
|- scripts/
|  |- translate_posts_en.py    # Optional Ollama-based CN -> EN translation helper
|  \- generate-sitemap.mjs     # Generates dist/sitemap.xml
|- public/404.html             # SPA fallback for GitHub Pages
\- .github/workflows/deploy.yml
```

## Local Development

Requirements:

- Node.js 20 (recommended, matches CI)
- `pnpm` (recommended) or `npm`

Install dependencies:

```bash
pnpm install
```

Start dev server:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

If you prefer npm:

```bash
npm install
npm run dev
npm run build
```

## Writing Blog Posts

Primary authoring flow is **Chinese as source of truth** under:

- `src/posts/*.md`

English files in `src/posts-en/*.md` are generated/maintained by sync script.

Recommended frontmatter (source file):

```yaml
---
layout: post
title: "????"
date: 2026-03-04
tags: [paper, notes]
post_id: 2026-03-04-my-post
title_key: literature_note
comments: true
author: junedrinleng
toc: true
---
```

`title_key` maps to title templates in `i18n/blog-phrases.json`.

Use `<!-- more -->` as the summary splitter:

- Content before it is used as preview/summary
- Content after it is the full post body

## i18n Sync Workflow

Main script: `scripts/i18n-sync.mjs`

What it does:

- Reads `src/posts/*.md`
- Applies title templates and glossary rules
- Reuses translation memory from `i18n/tm.json`
- Writes/updates `src/posts-en/*.md`
- Persists source hash cache to `i18n/sync-cache.json`

Run:

```bash
npm run i18n:sync
```

Optional frontmatter normalization (add missing `post_id/title_key`):

```bash
npm run i18n:sync:fix
```

Optional OpenAI translation for body paragraphs:

```bash
set I18N_TRANSLATOR=openai
set OPENAI_API_KEY=your_key
npm run i18n:sync
```

Files you can tune for consistency:

- `i18n/blog-phrases.json`: title templates and tag mapping
- `i18n/glossary.csv`: terminology mapping
- `i18n/tm.json`: translation memory cache

## Deployment

Deployment is handled by GitHub Actions in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- Trigger: push to `main` (or manual dispatch)
- Build: `pnpm install` + `pnpm build`
- Extra step: `node scripts/generate-sitemap.mjs`
- Publish directory: `dist`

`index.html` and `public/404.html` are configured to support SPA routing on GitHub Pages.
