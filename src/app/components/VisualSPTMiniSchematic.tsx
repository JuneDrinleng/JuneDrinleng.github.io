import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const generatePath = (points = 30, width = 320, height = 200) => {
  let path = `M ${width / 2} ${height / 2}`;
  let x = width / 2;
  let y = height / 2;
  const coords: { x: number; y: number }[] = [{ x, y }];

  for (let i = 0; i < points; i++) {
    x += (Math.random() - 0.5) * 50;
    y += (Math.random() - 0.5) * 50;
    x = Math.max(30, Math.min(width - 30, x));
    y = Math.max(30, Math.min(height - 30, y));
    path += ` L ${x} ${y}`;
    coords.push({ x, y });
  }
  return { d: path, coords };
};

export default function VisualSPTMiniSchematic() {
  const [data] = useState(() => generatePath());

  const [animProgress, setAnimProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimProgress((p) => (p >= data.coords.length - 1 ? 0 : p + 1));
    }, 150);
    return () => clearInterval(timer);
  }, [data.coords.length]);

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
        <svg viewBox="0 0 320 200" className="w-full" style={{ display: 'block' }}>
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
          <motion.path
            d={data.d}
            fill="none"
            stroke="url(#miniTrajGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Current animated point */}
          {data.coords[animProgress] && (
            <motion.circle
              cx={data.coords[animProgress].x}
              cy={data.coords[animProgress].y}
              r={4}
              fill="#6366f1"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
            />
          )}

          {/* Start marker */}
          <circle cx={data.coords[0].x} cy={data.coords[0].y} r={3} fill="#22c55e" />
          <text x={data.coords[0].x + 5} y={data.coords[0].y - 4} fontSize={7} fill="#22c55e">S</text>

          {/* End marker */}
          <circle
            cx={data.coords[data.coords.length - 1].x}
            cy={data.coords[data.coords.length - 1].y}
            r={3}
            fill="#ef4444"
          />
          <text
            x={data.coords[data.coords.length - 1].x + 5}
            y={data.coords[data.coords.length - 1].y - 4}
            fontSize={7}
            fill="#ef4444"
          >
            E
          </text>

          {/* Colorbar */}
          <defs>
            <linearGradient id="miniColorbar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect x={302} y={20} width={6} height={160} rx={2} fill="url(#miniColorbar)" />

          {/* Time progress bar */}
          <rect x={20} y={192} width={280} height={3} rx={1.5} fill="#e2e8f0" />
          <rect
            x={20}
            y={192}
            width={280 * (animProgress / Math.max(data.coords.length - 1, 1))}
            height={3}
            rx={1.5}
            fill="#6366f1"
          />
        </svg>
      </div>
    </div>
  );
}
