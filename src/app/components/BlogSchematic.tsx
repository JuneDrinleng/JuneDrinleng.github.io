import { motion } from 'motion/react';

export default function BlogSchematic() {
  return (
    <div className="w-full h-full select-none bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <svg viewBox="0 0 400 260" className="w-full h-full" style={{ maxHeight: '100%' }}>
        {/* Background card */}
        <rect x="40" y="20" width="320" height="220" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />

        {/* Header bar */}
        <rect x="40" y="20" width="320" height="32" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" className="dark:fill-slate-750 dark:stroke-slate-700" />
        <rect x="40" y="46" width="320" height="6" fill="white" className="dark:fill-slate-800" />

        {/* Dots in header */}
        <circle cx="58" cy="36" r="4" fill="#ef4444" />
        <circle cx="72" cy="36" r="4" fill="#f59e0b" />
        <circle cx="86" cy="36" r="4" fill="#22c55e" />

        {/* Title line */}
        <motion.rect
          x="60" y="66" width="180" height="10" rx="2" fill="#1e293b" className="dark:fill-slate-200"
          initial={{ width: 0 }} animate={{ width: 180 }} transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Date line */}
        <motion.rect
          x="60" y="84" width="90" height="6" rx="2" fill="#94a3b8" opacity="0.5"
          initial={{ width: 0 }} animate={{ width: 90 }} transition={{ duration: 0.4, delay: 0.4 }}
        />

        {/* Tag badges */}
        <motion.rect
          x="60" y="100" width="44" height="14" rx="7" fill="none" stroke="#6366f1" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        />
        <motion.rect
          x="66" y="105" width="32" height="4" rx="2" fill="#6366f1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        />
        <motion.rect
          x="112" y="100" width="36" height="14" rx="7" fill="none" stroke="#6366f1" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        />
        <motion.rect
          x="118" y="105" width="24" height="4" rx="2" fill="#6366f1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        />

        {/* Divider */}
        <line x1="60" y1="124" x2="340" y2="124" stroke="#e2e8f0" strokeWidth="1" className="dark:stroke-slate-700" />

        {/* Content lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x="60"
            y={136 + i * 16}
            width={i === 4 ? 160 : 280}
            height="6"
            rx="2"
            fill="#cbd5e1"
            opacity={0.4}
            initial={{ width: 0 }}
            animate={{ width: i === 4 ? 160 : 280 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          />
        ))}

        {/* Floating pencil icon */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <rect x="300" y="60" width="40" height="40" rx="8" fill="#6366f1" opacity="0.1" />
          <path
            d="M316 72 L328 84 L318 94 L306 82 Z"
            fill="none"
            stroke="#6366f1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="306" y1="82" x2="318" y2="94" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="304" y1="96" x2="318" y2="96" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
