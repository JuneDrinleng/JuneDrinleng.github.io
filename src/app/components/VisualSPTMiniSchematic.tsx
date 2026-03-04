import { useState, useEffect, useRef, useCallback } from 'react';

const WIDTH = 320;
const HEIGHT = 200;
const MAX_TRAIL = 50;
const STEP_INTERVAL = 120;

export default function VisualSPTMiniSchematic() {
  const [coords, setCoords] = useState<{ x: number; y: number }[]>(() => [
    { x: WIDTH / 2, y: HEIGHT / 2 },
  ]);
  const posRef = useRef({ x: WIDTH / 2, y: HEIGHT / 2 });

  const step = useCallback(() => {
    const prev = posRef.current;
    const nx = Math.max(30, Math.min(WIDTH - 30, prev.x + (Math.random() - 0.5) * 50));
    const ny = Math.max(30, Math.min(HEIGHT - 30, prev.y + (Math.random() - 0.5) * 50));
    posRef.current = { x: nx, y: ny };
    setCoords((c) => {
      const next = [...c, { x: nx, y: ny }];
      return next.length > MAX_TRAIL ? next.slice(next.length - MAX_TRAIL) : next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(step, STEP_INTERVAL);
    return () => clearInterval(timer);
  }, [step]);

  const pathD =
    coords.length > 0
      ? `M ${coords[0].x} ${coords[0].y}` +
        coords.slice(1).map((p) => ` L ${p.x} ${p.y}`).join('')
      : '';

  return (
    <div className="w-full h-full select-none bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-3">
      <div className="w-full h-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        {/* Mini title bar */}
        <div className="flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-750 border-b border-slate-200 dark:border-slate-700">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[7px] ml-1 text-slate-400 font-medium">visualSPT</span>
        </div>

        {/* SVG content */}
        <svg viewBox="0 0 320 200" className="w-full h-full" style={{ display: 'block', maxHeight: '100%' }}>
          <defs>
            <linearGradient id="miniTrajGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {[50, 100, 150, 200, 250].map((gx) => (
            <line key={`gx${gx}`} x1={gx} y1={10} x2={gx} y2={190} stroke="#f1f5f9" strokeWidth="0.5" />
          ))}
          {[40, 80, 120, 160].map((gy) => (
            <line key={`gy${gy}`} x1={20} y1={gy} x2={300} y2={gy} stroke="#f1f5f9" strokeWidth="0.5" />
          ))}

          {/* Trajectory */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#miniTrajGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Current animated point */}
          {coords.length > 0 && (
            <circle
              cx={coords[coords.length - 1].x}
              cy={coords[coords.length - 1].y}
              r={4}
              fill="#6366f1"
            />
          )}
        </svg>
      </div>
    </div>
  );
}
