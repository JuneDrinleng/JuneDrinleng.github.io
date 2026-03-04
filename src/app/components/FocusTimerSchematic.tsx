import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function FocusTimerSchematic() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const angle = (progress / 100) * 360;
  const radians = ((angle - 90) * Math.PI) / 180;
  const cx = 130, cy = 120, r = 60;
  const x = cx + r * Math.cos(radians);
  const y = cy + r * Math.sin(radians);
  const largeArc = angle > 180 ? 1 : 0;

  const arcPath = angle > 0
    ? `M ${cx} ${cy - r} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`
    : '';

  // Simulated habit streak data (last 7 days)
  const streakDays = [true, true, true, false, true, true, true];

  return (
    <div className="w-full h-full select-none bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-3">
      <div className="w-full h-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        {/* Mini phone frame top bar */}
        <div className="flex items-center justify-center px-2 py-1 bg-slate-100 dark:bg-slate-750 border-b border-slate-200 dark:border-slate-700">
          <span className="text-[7px] text-slate-400 font-medium">Poop · Focus Timer</span>
        </div>

        <svg viewBox="0 0 260 200" className="w-full" style={{ display: 'block' }}>
          {/* Timer circle background */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth="6" />

          {/* Timer progress arc */}
          {arcPath && (
            <motion.path
              d={arcPath}
              fill="none"
              stroke="#6366f1"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0 }}
            />
          )}

          {/* Timer text */}
          <text x={cx} y={cy - 8} textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b" className="dark:fill-slate-200">
            {`${Math.floor((25 * (100 - progress)) / 100)}:${String(Math.floor(((25 * 60 * (100 - progress)) / 100) % 60)).padStart(2, '0')}`}
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="8" fill="#94a3b8">
            FOCUS
          </text>

          {/* Play/Pause indicator */}
          <motion.circle
            cx={cx}
            cy={cy + 28}
            r={8}
            fill="#6366f1"
            opacity="0.15"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <polygon points={`${cx - 3},${cy + 24} ${cx - 3},${cy + 32} ${cx + 4},${cy + 28}`} fill="#6366f1" />

          {/* Streak section - right side */}
          <text x="210" y="70" textAnchor="middle" fontSize="7" fill="#94a3b8" fontWeight="500">
            STREAK
          </text>

          {/* Streak days */}
          {streakDays.map((done, i) => (
            <g key={i}>
              <rect
                x={195 + (i % 4) * 16 - 5}
                y={78 + Math.floor(i / 4) * 22}
                width="12"
                height="12"
                rx="3"
                fill={done ? '#6366f1' : '#f1f5f9'}
                stroke={done ? '#6366f1' : '#e2e8f0'}
                strokeWidth="0.5"
              />
              {done && (
                <path
                  d={`M ${195 + (i % 4) * 16 - 2} ${84 + Math.floor(i / 4) * 22} l 2 2 l 4 -4`}
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </g>
          ))}

          {/* Stats text */}
          <text x="210" y="135" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6366f1">
            6/7
          </text>
          <text x="210" y="148" textAnchor="middle" fontSize="6" fill="#94a3b8">
            DAYS DONE
          </text>

          {/* Bottom bar chart - mini weekly stats */}
          <line x1="30" y1="188" x2="230" y2="188" stroke="#f1f5f9" strokeWidth="0.5" />
          {[30, 45, 60, 25, 50, 55, 40].map((h, i) => (
            <motion.rect
              key={i}
              x={40 + i * 26}
              y={186 - h * 0.5}
              width="14"
              height={h * 0.5}
              rx="2"
              fill={i === 6 ? '#6366f1' : '#e0e7ff'}
              initial={{ height: 0, y: 186 }}
              animate={{ height: h * 0.5, y: 186 - h * 0.5 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
