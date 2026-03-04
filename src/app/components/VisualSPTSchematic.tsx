import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import {
  Route,
  PlayCircle,
  BarChart3,
  Download,
  Maximize2,
  Minus,
  X,
  FolderOpen,
  Files,
} from 'lucide-react';

// --- Data generators ---

const generatePath = (points = 40, width = 400, height = 300) => {
  let path = `M ${width / 2} ${height / 2}`;
  let x = width / 2;
  let y = height / 2;
  const coords: { x: number; y: number }[] = [{ x, y }];

  for (let i = 0; i < points; i++) {
    x += (Math.random() - 0.5) * 60;
    y += (Math.random() - 0.5) * 60;
    x = Math.max(20, Math.min(width - 20, x));
    y = Math.max(20, Math.min(height - 20, y));
    path += ` L ${x} ${y}`;
    coords.push({ x, y });
  }
  return { d: path, coords };
};

const generateMSD = () => {
  const points: string[] = [];
  for (let i = 1; i < 50; i++) {
    const y = i * 4.5 + Math.random() * 8;
    points.push(`${i * 7},${260 - y}`);
  }
  return points.join(' ');
};

// --- Sub-components ---

function NavButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 w-full px-2 py-1.5 rounded text-[10px] font-medium transition-colors ${
        active
          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200'
          : 'text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
      }`}
    >
      <Icon className="w-3 h-3 flex-shrink-0" strokeWidth={1.8} />
      <span className="truncate">{label}</span>
    </button>
  );
}

function ToggleRow({ label, active = true }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[8px] text-slate-500 dark:text-slate-300">{label}</span>
      <div
        className={`w-5 h-2.5 rounded-full relative ${
          active ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'
        }`}
      >
        <div
          className={`absolute top-0.5 w-1.5 h-1.5 rounded-full bg-white transition-all ${
            active ? 'right-0.5' : 'left-0.5'
          }`}
        />
      </div>
    </div>
  );
}

function InputRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[8px] text-slate-500 dark:text-slate-300 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded px-1 py-0.5 text-[8px] text-slate-700 dark:text-slate-200 text-right">
        {value}
      </div>
    </div>
  );
}

// --- Main Component ---

export default function VisualSPTSchematic() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<'static' | 'animation' | 'msd'>('static');
  const [data, setData] = useState(() => generatePath());
  const [msdData, setMsdData] = useState(() => generateMSD());

  useEffect(() => {
    setData(generatePath());
    setMsdData(generateMSD());
  }, [activeTab]);

  // Animation progress for the trajectory GIF view
  const [animProgress, setAnimProgress] = useState(0);
  useEffect(() => {
    if (activeTab !== 'animation') return;
    const timer = setInterval(() => {
      setAnimProgress((p) => (p >= data.coords.length - 1 ? 0 : p + 1));
    }, 120);
    return () => clearInterval(timer);
  }, [activeTab, data.coords.length]);

  // Color gradient for trajectory points
  const gradientId = 'trajGrad';

  const tabLabel = activeTab === 'static' ? 'Static Trajectory Visualization' : activeTab === 'animation' ? 'Trajectory Animation' : 'MSD Visualization';
  const vizColors = {
    grid: isDark ? '#334155' : '#e2e8f0',
    subtleGrid: isDark ? '#1e293b' : '#f1f5f9',
    axis: isDark ? '#94a3b8' : '#94a3b8',
    label: isDark ? '#cbd5e1' : '#64748b',
    mutedLabel: isDark ? '#94a3b8' : '#94a3b8',
    timeTrack: isDark ? '#334155' : '#e2e8f0',
    legendBg: isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    legendStroke: isDark ? '#475569' : '#e2e8f0',
    start: isDark ? '#4ade80' : '#22c55e',
    end: isDark ? '#fb7185' : '#ef4444',
    highlight: isDark ? '#818cf8' : '#6366f1',
  };

  // Generate animated partial path
  const animPartialPath = useMemo(() => {
    if (activeTab !== 'animation') return '';
    const slice = data.coords.slice(0, animProgress + 1);
    if (slice.length < 2) return '';
    return 'M ' + slice.map((c) => `${c.x} ${c.y}`).join(' L ');
  }, [activeTab, animProgress, data.coords]);

  return (
    <div className="w-full select-none" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Window Frame */}
      <div className="rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 tracking-wide">
            visualSPT
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700">
              <Minus className="w-2.5 h-2.5 text-slate-400" />
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700">
              <Maximize2 className="w-2.5 h-2.5 text-slate-400" />
            </div>
            <div className="w-4 h-4 rounded flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30">
              <X className="w-2.5 h-2.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex" style={{ height: 320 }}>
          {/* Sidebar */}
          <div className="w-24 flex-shrink-0 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-600 p-1.5 flex flex-col gap-0.5">
            <NavButton
              active={activeTab === 'static'}
              onClick={() => setActiveTab('static')}
              icon={Route}
              label="Visualization"
            />
            <NavButton
              active={activeTab === 'animation'}
              onClick={() => setActiveTab('animation')}
              icon={PlayCircle}
              label="Animation"
            />
            <NavButton
              active={activeTab === 'msd'}
              onClick={() => setActiveTab('msd')}
              icon={BarChart3}
              label="MSD Analysis"
            />
          </div>

          {/* Main Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Card Header */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">{tabLabel}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-slate-400 dark:text-slate-500 hidden sm:inline">sample_data.csv</span>
                <div className="flex items-center gap-0.5 bg-indigo-500 text-white rounded px-1.5 py-0.5 text-[8px] font-medium">
                  <FolderOpen className="w-2.5 h-2.5" />
                  <span>Open</span>
                </div>
              </div>
            </div>

            {/* Viz Layout */}
            <div className="flex-1 flex overflow-hidden">
              {/* Plot Area */}
              <div className="flex-1 flex flex-col bg-white dark:bg-slate-800">
                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    {activeTab === 'static' && (
                      <motion.div
                        key="static"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 p-2"
                      >
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="50%" stopColor="#22d3ee" />
                              <stop offset="100%" stopColor="#f43f5e" />
                            </linearGradient>
                          </defs>
                          {/* Grid */}
                          {[60, 120, 180, 240, 300, 360].map((gx) => (
                            <line key={`gx${gx}`} x1={gx} y1={10} x2={gx} y2={290} stroke={vizColors.grid} strokeWidth={0.5} />
                          ))}
                          {[50, 100, 150, 200, 250].map((gy) => (
                            <line key={`gy${gy}`} x1={10} y1={gy} x2={390} y2={gy} stroke={vizColors.grid} strokeWidth={0.5} />
                          ))}
                          {/* Trajectory */}
                          <motion.path
                            d={data.d}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth={2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                          />
                          {/* Start marker */}
                          <circle
                            cx={data.coords[0].x}
                            cy={data.coords[0].y}
                            r={4}
                            fill={vizColors.start}
                            stroke={isDark ? '#0f172a' : 'none'}
                            strokeWidth={isDark ? 1 : 0}
                          />
                          <text x={data.coords[0].x + 6} y={data.coords[0].y - 4} fontSize={8} fill={vizColors.start}>Start</text>
                          {/* End marker */}
                          <circle
                            cx={data.coords[data.coords.length - 1].x}
                            cy={data.coords[data.coords.length - 1].y}
                            r={4}
                            fill={vizColors.end}
                            stroke={isDark ? '#0f172a' : 'none'}
                            strokeWidth={isDark ? 1 : 0}
                          />
                          <text x={data.coords[data.coords.length - 1].x + 6} y={data.coords[data.coords.length - 1].y - 4} fontSize={8} fill={vizColors.end}>End</text>
                          {/* Colorbar */}
                          <defs>
                            <linearGradient id="colorbar" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f43f5e" />
                              <stop offset="50%" stopColor="#22d3ee" />
                              <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                          </defs>
                          <rect x={375} y={30} width={8} height={240} rx={2} fill="url(#colorbar)" />
                          <text x={374} y={25} fontSize={6} fill={vizColors.mutedLabel} textAnchor="end">t</text>
                        </svg>
                      </motion.div>
                    )}

                    {activeTab === 'animation' && (
                      <motion.div
                        key="animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 p-2"
                      >
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          {/* Grid */}
                          {[60, 120, 180, 240, 300, 360].map((gx) => (
                            <line key={`gx${gx}`} x1={gx} y1={10} x2={gx} y2={290} stroke={vizColors.grid} strokeWidth={0.5} />
                          ))}
                          {[50, 100, 150, 200, 250].map((gy) => (
                            <line key={`gy${gy}`} x1={10} y1={gy} x2={390} y2={gy} stroke={vizColors.grid} strokeWidth={0.5} />
                          ))}
                          {/* Animated trajectory */}
                          {animPartialPath && (
                            <path d={animPartialPath} fill="none" stroke={vizColors.highlight} strokeWidth={2} strokeLinecap="round" opacity={isDark ? 0.85 : 0.6} />
                          )}
                          {/* Current point */}
                          {data.coords[animProgress] && (
                            <motion.circle
                              cx={data.coords[animProgress].x}
                              cy={data.coords[animProgress].y}
                              r={5}
                              fill={vizColors.highlight}
                              initial={{ scale: 0.5 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.1 }}
                            />
                          )}
                          {/* Time bar */}
                          <rect x={20} y={282} width={360} height={4} rx={2} fill={vizColors.timeTrack} />
                          <rect
                            x={20}
                            y={282}
                            width={360 * (animProgress / Math.max(data.coords.length - 1, 1))}
                            height={4}
                            rx={2}
                            fill={vizColors.highlight}
                          />
                        </svg>
                      </motion.div>
                    )}

                    {activeTab === 'msd' && (
                      <motion.div
                        key="msd"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 p-2"
                      >
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                          {/* Axes */}
                          <line x1={30} y1={270} x2={380} y2={270} stroke={vizColors.axis} strokeWidth={1} />
                          <line x1={30} y1={270} x2={30} y2={20} stroke={vizColors.axis} strokeWidth={1} />
                          <text x={200} y={295} fontSize={8} fill={vizColors.label} textAnchor="middle">Time lag (τ)</text>
                          <text x={12} y={145} fontSize={8} fill={vizColors.label} textAnchor="middle" transform="rotate(-90, 12, 145)">MSD (μm²)</text>
                          {/* Grid */}
                          {[70, 120, 170, 220].map((gy) => (
                            <line key={`gy${gy}`} x1={30} y1={gy} x2={380} y2={gy} stroke={vizColors.subtleGrid} strokeWidth={0.5} />
                          ))}
                          {/* Std area */}
                          <motion.polyline
                            points={msdData}
                            fill="none"
                            stroke="transparent"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                          />
                          {/* Mean TAMSD lines (simulated) */}
                          {[0, 1, 2].map((idx) => {
                            const offset = (idx - 1) * 15;
                            const pts = msdData
                              .split(' ')
                              .map((p) => {
                                const [px, py] = p.split(',').map(Number);
                                return `${px + 30},${py + offset + (Math.random() - 0.5) * 10}`;
                              })
                              .join(' ');
                            return (
                              <polyline
                                key={idx}
                                points={pts}
                                fill="none"
                                stroke={['#a5b4fc', '#c4b5fd', '#93c5fd'][idx]}
                                strokeWidth={0.8}
                                opacity={0.5}
                              />
                            );
                          })}
                          {/* EAMSD line */}
                          <motion.polyline
                            points={msdData.split(' ').map((p) => {
                              const [px, py] = p.split(',').map(Number);
                              return `${px + 30},${py}`;
                            }).join(' ')}
                            fill="none"
                            stroke={vizColors.highlight}
                            strokeWidth={2}
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                          />
                          {/* Legend */}
                          <rect x={290} y={30} width={80} height={40} rx={4} fill={vizColors.legendBg} stroke={vizColors.legendStroke} />
                          <line x1={296} y1={42} x2={312} y2={42} stroke={vizColors.highlight} strokeWidth={2} />
                          <text x={316} y={45} fontSize={7} fill={vizColors.label}>EAMSD</text>
                          <line x1={296} y1={58} x2={312} y2={58} stroke="#a5b4fc" strokeWidth={1} />
                          <text x={316} y={61} fontSize={7} fill={vizColors.label}>TAMSD</text>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ID Slider */}
                <div className="flex items-center gap-2 px-3 py-1 border-t border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                  <span className="text-[8px] font-semibold text-slate-500 dark:text-slate-400">ID:</span>
                  <span className="text-[9px] font-bold text-indigo-500">12</span>
                  <span className="text-[8px] text-slate-400">/ 47</span>
                  <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                    <div className="absolute left-0 top-0 h-full w-1/4 bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Settings Panel */}
              <div className="w-32 flex-shrink-0 border-l border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 p-2 flex flex-col gap-1.5 overflow-y-auto">
                <div className="text-[9px] font-semibold text-slate-600 dark:text-slate-300 mb-0.5">Plot Parameters</div>

                {activeTab === 'msd' ? (
                  <>
                    <InputRow label="Dt" value="0.05" />
                    <InputRow label="Scale" value="0.16" />
                    <InputRow label="Unit" value="μm" />
                    <div className="border-t border-slate-200 dark:border-slate-700 my-0.5" />
                    <ToggleRow label="Show Legend" active />
                    <ToggleRow label="Plot EAMSD" active />
                    <ToggleRow label="Show Title" active />
                    <ToggleRow label="Plot TAMSD" active />
                    <ToggleRow label="Plot Std Area" active />
                  </>
                ) : activeTab === 'animation' ? (
                  <>
                    <InputRow label="FPS" value="20" />
                    <InputRow label="Trail" value="Auto" />
                    <InputRow label="Scale" value="1" />
                    <InputRow label="Unit" value="px" />
                    <div className="border-t border-slate-200 dark:border-slate-700 my-0.5" />
                    <ToggleRow label="Time Bar" active />
                    <ToggleRow label="Origin (0,0)" active />
                    <ToggleRow label="Axis Labels" active />
                    <ToggleRow label="Grid Lines" active />
                  </>
                ) : (
                  <>
                    <InputRow label="Scale" value="0.16" />
                    <InputRow label="Unit" value="μm" />
                    <InputRow label="Title" value="" />
                    <div className="border-t border-slate-200 dark:border-slate-700 my-0.5" />
                    <ToggleRow label="Start/End" active />
                    <ToggleRow label="Origin (0,0)" active />
                    <ToggleRow label="Show Title" active />
                    <ToggleRow label="Axis Labels" active />
                    <ToggleRow label="Grid Lines" active />
                    <ToggleRow label="Color Bar" active />
                    <ToggleRow label="Show Ticks" active />
                  </>
                )}

                {/* Action buttons */}
                <div className="mt-auto pt-1 flex flex-col gap-1">
                  <div className="flex gap-1">
                    <div className="flex-1 flex items-center justify-center gap-0.5 bg-indigo-500 text-white rounded px-1 py-1 text-[8px] font-medium">
                      <Download className="w-2.5 h-2.5" />
                      <span>Save</span>
                    </div>
                    <div className="flex items-center justify-center gap-0.5 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded px-1.5 py-1 text-[8px] font-medium">
                      <Files className="w-2.5 h-2.5" />
                      <span>Batch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

