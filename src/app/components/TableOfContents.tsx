import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Creates a per-document slugger that deduplicates repeated headings
 * (`summary`, `summary-2`, `summary-3`, ...) consistently between TOC
 * extraction and ReactMarkdown heading rendering.
 */
export function createSlugger() {
  const seen = new Map<string, number>();
  return (text: string): string => {
    const base = slugify(text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

/**
 * Extract H2–H4 headings for the TOC while ignoring lines inside fenced code
 * blocks (` ``` ` or `~~~`) and deduplicating identical heading texts.
 */
export function extractHeadings(markdown: string): TocItem[] {
  const headings: TocItem[] = [];
  const nextSlug = createSlugger();
  let inFence = false;
  let fenceChar = "";

  for (const rawLine of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const fenceMatch = rawLine.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const ch = fenceMatch[1][0];
      if (!inFence) {
        inFence = true;
        fenceChar = ch;
      } else if (ch === fenceChar) {
        inFence = false;
        fenceChar = "";
      }
      continue;
    }
    if (inFence) continue;

    const match = rawLine.match(/^(#{2,4})\s+(.+?)\s*#*\s*$/);
    if (!match) continue;

    const level = match[1].length;
    const text = match[2]
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`~]+/g, "")
      .trim();

    if (!text) continue;
    headings.push({ id: nextSlug(text), text, level });
  }

  return headings;
}

interface TableOfContentsProps {
  headings: TocItem[];
  contentRef?: React.RefObject<HTMLElement | null>;
  onSelect?: () => void;
  compact?: boolean;
}

export default function TableOfContents({
  headings,
  contentRef,
  onSelect,
  compact = false,
}: TableOfContentsProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    setActiveId(headings[0]?.id ?? "");
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        root: contentRef?.current || null,
        rootMargin: "0px 0px -80% 0px",
        threshold: 0,
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, contentRef]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onSelect?.();
  };

  if (headings.length === 0) {
    return (
      <div
        className={`${compact ? "py-2" : "p-5 pt-6"} font-mono-kb text-xs uppercase tracking-wider`}
        style={{ color: "var(--kb-ink-faint)" }}
      >
        {t("暂无目录", "No headings")}
      </div>
    );
  }

  return (
    <nav className={compact ? "" : "p-5 pt-6"}>
      {!compact && (
        <h3
          className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-4 pb-3 border-b"
          style={{
            borderColor: "var(--kb-border-soft)",
            color: "var(--kb-ink-muted)",
          }}
        >
          {t("目录", "Contents")}
        </h3>
      )}
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 14}px` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className="block py-1.5 pl-3 text-xs leading-snug border-l-2 transition-all duration-150"
                style={{
                  borderColor: isActive ? "var(--kb-border)" : "transparent",
                  color: isActive ? "var(--kb-ink)" : "var(--kb-ink-muted)",
                  fontWeight: isActive ? 700 : 400,
                  backgroundColor: isActive
                    ? "var(--kb-bg-hover)"
                    : "transparent",
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
