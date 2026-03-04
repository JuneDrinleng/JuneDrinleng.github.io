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

Create posts under:

- `src/posts/*.md` (Chinese)
- `src/posts-en/*.md` (English)

Each Markdown file should include frontmatter, for example:

```yaml
---
layout: post
title: "Post Title"
date: 2026-03-04
tags: [SPT, Notes]
comments: true
author: junedrinleng
toc: true
---
```

Use `<!-- more -->` as the summary splitter:

- Content before it is used as preview/summary
- Content after it is the full post body

## Optional: Translate Chinese Posts to English (Ollama)

Script: `scripts/translate_posts_en.py`

What it does:

- Scans `src/posts/*.md`
- Only translates files that do not already exist in `src/posts-en/`
- Translates in chunks and writes generated English Markdown files

Prerequisites:

1. Ollama running locally at `http://localhost:11434`
2. Model available: `qwen3:8b`
3. Python deps installed:

```bash
pip install ollama httpx tqdm
```

Run:

```bash
python scripts/translate_posts_en.py
```

## Deployment

Deployment is handled by GitHub Actions in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- Trigger: push to `main` (or manual dispatch)
- Build: `pnpm install` + `pnpm build`
- Extra step: `node scripts/generate-sitemap.mjs`
- Publish directory: `dist`

`index.html` and `public/404.html` are configured to support SPA routing on GitHub Pages.
