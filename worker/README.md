# 博客内容鉴权 API（Cloudflare Worker）

本目录提供让博客正文「真正只对鉴权用户可见」所需的 Worker 参考实现。
公开 GitHub Pages 不再打包任何文章 Markdown；前端在 GitHub OAuth 登录后，
通过本 Worker 的 `/api/posts` 端点拉取存放在 **private repo** 的文章。

## 架构

```
Private repo: JuneDrinleng/notes
  posts/*.md       中文
  posts-en/*.md    英文

Cloudflare Worker（合并进现有 junedrinlengblog.zhuzilan520.workers.dev）
  GET /api/posts?lang=zh|en        → [{ slug, markdown }, ...]
  GET /api/posts/:slug?lang=zh|en  → { slug, markdown }
  - 校验调用者 OAuth token 是否为 ALLOWED_OWNER
  - 用 PRIVATE_REPO_TOKEN（Worker secret）读取 private repo

公开 GitHub Pages（JuneDrinleng/JuneDrinleng.github.io）
  - 构建产物中没有任何 .md 正文
  - Blog 页面通过 Worker API 异步获取
  - Giscus 评论保持不变
```

## 部署步骤

### 1. 新建 private 内容仓库

新建 private repo，把现有文章迁入（保持文件名/slug 不变，保证 `/blog/:slug` URL 不变）：

```
posts/        ← 原 src/posts/*.md
posts-en/     ← 原 src/posts-en/*.md
```

> 注意：图片仍走现有公开图床（`raw.githubusercontent.com/.../assets/img`），无需迁移。
>
> 文章需保留规范 frontmatter（`title`、`date`，以及数组形式的 `tags: [..]`）。
> 前端搜索与标签视图依赖这些字段；缺 `title` 或把 `tags` 写成标量字符串可能导致页面渲染异常。

### 2. 准备 private repo 读取凭据

创建一个 **fine-grained PAT**（供 Worker 读取私有仓库）：
- Repository access：只选 `JuneDrinleng/notes`
- Permissions：`Contents: Read-only`、`Metadata: Read-only`

> 私有仓库必须用 fine-grained PAT（含 Contents:Read）或经典 PAT 的完整 `repo` scope。
> 经典 PAT 的 `public_repo` **读不了私有仓库**（会 404 → `/api/posts` 返回 502）。

### 3. 合并路由到现有 Worker

把 `blog-api.js` 中 `/api/posts` 的处理逻辑合并进现有 OAuth Worker
（保留它原有的 `/auth` 路由）。本文件已注明应在何处保留 `/auth`。

### 4. 配置 Worker secrets / vars

```bash
wrangler secret put PRIVATE_REPO_TOKEN     # 第 2 步的 fine-grained PAT
```

在 `wrangler.toml` 的 `[vars]` 中：

```toml
[vars]
PRIVATE_REPO        = "JuneDrinleng/notes"
PRIVATE_REPO_BRANCH = "main"
ALLOWED_OWNER       = "JuneDrinleng"
ALLOWED_ORIGINS     = "https://junedrinleng.github.io,http://localhost:5173"
```

> `PRIVATE_REPO_TOKEN` 只存在于 Worker，永不下发到浏览器。
> 访问者自己的 OAuth token 不需要 private repo 权限。

### 5. 前端配置（可选）

前端默认请求 `https://junedrinlengblog.zhuzilan520.workers.dev`。
若 Worker 域名不同，在 `.env` 设置：

```env
VITE_BLOG_API=https://your-worker.workers.dev
```

### 6. 从公开仓库移除 Markdown

Worker 跑通后，把文章从公开仓库移除（迁到 private repo）：

```bash
git rm -r src/posts src/posts-en
git commit -m "chore: move blog markdown to private repo"
```

`.gitignore` 已忽略 `src/posts/*.md` 和 `src/posts-en/*.md`，防止本地副本被重新提交。

> Git 历史中已公开过的旧 Markdown 仍存在于历史记录中。若需从历史彻底清除，
> 需另行重写历史（`git filter-repo`），本次未包含。

## 部署前检查清单

部署后若博客打不开（`/api/posts` 返回 502/403 或浏览器报 CORS），逐项核对：

- [ ] **PRIVATE_REPO** 设为 `JuneDrinleng/notes`（不是占位名）。
- [ ] **PRIVATE_REPO_TOKEN** 能读私有仓库（fine-grained Contents:Read 或经典 `repo`；`public_repo` 不够）。
- [ ] **PRIVATE_REPO_BRANCH** 与 notes 默认分支一致（默认按 `main`；若是 `master` 等需显式设置）。
- [ ] **ALLOWED_OWNER** 为精确大小写 `JuneDrinleng`（比较区分大小写）。
- [ ] **ALLOWED_ORIGINS** 含站点精确源 `https://junedrinleng.github.io`（本地开发可加 `http://localhost:5173`；不要带结尾斜杠）。
- [ ] `/api/posts` 路由确实部署在前端请求的 Worker URL 上（默认 `https://junedrinlengblog.zhuzilan520.workers.dev`，否则设 `VITE_BLOG_API`）。
- [ ] notes 仓库目录精确为 `posts/` 和 `posts-en/`（大小写敏感）。

> 列表端点用单次 GraphQL 批量读取整个目录（约 2 个子请求），已规避 Cloudflare 免费版
> 50 子请求上限，文章数量增长也不受影响。

## 验证

- 未带 token / 非 owner token 请求 `/api/posts` → 403
- owner token 请求 → 返回文章数组
- 浏览器 Network 中文章正文来自 Worker，而非站点 JS bundle
- `grep` 构建产物 `dist/` 不含文章正文

## 安全边界

- 文章正文只存在于 private repo 与 Worker，不进入公开构建产物。
- `PRIVATE_REPO_TOKEN` 不暴露给前端。
- OAuth token 仍只在浏览器内存中（刷新后需重新登录）。
- CORS 仅允许站点自身域名。
- 历史评论位于公开仓库的 GitHub Discussions，仍是公开的，这是 Giscus 固有限制。
