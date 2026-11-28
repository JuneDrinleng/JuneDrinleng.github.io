import { Check, Copy } from "lucide-react";
import {
  isValidElement,
  useState,
  type PointerEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { createSlugger } from "../TableOfContents";
import type { WikiEntry } from "../../utils/wiki";

function getChildrenText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getChildrenText).join("");
  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getChildrenText(children.props.children);
  }
  return "";
}

function WikiCodeBlock({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const codeEl = isValidElement<{ className?: string; children?: ReactNode }>(children)
    ? (children as ReactElement<{ className?: string; children?: ReactNode }>)
    : null;

  const className = codeEl?.props.className || "";
  const langMatch = className.match(/language-([\w-]+)/);
  const lang = langMatch ? langMatch[1] : "code";
  const rawCode = getChildrenText(codeEl?.props.children ?? children).replace(/\n$/, "");

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(rawCode)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  return (
    <div
      className="my-5 overflow-hidden rounded-[12px] border"
      style={{
        borderColor: "var(--border-l1)",
        backgroundColor: "var(--surface-l1)",
      }}
    >
      <div
        className="px-4 py-2 border-b flex items-center justify-between text-xs"
        style={{
          backgroundColor: "var(--surface-l2)",
          borderColor: "var(--border-l1)",
        }}
      >
        <span className="font-mono uppercase tracking-wider" style={{ color: "var(--fg-secondary)" }}>
          {lang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border transition-opacity hover:opacity-75 cursor-pointer"
          style={{
            borderColor: "var(--border-l2)",
            backgroundColor: "var(--surface-l1)",
            color: "var(--fg-primary)",
          }}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? t("已复制", "Copied") : t("复制代码", "Copy")}</span>
        </button>
      </div>
      <pre
        className="gp-no-scrollbar p-4 sm:p-5 overflow-x-auto font-mono text-xs sm:text-[13.5px] leading-relaxed m-0"
        style={{ color: "var(--fg-reading)" }}
      >
        {children}
      </pre>
    </div>
  );
}

function WikiInlineLink({
  href,
  children,
  wikiMap,
  postTitleMap,
}: {
  href?: string;
  children: ReactNode;
  wikiMap: Map<string, WikiEntry>;
  postTitleMap: Map<string, string>;
}) {
  const { t } = useLanguage();
  const [flipRight, setFlipRight] = useState(false);

  const handlePointerEnter = (e: PointerEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setFlipRight(rect.left + 324 > window.innerWidth);
  };

  if (href?.startsWith("/wiki/")) {
    const targetSlug = decodeURIComponent(href.slice("/wiki/".length).split("#")[0]);
    const target = wikiMap.get(targetSlug);
    return (
      <span className="gp-wikilink-wrap" onPointerEnter={handlePointerEnter}>
        <Link to={href} className="gp-wikilink">
          {children}
        </Link>
        {target && (
          <span className={`gp-popover ${flipRight ? "gp-popover-flip" : ""}`}>
            <span
              className="block gp-serif text-[18px] font-medium leading-tight mb-1.5"
              style={{ color: "var(--fg-primary)" }}
            >
              {target.title}
            </span>
            {target.summary && (
              <span
                className="block text-[13px] leading-relaxed line-clamp-3 mb-2"
                style={{ color: "var(--fg-secondary)" }}
              >
                {target.summary}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--link)" }}>
              <span>{t("打开词条", "Open article")}</span> ›
            </span>
          </span>
        )}
      </span>
    );
  }

  if (href?.startsWith("/blog/")) {
    const noteSlug = decodeURIComponent(href.slice("/blog/".length).split("#")[0]);
    const noteTitle = postTitleMap.get(noteSlug);
    return (
      <span className="gp-wikilink-wrap" onPointerEnter={handlePointerEnter}>
        <Link to={href} className="gp-wikilink">
          {children}
        </Link>
        <span className={`gp-popover ${flipRight ? "gp-popover-flip" : ""}`}>
          <span
            className="block text-[11px] uppercase tracking-wider mb-1"
            style={{ color: "var(--fg-tertiary)" }}
          >
            {t("个人源笔记", "Personal Note")}
          </span>
          <span
            className="block gp-serif text-[17px] font-medium leading-snug mb-1.5"
            style={{ color: "var(--fg-primary)" }}
          >
            {noteTitle || noteSlug}
          </span>
          <span className="block text-xs mb-2 truncate" style={{ color: "var(--fg-tertiary)" }}>
            /blog/{noteSlug}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: "var(--link)" }}>
            <span>{t("阅读源笔记", "Open note")}</span> ›
          </span>
        </span>
      </span>
    );
  }

  if (href?.startsWith("/")) {
    return (
      <Link to={href} className="gp-wikilink">
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="gp-wikilink"
    >
      {children}
    </a>
  );
}

interface WikiMarkdownBodyProps {
  content: string;
  wikiMap: Map<string, WikiEntry>;
  postTitleMap: Map<string, string>;
}

export default function WikiMarkdownBody({
  content,
  wikiMap,
  postTitleMap,
}: WikiMarkdownBodyProps) {
  const nextHeadingId = createSlugger();

  return (
    <div className="max-w-none text-[15.5px] sm:text-[16px] leading-[1.72]" style={{ color: "var(--fg-reading)" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h2: ({ children }) => {
            const id = nextHeadingId(getChildrenText(children));
            return (
              <h2
                id={id}
                className="gp-serif text-[25px] font-medium leading-[1.15] tracking-[-0.012em] mt-8 mb-3.5 pb-2 border-b scroll-mt-20"
                style={{ borderColor: "var(--border-l1)", color: "var(--fg-primary)" }}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = nextHeadingId(getChildrenText(children));
            return (
              <h3
                id={id}
                className="gp-serif text-[19px] sm:text-[20px] font-medium leading-[1.25] tracking-[-0.01em] mt-6 mb-2.5 scroll-mt-20"
                style={{ color: "var(--fg-primary)" }}
              >
                {children}
              </h3>
            );
          },
          h4: ({ children }) => {
            const id = nextHeadingId(getChildrenText(children));
            return (
              <h4
                id={id}
                className="text-base font-semibold mt-5 mb-2 scroll-mt-20"
                style={{ color: "var(--fg-primary)" }}
              >
                {children}
              </h4>
            );
          },
          p: ({ children }) => <p className="mb-4">{children}</p>,
          strong: ({ children }) => (
            <strong className="font-semibold" style={{ color: "var(--fg-primary)" }}>
              {children}
            </strong>
          ),
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>,
          li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
          code: ({ className, children, ...props }) => {
            const isInline = !className && !String(children).includes("\n");
            if (isInline) {
              return (
                <code
                  className="font-mono text-[0.87em] px-1.5 py-0.5 rounded-[5px] border break-words"
                  style={{
                    backgroundColor: "var(--surface-l2)",
                    borderColor: "var(--border-l1)",
                    color: "var(--fg-primary)",
                  }}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <WikiCodeBlock>{children}</WikiCodeBlock>,
          blockquote: ({ children }) => (
            <blockquote
              className="my-5 rounded-r-[12px] border-l-2 pl-4 pr-4 py-2.5 text-[15px]"
              style={{
                borderColor: "var(--border-l3)",
                backgroundColor: "var(--surface-l2)",
                color: "var(--fg-secondary)",
              }}
            >
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div
              className="gp-no-scrollbar my-5 overflow-x-auto rounded-[12px]"
              style={{
                border: "1px solid var(--border-l1)",
                backgroundColor: "var(--surface-l1)",
              }}
            >
              <table className="w-full border-collapse text-[13.5px]">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead style={{ backgroundColor: "var(--surface-l2)" }}>{children}</thead>
          ),
          th: ({ children }) => (
            <th
              className="text-left px-3.5 py-2.5 font-medium border-b"
              style={{ borderColor: "var(--border-l1)", color: "var(--fg-primary)" }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              className="px-3.5 py-2.5 border-b"
              style={{ borderColor: "var(--border-l1)", color: "var(--fg-secondary)" }}
            >
              {children}
            </td>
          ),
          hr: () => <hr className="my-7 border-t" style={{ borderColor: "var(--border-l1)" }} />,
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              className="my-6 max-w-full rounded-[12px] border"
              style={{ borderColor: "var(--border-l1)" }}
            />
          ),
          a: ({ href, children }) => (
            <WikiInlineLink href={href} wikiMap={wikiMap} postTitleMap={postTitleMap}>
              {children}
            </WikiInlineLink>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
