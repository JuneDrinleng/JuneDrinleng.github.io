import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Extract H2-H4 headings for the TOC (H1 is the post title, H5-H6 are too granular)
export function extractHeadings(markdown: string): TocItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2]
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')      // remove images
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')     // [text](url) → text
      .replace(/[*_`~]+/g, '')                       // strip formatting chars
      .trim();
    const id = slugify(text);
    headings.push({ id, text, level });
  }

  return headings;
}

interface TableOfContentsProps {
  headings: TocItem[];
  contentRef?: React.RefObject<HTMLElement | null>;
}

export default function TableOfContents({ headings, contentRef }: TableOfContentsProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
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
        // Trigger when a heading enters the top 20% of the scroll container
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, contentRef]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) {
    return (
      <div className="p-5 pt-6 text-sm opacity-40 uppercase tracking-wider">
        {t('暂无目录', 'No headings')}
      </div>
    );
  }

  return (
    <nav className="p-5 pt-6">
      <h3 className="text-xs font-bold uppercase tracking-widest mb-5 opacity-50 border-b border-black/10 dark:border-neutral-100/10 pb-3">
        {t('目录', 'Table of Contents')}
      </h3>
      <ul className="space-y-0.5">
        {headings.map((heading, index) => (
          <li
            key={`${heading.id}-${index}`}
            style={{ paddingLeft: `${(heading.level - 2) * 14}px` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block py-1.5 text-[13px] leading-snug transition-all duration-200 border-l-2 pl-3 rounded-r-sm ${
                activeId === heading.id
                  ? 'border-black dark:border-neutral-100 opacity-100 font-semibold bg-black/5 dark:bg-neutral-100/5'
                  : 'border-transparent opacity-45 hover:opacity-75 hover:border-black/20 dark:hover:border-neutral-100/20 hover:bg-black/[0.02] dark:hover:bg-neutral-100/[0.02]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
