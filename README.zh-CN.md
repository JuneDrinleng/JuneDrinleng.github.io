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

- 中文文章：`src/posts/*.md`
- 英文文章：`src/posts-en/*.md`

Markdown 需包含 frontmatter，摘要分隔符使用 `<!-- more -->`。

## 自动部署

部署工作流位于 `/.github/workflows/deploy.yml`：

- 触发：push 到 `main`（或手动触发）
- 构建：`pnpm install` + `pnpm build`
- 额外步骤：`node scripts/generate-sitemap.mjs`
- 发布目录：`dist`
