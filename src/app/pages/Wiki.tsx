import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { getAllPosts } from "../utils/posts";
import { getAllWiki, type WikiCategory, type WikiEntry } from "../utils/wiki";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import {
  CURATED_SHELF_ORDER,
  FEATURED_CONFIGS,
  GP_ICONS,
  WikiFooter,
  WikiHeader,
  WikiStarfield,
  categoryText,
  displayWikiTitle,
  getBookCoverArt,
  getBookVisual,
  matchesWikiQuery,
  useWikiRootOverflowClip,
} from "../components/wiki/wikiVisuals";

const BOOK_W = 196;
const BOOK_D = 38;
const TAU = Math.PI * 2;

const TRENDING_SLUGS = [
  "physics-informed-neural-network",
  "liquid-liquid-phase-separation",
  "variational-inference",
  "anomalous-diffusion",
];

function stepSpring(
  val: number,
  vel: number,
  target: number,
  dt: number,
  omega = 10.5,
): [number, number, boolean] {
  const f = 1 + 2 * dt * omega;
  const oo = omega * omega;
  const hoo = dt * oo;
  const hhoo = dt * hoo;
  const detInv = 1 / (f + hhoo);
  const nextVal = (f * val + dt * vel + hhoo * target) * detInv;
  const nextVel = (vel + hoo * (target - val)) * detInv;
  if (Math.abs(nextVal - target) < 0.0004 && Math.abs(nextVel) < 0.002) {
    return [target, 0, false];
  }
  return [Math.max(0, Math.min(1, nextVal)), nextVel, true];
}

export default function Wiki() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useWikiRootOverflowClip();

  const [rawEntries, setRawEntries] = useState<WikiEntry[]>([]);
  const [notesCount, setNotesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Composer Search & CTA Domain Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActiveIdx, setSearchActiveIdx] = useState(-1);
  const [hintIdx, setHintIdx] = useState(0);
  const [ctaFilter, setCtaFilter] = useState("");
  const [ctaTag, setCtaTag] = useState<string | null>(() => searchParams.get("tag") || null);
  const [ctaCategory, setCtaCategory] = useState<WikiCategory | null>(() => {
    const c = searchParams.get("category");
    return c === "term" || c === "technique" || c === "solution" ? c : null;
  });

  // Featured Book state: featuredIdx drives copy/tablist, displayedFeaturedIdx swaps mid-spin
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [displayedFeaturedIdx, setDisplayedFeaturedIdx] = useState(0);

  // Shelf selection state (rendered inside #shelf-label without clobbering 3D book transforms)
  const [openSpineIdx, setOpenSpineIdx] = useState(-1);
  const [hoverSpineIdx, setHoverSpineIdx] = useState(-1);
  const [shelfCanLeft, setShelfCanLeft] = useState(false);
  const [shelfCanRight, setShelfCanRight] = useState(true);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const shelfSectionRef = useRef<HTMLElement>(null);
  const shelfTrackRef = useRef<HTMLDivElement>(null);
  const shelfLabelRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const book3dRefs = useRef<Array<HTMLDivElement | null>>([]);
  const shadowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const heroBookRef = useRef<HTMLDivElement>(null);
  const heroShadowRef = useRef<HTMLDivElement>(null);

  const openSpineIdxRef = useRef(-1);
  const hoverSpineIdxRef = useRef(-1);
  const shelfAnimRef = useRef<
    Array<{ open: number; openV: number; hover: number; hoverV: number }>
  >([]);
  const shelfRafRef = useRef(0);
  const shelfLastTsRef = useRef(0);

  const featuredIdxRef = useRef(0);
  const displayedFeaturedIdxRef = useRef(0);
  const searchQueryRef = useRef("");
  const heroPhysicsRef = useRef({
    spinY: 0,
    spinV: 0,
    spinTarget: 0,
    lift: 0,
    hover: 0,
    targetHover: 0,
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0,
    pendingIdx: 0,
    swapAngle: 0,
    lastSwitchAt: 0,
    lastHoverX: -9999,
    lastHoverY: -9999,
    rafId: 0,
    lastTs: 0,
  });

  searchQueryRef.current = searchQuery;

  const loadWiki = useCallback(() => {
    if (!token) return;
    let cancelled = false;
    setLoading(true);
    setError(false);

    Promise.all([
      getAllWiki(token),
      getAllPosts(language, token).catch(() => []),
    ])
      .then(([wikiData, postsData]) => {
        if (cancelled) return;
        setRawEntries(wikiData);
        setNotesCount(postsData.filter((p) => !p.metadata.draft).length);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [token, language]);

  useEffect(() => {
    return loadWiki();
  }, [loadWiki]);

  // Sync URL ?tag= / ?category= when navigating from WikiEntry links
  useEffect(() => {
    const urlTag = searchParams.get("tag") || null;
    const urlCatRaw = searchParams.get("category");
    const urlCat =
      urlCatRaw === "term" || urlCatRaw === "technique" || urlCatRaw === "solution"
        ? urlCatRaw
        : null;
    setCtaTag(urlTag);
    setCtaCategory(urlCat);
    if ((urlTag || urlCat) && !loading) {
      window.setTimeout(() => {
        document.getElementById("wiki-filter-band")?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  }, [searchParams, loading]);

  // Order entries in balanced visual cadence (curated order first, then any extra entries)
  const entries = useMemo(() => {
    const orderMap = new Map(CURATED_SHELF_ORDER.map((s, idx) => [s, idx]));
    return [...rawEntries].sort((a, b) => {
      const ia = orderMap.get(a.slug);
      const ib = orderMap.get(b.slug);
      if (ia !== undefined && ib !== undefined) return ia - ib;
      if (ia !== undefined) return -1;
      if (ib !== undefined) return 1;
      return a.title.localeCompare(b.title, "zh");
    });
  }, [rawEntries]);

  const entryMap = useMemo(() => {
    return new Map(entries.map((e) => [e.slug, e]));
  }, [entries]);

  const featuredItems = useMemo(() => {
    const resolved = FEATURED_CONFIGS.filter((cfg) => entryMap.has(cfg.slug)).map((cfg) => ({
      config: cfg,
      entry: entryMap.get(cfg.slug)!,
    }));
    if (resolved.length > 0) return resolved;
    return entries.slice(0, 5).map((entry, idx) => ({
      config: {
        slug: entry.slug,
        coverBg: getBookVisual(entry).spineBg,
        coverFg: getBookVisual(entry).spineFg,
        accent: "#d6b877",
        artSvg: getBookCoverArt(entry.slug, idx),
      },
      entry,
    }));
  }, [entries, entryMap]);

  const trendingItems = useMemo(() => {
    const picked = TRENDING_SLUGS.map((s) => entryMap.get(s)).filter(Boolean) as WikiEntry[];
    return picked.length >= 2 ? picked : entries.slice(0, 4);
  }, [entries, entryMap]);

  const latestSix = useMemo(() => {
    return [...entries]
      .sort((a, b) => b.updated.localeCompare(a.updated))
      .slice(0, 6);
  }, [entries]);

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    entries.forEach((e) => e.tags.forEach((tg) => counts.set(tg, (counts.get(tg) || 0) + 1)));
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8)
      .map(([tg]) => tg);
  }, [entries]);

  const totalSources = useMemo(
    () => entries.reduce((sum, e) => sum + e.sources.length, 0),
    [entries],
  );

  // Sync shelfAnim array length when entries load
  useMemo(() => {
    if (shelfAnimRef.current.length !== entries.length) {
      shelfAnimRef.current = entries.map(() => ({ open: 0, openV: 0, hover: 0, hoverV: 0 }));
    }
  }, [entries.length]);

  // "/" shortcut focuses search omnibox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Rotate search placeholder hint every 3.5s when input is idle
  const hintPool = useMemo(() => {
    if (featuredItems.length > 0) {
      return featuredItems.map((f) => f.entry.title);
    }
    return ["Physics-Informed Neural Networks", "Anomalous Diffusion", "Variational Inference"];
  }, [featuredItems]);

  useEffect(() => {
    if (hintPool.length <= 1) return;
    const id = window.setInterval(() => {
      if (!searchQueryRef.current && document.activeElement !== searchInputRef.current) {
        setHintIdx((prev) => (prev + 1) % hintPool.length);
      }
    }, 3500);
    return () => window.clearInterval(id);
  }, [hintPool.length]);

  // Hero 3D Hardcover Book 60fps rAF ODE loop
  useEffect(() => {
    if (loading || featuredItems.length === 0) return;

    const tickHero = (now: number) => {
      const bookEl = heroBookRef.current;
      const p = heroPhysicsRef.current;
      if (!bookEl) {
        p.rafId = 0;
        p.lastTs = 0;
        return;
      }

      const dt = p.lastTs ? Math.min(0.05, Math.max(0.001, (now - p.lastTs) / 1000)) : 0.016;
      p.lastTs = now;

      const de = 5.2;
      const ie = 13;
      const diff = p.spinTarget - p.spinY;
      if (Math.abs(diff) > 0.001 || Math.abs(p.spinV) > 0.001) {
        const accel = de * de * diff - 2 * de * p.spinV;
        p.spinV = Math.max(-ie, Math.min(ie, p.spinV + accel * dt));
        p.spinY += p.spinV * dt;
      } else {
        p.spinY = p.spinTarget;
        p.spinV = 0;
      }

      const settled = p.spinV === 0 && p.spinY === p.spinTarget;
      if (displayedFeaturedIdxRef.current !== p.pendingIdx && (p.spinY >= p.swapAngle || settled)) {
        displayedFeaturedIdxRef.current = p.pendingIdx;
        setDisplayedFeaturedIdx(p.pendingIdx);
      }

      const spinning = Math.abs(p.spinTarget - p.spinY) > 0.002 || Math.abs(p.spinV) > 0.002;
      const targetLift = spinning ? Math.min(1, Math.abs(p.spinTarget - p.spinY) / Math.PI) : 0;
      const follow = 1 - Math.exp(-10 * dt);
      const liftFollow = 1 - Math.exp(-7 * dt);

      p.lift += (targetLift - p.lift) * liftFollow;
      p.hover += (p.targetHover - p.hover) * follow;
      p.tiltX += (p.targetTiltX - p.tiltX) * follow;
      p.tiltY += (p.targetTiltY - p.tiltY) * follow;

      const sec = now * 0.001;
      const idleScale = spinning ? 0.25 : 1;
      const idleY = Math.sin(sec * 0.62) * 2.2 * idleScale;
      const idleRotY = Math.sin(sec * 0.45) * 2.3 * idleScale;
      const idleRotZ = Math.sin(sec * 0.31) * 0.42 * idleScale;

      const posY = -idleY - p.hover * 5 - p.lift * 14;
      const posZ = p.hover * 12 + p.lift * 28;
      const rotX = 3.5 + p.tiltX;
      const rotY = -25 + idleRotY + p.tiltY + (p.spinY * 180) / Math.PI;

      bookEl.style.transform = `translate3d(0, ${posY.toFixed(2)}px, ${posZ.toFixed(2)}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${idleRotZ.toFixed(2)}deg)`;

      const shadowEl = heroShadowRef.current;
      if (shadowEl) {
        const sx = 1 + p.lift * 0.28 + p.hover * 0.08;
        const sy = 1 + p.lift * 0.35 + p.hover * 0.1;
        shadowEl.style.transform = `translateY(10px) translateX(-6px) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`;
        shadowEl.style.opacity = Math.max(0.35, 1 - p.lift * 0.44 - p.hover * 0.12).toFixed(3);
      }

      p.rafId = requestAnimationFrame(tickHero);
    };

    const p = heroPhysicsRef.current;
    p.lastTs = 0;
    p.rafId = requestAnimationFrame(tickHero);
    return () => {
      if (p.rafId) cancelAnimationFrame(p.rafId);
      p.rafId = 0;
    };
  }, [loading, featuredItems.length]);

  const switchFeatured = useCallback(
    (nextRawIdx: number) => {
      if (featuredItems.length === 0) return;
      const nextIdx =
        ((nextRawIdx % featuredItems.length) + featuredItems.length) % featuredItems.length;
      if (nextIdx === featuredIdxRef.current) return;

      featuredIdxRef.current = nextIdx;
      setFeaturedIdx(nextIdx);

      const p = heroPhysicsRef.current;
      p.lastSwitchAt = performance.now();
      p.pendingIdx = nextIdx;

      const curTargetRev = Math.round(p.spinTarget / TAU) * TAU;
      if (curTargetRev > p.spinY + 0.2 && p.spinY < p.swapAngle - 0.05) {
        p.spinTarget = curTargetRev;
      } else {
        const activeRevBase = Math.floor((p.spinY + 0.05) / TAU) * TAU;
        const candidateSwap = activeRevBase + 4.1;
        if (p.spinY < candidateSwap - 0.35) {
          p.spinTarget = activeRevBase + TAU;
          p.swapAngle = candidateSwap;
        } else {
          p.spinTarget = activeRevBase + TAU * 2;
          p.swapAngle = activeRevBase + TAU + 4.1;
        }
      }
    },
    [featuredItems.length],
  );

  // Shelf edge-fade + arrow button sync
  const syncShelfScrollUi = useCallback(() => {
    const track = shelfTrackRef.current;
    if (!track) return;
    const canLeft = track.scrollLeft > 6;
    const canRight = track.scrollLeft + track.clientWidth < track.scrollWidth - 6;
    track.style.setProperty("--fade-left", canLeft ? "28px" : "0px");
    track.style.setProperty("--fade-right", canRight ? "28px" : "0px");
    setShelfCanLeft(canLeft);
    setShelfCanRight(canRight);
  }, []);

  // Shelf 3D critically-damped spring frame & loop
  const applyShelfFrame = useCallback(
    (dt: number) => {
      const track = shelfTrackRef.current;
      if (!track) return false;
      const anims = shelfAnimRef.current;
      let active = false;

      for (let idx = 0; idx < entries.length; idx += 1) {
        const slot = slotRefs.current[idx];
        const anim = anims[idx];
        if (!slot || !anim) continue;

        const targetOpen = openSpineIdxRef.current === idx ? 1 : 0;
        const targetHover =
          hoverSpineIdxRef.current === idx && openSpineIdxRef.current !== idx ? 1 : 0;

        if (dt > 0) {
          let m1 = false;
          let m2 = false;
          [anim.open, anim.openV, m1] = stepSpring(anim.open, anim.openV, targetOpen, dt, 10);
          [anim.hover, anim.hoverV, m2] = stepSpring(anim.hover, anim.hoverV, targetHover, dt, 12);
          if (m1 || m2) active = true;
        }

        const B = anim.open;
        const H = anim.hover * (1 - B);
        const rotY = 90 + (15.5 - 90) * B;
        const rotX = -11.5 * H + 2.5 * B;
        const scale = 1 + 0.16 * B;
        const liftY = -12 * B;
        const openZ = 18 * B;
        const baseZ = -98 * (1 - B);
        const rad = (rotY * Math.PI) / 180;
        const slotW = scale * (BOOK_W * Math.cos(rad) + BOOK_D * Math.sin(rad));
        const extraGap = 8 * B;

        slot.style.width = `${slotW.toFixed(2)}px`;
        slot.style.marginLeft = `${extraGap.toFixed(2)}px`;
        slot.style.marginRight = `${extraGap.toFixed(2)}px`;
        slot.style.zIndex = B > 0.02 ? "25" : H > 0.02 ? "15" : "1";

        const bookEl = book3dRefs.current[idx];
        if (bookEl) {
          bookEl.style.transform = `translate3d(0, ${liftY.toFixed(2)}px, ${openZ.toFixed(2)}px) rotateX(${rotX.toFixed(2)}deg) translateZ(${baseZ.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        }
        const shadowEl = shadowRefs.current[idx];
        if (shadowEl) {
          shadowEl.style.opacity = (B * 0.95).toFixed(3);
        }
      }

      if (dt > 0 && openSpineIdxRef.current >= 0) {
        const openSlot = slotRefs.current[openSpineIdxRef.current];
        if (openSlot) {
          const left = openSlot.offsetLeft;
          const right = left + openSlot.offsetWidth;
          const viewL = track.scrollLeft;
          const pad = 36;
          const alpha = 1 - Math.exp(-12 * dt);
          if (left - viewL < pad) {
            track.scrollLeft += (Math.max(0, left - pad) - viewL) * alpha;
          } else if (right - viewL > track.clientWidth - pad) {
            track.scrollLeft += (right - track.clientWidth + pad - viewL) * alpha;
          }
        }
        syncShelfScrollUi();
      } else if (dt > 0) {
        syncShelfScrollUi();
      }

      return active;
    },
    [entries.length, syncShelfScrollUi],
  );

  const startShelfSpring = useCallback(() => {
    if (shelfRafRef.current) return;
    shelfLastTsRef.current = 0;
    const step = (now: number) => {
      const dt = shelfLastTsRef.current
        ? Math.min(0.05, Math.max(0.001, (now - shelfLastTsRef.current) / 1000))
        : 0.016;
      shelfLastTsRef.current = now;
      const stillMoving = applyShelfFrame(dt);
      if (stillMoving) {
        shelfRafRef.current = requestAnimationFrame(step);
      } else {
        shelfRafRef.current = 0;
        shelfLastTsRef.current = 0;
      }
    };
    shelfRafRef.current = requestAnimationFrame(step);
  }, [applyShelfFrame]);

  useLayoutEffect(() => {
    if (loading || entries.length === 0) return;
    applyShelfFrame(0);
    syncShelfScrollUi();
  }, [loading, entries.length, applyShelfFrame, syncShelfScrollUi]);

  useEffect(() => {
    window.addEventListener("resize", syncShelfScrollUi, { passive: true });
    return () => {
      window.removeEventListener("resize", syncShelfScrollUi);
      if (shelfRafRef.current) cancelAnimationFrame(shelfRafRef.current);
    };
  }, [syncShelfScrollUi]);

  // Animate #shelf-label on hover/selection change
  const animateShelfLabel = useCallback(() => {
    const el = shelfLabelRef.current;
    if (el && typeof el.animate === "function") {
      el.animate(
        [
          { opacity: 0, transform: "translateY(4px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 200, easing: "cubic-bezier(.2, .65, .3, 1)" },
      );
    }
  }, []);

  const closeOpenBook = useCallback(() => {
    if (openSpineIdxRef.current < 0) return;
    openSpineIdxRef.current = -1;
    setOpenSpineIdx(-1);
    animateShelfLabel();
    startShelfSpring();
  }, [animateShelfLabel, startShelfSpring]);

  // Close open shelf book on Escape or clicking outside #most-read
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (openSpineIdxRef.current >= 0) {
        const shelfEl = shelfSectionRef.current;
        if (shelfEl && !shelfEl.contains(e.target as Node)) {
          closeOpenBook();
        }
      }
    };
    const onDocKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openSpineIdxRef.current >= 0 && !searchQueryRef.current) {
        closeOpenBook();
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onDocKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onDocKey);
    };
  }, [closeOpenBook]);

  // Composer Search Matches
  const qTrim = searchQuery.trim();
  const dropdownMatches = useMemo(() => {
    if (!qTrim) return [];
    return entries.filter((e) => matchesWikiQuery(e, qTrim)).slice(0, 6);
  }, [entries, qTrim]);

  // Bottom CTA Domain/Category/Tag Filter
  const domainFiltered = useMemo(() => {
    const f = ctaFilter.trim();
    if (!f && !ctaTag && !ctaCategory) return [];
    return entries.filter((e) => {
      if (ctaCategory && e.category !== ctaCategory) return false;
      if (ctaTag && !e.tags.includes(ctaTag)) return false;
      if (f && !matchesWikiQuery(e, f)) return false;
      return true;
    });
  }, [entries, ctaFilter, ctaTag, ctaCategory]);

  const activeFeatured = featuredItems[featuredIdx] ?? featuredItems[0];
  const displayedBook = featuredItems[displayedFeaturedIdx] ?? activeFeatured;

  const activeShelfIdx = openSpineIdx >= 0 ? openSpineIdx : hoverSpineIdx;
  const activeShelfEntry = activeShelfIdx >= 0 ? entries[activeShelfIdx] : undefined;

  const handleTabHover = (idx: number, e: PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== "mouse" || featuredIdxRef.current === idx) return;
    const p = heroPhysicsRef.current;
    const moved = Math.hypot(e.clientX - p.lastHoverX, e.clientY - p.lastHoverY) >= 3;
    if (!moved) return;
    p.lastHoverX = e.clientX;
    p.lastHoverY = e.clientY;
    switchFeatured(idx);
  };

  const syncBandParams = (nextCat: WikiCategory | null, nextTag: string | null) => {
    const next = new URLSearchParams();
    if (nextCat) next.set("category", nextCat);
    if (nextTag) next.set("tag", nextTag);
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="gp-scope" data-gp-theme={theme}>
      <WikiStarfield />

      <div className="relative z-10">
        <WikiHeader isArticle={false} entries={entries} />

        {/* Hero Section */}
        <section className="gp-hero mx-auto max-w-[1440px] px-4 sm:px-6 pt-24 pb-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14 items-center">
          {/* Hero Left: Calligraphic Serif Logo + 56px Pill Omnibox + Trending Pills */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-baseline gap-2.5 sm:gap-3 mb-2">
              <h1
                className="gp-serif italic font-normal tracking-[-0.025em] text-[48px] sm:text-[74px] leading-[0.95] select-none"
                style={{ color: "var(--fg-primary)" }}
              >
                Lunepedia
              </h1>
              <span
                className="gp-serif italic font-light text-[20px] sm:text-[26px]"
                style={{ color: "var(--fg-tertiary)" }}
              >
                v0.3
              </span>
            </div>

            <p className="text-[15px] leading-6 mb-7" style={{ color: "var(--fg-tertiary)" }}>
              {t(
                "基于个人研究笔记与权威文献核验构建的知识百科。",
                "An open, comprehensive collection of your research knowledge.",
              )}
            </p>

            {/* 56px Pill Omnibox Composer */}
            <div className="w-full max-w-[640px] relative text-left">
              <div className="gp-composer relative flex items-center pl-5 pr-2">
                <span className="shrink-0 mr-3" style={{ color: "var(--fg-tertiary)" }}>
                  {GP_ICONS.search}
                </span>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchActiveIdx(-1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" && dropdownMatches.length > 0) {
                      e.preventDefault();
                      setSearchActiveIdx((i) => (i + 1) % dropdownMatches.length);
                    } else if (e.key === "ArrowUp" && dropdownMatches.length > 0) {
                      e.preventDefault();
                      setSearchActiveIdx(
                        (i) => (i - 1 + dropdownMatches.length) % dropdownMatches.length,
                      );
                    } else if (e.key === "Enter" && dropdownMatches.length > 0) {
                      e.preventDefault();
                      navigate(`/wiki/${dropdownMatches[Math.max(0, searchActiveIdx)].slug}`);
                    } else if (e.key === "Escape") {
                      setSearchQuery("");
                      setSearchActiveIdx(-1);
                    }
                  }}
                  placeholder={hintPool[hintIdx % hintPool.length]}
                  className="w-full bg-transparent text-base focus:outline-none pr-3"
                  style={{ color: "var(--fg-primary)" }}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (dropdownMatches.length > 0) {
                      navigate(`/wiki/${dropdownMatches[Math.max(0, searchActiveIdx)].slug}`);
                    }
                  }}
                  className="w-10 h-10 rounded-full shrink-0 inline-flex items-center justify-center transition-colors cursor-pointer"
                  style={{
                    backgroundColor: qTrim ? "var(--fg-primary)" : "var(--surface-l3)",
                    color: qTrim ? "var(--surface-base)" : "var(--fg-tertiary)",
                  }}
                  title={t("打开首条匹配词条", "Open top match")}
                >
                  {GP_ICONS.arrowUp}
                </button>
              </div>

              {/* 20px-Radius Search Dropdown */}
              {dropdownMatches.length > 0 && (
                <div className="gp-menu absolute left-0 right-0 top-full mt-2 z-30 max-h-[60vh] overflow-y-auto p-1.5 flex flex-col">
                  {dropdownMatches.map((m, idx) => (
                    <button
                      key={m.slug}
                      type="button"
                      onClick={() => navigate(`/wiki/${m.slug}`)}
                      className="flex h-10 items-center gap-3 rounded-xl px-3 text-left cursor-pointer transition-colors"
                      style={{
                        backgroundColor:
                          idx === searchActiveIdx ? "var(--surface-l2)" : "transparent",
                      }}
                    >
                      <span className="shrink-0" style={{ color: "var(--fg-tertiary)" }}>
                        {GP_ICONS.searchSm}
                      </span>
                      <span className="text-sm truncate flex-1">
                        <span style={{ color: "var(--fg-primary)" }}>{m.title}</span>
                        <span className="ml-1.5 text-xs" style={{ color: "var(--fg-tertiary)" }}>
                          · {categoryText(m.category, t)}
                        </span>
                      </span>
                      <span className="shrink-0" style={{ color: "var(--fg-tertiary)" }}>
                        {GP_ICONS.chevronRight}
                      </span>
                    </button>
                  ))}
                  <div
                    className="mt-1 flex items-center justify-between border-t px-3 pb-1 pt-2 text-xs"
                    style={{ borderColor: "var(--border-l1)", color: "var(--fg-tertiary)" }}
                  >
                    <span>
                      ↑↓ {t("选择", "to move")} · Enter {t("打开", "to open")}
                    </span>
                    <span>Esc {t("关闭", "to close")}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Trending Pills Row (strictly non-scrolling, progressive reveal by width) */}
            {trendingItems.length > 0 && (
              <nav
                aria-label="Trending"
                className="mt-4 flex w-full min-w-0 max-w-[640px] flex-nowrap items-center justify-center gap-x-1.5 overflow-hidden lg:justify-start"
              >
                <span className="text-xs shrink-0 mr-1" style={{ color: "var(--fg-tertiary)" }}>
                  {t("热门词条", "Trending")}
                </span>
                {trendingItems.map((entry, idx) => {
                  const vis = getBookVisual(entry);
                  const visClass =
                    idx >= 3
                      ? "hidden xl:inline-flex"
                      : idx === 2
                        ? "hidden sm:inline-flex"
                        : "inline-flex";
                  return (
                    <Link
                      key={entry.slug}
                      to={`/wiki/${entry.slug}`}
                      className={`h-8 px-3 rounded-full shrink-0 text-[13px] font-normal ${visClass} items-center transition-colors hover:opacity-80`}
                      style={{
                        border: "1px solid var(--border-l2)",
                        color: "var(--fg-secondary)",
                      }}
                    >
                      {vis.shortTitle}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          {/* Hero Right: 6-Face 3D Hardcover Book + Auto-Cycling 01-05 Featured Pane */}
          <div
            id="featured-pane"
            className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-8 lg:gap-10 items-center justify-items-center sm:justify-items-stretch"
          >
            {loading ? (
              <>
                <div className="w-[214px] h-[320px] rounded-md animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
                <div className="w-full space-y-3">
                  <div className="h-4 w-20 rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
                  <div className="h-8 w-3/4 rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
                  <div className="h-16 w-full rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
                  <div className="h-40 w-full rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
                </div>
              </>
            ) : error ? (
              <div
                className="sm:col-span-2 p-8 rounded-[18px] border text-center"
                style={{ backgroundColor: "var(--surface-l1)", borderColor: "var(--border-l1)" }}
              >
                <p className="text-sm mb-4" style={{ color: "var(--fg-secondary)" }}>
                  {t(
                    "无法加载 Wiki 词条，请检查网络、Worker 路由或重新登录。",
                    "Failed to load wiki entries from the private proxy.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={loadWiki}
                  className="h-9 px-4 rounded-full text-xs font-medium cursor-pointer"
                  style={{ backgroundColor: "var(--fg-primary)", color: "var(--surface-base)" }}
                >
                  {t("重试加载", "Retry")}
                </button>
              </div>
            ) : (
              displayedBook &&
              activeFeatured && (
                <>
                  {/* 6-face Interactive 3D Hardcover Book */}
                  <div className="gp-book-scale-wrap">
                    <div className="gp-book-stage flex flex-col items-center">
                      <div
                        ref={heroBookRef}
                        id="hero-book-3d"
                        className="gp-book-3d"
                        onClick={() => navigate(`/wiki/${displayedBook.entry.slug}`)}
                        onPointerEnter={() => {
                          heroPhysicsRef.current.targetHover = 1;
                        }}
                        onPointerMove={(e) => {
                          const el = heroBookRef.current;
                          if (!el) return;
                          const r = el.getBoundingClientRect();
                          const dx = (e.clientX - r.left) / r.width - 0.5;
                          const dy = (e.clientY - r.top) / r.height - 0.5;
                          heroPhysicsRef.current.targetTiltY = dx * 16;
                          heroPhysicsRef.current.targetTiltX = -dy * 9;
                        }}
                        onPointerLeave={() => {
                          heroPhysicsRef.current.targetHover = 0;
                          heroPhysicsRef.current.targetTiltX = 0;
                          heroPhysicsRef.current.targetTiltY = 0;
                        }}
                        style={{
                          transform:
                            "translate3d(0, 0px, 0px) rotateX(3.5deg) rotateY(-25deg) rotateZ(0deg)",
                        }}
                      >
                        <div className="gp-book-pages" />
                        <div className="gp-book-pages-top" />
                        <div className="gp-book-pages-bottom" />
                        <div
                          className="gp-book-back flex items-center justify-center"
                          style={{
                            background: `linear-gradient(155deg, ${displayedBook.config.coverBg} 0%, #091018 100%)`,
                            color: displayedBook.config.accent,
                          }}
                        >
                          <span className="gp-serif italic text-[40px] opacity-75 select-none">L</span>
                        </div>
                        <div
                          className="gp-book-spine"
                          style={{
                            backgroundColor: displayedBook.config.coverBg,
                            color: displayedBook.config.coverFg,
                          }}
                        >
                          <div className="gp-shelf-spine-title-clip">
                            <span className="gp-shelf-spine-title gp-serif">
                              {getBookVisual(displayedBook.entry).shortTitle}
                            </span>
                          </div>
                          <span className="gp-shelf-spine-mark gp-serif italic">L</span>
                        </div>
                        <div
                          className="gp-book-front flex flex-col justify-between p-5"
                          style={{
                            background: `linear-gradient(155deg, ${displayedBook.config.coverBg} 0%, #091018 100%)`,
                            color: displayedBook.config.coverFg,
                          }}
                        >
                          <div className="gp-book-groove" />
                          <div
                            className="relative flex-1 flex items-center justify-center pl-2"
                            style={{ color: displayedBook.config.accent }}
                          >
                            <svg
                              viewBox="0 0 160 160"
                              className="pointer-events-none absolute inset-0 w-full h-full opacity-20"
                              fill="none"
                            >
                              <circle cx="80" cy="76" r="64" stroke="currentColor" strokeWidth="0.9" />
                              <circle
                                cx="80"
                                cy="76"
                                r="48"
                                stroke="currentColor"
                                strokeWidth="0.7"
                                strokeDasharray="3 3"
                              />
                            </svg>
                            <div className="relative z-10">{displayedBook.config.artSvg}</div>
                          </div>
                          <div className="pl-2 pt-2">
                            <div className="text-[11px] opacity-65 gp-serif italic mb-0.5">Lunepedia</div>
                            <div className="gp-serif text-[20px] leading-tight font-medium">
                              {getBookVisual(displayedBook.entry).shortTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div ref={heroShadowRef} id="hero-book-shadow" className="gp-book-shadow" />
                    </div>
                  </div>

                  {/* Featured Details & 01-05 Tablist */}
                  <div className="min-w-0 w-full">
                    <div className="text-[13px] font-medium" style={{ color: "var(--fg-secondary)" }}>
                      Featured
                    </div>

                    <div
                      key={featuredIdx}
                      className="gp-featured-swap h-[178px] sm:h-[184px] flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        <h2 className="gp-serif text-[26px] sm:text-[30px] font-medium leading-[1.14] tracking-[-0.015em] mt-1 line-clamp-2">
                          {displayWikiTitle(activeFeatured.entry.title)}
                        </h2>
                        <p
                          className="text-[14px] leading-[1.55] line-clamp-3 mt-2"
                          style={{ color: "var(--fg-secondary)" }}
                        >
                          {activeFeatured.entry.summary}
                        </p>
                      </div>
                      <Link
                        to={`/wiki/${activeFeatured.entry.slug}`}
                        className="mb-3 inline-flex items-center gap-1 text-[13px] hover:underline w-fit"
                        style={{ color: "var(--fg-secondary)" }}
                      >
                        <span>{t("阅读词条", "Read the article")}</span>
                        {GP_ICONS.chevronRight}
                      </Link>
                    </div>

                    <ol
                      id="featured-tablist"
                      role="tablist"
                      className="border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                      onPointerLeave={() => {
                        heroPhysicsRef.current.lastHoverX = -9999;
                        heroPhysicsRef.current.lastHoverY = -9999;
                      }}
                    >
                      {featuredItems.map((item, idx) => {
                        const active = idx === featuredIdx;
                        return (
                          <li
                            key={item.entry.slug}
                            className="relative border-b"
                            style={{ borderColor: "var(--border-l1)" }}
                          >
                            <button
                              type="button"
                              onPointerEnter={(e) => handleTabHover(idx, e)}
                              onPointerMove={(e) => handleTabHover(idx, e)}
                              onClick={() => {
                                if (featuredIdxRef.current !== idx) {
                                  switchFeatured(idx);
                                } else if (performance.now() - heroPhysicsRef.current.lastSwitchAt > 450) {
                                  navigate(`/wiki/${item.entry.slug}`);
                                }
                              }}
                              className="w-full py-2 flex items-center gap-3 text-left cursor-pointer"
                            >
                              <span
                                className="gp-feat-shift gp-tnum text-xs w-5 shrink-0"
                                style={{
                                  color: active ? "var(--fg-primary)" : "var(--fg-tertiary)",
                                  transform: active ? "translateX(3px)" : "translateX(0)",
                                }}
                              >
                                0{idx + 1}
                              </span>
                              <span
                                className={`gp-feat-shift text-[13.5px] truncate flex-1 ${
                                  active ? "font-medium" : ""
                                }`}
                                style={{
                                  color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                                  transform: active ? "translateX(3px)" : "translateX(0)",
                                }}
                              >
                                {displayWikiTitle(item.entry.title)}
                              </span>
                              <span
                                className="gp-feat-arrow shrink-0"
                                style={{
                                  color: "var(--fg-secondary)",
                                  opacity: active ? 1 : 0,
                                  transform: active ? "translateX(0)" : "translateX(-6px)",
                                }}
                              >
                                {GP_ICONS.chevronRight}
                              </span>
                            </button>
                            {active && (
                              <div
                                key={`prog-${featuredIdx}`}
                                className="gp-progress-bar"
                                onAnimationEnd={(e) => {
                                  if (!searchQueryRef.current) {
                                    switchFeatured((featuredIdxRef.current + 1) % featuredItems.length);
                                  } else {
                                    const bar = e.currentTarget;
                                    bar.style.animation = "none";
                                    void bar.offsetWidth;
                                    bar.style.animation = "";
                                  }
                                }}
                              />
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </>
              )
            )}
          </div>
        </section>

        {/* Live Ticker Strip */}
        {!loading && !error && activeFeatured && (
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div
              className="border-y py-3 flex items-center justify-between gap-3 text-[13.5px]"
              style={{ borderColor: "var(--border-l1)", color: "var(--fg-secondary)" }}
            >
              <Link
                to={`/wiki/${activeFeatured.entry.slug}`}
                className="min-w-0 flex-1 inline-flex items-center gap-2.5 hover:opacity-80 text-left"
              >
                <span className="gp-live-dot shrink-0" />
                <span className="truncate">
                  <strong style={{ color: "var(--fg-primary)", fontWeight: 550 }}>
                    {getBookVisual(activeFeatured.entry).shortTitle}
                  </strong>{" "}
                  · {t("关键公式与笔记关联", "Formulas & Notes")} ·{" "}
                  {t(
                    `已通过文献核验${activeFeatured.entry.updated ? ` (${activeFeatured.entry.updated})` : ""}`,
                    `verified ${activeFeatured.entry.updated || "sources"}`,
                  )}
                </span>
              </Link>
              <div className="gp-tnum hidden sm:inline-flex shrink-0 items-center gap-2 text-[13px]">
                <span>
                  <strong style={{ color: "var(--fg-primary)" }}>{entries.length}</strong>{" "}
                  {t("篇词条", "articles")} · <strong>{totalSources}</strong>{" "}
                  {t("条核验引文", "sources")}
                </span>
                <span>·</span>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("most-read")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-0.5 hover:underline cursor-pointer"
                  style={{ color: "var(--fg-primary)" }}
                >
                  <span>{t("浏览全部书架", "Browse shelf")}</span>
                  {GP_ICONS.chevronRight}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Most Read Standing 3D Shelf (1:1 Grokipedia) */}
        {!loading && !error && entries.length > 0 && (
          <section
            id="most-read"
            ref={shelfSectionRef}
            className="mx-auto max-w-[1440px] px-4 sm:px-6 pt-10 pb-8"
          >
            <div className="flex items-end justify-between gap-4 mb-2">
              <div>
                <h2
                  className="text-[22px] font-medium tracking-[-0.012em]"
                  style={{ color: "var(--fg-primary)" }}
                >
                  {t("全部词条书架 · Most read", "Most read")}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-tertiary)" }}>
                  {t(
                    "点击书脊翻开封面与摘要，再次点击或点下方按钮进入全文。",
                    "What your knowledge base covers — click any book to open its cover.",
                  )}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => shelfTrackRef.current?.scrollBy({ left: -340, behavior: "smooth" })}
                  style={{
                    border: "1px solid var(--border-l1)",
                    backgroundColor: "var(--surface-l1)",
                    color: "var(--fg-secondary)",
                    opacity: shelfCanLeft ? 1 : 0.35,
                    pointerEvents: shelfCanLeft ? "auto" : "none",
                  }}
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                  title={t("向左滚动书架", "Scroll shelf left")}
                >
                  {GP_ICONS.arrowLeft}
                </button>
                <button
                  type="button"
                  onClick={() => shelfTrackRef.current?.scrollBy({ left: 340, behavior: "smooth" })}
                  style={{
                    border: "1px solid var(--border-l1)",
                    backgroundColor: "var(--surface-l1)",
                    color: "var(--fg-secondary)",
                    opacity: shelfCanRight ? 1 : 0.35,
                    pointerEvents: shelfCanRight ? "auto" : "none",
                  }}
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                  title={t("向右滚动书架", "Scroll shelf right")}
                >
                  {GP_ICONS.arrowRight}
                </button>
              </div>
            </div>

            <div className="gp-shelf-stage">
              <div className="gp-shelf-plank" />
              <div
                ref={shelfTrackRef}
                onScroll={syncShelfScrollUi}
                className="gp-shelf-scroll relative z-10 flex items-end gap-[10px] overflow-x-auto pl-0 pr-6 pt-20 pb-0"
              >
                {entries.map((entry, idx) => {
                  const vis = getBookVisual(entry);
                  const topHalfZ = Math.round(vis.bookH / 2 - 2);
                  const coverTitle = displayWikiTitle(entry.title);
                  return (
                    <button
                      key={entry.slug}
                      ref={(el) => {
                        slotRefs.current[idx] = el;
                      }}
                      type="button"
                      className="gp-shelf-slot"
                      style={{ height: `${vis.bookH}px` }}
                      aria-expanded={openSpineIdx === idx}
                      aria-label={coverTitle}
                      onPointerEnter={() => {
                        if (hoverSpineIdxRef.current !== idx) {
                          hoverSpineIdxRef.current = idx;
                          setHoverSpineIdx(idx);
                          if (openSpineIdxRef.current === -1) animateShelfLabel();
                          startShelfSpring();
                        }
                      }}
                      onPointerLeave={() => {
                        if (hoverSpineIdxRef.current === idx) {
                          hoverSpineIdxRef.current = -1;
                          setHoverSpineIdx(-1);
                          if (openSpineIdxRef.current === -1) animateShelfLabel();
                          startShelfSpring();
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (openSpineIdxRef.current === idx) {
                          navigate(`/wiki/${entry.slug}`);
                        } else {
                          openSpineIdxRef.current = idx;
                          setOpenSpineIdx(idx);
                          animateShelfLabel();
                          startShelfSpring();
                        }
                      }}
                    >
                      <div
                        ref={(el) => {
                          shadowRefs.current[idx] = el;
                        }}
                        className="gp-shelf-floor-shadow"
                      />
                      <div
                        ref={(el) => {
                          book3dRefs.current[idx] = el;
                        }}
                        className="gp-shelf-book3d"
                        style={{ height: `${vis.bookH}px` }}
                      >
                        <div
                          className="gp-shelf-face-spine"
                          style={{ backgroundColor: vis.spineBg, color: vis.spineFg }}
                        >
                          <div className="gp-shelf-spine-title-clip">
                            <span className="gp-shelf-spine-title gp-serif">{vis.shortTitle}</span>
                          </div>
                          <span className="gp-shelf-spine-mark gp-serif italic">L</span>
                        </div>

                        <div
                          className="gp-shelf-face-top"
                          style={{ transform: `rotateX(90deg) translateZ(${topHalfZ}px)` }}
                        />

                        <div className="gp-shelf-face-pages" />

                        <div
                          className="gp-shelf-face-back"
                          style={{ backgroundColor: vis.spineBg }}
                        />

                        <div
                          className="gp-shelf-face-front flex flex-col justify-between p-4"
                          style={{
                            backgroundColor: vis.spineBg,
                            backgroundImage:
                              "linear-gradient(158deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 44%, rgba(0,0,0,0.22) 100%)",
                            color: vis.spineFg,
                          }}
                        >
                          <div className="gp-shelf-face-front-hinge" />
                          <div className="relative flex-1 flex items-center justify-center pl-2">
                            <svg
                              viewBox="0 0 160 160"
                              className="pointer-events-none absolute inset-0 w-full h-full opacity-20"
                              fill="none"
                            >
                              <circle cx="80" cy="76" r="64" stroke="currentColor" strokeWidth="0.9" />
                              <circle
                                cx="80"
                                cy="76"
                                r="48"
                                stroke="currentColor"
                                strokeWidth="0.7"
                                strokeDasharray="3 3"
                              />
                            </svg>
                            <div className="relative z-10">{getBookCoverArt(entry.slug, idx)}</div>
                          </div>
                          <div className="pl-2.5 pt-2 text-left">
                            <div className="text-[10.5px] opacity-65 mb-0.5 tracking-tight">
                              Lunepedia
                            </div>
                            <div className="gp-serif text-[18.5px] font-medium leading-[1.1] tracking-[-0.015em] line-clamp-2">
                              {coverTitle}
                            </div>
                            <div
                              className="mt-2 pt-1.5 flex items-center gap-1.5 text-[10px] opacity-70 gp-tnum"
                              style={{ borderTop: "1px solid currentColor", width: "fit-content" }}
                            >
                              <span>
                                {entry.relatedNotes.length} {t("笔记", "notes")}
                              </span>
                              <span>·</span>
                              <span>
                                {entry.sources.length} {t("来源", "src")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grokipedia Centered Shelf Label Readout */}
            <div
              ref={shelfLabelRef}
              className="mt-1 min-h-[76px] sm:min-h-[44px] flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-4 text-center"
            >
              {!activeShelfEntry ? (
                <span className="text-[12.5px]" style={{ color: "var(--fg-tertiary)" }}>
                  {t(
                    "悬停书脊微倾预览 · 点击书脊翻开封面（再次点击进入词条）",
                    "Hover any spine to tilt · Click to turn cover open",
                  )}
                </span>
              ) : (
                <>
                  <span className="gp-tnum text-[13px]" style={{ color: "var(--fg-tertiary)" }}>
                    {String(activeShelfIdx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="gp-serif text-[21px] sm:text-[22px] font-normal tracking-tight"
                    style={{ color: "var(--fg-primary)" }}
                  >
                    {displayWikiTitle(activeShelfEntry.title)}
                  </span>
                  {openSpineIdx === activeShelfIdx && (
                    <span className="w-full sm:w-auto inline-flex items-center justify-center gap-3 mt-1 sm:mt-0 sm:ml-1">
                      <Link
                        to={`/wiki/${activeShelfEntry.slug}`}
                        className="inline-flex items-center gap-1 text-[12.5px] font-medium transition-colors hover:opacity-75"
                        style={{ color: "var(--fg-secondary)" }}
                      >
                        <span>{t("阅读词条", "Read the article")}</span>
                        <span>→</span>
                      </Link>
                      <span className="h-3.5 w-px" style={{ backgroundColor: "var(--border-l2)" }} />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeOpenBook();
                        }}
                        className="text-[12.5px] cursor-pointer transition-colors hover:opacity-80"
                        style={{ color: "var(--fg-tertiary)" }}
                      >
                        {t("放回书架", "Put back")}
                      </button>
                    </span>
                  )}
                </>
              )}
            </div>
          </section>
        )}

        {/* Latest Verifications 3-Column Rounded Cards */}
        {!loading && !error && latestSix.length > 0 && (
          <section id="latest-verifications" className="mx-auto max-w-[1440px] px-4 sm:px-6 py-8">
            <div
              className="border-b pb-3 mb-5 flex items-end justify-between gap-4"
              style={{ borderColor: "var(--border-l1)" }}
            >
              <div>
                <h2
                  className="text-[22px] font-medium tracking-[-0.012em]"
                  style={{ color: "var(--fg-primary)" }}
                >
                  {t("最近核验与整理 · Latest edits", "Latest edits")}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "var(--fg-tertiary)" }}>
                  {t(
                    "从笔记中提取核心词条，对照原始论文与官方文档逐条交叉校验。",
                    "Distilled from notes, checked against primary sources, linked across the wiki.",
                  )}
                </p>
              </div>
            </div>

            <div className="grid gap-3.5 md:grid-cols-3">
              {latestSix.map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/wiki/${entry.slug}`}
                  className="gp-card p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3
                        className="gp-serif text-[20px] font-medium leading-snug truncate"
                        style={{ color: "var(--fg-primary)" }}
                      >
                        {displayWikiTitle(entry.title)}
                      </h3>
                      {entry.updated && (
                        <span className="gp-tnum text-xs shrink-0" style={{ color: "var(--fg-tertiary)" }}>
                          {entry.updated}
                        </span>
                      )}
                    </div>
                    <div className="text-xs mb-2.5" style={{ color: "var(--fg-tertiary)" }}>
                      {categoryText(entry.category, t)} · {entry.relatedNotes.length}{" "}
                      {t("篇源笔记", "notes")}
                    </div>
                    <p
                      className="text-[13.5px] leading-[1.65] line-clamp-4"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      <ins
                        className="no-underline rounded-[4px] px-1 py-0.5"
                        style={{ backgroundColor: "var(--ins-bg)", color: "var(--fg-primary)" }}
                      >
                        {entry.summary}
                      </ins>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Concentric-Ripple Domain & Keyword Filter CTA Band */}
        {!loading && !error && entries.length > 0 && (
          <section
            id="wiki-filter-band"
            className="relative mt-10 border-t py-14 overflow-hidden"
            style={{ borderColor: "var(--border-l1)" }}
          >
            <div className="gp-cta-ambient pointer-events-none absolute inset-0" />
            <div className="relative z-10 mx-auto max-w-[680px] px-4 text-center">
              <h2 className="gp-serif text-[32px] sm:text-[40px] font-medium tracking-tight mb-2">
                {t("按领域或关键词直查词条", "Something specific in mind?")}
              </h2>
              <p className="text-[14.5px] leading-6 mb-7" style={{ color: "var(--fg-secondary)" }}>
                {t(
                  `输入任意关键词或点击下方学科标签，即时筛选全部 ${entries.length} 篇词条。`,
                  `Filter across all ${entries.length} verified wiki entries by topic, alias, or domain tag.`,
                )}
              </p>

              <div
                className="relative max-w-[560px] mx-auto border-b pb-1 flex items-center"
                style={{ borderColor: "var(--border-l2)" }}
              >
                <input
                  type="text"
                  value={ctaFilter}
                  onChange={(e) => setCtaFilter(e.target.value)}
                  placeholder={t(
                    "输入学科或词条名，如 PGM、SPT、Diffusion…",
                    "Type a domain or concept...",
                  )}
                  className="gp-serif w-full bg-transparent text-center text-[22px] sm:text-[26px] px-10 py-1.5 focus:outline-none"
                  style={{ color: "var(--fg-primary)" }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setCtaFilter("");
                    setCtaTag(null);
                    setCtaCategory(null);
                    syncBandParams(null, null);
                  }}
                  className="w-9 h-9 rounded-full shrink-0 inline-flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                  style={{ border: "1px solid var(--border-l2)", color: "var(--fg-secondary)" }}
                  title={t("重置筛选", "Clear filters")}
                >
                  {ctaFilter || ctaTag || ctaCategory ? GP_ICONS.close : GP_ICONS.arrowRight}
                </button>
              </div>

              <div
                className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs"
                style={{ color: "var(--fg-tertiary)" }}
              >
                <span>{t("分类：", "Category:")}</span>
                {(["term", "technique", "solution"] as WikiCategory[]).map((cat) => {
                  const active = ctaCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        const next = active ? null : cat;
                        setCtaCategory(next);
                        syncBandParams(next, ctaTag);
                      }}
                      className="underline underline-offset-4 cursor-pointer hover:opacity-80"
                      style={{
                        color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
                <span>·</span>
                <span>{t("标签：", "Tags:")}</span>
                {allTags.map((tg) => {
                  const active = ctaTag === tg;
                  return (
                    <button
                      key={tg}
                      type="button"
                      onClick={() => {
                        const next = active ? null : tg;
                        setCtaTag(next);
                        syncBandParams(ctaCategory, next);
                      }}
                      className="underline underline-offset-4 cursor-pointer hover:opacity-80"
                      style={{
                        color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      #{tg}
                    </button>
                  );
                })}
              </div>

              {domainFiltered.length > 0 && (
                <div className="mt-7 text-left grid gap-2 sm:grid-cols-2">
                  {domainFiltered.map((e) => (
                    <Link key={e.slug} to={`/wiki/${e.slug}`} className="gp-card p-3.5 text-left">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-medium" style={{ color: "var(--fg-tertiary)" }}>
                          {categoryText(e.category, t)}
                        </span>
                        <span className="text-xs gp-tnum" style={{ color: "var(--fg-tertiary)" }}>
                          {e.sources.length} {t("源", "src")}
                        </span>
                      </div>
                      <div className="gp-serif text-base font-medium" style={{ color: "var(--fg-primary)" }}>
                        {e.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <WikiFooter entries={entries} notesCount={notesCount} />
      </div>
    </div>
  );
}
