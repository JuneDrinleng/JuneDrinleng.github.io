import { useCallback, useEffect, useRef, useState } from "react";

interface SiteTransitionProps {
  targetUrl: string;
  active: boolean;
  theme?: "light" | "dark";
  onCancel?: () => void;
}

/**
 * Full-screen overlay that plays a loading animation before navigating
 * to another site, preventing the white flash of a raw page load.
 */
export default function SiteTransition({
  targetUrl,
  active,
  theme = "dark",
  onCancel,
}: SiteTransitionProps) {
  const [phase, setPhase] = useState<
    "idle" | "covering" | "loading" | "leaving"
  >("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const cleanup = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (!active) {
      setPhase("idle");
      cleanup();
      return;
    }

    // Phase 1: overlay covers the screen
    setPhase("covering");

    // Phase 2: show loading indicator after overlay is in place
    timerRef.current = setTimeout(() => {
      setPhase("loading");

      // Phase 3: navigate away after a brief loading animation
      timerRef.current = setTimeout(() => {
        setPhase("leaving");
        // Pass current theme to the target site via URL parameter
        const separator = targetUrl.includes("?") ? "&" : "?";
        window.location.href = `${targetUrl}${separator}theme=${theme}`;
      }, 600);
    }, 350);

    return cleanup;
  }, [active, targetUrl, cleanup]);

  if (phase === "idle") return null;

  return (
    <div
      className={`site-transition-overlay ${phase} ${theme}`}
      onClick={phase === "covering" ? onCancel : undefined}
      role="presentation"
    >
      {/* Animated loader */}
      <div className="site-transition-loader">
        <div className="site-transition-dots">
          <span />
          <span />
          <span />
        </div>
        <p className="site-transition-label">Redirecting…</p>
      </div>
    </div>
  );
}
