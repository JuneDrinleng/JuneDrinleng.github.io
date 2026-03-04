import { ArrowLeft, Download, Monitor, Zap, Shield, Globe, MonitorDown } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function VisualSPT() {
  const features = [
    {
      icon: Monitor,
      title: '桌面端优化',
      description: '专为桌面环境设计，充分利用大屏幕优势，提供最佳视觉体验',
    },
    {
      icon: Zap,
      title: '高效性能',
      description: '原生应用性能，流畅运行，快速响应，提升工作效率',
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '本地数据处理，保护隐私安全，离线也能正常使用',
    },
    {
      icon: Globe,
      title: 'Windows 平台',
      description: '专为 Windows 平台优化，与系统深度集成，原生体验',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">返回导航</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-block border-2 border-black px-3 sm:px-4 py-1 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">Desktop Application</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">visualSPT</h1>
              <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 opacity-80">
                专业的桌面端可视化工具，为数据分析和展示提供强大支持。简洁的界面设计，强大的功能实现，助力高效工作。
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-800 transition-colors border-2 border-black"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">下载应用</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 border-2 border-black hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold uppercase tracking-wider text-sm">了解更多</span>
                </a>
              </div>
            </div>
            <div className="border-4 border-black overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768827642561-4d06523d0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwd29ya3NwYWNlJTIwY29tcHV0ZXIlMjBzY3JlZW58ZW58MXx8fHwxNzcyNTE2ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="visualSPT 应用界面"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b-4 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">核心特性</h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">Key Features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="border-2 border-black p-6 sm:p-8 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Icon className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">立即下载</h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">Available Now</p>
          </div>
          <div className="max-w-md mx-auto">
            <a
              href="#"
              className="block border-2 border-black p-12 text-center hover:bg-black hover:text-white transition-colors group"
            >
              <MonitorDown className="w-16 h-16 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Windows</h3>
              <p className="text-sm opacity-60 mb-6 group-hover:opacity-100">Windows 10/11</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>下载安装包</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2025 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}