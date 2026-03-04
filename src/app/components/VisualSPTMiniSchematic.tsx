import { useEffect, useRef } from "react";

const WIDTH = 320;
const HEIGHT = 200;
const MAX_TRAIL = 50;
const STEP_INTERVAL = 16;
const OFFSET_X = 40;
const OFFSET_Y = 40;

export default function VisualSPTMiniSchematic() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const pointRef = useRef<SVGCircleElement | null>(null);
  const coordsRef = useRef<{ x: number; y: number }[]>([
    { x: WIDTH / 2, y: HEIGHT / 2 },
  ]);
  const posRef = useRef({ x: WIDTH / 2, y: HEIGHT / 2 });
  const rafRef = useRef<number | null>(null);
  const lastStepRef = useRef<number>(0);

  useEffect(() => {
    const tick = (now: number) => {
      if (now - lastStepRef.current >= STEP_INTERVAL) {
        lastStepRef.current = now;
        const prev = posRef.current;
        const nx = Math.max(
          30,
          Math.min(WIDTH - 30, prev.x + (Math.random() - 0.5) * 24),
        );
        const ny = Math.max(
          30,
          Math.min(HEIGHT - 30, prev.y + (Math.random() - 0.5) * 24),
        );
        posRef.current = { x: nx, y: ny };

        const next = [...coordsRef.current, { x: nx, y: ny }];
        coordsRef.current =
          next.length > MAX_TRAIL ? next.slice(next.length - MAX_TRAIL) : next;

        const pathD =
          coordsRef.current.length > 0
            ? `M ${coordsRef.current[0].x} ${coordsRef.current[0].y}` +
              coordsRef.current
                .slice(1)
                .map((p) => ` L ${p.x} ${p.y}`)
                .join("")
            : "";

        if (pathRef.current) {
          pathRef.current.setAttribute("d", pathD);
        }
        if (pointRef.current) {
          pointRef.current.setAttribute("cx", String(nx + OFFSET_X));
          pointRef.current.setAttribute("cy", String(ny + OFFSET_Y));
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full select-none bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <svg
        viewBox="0 0 400 260"
        className="w-full h-full"
        style={{ display: "block", maxHeight: "100%" }}
      >
        <defs>
          <linearGradient id="miniTrajGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#dadada" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>

        {/* App frame */}
        <rect
          x="40"
          y="20"
          width="320"
          height="220"
          rx="6"
          fill="white"
          stroke="#e2e8f0"
          strokeWidth="1.5"
          className="dark:fill-slate-800 dark:stroke-slate-700"
        />
        <rect
          x="40"
          y="20"
          width="320"
          height="32"
          rx="6"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="1.5"
          className="dark:fill-slate-750 dark:stroke-slate-700"
        />
        <rect
          x="40"
          y="46"
          width="320"
          height="6"
          fill="white"
          className="dark:fill-slate-800"
        />
        <circle cx="58" cy="36" r="4" fill="#ef4444" />
        <circle cx="72" cy="36" r="4" fill="#f59e0b" />
        <circle cx="86" cy="36" r="4" fill="#22c55e" />

        {/* Grid */}
        {[80, 120, 160, 200, 240, 280, 320].map((gx) => (
          <line
            key={`gx${gx}`}
            x1={gx}
            y1={66}
            x2={gx}
            y2={220}
            stroke="#f1f5f9"
            strokeWidth="0.8"
          />
        ))}
        {[90, 120, 150, 180, 210].map((gy) => (
          <line
            key={`gy${gy}`}
            x1={60}
            y1={gy}
            x2={340}
            y2={gy}
            stroke="#f1f5f9"
            strokeWidth="0.8"
          />
        ))}

        {/* Trajectory */}
        <path
          ref={pathRef}
          d={`M ${WIDTH / 2} ${HEIGHT / 2}`}
          fill="none"
          stroke="url(#miniTrajGrad)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(40 40)"
        />

        {/* Current animated point */}
        <circle
          ref={pointRef}
          cx={WIDTH / 2 + OFFSET_X}
          cy={HEIGHT / 2 + OFFSET_Y}
          r={4}
          fill="#ffb300"
        />
      </svg>
    </div>
  );
}
