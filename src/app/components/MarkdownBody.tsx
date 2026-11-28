import { Check, Copy } from "lucide-react";
import {
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useLanguage } from "../contexts/LanguageContext";
import { createSlugger } from "./TableOfContents";

function getChildrenText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getChildrenText).join("");
  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getChildrenText(children.props.children);
  }
  return "";
}

function SwissCodeBlock({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const codeEl = isValidElement<{ className?: string; children?: ReactNode }>(
    children,
  )
    ? (children as ReactElement<{ className?: string; children?: ReactNode }>)
    : null;

  const className = codeEl?.props.className || "";
  const langMatch = className.match(/language-([\w-]+)/);
  const lang = langMatch ? langMatch[1] : "code";
  const rawCode = getChildrenText(codeEl?.props.children ?? children).replace(
    /\n$/,
    "",
  );

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
      className="my-6 border-2 overflow-hidden"
      style={{ borderColor: "var(--kb-border)" }}
    >
      <div
        className="px-4 py-2 border-b flex items-center justify-between font-mono-kb text-xs"
        style={{
          backgroundColor: "var(--kb-code-head)",
          borderColor: "var(--kb-border-soft)",
        }}
      >
        <span
          className="uppercase font-bold tracking-wider"
          style={{ color: "var(--kb-ink-muted)" }}
        >
          {lang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 border text-xs transition-opacity hover:opacity-75 cursor-pointer"
          style={{
            borderColor: "var(--kb-border-soft)",
            backgroundColor: "var(--kb-bg)",
            color: "var(--kb-ink)",
          }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          <span>{copied ? t("已复制", "Copied") : t("复制代码", "Copy")}</span>
        </button>
      </div>
      <pre
        className="p-4 sm:p-5 overflow-x-auto font-mono-kb text-xs sm:text-sm leading-relaxed m-0"
        style={{
          backgroundColor: "var(--kb-code-bg)",
          color: "var(--kb-ink)",
        }}
      >
        {children}
      </pre>
    </div>
  );
}

export default function MarkdownBody({ content }: { content: string }) {
  // Per-render deduplicated heading slugger matching extractHeadings()
  const nextHeadingId = createSlugger();

  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h2: ({ children }) => {
            const id = nextHeadingId(getChildrenText(children));
            return (
              <h2
                id={id}
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-5 pb-2.5 border-b-2 scroll-mt-6"
                style={{ borderColor: "var(--kb-border)" }}
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
                className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3.5 scroll-mt-6"
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
                className="font-display text-lg font-bold tracking-tight mt-6 mb-2.5 scroll-mt-6"
              >
                {children}
              </h4>
            );
          },
          p: ({ children }) => (
            <p
              className="mb-5 leading-[1.85] text-base sm:text-[17px]"
              style={{ color: "var(--kb-ink)", opacity: 0.92 }}
            >
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 space-y-2 list-none pl-0 [&>li]:relative [&>li]:pl-5 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0.5 [&>li]:before:top-[0.7rem] [&>li]:before:w-1.5 [&>li]:before:h-1.5 [&>li]:before:bg-current">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 space-y-2 list-decimal pl-6 marker:font-mono-kb marker:font-bold marker:text-sm">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.8] text-base">{children}</li>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className && !String(children).includes("\n");
            if (isInline) {
              return (
                <code
                  className="font-mono-kb text-[0.85em] px-1.5 py-0.5 border"
                  style={{
                    backgroundColor: "var(--kb-code-bg)",
                    borderColor: "var(--kb-border-soft)",
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
          pre: ({ children }) => <SwissCodeBlock>{children}</SwissCodeBlock>,
          blockquote: ({ children }) => (
            <blockquote
              className="border-l-4 pl-5 pr-4 py-3 my-6 italic"
              style={{
                borderColor: "var(--kb-border)",
                backgroundColor: "var(--kb-bg-subtle)",
                color: "var(--kb-ink-muted)",
              }}
            >
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table
                className="w-full border-collapse text-sm border-2"
                style={{ borderColor: "var(--kb-border)" }}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead style={{ backgroundColor: "var(--kb-bg-subtle)" }}>
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th
              className="text-left px-3.5 py-2.5 border-b-2 border-r font-mono-kb text-xs uppercase tracking-wider font-bold"
              style={{
                borderBottomColor: "var(--kb-border)",
                borderRightColor: "var(--kb-border-soft)",
              }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              className="px-3.5 py-2.5 border-b border-r"
              style={{ borderColor: "var(--kb-border-soft)" }}
            >
              {children}
            </td>
          ),
          hr: () => (
            <hr
              className="my-8 border-t-2"
              style={{ borderColor: "var(--kb-border-soft)" }}
            />
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              className="border-2 my-8 max-w-full"
              style={{ borderColor: "var(--kb-border)" }}
            />
          ),
          a: ({ href, children }) => {
            if (href?.startsWith("/")) {
              return (
                <Link
                  to={href}
                  className="border-b-2 transition-colors hover:opacity-70"
                  style={{ borderColor: "var(--kb-border)" }}
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  href?.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="border-b-2 transition-colors hover:opacity-70"
                style={{ borderColor: "var(--kb-border)" }}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
