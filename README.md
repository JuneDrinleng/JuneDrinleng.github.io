# JuneDrinleng.github.io

LUNE 个人站点源码，基于 Vite + React 构建，包含：

- 首页导航（Blog / visualSPT / Poop）
- 中英双语博客系统（`src/posts` 与 `src/posts-en`）
- Markdown 渲染（GFM + 数学公式 KaTeX）
- Giscus 评论系统（GitHub Discussions）
- 主题切换（浅色/深色）与语言切换（中文/English）
- GitHub Pages 自动部署

线上地址（GitHub Pages）：
`https://junedrinleng.github.io/`

## 技术栈

- React 18 + React Router 7
- Vite 6
- Tailwind CSS 4
- React Markdown + remark/rehype（GFM、Math、KaTeX）
- Giscus
- Python 脚本（Ollama）用于中文博客自动翻译到英文

## 项目结构

```text
.
├─ src/
│  ├─ app/
│  │  ├─ pages/                # Home / Blog / BlogPost / VisualSPT / FocusTimer
│  │  ├─ components/           # 通用组件与评论组件
│  │  ├─ contexts/             # ThemeContext / LanguageContext
│  │  ├─ utils/posts.ts        # 读取并解析 markdown 博客
│  │  └─ routes.ts             # 路由定义
│  ├─ posts/                   # 中文博客
│  └─ posts-en/                # 英文博客
├─ scripts/
│  └─ translate_posts_en.py    # 使用 Ollama 翻译 markdown
├─ public/404.html             # GitHub Pages SPA 路由回退
└─ .github/workflows/deploy.yml# 自动部署工作流
```

## 本地开发

要求：

- Node.js 20（与 CI 保持一致，推荐）
- npm 或 pnpm（二选一）

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

## 环境变量（Giscus）

在项目根目录创建 `.env`（不要提交到仓库），示例：

```env
VITE_GISCUS_REPO=JuneDrinleng/JuneDrinleng.github.io
VITE_GISCUS_REPO_ID=R_xxx
VITE_GISCUS_CATEGORY=Announcements
VITE_GISCUS_CATEGORY_ID=DIC_xxx
```

代码读取位置：`src/app/components/GiscusComments.tsx`。

> 说明：Giscus 不需要 `client_secret`，更适合 GitHub Pages 这类纯前端静态站。

## 博客写作规范

中文与英文博客分别放在：

- `src/posts/*.md`
- `src/posts-en/*.md`

Markdown 文件需包含 frontmatter，例如：

```yaml
---
layout: post
title: "文章标题"
date: 2026-03-04
tags: [SPT, Notes]
comments: true
author: junedrinleng
toc: true
---
```

摘要通过 `<!-- more -->` 分隔：

- 分隔符之前：列表页摘要
- 分隔符之后：正文内容

## 中文博客自动翻译（Ollama）

脚本位置：`scripts/translate_posts_en.py`

功能：

- 扫描 `src/posts` 下的 `.md`
- 仅翻译 `src/posts-en` 中尚不存在的同名文件
- 按分块流式翻译并保存

前置条件：

1. 本机运行 Ollama（默认地址 `http://localhost:11434`）
2. 已拉取模型 `qwen3:8b`
3. 安装 Python 依赖

```bash
pip install ollama httpx tqdm
```

运行脚本：

```bash
python scripts/translate_posts_en.py
```

## 部署说明

项目通过 GitHub Actions 自动部署到 GitHub Pages：

- 工作流：`.github/workflows/deploy.yml`
- 触发条件：push 到 `main`
- 构建命令：`pnpm install` + `pnpm build`
- 发布目录：`dist`

`index.html` + `public/404.html` 已处理 GitHub Pages 的 SPA 路由回退问题。
