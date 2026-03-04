import {
  ArrowLeft,
  Download,
  Route,
  Film,
  BarChart3,
  FileInput,
  MonitorDown,
  Github,
} from "lucide-react";
import { Link } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import VisualSPTSchematic from "../components/VisualSPTSchematic";

type DownloadInfo = {
  version: string;
  url: string;
  sizeBytes?: number;
};

const VISUALSPT_RELEASE_API =
  "https://api.github.com/repos/JuneDrinleng/visualSPT/releases/latest";
const VISUALSPT_RELEASES_PAGE =
  "https://github.com/JuneDrinleng/visualSPT/releases/latest";

function parseLatestYml(content: string): Partial<DownloadInfo> {
  const versionMatch = content.match(/^\s*version:\s*["']?([^"'\n]+)["']?/m);
  const sizeMatch = content.match(/^\s*size:\s*(\d+)/m);

  // Prefer URL in `files` section for Windows executable.
  const windowsFileBlock = content.match(
    /-\s+url:\s*["']?([^"'\n]+)["']?[\s\S]*?\n\s*name:\s*["']?([^"'\n]+)["']?/m,
  );

  let url = "";
  if (windowsFileBlock?.[1] && windowsFileBlock?.[2]) {
    const blockUrl = windowsFileBlock[1].trim();
    const blockName = windowsFileBlock[2].trim().toLowerCase();
    if (blockName.endsWith(".exe")) {
      url = blockUrl;
    }
  }

  if (!url) {
    const looseUrl = content.match(/^\s*url:\s*["']?([^"'\n]+)["']?/m);
    if (looseUrl?.[1]) {
      url = looseUrl[1].trim();
    }
  }

  return {
    version: versionMatch?.[1]?.trim() || "",
    url,
    sizeBytes: sizeMatch?.[1] ? Number(sizeMatch[1]) : undefined,
  };
}

function formatSize(sizeBytes?: number): string {
  if (!sizeBytes || Number.isNaN(sizeBytes)) return "~48 MB";
  return `~${(sizeBytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function VisualSPT() {
  const { t } = useLanguage();
  const featuresRef = useRef<HTMLElement | null>(null);
  const downloadRef = useRef<HTMLElement | null>(null);
  const highlightTimerRef = useRef<number | null>(null);
  const [activeAnchor, setActiveAnchor] = useState<"features" | "download" | null>(null);
  const [downloadInfo, setDownloadInfo] = useState<DownloadInfo>({
    version: "2.7",
    url: "https://github.com/JuneDrinleng/visualSPT/releases/download/v2.7/visualSPT.exe",
  });

  const scrollToSection = useCallback((target: "features" | "download") => {
    const element = target === "features" ? featuresRef.current : downloadRef.current;
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveAnchor(target);

    if (highlightTimerRef.current !== null) {
      window.clearTimeout(highlightTimerRef.current);
    }
    highlightTimerRef.current = window.setTimeout(() => {
      setActiveAnchor(null);
      highlightTimerRef.current = null;
    }, 700);
  }, []);

  useEffect(() => {
    return () => {
      if (highlightTimerRef.current !== null) {
        window.clearTimeout(highlightTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadDownloadInfo = async () => {
      try {
        const releaseRes = await fetch(VISUALSPT_RELEASE_API);
        if (!releaseRes.ok) return;
        const release = await releaseRes.json();

        const assets = Array.isArray(release?.assets) ? release.assets : [];
        const tagName =
          typeof release?.tag_name === "string" ? release.tag_name : "";
        const normalizedVersion = tagName.replace(/^v/i, "");

        const exeAsset = assets.find(
          (asset: { name?: string }) =>
            typeof asset?.name === "string" &&
            asset.name.toLowerCase().endsWith(".exe"),
        );

        const fallbackInfo: DownloadInfo = {
          version: normalizedVersion || "2.7",
          url:
            (typeof exeAsset?.browser_download_url === "string" &&
              exeAsset.browser_download_url) ||
            VISUALSPT_RELEASES_PAGE,
          sizeBytes:
            typeof exeAsset?.size === "number" ? exeAsset.size : undefined,
        };

        const latestYmlAsset = assets.find(
          (asset: { name?: string }) =>
            typeof asset?.name === "string" &&
            asset.name.toLowerCase() === "latest.yml",
        );

        if (latestYmlAsset?.url) {
          const ymlRes = await fetch(latestYmlAsset.url, {
            headers: { Accept: "application/octet-stream" },
          });

          if (ymlRes.ok) {
            const ymlContent = await ymlRes.text();
            const parsed = parseLatestYml(ymlContent);

            if (!cancelled) {
              setDownloadInfo({
                version: parsed.version || fallbackInfo.version,
                url: parsed.url || fallbackInfo.url,
                sizeBytes: parsed.sizeBytes ?? fallbackInfo.sizeBytes,
              });
            }
            return;
          }
        }

        if (!cancelled) {
          setDownloadInfo(fallbackInfo);
        }
      } catch {
        // Keep static fallback in case network request fails.
      }
    };

    void loadDownloadInfo();

    return () => {
      cancelled = true;
    };
  }, []);

  const features = [
    {
      icon: Route,
      title: t("静态轨迹绘图", "Static Trajectory Plot"),
      description: t(
        "按 ID 查看和切换轨迹，支持时间着色渲染、起止标记、网格、坐标轴、色条等配置，可导出 SVG / PNG",
        "View and switch trajectories by ID, time-colored rendering, start/end markers, grid, axis labels, colorbar, export to SVG / PNG",
      ),
    },
    {
      icon: Film,
      title: t("轨迹 GIF 动画", "Trajectory GIF Animation"),
      description: t(
        "逐帧轨迹动画，可配置帧率和尾迹长度，支持时间进度条和坐标轴提示，导出为 GIF",
        "Frame-by-frame trajectory animation, configurable FPS and trail length, optional time bar and axis hints, export as GIF",
      ),
    },
    {
      icon: BarChart3,
      title: t("MSD 可视化", "MSD Visualization"),
      description: t(
        "绘制 EAMSD 和逐轨迹 TAMSD 曲线，支持均值±标准差带显示和对数坐标，便于扩散分析",
        "Plot EAMSD and per-trajectory TAMSD, optional mean ± std band, log-scale plotting for diffusion analysis",
      ),
    },
    {
      icon: FileInput,
      title: t("多格式支持", "Multi-Format Support"),
      description: t(
        "支持 TrackMate CSV、NPY、NPZ 等多种输入格式，自动检测常见轨迹键名，即开即用",
        "Supports TrackMate CSV, NPY, NPZ input formats, auto-detects common trajectory keys, ready to use",
      ),
    },
  ];

  return (
    <div className="visualspt-page min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">
              {t("返回导航", "Back to Home")}
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="visualspt-reveal border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="visualspt-reveal visualspt-delay-1">
              <div className="inline-block border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-1 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">
                  Desktop Application
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
                visualSPT
              </h1>
              <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 opacity-80">
                {t(
                  "基于 pywebview + Python 构建的单粒子追踪（SPT）数据桌面可视化工具。支持静态轨迹绘图、轨迹 GIF 动画和 MSD 曲线可视化，助力科研数据分析。",
                  "A desktop visualization tool for Single Particle Tracking (SPT) data, built with pywebview + Python. Supports static trajectory plotting, trajectory GIF animation, and MSD curve visualization for research data analysis.",
                )}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("download");
                  }}
                  className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 hover:opacity-80 transition-opacity border-2 border-black dark:border-white"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">
                    {t("下载应用", "Download")}
                  </span>
                </a>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("features");
                  }}
                  className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black dark:border-neutral-100 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="font-bold uppercase tracking-wider text-sm">
                    {t("了解更多", "Learn More")}
                  </span>
                </a>
                <a
                  href="https://github.com/JuneDrinleng/visualSPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit visualSPT GitHub repository"
                  className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black dark:border-neutral-100 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
            <div className="visualspt-reveal visualspt-delay-2 border-4 border-black dark:border-neutral-100 overflow-hidden">
              <VisualSPTSchematic />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className={`visualspt-anchor-target visualspt-reveal visualspt-delay-1 border-b-4 border-black dark:border-neutral-100 bg-gray-50 dark:bg-neutral-800 ${
          activeAnchor === "features" ? "visualspt-section-focus" : ""
        }`}
      >
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
              {t("核心特性", "Key Features")}
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
              Key Features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="visualspt-reveal border-2 border-black dark:border-neutral-100 p-6 sm:p-8 bg-white dark:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all"
                  style={{ animationDelay: `${80 + index * 60}ms` }}
                >
                  <Icon
                    className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="visualspt-reveal visualspt-delay-2 border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
              {t("产品预览", "Product Preview")}
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
              Screenshots
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border-2 border-black dark:border-neutral-100 overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTdf16a8220b1fff2d0eddf417c6331c86.png"
                alt={t(
                  "visualSPT 轨迹可视化界面",
                  "visualSPT Trajectory Visualization Interface",
                )}
                className="w-full h-auto"
              />
            </div>
            <div className="border-2 border-black dark:border-neutral-100 overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPT59d896449e34543b2bfc4e3614d5caa5.png"
                alt={t(
                  "visualSPT MSD 分析界面",
                  "visualSPT MSD Analysis Interface",
                )}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        ref={downloadRef}
        className={`visualspt-anchor-target visualspt-reveal visualspt-delay-3 border-b-4 border-black dark:border-neutral-100 ${
          activeAnchor === "download" ? "visualspt-section-focus" : ""
        }`}
      >
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">
              {t("立即下载", "Download Now")}
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
              Available Now
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <a
              href={downloadInfo.url}
              className="block border-2 border-black dark:border-neutral-100 p-12 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group"
            >
              <MonitorDown
                className="w-16 h-16 mx-auto mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                Windows
              </h3>
              <p className="text-sm opacity-60 mb-2 group-hover:opacity-100">
                Windows 10/11
              </p>
              <p className="text-xs opacity-40 mb-6 group-hover:opacity-80">
                v{downloadInfo.version} · {formatSize(downloadInfo.sizeBytes)}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>{t("下载安装包", "Download Installer")}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2023 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
