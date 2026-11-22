import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const YEARS_PER_GRID = 9;

interface YearPickerProps {
  /** Map of numeric year -> number of posts in that year */
  yearCounts: Map<number, number>;
  totalCount: number;
  selectedYear: number | null;
  onSelectYear: (year: number | null) => void;
}

export default function YearPicker({
  yearCounts,
  totalCount,
  selectedYear,
  onSelectYear,
}: YearPickerProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [gridPage, setGridPage] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const availableYears = useMemo(
    () => Array.from(yearCounts.keys()).sort((a, b) => b - a),
    [yearCounts],
  );

  const maxYear = availableYears[0] ?? new Date().getFullYear();
  const minYear = availableYears[availableYears.length - 1] ?? maxYear;
  const maxCount = useMemo(
    () => Math.max(1, ...Array.from(yearCounts.values())),
    [yearCounts],
  );

  const maxPage = Math.max(
    0,
    Math.ceil((maxYear - minYear + 1) / YEARS_PER_GRID) - 1,
  );
  const safeGridPage = Math.min(gridPage, maxPage);

  const windowEnd = maxYear - safeGridPage * YEARS_PER_GRID;
  const windowStart = windowEnd - YEARS_PER_GRID + 1;

  const gridYears = useMemo(() => {
    const arr: number[] = [];
    for (let y = windowEnd; y >= windowStart; y--) {
      arr.push(y);
    }
    return arr;
  }, [windowEnd, windowStart]);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleStepYear = (delta: -1 | 1) => {
    if (availableYears.length === 0) return;
    setOpen(false);
    if (selectedYear === null) {
      onSelectYear(delta < 0 ? availableYears[0] : availableYears[availableYears.length - 1]);
      return;
    }
    const curIdx = availableYears.indexOf(selectedYear);
    if (curIdx === -1) {
      onSelectYear(availableYears[0]);
      return;
    }
    // availableYears is descending: +1 index is older (-1), -1 index is newer (+1)
    const nextIdx = delta < 0 ? curIdx + 1 : curIdx - 1;
    if (nextIdx >= 0 && nextIdx < availableYears.length) {
      onSelectYear(availableYears[nextIdx]);
    } else {
      onSelectYear(null);
    }
  };

  const selectedCount =
    selectedYear !== null ? yearCounts.get(selectedYear) ?? 0 : totalCount;

  return (
    <div ref={rootRef} className="relative">
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-mono-kb text-xs uppercase tracking-widest font-bold"
          style={{ color: "var(--kb-ink-faint)" }}
        >
          {t("年份筛选", "YEAR FILTER")}
        </span>
        {availableYears.length > 0 && (
          <span
            className="font-mono-kb text-xs tabular-nums"
            style={{ color: "var(--kb-ink-faint)" }}
          >
            {minYear === maxYear ? maxYear : `${minYear}–${maxYear}`}
          </span>
        )}
      </div>

      {/* Fixed-height Stepper + Trigger Box */}
      <div
        className="flex items-stretch border-2"
        style={{
          borderColor: "var(--kb-border)",
          backgroundColor: "var(--kb-bg)",
        }}
      >
        <button
          type="button"
          onClick={() => handleStepYear(-1)}
          disabled={availableYears.length === 0}
          title={t("前一年", "Older year")}
          aria-label={t("前一年", "Older year")}
          className="px-2 py-2 border-r hover:opacity-70 transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          style={{ borderColor: "var(--kb-border-soft)" }}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="flex-1 px-2.5 py-2 flex items-center justify-between gap-2 font-mono-kb text-xs transition-colors cursor-pointer min-w-0"
          style={{
            backgroundColor:
              selectedYear !== null ? "var(--kb-inv-bg)" : "transparent",
            color:
              selectedYear !== null ? "var(--kb-inv-ink)" : "var(--kb-ink)",
          }}
        >
          <span className="inline-flex items-center gap-1.5 min-w-0">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="font-bold truncate tabular-nums">
              {selectedYear !== null
                ? String(selectedYear)
                : t("全部年份", "All Years")}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 shrink-0">
            <span className="tabular-nums opacity-65">
              {String(selectedCount).padStart(2, "0")}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-150 ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleStepYear(1)}
          disabled={availableYears.length === 0}
          title={t("后一年", "Newer year")}
          aria-label={t("后一年", "Newer year")}
          className="px-2 py-2 border-l hover:opacity-70 transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          style={{ borderColor: "var(--kb-border-soft)" }}
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3x3 Year Matrix Popover */}
      {open && (
        <div
          role="dialog"
          aria-label={t("选择年份", "Select year")}
          className="anim-popover absolute left-0 right-0 lg:w-64 top-full mt-2 z-40 border-2"
          style={{
            borderColor: "var(--kb-border)",
            backgroundColor: "var(--kb-bg-surface)",
            boxShadow: "var(--kb-shadow-sm)",
          }}
        >
          {/* Range & Page Controls */}
          <div
            className="px-3 py-2 border-b flex items-center justify-between font-mono-kb text-xs"
            style={{
              borderColor: "var(--kb-border-soft)",
              backgroundColor: "var(--kb-bg-subtle)",
            }}
          >
            <button
              type="button"
              onClick={() => setGridPage((p) => Math.min(maxPage, p + 1))}
              disabled={windowStart <= minYear}
              className="p-1 hover:opacity-70 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
              title={t("更早年份", "Earlier years")}
              aria-label={t("更早年份", "Earlier years")}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <span className="font-bold tabular-nums tracking-wider">
              {windowStart} — {windowEnd}
            </span>

            <button
              type="button"
              onClick={() => setGridPage((p) => Math.max(0, p - 1))}
              disabled={safeGridPage <= 0}
              className="p-1 hover:opacity-70 cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
              title={t("更新年份", "Newer years")}
              aria-label={t("更新年份", "Newer years")}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3x3 Matrix */}
          <div className="p-2.5 grid grid-cols-3 gap-1.5">
            {gridYears.map((y) => {
              const cnt = yearCounts.get(y) ?? 0;
              const isSelected = selectedYear === y;
              const hasPosts = cnt > 0;
              const barPct = hasPosts
                ? Math.max(18, Math.round((cnt / maxCount) * 100))
                : 0;

              return (
                <button
                  key={y}
                  type="button"
                  disabled={!hasPosts}
                  onClick={() => {
                    onSelectYear(isSelected ? null : y);
                    setOpen(false);
                  }}
                  className={`p-2 border text-left font-mono-kb transition-colors flex flex-col justify-between gap-1.5 ${
                    hasPosts ? "cursor-pointer" : "opacity-30 cursor-not-allowed"
                  }`}
                  style={{
                    borderColor: isSelected
                      ? "var(--kb-border)"
                      : "var(--kb-border-soft)",
                    backgroundColor: isSelected
                      ? "var(--kb-inv-bg)"
                      : "transparent",
                    color: isSelected ? "var(--kb-inv-ink)" : "var(--kb-ink)",
                  }}
                >
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="text-xs font-bold tabular-nums">{y}</span>
                    <span className="text-xs tabular-nums opacity-60">
                      {cnt > 0 ? cnt : "–"}
                    </span>
                  </div>
                  <div
                    className="w-full h-1"
                    style={{
                      backgroundColor: isSelected
                        ? "rgba(128,128,128,0.35)"
                        : "var(--kb-border-soft)",
                    }}
                  >
                    <div
                      className="h-full"
                      style={{
                        width: `${barPct}%`,
                        backgroundColor: isSelected
                          ? "var(--kb-inv-ink)"
                          : "var(--kb-ink)",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Popover Footer */}
          <div
            className="px-3 py-2 border-t flex items-center justify-between font-mono-kb text-xs"
            style={{
              borderColor: "var(--kb-border-soft)",
              backgroundColor: "var(--kb-bg-subtle)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                onSelectYear(null);
                setOpen(false);
              }}
              className="font-bold uppercase tracking-wider cursor-pointer hover:underline"
              style={{
                color:
                  selectedYear === null
                    ? "var(--kb-ink)"
                    : "var(--kb-ink-muted)",
              }}
            >
              {t("全部年份", "ALL YEARS")} ({totalCount})
            </button>
            <span className="opacity-50">ESC</span>
          </div>
        </div>
      )}
    </div>
  );
}
