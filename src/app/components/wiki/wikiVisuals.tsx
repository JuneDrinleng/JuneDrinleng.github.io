import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import type { WikiCategory, WikiEntry } from "../../utils/wiki";

export interface BookVisual {
  shortTitle: string;
  spineBg: string;
  spineFg: string;
  bookH: number;
}

export interface FeaturedBookConfig {
  slug: string;
  coverBg: string;
  coverFg: string;
  accent: string;
  artSvg: ReactNode;
}

export const CURATED_BOOK_VISUALS: Record<string, BookVisual> = {
  "physics-informed-neural-network": { shortTitle: "PINN", spineBg: "#0f2537", spineFg: "#f5f1e6", bookH: 284 },
  "anomalous-diffusion": { shortTitle: "Anomalous Diffusion", spineBg: "#152f27", spineFg: "#f5f1e6", bookH: 274 },
  "liquid-liquid-phase-separation": { shortTitle: "LLPS", spineBg: "#4a1c24", spineFg: "#f7efe4", bookH: 290 },
  "variational-inference": { shortTitle: "Variational Inference", spineBg: "#25293a", spineFg: "#eef2f8", bookH: 278 },
  "flash-attention-and-kv-cache": { shortTitle: "FlashAttention & KV", spineBg: "#2c241d", spineFg: "#f5efe6", bookH: 286 },
  "macromolecular-crowding": { shortTitle: "Crowding", spineBg: "#eae4d7", spineFg: "#1d1c19", bookH: 274 },
  "viscoelasticity": { shortTitle: "Viscoelasticity", spineBg: "#5d3a2c", spineFg: "#f7efe4", bookH: 276 },
  "marangoni-effect": { shortTitle: "Marangoni Effect", spineBg: "#2e4b5b", spineFg: "#f2f6f8", bookH: 274 },
  "markov-random-field": { shortTitle: "MRF & Bayesian Net", spineBg: "#263248", spineFg: "#eff3f9", bookH: 280 },
  "single-particle-tracking": { shortTitle: "Single-Particle Tracking", spineBg: "#1b3a4b", spineFg: "#f0f5f7", bookH: 292 },
  "microrheology": { shortTitle: "Microrheology", spineBg: "#3d4f3f", spineFg: "#f2f4ef", bookH: 274 },
  "hidden-markov-model": { shortTitle: "HMM", spineBg: "#2e2b3f", spineFg: "#f1eff6", bookH: 274 },
  "clique-tree-belief-propagation": { shortTitle: "Clique Tree & BP", spineBg: "#494132", spineFg: "#f7f3eb", bookH: 288 },
  "markov-chain-monte-carlo": { shortTitle: "Monte Carlo & MCMC", spineBg: "#1f2421", spineFg: "#edf2ee", bookH: 276 },
  "variational-autoencoder-and-diffusion": { shortTitle: "VAE & Diffusion", spineBg: "#722f20", spineFg: "#fbf3ec", bookH: 282 },
  "clip-and-vision-transformer": { shortTitle: "ViT & CLIP", spineBg: "#1e4b8f", spineFg: "#f2f6fc", bookH: 274 },
  "rope-positional-encoding": { shortTitle: "RoPE & Extrapolation", spineBg: "#2b3b4e", spineFg: "#f2f5f8", bookH: 278 },
  "adversarial-attack-and-fgsm": { shortTitle: "Adversarial Attack", spineBg: "#51232d", spineFg: "#f9eff1", bookH: 274 },
  "domain-adaptation": { shortTitle: "Domain Adaptation", spineBg: "#3b2c4c", spineFg: "#f5effa", bookH: 274 },
  "protocell-coacervate-microreactor": { shortTitle: "Protocell Microreactor", spineBg: "#643a21", spineFg: "#f9f1e8", bookH: 292 },
  "rlhf-and-dpo": { shortTitle: "RLHF & DPO", spineBg: "#22342c", spineFg: "#eef4f0", bookH: 280 },
  "agent-context-and-harness-engineering": { shortTitle: "Context & Harness", spineBg: "#1b1d24", spineFg: "#f2f3f7", bookH: 292 },
  "python-pipenv-pyinstaller-packaging": { shortTitle: "Pipenv + PyInstaller", spineBg: "#7d6844", spineFg: "#fdfaf2", bookH: 274 },
  "bert-masked-language-model": { shortTitle: "BERT & MLM", spineBg: "#2c3e50", spineFg: "#f2f5f8", bookH: 282 },
  "gpt-autoregressive-decoding": { shortTitle: "GPT & Autoregressive", spineBg: "#1f3a33", spineFg: "#eef5f2", bookH: 288 },
  "autoencoder-bottleneck": { shortTitle: "Autoencoder", spineBg: "#4a3525", spineFg: "#f7f1ea", bookH: 276 },
  "explainable-ai-saliency": { shortTitle: "Explainable ML", spineBg: "#3a2e46", spineFg: "#f4f0f8", bookH: 280 },
  "policy-gradient-and-ppo": { shortTitle: "Policy Gradient & PPO", spineBg: "#6b2d26", spineFg: "#fbf1ef", bookH: 290 },
  "contrastive-decoding-dola": { shortTitle: "DoLa & Decoding", spineBg: "#243642", spineFg: "#eff4f7", bookH: 278 },
  "deeptrack-cnn-localization": { shortTitle: "DeepTrack CNN", spineBg: "#e6dfd1", spineFg: "#22201c", bookH: 284 },
  "flory-huggins-theory": { shortTitle: "Flory–Huggins Theory", spineBg: "#4c2633", spineFg: "#f8eff2", bookH: 286 },
  "generalized-stokes-einstein": { shortTitle: "GSER & Stokes–Einstein", spineBg: "#2d4337", spineFg: "#eff5f1", bookH: 278 },
};

export const CURATED_SHELF_ORDER = Object.keys(CURATED_BOOK_VISUALS);

const FALLBACK_PALETTE: Array<[string, string]> = [
  ["#0f2537", "#f5f1e6"],
  ["#152f27", "#f5f1e6"],
  ["#4a1c24", "#f7efe4"],
  ["#263248", "#eff3f9"],
  ["#eae4d7", "#1d1c19"],
  ["#3b2c4c", "#f5effa"],
  ["#2c241d", "#f5efe6"],
  ["#2e4b5b", "#f2f6f8"],
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function getBookVisual(entry: WikiEntry): BookVisual {
  const preset = CURATED_BOOK_VISUALS[entry.slug];
  if (preset) return preset;
  const h = hashSlug(entry.slug);
  const [spineBg, spineFg] = FALLBACK_PALETTE[h % FALLBACK_PALETTE.length];
  const parenMatch = entry.title.match(/\(([^)]+)\)\s*$/);
  const shortTitle = parenMatch
    ? parenMatch[1].trim()
    : entry.aliases[0] || entry.title.split(" (")[0];
  return {
    shortTitle: shortTitle.slice(0, 26),
    spineBg,
    spineFg,
    bookH: 274 + (h % 19),
  };
}

export function displayWikiTitle(title: string): string {
  return title.split(" (")[0];
}

export const FEATURED_CONFIGS: FeaturedBookConfig[] = [
  {
    slug: "physics-informed-neural-network",
    coverBg: "#0d2238",
    coverFg: "#eef2f7",
    accent: "#d6b877",
    artSvg: (
      <svg viewBox="0 0 140 120" className="w-32 h-28" fill="none">
        <path d="M10 85 C35 20, 65 105, 90 35 C105 5, 120 75, 132 45" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
        <path d="M10 95 C40 40, 70 110, 95 50 C110 22, 122 80, 132 58" stroke="currentColor" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.55" />
        <circle cx="42" cy="54" r="3" fill="currentColor" />
        <circle cx="88" cy="40" r="3" fill="currentColor" />
        <circle cx="112" cy="48" r="2.5" fill="currentColor" />
        <line x1="16" y1="104" x2="124" y2="104" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    slug: "anomalous-diffusion",
    coverBg: "#122b24",
    coverFg: "#eef5f1",
    accent: "#d8c084",
    artSvg: (
      <svg viewBox="0 0 140 120" className="w-32 h-28" fill="none">
        <polyline points="22,88 38,62 31,42 58,48 70,26 94,40 86,68 114,54 120,30" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
        <circle cx="22" cy="88" r="3.2" fill="currentColor" />
        <circle cx="120" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="70" cy="58" r="36" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.38" />
      </svg>
    ),
  },
  {
    slug: "liquid-liquid-phase-separation",
    coverBg: "#3b151e",
    coverFg: "#f7eee8",
    accent: "#e2be8a",
    artSvg: (
      <svg viewBox="0 0 140 120" className="w-32 h-28" fill="none">
        <circle cx="52" cy="56" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
        <circle cx="92" cy="66" r="17" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
        <circle cx="84" cy="32" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
        <circle cx="42" cy="50" r="4" fill="currentColor" opacity="0.45" />
        <circle cx="60" cy="64" r="3" fill="currentColor" opacity="0.45" />
      </svg>
    ),
  },
  {
    slug: "variational-inference",
    coverBg: "#1e2235",
    coverFg: "#eff1f8",
    accent: "#c9b37e",
    artSvg: (
      <svg viewBox="0 0 140 120" className="w-32 h-28" fill="none">
        <path d="M18 96 Q45 18 70 66 T122 96" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
        <path d="M18 96 Q70 28 122 96" stroke="currentColor" strokeWidth="1.1" strokeDasharray="4 3" opacity="0.6" />
        <line x1="70" y1="22" x2="70" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      </svg>
    ),
  },
  {
    slug: "flash-attention-and-kv-cache",
    coverBg: "#24272d",
    coverFg: "#f3f4f6",
    accent: "#d5ba7a",
    artSvg: (
      <svg viewBox="0 0 140 120" className="w-32 h-28" fill="none">
        <rect x="26" y="22" width="38" height="38" stroke="currentColor" strokeWidth="1.3" opacity="0.85" />
        <rect x="74" y="22" width="38" height="38" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
        <rect x="26" y="68" width="38" height="38" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
        <rect x="74" y="68" width="38" height="38" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.14" />
        <path d="M58 41 L82 41 M45 55 L45 75" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      </svg>
    ),
  },
];

export function getBookCoverArt(slug: string, idx: number): ReactNode {
  const custom = FEATURED_CONFIGS.find((f) => f.slug === slug);
  if (custom) return custom.artSvg;
  switch (idx % 6) {
    case 0:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <circle cx="70" cy="58" r="38" stroke="currentColor" strokeWidth="1.1" opacity="0.35" />
          <circle cx="70" cy="58" r="26" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
          <circle cx="70" cy="58" r="12" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
          <circle cx="70" cy="58" r="3" fill="currentColor" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <polygon points="70,22 34,84 106,84" stroke="currentColor" strokeWidth="1.35" opacity="0.82" />
          <line x1="70" y1="22" x2="70" y2="62" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" />
          <circle cx="70" cy="22" r="4" fill="currentColor" />
          <circle cx="34" cy="84" r="4" fill="currentColor" />
          <circle cx="106" cy="84" r="4" fill="currentColor" />
          <circle cx="70" cy="62" r="3" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <polyline points="20,86 38,66 32,45 58,52 68,28 92,42 84,72 112,58 118,32" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
          <circle cx="20" cy="86" r="3" fill="currentColor" />
          <circle cx="118" cy="32" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <path d="M18 62 Q44 20 70 62 T122 62" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
          <path d="M18 62 Q44 96 70 62 T122 62" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
          <line x1="18" y1="62" x2="122" y2="62" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <rect x="34" y="22" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
          <rect x="60" y="22" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
          <rect x="86" y="22" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
          <rect x="34" y="48" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
          <rect x="60" y="48" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.16" />
          <rect x="86" y="48" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
          <rect x="34" y="74" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
          <rect x="60" y="74" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
          <rect x="86" y="74" width="22" height="22" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 140 120" className="w-28 h-24" fill="none">
          <ellipse cx="70" cy="58" rx="44" ry="20" transform="rotate(-24 70 58)" stroke="currentColor" strokeWidth="1.3" opacity="0.82" />
          <ellipse cx="70" cy="58" rx="44" ry="20" transform="rotate(24 70 58)" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
          <circle cx="70" cy="58" r="3.2" fill="currentColor" />
        </svg>
      );
  }
}

export function matchesWikiQuery(entry: WikiEntry, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    entry.title.toLowerCase().includes(needle) ||
    entry.aliases.some((a) => a.toLowerCase().includes(needle)) ||
    entry.tags.some((tg) => tg.toLowerCase().includes(needle)) ||
    entry.summary.toLowerCase().includes(needle) ||
    entry.content.toLowerCase().includes(needle)
  );
}

export function categoryText(cat: WikiCategory, t: (zh: string, en: string) => string): string {
  if (cat === "term") return t("术语 · Term", "Term");
  if (cat === "technique") return t("技术 · Technique", "Technique");
  return t("方案 · Solution", "Solution");
}

export function parseWikiSource(src: string): { text: string; url: string | null; domain: string } {
  const dashMatch = src.match(/^(.*?)\s*—\s*(https?:\/\/\S+)$/);
  let text = src;
  let url: string | null = null;
  if (dashMatch) {
    text = dashMatch[1].trim();
    url = dashMatch[2].trim();
  } else {
    const urlMatch = src.match(/(https?:\/\/\S+)$/);
    if (urlMatch && urlMatch.index !== undefined) {
      text = src.slice(0, urlMatch.index).trim();
      url = urlMatch[1].trim();
    }
  }
  let domain = "";
  if (url) {
    try {
      domain = new URL(url).hostname.replace(/^www\./, "");
    } catch {
      domain = "";
    }
  }
  return { text: text || url || src, url, domain };
}

export function useWikiRootOverflowClip(): void {
  useEffect(() => {
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    const prevBodyOverflowX = document.body.style.overflowX;
    document.documentElement.style.overflowX = "clip";
    document.body.style.overflowX = "clip";
    return () => {
      document.documentElement.style.overflowX = prevHtmlOverflowX;
      document.body.style.overflowX = prevBodyOverflowX;
    };
  }, []);
}

const STAR_COORDS: Array<[number, number, number, number, number]> = [
  [6, 12, 2, 4.1, 0.2], [14, 28, 3, 4.8, 1.1], [22, 8, 2, 3.9, 0.5], [31, 19, 2, 5.1, 2.0], [39, 7, 3, 4.4, 0.8],
  [47, 25, 2, 3.8, 1.7], [54, 11, 2, 4.9, 0.3], [63, 21, 3, 4.2, 2.4], [72, 9, 2, 5.0, 1.4], [81, 18, 2, 4.0, 0.6],
  [89, 12, 3, 4.7, 1.9], [94, 26, 2, 4.3, 0.1], [9, 48, 2, 5.2, 1.2], [18, 62, 3, 4.0, 2.2], [27, 54, 2, 4.6, 0.7],
  [36, 71, 2, 3.9, 1.8], [44, 44, 3, 5.1, 0.4], [58, 64, 2, 4.3, 2.6], [67, 49, 2, 4.8, 0.9], [77, 73, 3, 4.1, 1.5],
  [86, 57, 2, 5.0, 0.2], [93, 66, 2, 4.4, 2.1], [11, 83, 3, 4.7, 0.9], [25, 91, 2, 3.8, 1.3], [42, 86, 2, 4.9, 2.5],
  [56, 89, 3, 4.2, 0.5], [71, 84, 2, 4.6, 1.6], [84, 92, 2, 5.1, 0.8], [91, 81, 3, 4.0, 2.0], [4, 36, 2, 4.5, 1.1],
];

export function WikiStarfield() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {STAR_COORDS.map(([left, top, size, dur, del], i) => (
        <div
          key={i}
          className="gp-star"
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              "--dur": `${dur}s`,
              "--del": `${del}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export const GP_ICONS = {
  search: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  searchSm: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  arrowUp: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  ),
  arrowRight: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  arrowLeft: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  chevronRight: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  moon: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  sun: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  spark: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
    </svg>
  ),
  copy: (
    <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  ),
  check: (
    <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  shuffle: (
    <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  ),
  list: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
    </svg>
  ),
  close: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
};

interface WikiHeaderProps {
  isArticle: boolean;
  entries: WikiEntry[];
  currentSlug?: string;
}

export function WikiHeader({ isArticle, entries, currentSlug }: WikiHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(-1);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setQuery("");
    setActiveIdx(-1);
    setMobileSearchOpen(false);
  }, [currentSlug, isArticle]);

  const matches = isArticle && query.trim()
    ? entries.filter((e) => matchesWikiQuery(e, query.trim())).slice(0, 6)
    : [];

  const openRandomEntry = () => {
    if (entries.length === 0) return;
    const pool = entries.filter((e) => e.slug !== currentSlug);
    const source = pool.length > 0 ? pool : entries;
    const pick = source[Math.floor(Math.random() * source.length)];
    navigate(`/wiki/${pick.slug}`);
  };

  const frosted = isArticle || scrolled;
  const logoHidden = !isArticle && !scrolled;

  const handleOpenMatch = (slug: string) => {
    setQuery("");
    setActiveIdx(-1);
    setMobileSearchOpen(false);
    navigate(`/wiki/${slug}`);
  };

  return (
    <header className={`gp-header fixed top-0 left-0 right-0 z-50 ${frosted ? "frosted" : ""}`}>
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center gap-3 px-4 sm:px-6">
        <div className="flex-1 flex items-center min-w-0">
          <button
            type="button"
            onClick={() => {
              if (isArticle) navigate("/wiki");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`gp-serif italic text-[22px] tracking-tight cursor-pointer transition-opacity duration-200 ${
              logoHidden ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{ color: "var(--fg-primary)" }}
          >
            Lunepedia
          </button>
        </div>

        {isArticle && (
          <div className="relative hidden md:block w-full md:max-w-[270px] lg:max-w-[400px]">
            <div
              className="flex h-9 items-center gap-2.5 rounded-full pl-3.5 pr-3 transition-all"
              style={{
                backgroundColor:
                  theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(10,10,10,0.045)",
                border: `1px solid ${query ? "var(--border-l2)" : "transparent"}`,
              }}
            >
              <span style={{ color: "var(--fg-tertiary)" }}>{GP_ICONS.searchSm}</span>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIdx(-1);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" && matches.length > 0) {
                    e.preventDefault();
                    setActiveIdx((i) => (i + 1) % matches.length);
                  } else if (e.key === "ArrowUp" && matches.length > 0) {
                    e.preventDefault();
                    setActiveIdx((i) => (i - 1 + matches.length) % matches.length);
                  } else if (e.key === "Enter" && matches.length > 0) {
                    e.preventDefault();
                    handleOpenMatch(matches[Math.max(0, activeIdx)].slug);
                  } else if (e.key === "Escape") {
                    setQuery("");
                    setActiveIdx(-1);
                  }
                }}
                placeholder={t(`搜索 ${entries.length || 32} 篇词条…`, "Search")}
                className="w-full bg-transparent text-sm focus:outline-none"
                style={{ color: "var(--fg-primary)" }}
              />
            </div>

            {matches.length > 0 && (
              <div className="gp-menu absolute left-0 right-0 top-full mt-2 z-50 p-1.5 flex flex-col">
                {matches.map((m, idx) => (
                  <button
                    key={m.slug}
                    type="button"
                    onClick={() => handleOpenMatch(m.slug)}
                    className="flex h-10 items-center gap-2.5 rounded-xl px-3 text-left cursor-pointer transition-colors"
                    style={{
                      backgroundColor: idx === activeIdx ? "var(--surface-l2)" : "transparent",
                    }}
                  >
                    <span style={{ color: "var(--fg-tertiary)" }}>{GP_ICONS.searchSm}</span>
                    <span className="text-sm truncate flex-1" style={{ color: "var(--fg-primary)" }}>
                      {m.title}
                    </span>
                    <span style={{ color: "var(--fg-tertiary)" }}>{GP_ICONS.chevronRight}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex-1 flex items-center justify-end gap-1">
          {isArticle && (
            <button
              type="button"
              onClick={() => {
                setMobileSearchOpen((o) => {
                  const next = !o;
                  if (next) window.setTimeout(() => mobileInputRef.current?.focus(), 30);
                  return next;
                });
              }}
              className="md:hidden w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-colors hover:opacity-80"
              style={{ color: "var(--fg-secondary)" }}
              title={t("搜索词条", "Search")}
              aria-label={t("搜索词条", "Search")}
            >
              {GP_ICONS.searchSm}
            </button>
          )}

          <button
            type="button"
            onClick={openRandomEntry}
            disabled={entries.length === 0}
            className={`h-8 px-3 rounded-full text-sm font-medium hidden ${
              isArticle ? "md:inline-flex" : "sm:inline-flex"
            } items-center cursor-pointer transition-colors hover:opacity-80 disabled:opacity-40`}
            style={{ color: "var(--fg-secondary)" }}
          >
            {t("随机词条", "Random entry")}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="h-8 px-2.5 rounded-full text-xs font-mono cursor-pointer transition-colors hover:opacity-80"
            style={{ color: "var(--fg-secondary)" }}
            title={t("切换语言", "Toggle language")}
          >
            {language === "zh" ? "EN" : "中文"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-colors hover:opacity-80"
            style={{ color: "var(--fg-secondary)" }}
            title={t("切换明暗主题", "Toggle theme")}
            aria-label={t("切换明暗主题", "Toggle theme")}
          >
            {theme === "light" ? GP_ICONS.moon : GP_ICONS.sun}
          </button>

          <Link
            to="/"
            className="ml-1 h-8 px-3.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90 shrink-0"
            style={{
              backgroundColor: "var(--fg-primary)",
              color: "var(--surface-base)",
            }}
          >
            {GP_ICONS.arrowLeft}
            <span>{t("知识库", "Notes")}</span>
          </Link>
        </div>
      </div>

      {isArticle && mobileSearchOpen && (
        <div
          className="md:hidden px-4 py-2.5 border-b"
          style={{
            backgroundColor: "var(--surface-elevated)",
            borderColor: "var(--border-l1)",
          }}
        >
          <div
            className="flex h-9 items-center gap-2 rounded-full px-3"
            style={{
              backgroundColor: "var(--surface-l2)",
              border: "1px solid var(--border-l2)",
            }}
          >
            <span style={{ color: "var(--fg-tertiary)" }}>{GP_ICONS.searchSm}</span>
            <input
              ref={mobileInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && matches.length > 0) {
                  e.preventDefault();
                  handleOpenMatch(matches[0].slug);
                } else if (e.key === "Escape") {
                  setMobileSearchOpen(false);
                  setQuery("");
                }
              }}
              placeholder={t(`搜索 ${entries.length || 32} 篇词条…`, "Search entries...")}
              className="w-full bg-transparent text-sm focus:outline-none"
              style={{ color: "var(--fg-primary)" }}
            />
            <button
              type="button"
              onClick={() => {
                setMobileSearchOpen(false);
                setQuery("");
              }}
              className="cursor-pointer p-1"
              style={{ color: "var(--fg-tertiary)" }}
              aria-label="Close mobile search"
            >
              {GP_ICONS.close}
            </button>
          </div>

          {matches.length > 0 && (
            <div className="mt-2 flex flex-col max-h-56 overflow-y-auto">
              {matches.map((m) => (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => handleOpenMatch(m.slug)}
                  className="flex h-9 items-center gap-2 px-2 rounded-lg text-left text-sm cursor-pointer hover:opacity-80"
                >
                  <span style={{ color: "var(--fg-tertiary)" }}>{GP_ICONS.searchSm}</span>
                  <span className="truncate flex-1" style={{ color: "var(--fg-primary)" }}>
                    {m.title}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}

interface WikiFooterProps {
  entries: WikiEntry[];
  notesCount: number;
  onScrollTo?: (id: string) => void;
}

export function WikiFooter({ entries, notesCount, onScrollTo }: WikiFooterProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const jumpSection = (id: string) => {
    if (onScrollTo) {
      onScrollTo(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/wiki");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t pt-10 pb-14" style={{ borderColor: "var(--border-l1)" }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] md:gap-6">
          <div>
            <div className="gp-serif italic text-[28px] tracking-tight mb-2" style={{ color: "var(--fg-tertiary)" }}>
              Lunepedia
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs mb-3" style={{ color: "var(--fg-tertiary)" }}>
              {t(
                "LUNE 私人知识库的术语、技术与工程方案百科，基于个人笔记与权威来源整理。",
                "Private encyclopedia of terms, techniques, and engineering solutions grounded in personal notes.",
              )}
            </p>
            <div className="gp-tnum text-[13px] font-medium" style={{ color: "var(--fg-secondary)" }}>
              {entries.length} {t("篇已核验词条", "verified articles")}
              {notesCount > 0 ? ` · ${notesCount} ${t("篇源笔记", "notes")}` : ""}
            </div>
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-medium" style={{ color: "var(--fg-primary)" }}>
              {t("词条浏览", "Read")}
            </div>
            <ul className="space-y-1.5" style={{ color: "var(--fg-secondary)" }}>
              <li>
                <button type="button" onClick={() => jumpSection("most-read")} className="hover:underline cursor-pointer">
                  {t("书架浏览 (Most read)", "Most read")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => jumpSection("latest-verifications")}
                  className="hover:underline cursor-pointer"
                >
                  {t("最近核验 (Latest)", "Latest verifications")}
                </button>
              </li>
              <li>
                <Link to="/wiki/physics-informed-neural-network" className="hover:underline">
                  PINN
                </Link>
              </li>
              <li>
                <Link to="/wiki/variational-inference" className="hover:underline">
                  Variational Inference
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-medium" style={{ color: "var(--fg-primary)" }}>
              {t("知识领域", "Domains")}
            </div>
            <ul className="space-y-1.5" style={{ color: "var(--fg-secondary)" }}>
              <li>
                <Link to="/wiki/anomalous-diffusion" className="hover:underline">
                  {t("单颗粒示踪 (SPT)", "Single-Particle Tracking")}
                </Link>
              </li>
              <li>
                <Link to="/wiki/liquid-liquid-phase-separation" className="hover:underline">
                  {t("液-液相分离 (LLPS)", "Phase Separation")}
                </Link>
              </li>
              <li>
                <Link to="/wiki/markov-random-field" className="hover:underline">
                  {t("概率图模型 (PGM)", "Graphical Models")}
                </Link>
              </li>
              <li>
                <Link to="/wiki/flash-attention-and-kv-cache" className="hover:underline">
                  {t("大模型推理与 Agent", "LLM & Agent Systems")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-[13px]">
            <div className="font-medium" style={{ color: "var(--fg-primary)" }}>
              LUNE.LTD
            </div>
            <ul className="space-y-1.5" style={{ color: "var(--fg-secondary)" }}>
              <li>
                <Link to="/" className="hover:underline">
                  {t("返回知识库首页", "Knowledge Base Index")}
                </Link>
              </li>
              <li>
                <Link to="/wiki/agent-context-and-harness-engineering" className="hover:underline">
                  Context &amp; Harness
                </Link>
              </li>
              <li>
                <Link to="/wiki/python-pipenv-pyinstaller-packaging" className="hover:underline">
                  Pipenv &amp; PyInstaller
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 border-t pt-4 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ borderColor: "var(--border-l1)", color: "var(--fg-tertiary)" }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 LUNE.LTD</span>
            <span>Private Notes Knowledge Base</span>
            <span>notes/wiki/*.md</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            {GP_ICONS.spark}
            <span>{t("经论文与官方文档核验", "Verified against primary sources")}</span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 right-6 gp-serif italic font-bold text-[180px] leading-none select-none"
        style={{ color: "var(--fg-primary)", opacity: "var(--watermark-op)" as unknown as number }}
        aria-hidden="true"
      >
        L
      </div>
    </footer>
  );
}
