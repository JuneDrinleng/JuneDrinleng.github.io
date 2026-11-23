# LUNE Design System & Architecture Specification

This document defines the visual design system, layout architecture, motion choreography, and privacy model for **LUNE (`lune.ltd`)**, a private personal knowledge base.

> **Domain Separation**
> - `junedrinleng.com` — Public personal profile & CV.
> - `lune.ltd` (this repository) — Private personal knowledge base gated behind GitHub OAuth.

---

## 1. Aesthetic Direction: Swiss Editorial

LUNE follows the **International Typographic Style (Swiss Editorial)** adapted for long-term technical notes and research archives:

- **High-Contrast Monochrome Palette**: Crisp black/white ink and neutral off-white/charcoal surfaces without decorative gradients or color noise.
- **Sharp Geometry**: `0px` border radius across structural frames, inputs, buttons, code blocks, and pagination squares.
- **Border Weight as Hierarchy**:
  - `4px` solid structural borders (`border-b-4`) for primary page mastheads.
  - `2px` solid structural borders for interactive frames, cards, buttons, search bars, and popovers.
  - `1px` crisp dividers (`--kb-border-mid` / `--kb-border-soft`) for column rails and catalog row separation.
- **Tactile Offset Shadows**: Hard-edged offset shadows (`4px 4px` / `6px 6px`) reserved for primary cards, popovers, and button hover lift.

### Color Tokens

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| `--kb-bg` | `#ffffff` | `#111111` | Primary page canvas |
| `--kb-bg-subtle` | `#f7f7f5` | `#161616` | Sidebars, table headers, subtle bars |
| `--kb-bg-surface` | `#ffffff` | `#141414` | Elevated cards, popovers |
| `--kb-bg-hover` | `#f3f3ef` | `#1e1e1e` | Row & control hover fill |
| `--kb-ink` | `#0a0a0a` | `#f5f5f4` | Primary text & active strokes |
| `--kb-ink-muted` | `#525252` | `#a3a3a3` | Secondary descriptions & metadata |
| `--kb-ink-faint` | `#737373` | `#737373` | Coordinates, indices, subtle counters |
| `--kb-border` | `#0a0a0a` | `#e5e5e5` | Primary structural borders |
| `--kb-border-mid` | `rgba(10, 10, 10, 0.28)` | `rgba(245, 245, 244, 0.30)` | Full-height grid rails |
| `--kb-border-soft` | `rgba(10, 10, 10, 0.14)` | `rgba(245, 245, 244, 0.14)` | Hairline list & table dividers |
| `--kb-inv-bg` / `--kb-inv-ink` | `#0a0a0a` / `#ffffff` | `#f5f5f4` / `#0a0a0a` | Active pills, primary CTAs, badges |
| `--kb-ok` | `#16a34a` | `#22c55e` | Authenticated status indicator |
| `--kb-err` | `#dc2626` | `#ef4444` | Auth failure & error states |

---

## 2. Typography

- **Display / Headings (`.font-display`)**: `"Space Grotesk", "Inter", "Noto Sans SC", system-ui, sans-serif`
- **Body**: `"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace / Metadata / Code (`.font-mono-kb`)**: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
- **Casing Rules**:
  - `uppercase` + wide tracking is restricted to micro-labels, navigation chrome, badges, and section headers.
  - **Article titles and headings (`h1`–`h4`) use natural casing** so technical identifiers (`useEffect`, `pywebview`, `KaTeX`, `iOS`) render accurately.
- **Tabular Numerals**: Dates (`2026.11.18`), entry indices (`01`, `02`), reading times, and tag counts use `tabular-nums` for vertical alignment.

---

## 3. Page & Layout Architecture

### 3.1 Global Top Bar (`TitleBar`)
- Full-width sticky `48px` monochrome black bar (`bg-[#0a0a0a] text-white`, horizontal padding `px-4 sm:px-6 lg:px-10`, aligning flush with the full-width Reader subheader and Login Gate coordinate rails).
- **Left**: `LUNE` wordmark + bordered `KB` monospace badge.
- **Right**:
  - Authenticated state: green status dot + `@JuneDrinleng` + `Logout` button (desktop; mobile logout sits in the footer).
  - `About Me / 个人名片` button triggering `SiteTransition` to `https://junedrinleng.com`.
  - GitHub profile link, Language switcher (`EN` / `中文`), and Light/Dark Theme toggle.
  - **Route Sweep Bar**: a `2px` hairline indicator along the bottom edge that sweeps on route transitions.

### 3.2 Default Landing Page — Restricted Login Gate (`/`, unauthenticated)
- Full-viewport architectural dot-grid canvas (`.bg-swiss-dots`) with top/bottom monospace coordinate rails (`DOMAIN // LUNE.LTD`).
- Centered `2px`-bordered Swiss card with offset shadow:
  - Status header (`RESTRICTED ACCESS` · `OWNER ONLY`).
  - Lock emblem, `LUNE` title, bilingual description of the private knowledge base.
  - Inline error alert box when GitHub OAuth fails or a non-owner account attempts sign-in.
  - Primary solid CTA: **Sign in with GitHub / 使用 GitHub 登录** (opens OAuth popup).
  - Secondary link to `junedrinleng.com` with `SiteTransition`.

### 3.3 Knowledge Base Index (`/`, authenticated)
- **Compact Masthead (`border-b-4`)**: Left title + live authenticated label; right `3`-cell telemetry grid (`NOTES` / `SPAN` / `TOPICS`).
- **Asymmetric 2-Column Grid (`lg:grid-cols-[248px_1fr]`)**:
  - **Left Column (`<aside class="lg:border-r lg:pr-8">`)**: Stretches full height of the grid row so the vertical divider runs continuously from masthead to footer without breaking. Inner sticky wrapper (`lg:sticky lg:top-12`) contains:
    1. **View Mode Stack**: `01 Index` / `02 Archive (By Year)` / `03 Topics (By Tag)` / `04 Graph (Interactive Knowledge Graph)`.
    2. **Scalable Year Picker (`YearPicker`)**: Fixed-height stepper (`‹ [ Calendar + Year/All + Count ▼ ] ›`) that opens a `3×3` year matrix popover with entry counts, relative activity density micro-bars, multi-page decade/range navigation for arbitrary year spans, and `Esc` / outside-click dismissal.
    3. **Vertical Topics Directory**: Full-width hairline rows with `#Tag` on the left and zero-padded count on the right.
  - **Right Main Stream (`<main>`)**:
    1. **Command Strip**: Search input (`/` keyboard shortcut to focus; highlights matching nodes live in Graph mode) + Sort toggle (`NEWEST` / `OLDEST`, list modes) + Density switcher (`Editorial` vs. `Compact`, list modes) + collapsible Active Filter Chips bar.
    2. **Featured Latest Card (`LATEST · NO. 01`)**: Highlighted `2px` bordered entry on clean Page 1 of Index view (Editorial + Newest + unfiltered).
    3. **Numbered Catalog Rows**: Left coordinate (`02 / 2026.09.04` + reading time), center title/excerpt/clickable tags, right hover arrow, and `3px` left accent border reveal on hover.
    4. **Swiss Square Pagination** (`PREV` / `01` `02` ... / `NEXT`) and structural **Skeleton Loading** rows.
    5. **Interactive Knowledge Graph (`04 Graph`, `KnowledgeGraph`)**: Monochrome Swiss force-directed Canvas graph built client-side from `[[wikilinks]]`, internal markdown links, frontmatter `related`, and `#Tag` hubs. Uses pure consistent geometry (circular note nodes with concentric selection rings, diamond `#Tag` hubs), restrained hover/zoom-adaptive borderless labels with screen-space AABB collision culling, Global / Local 1-hop toggle, fullscreen expansion (`Esc` to exit), and a right-hand inspector panel for overview hubs, outgoing links, backlinks, and shared topics.

### 3.4 Article Reader (`/blog/:slug`, authenticated)
- **Subheader + 2px Reading Progress Bar**: Back to Index link, date & estimated reading time, desktop `Discussions` sidebar toggle button, and live scroll progress bar.
- **3-Column Independent-Scroll Desktop Layout (`>= 1024px`)**:
  - **Left (`w-60 xl:w-64`)**: Table of Contents (`TableOfContents`) ignoring fenced code blocks and deduplicating repeated heading IDs.
  - **Center (`flex-1`)**: Max-width `3xl` reading column with natural-cased headings, clickable `#Tag` links (jumping back to `/?tag=...`), GFM tables, distinct `ul` (square bullets) vs `ol` (monospace numerals), syntax-labeled code blocks with one-click Copy, and Previous/Next navigation cards.
  - **Right (`w-80 xl:w-96`, toggleable)**: GitHub Discussions (`GiscusComments`) synced with theme and language.
- **Mobile / Tablet (`< 1024px`)**: Collapsible top Table of Contents drawer + inline GitHub Discussions section below Previous/Next navigation.

---

## 4. Motion Choreography

All animations use decisive exponential deceleration (`cubic-bezier(0.22, 1, 0.36, 1)`) and honor `prefers-reduced-motion: reduce`:

- **Forward into Article (`/` → `/blog/:slug`)**: Crisp slide-in from right (`16px` → `0`, `260ms`) + top `2px` hairline sweep.
- **Back to Index (`/blog/:slug` → `/`)**: Crisp slide-in from left (`-16px` → `0`, `240ms`) + top sweep.
- **Auth Unlock / Lock**: Subtle vertical lift (`12px` → `0`) on sign-in; settle scale (`0.98 → 1`) on sign-out.
- **Catalog View / Filter / Page Switch**: Subtle staggered row reveal (`24ms` step, capped) applied only on intentional view/filter switches — never replayed while typing in search.
- **Popovers & Drawers**: Fast downward scale-fade (`160ms`, `transform-origin: top`).

---

## 5. Security & Deployment Invariants

- **Zero Bundled Content**: Markdown posts live exclusively in a private GitHub repository and are fetched at runtime through the authenticated Cloudflare Worker proxy (`worker/blog-api.js`).
- **Memory-Only Token**: The GitHub OAuth token is held only in module memory (`src/app/lib/auth.ts`) and cleared together with the post cache on logout.
- **Public Footprint**: `dist/sitemap.xml` lists only `/` (no private slugs or deprecated product routes).
