# Readme-ZH

中文 | [English](./README.md)

这是我的个人网站与博客项目源码，基于 Vite + React 构建，并部署在 GitHub Pages。

在线地址：<https://junedrinleng.github.io/>

## 项目功能

- 多页面个人站：Home、Blog、VisualSPT、Focus Timer
- 中英双语博客（`src/posts` 中文，`src/posts-en` 英文）
- Markdown 渲染（支持 GFM 与 KaTeX 数学公式）
- 主题切换与语言切换
- Giscus 评论（GitHub Discussions）
- GitHub Actions 自动部署

## 本地开发

要求：

- Node.js 20（与 CI 一致）
- 推荐使用 `pnpm`（也可使用 `npm`）

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

构建：

```bash
pnpm build
```

## 博客写作

推荐使用“中文单一真源 + 英文同步生成”流程：

- 中文源文件：`src/posts/*.md`
- 英文派生文件：`src/posts-en/*.md`（由脚本维护）

建议 frontmatter：

```yaml
---
layout: post
title: "文章标题"
date: 2026-03-04
tags: [paper, notes]
post_id: 2026-03-04-my-post
title_key: literature_note
comments: true
author: junedrinleng
toc: true
---
```

其中 `title_key` 会映射到 `i18n/blog-phrases.json` 的标题模板，解决惯例标题不一致问题。

摘要分隔符继续使用 `<!-- more -->`。

## i18n 同步

主脚本：`scripts/i18n-sync.mjs`

功能：

- 读取 `src/posts/*.md`
- 应用标题模板与术语表
- 复用翻译记忆库 `i18n/tm.json`
- 输出/更新 `src/posts-en/*.md`
- 记录源文件哈希 `i18n/sync-cache.json`

执行：

```bash
npm run i18n:sync
```

可选：自动补齐缺失的 `post_id/title_key`：

```bash
npm run i18n:sync:fix
```

可选：使用 OpenAI 翻译正文段落：

```bash
set I18N_TRANSLATOR=openai
set OPENAI_API_KEY=your_key
npm run i18n:sync
```

可调文件：

- `i18n/blog-phrases.json`（标题模板、标签映射）
- `i18n/glossary.csv`（术语映射）
- `i18n/tm.json`（翻译记忆）

## 自动部署

部署工作流位于 `/.github/workflows/deploy.yml`：

- 触发：push 到 `main`（或手动触发）
- 构建：`pnpm install` + `pnpm build`
- 额外步骤：`node scripts/generate-sitemap.mjs`
- 发布目录：`dist`
