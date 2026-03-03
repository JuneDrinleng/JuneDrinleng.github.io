import { ArrowLeft, Download, Smartphone, Timer, TrendingUp, Bell } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function FocusTimer() {
  const features = [
    {
      icon: Timer,
      title: '专注计时',
      description: '番茄工作法计时器，帮助你集中注意力，高效完成任务',
    },
    {
      icon: TrendingUp,
      title: '习惯打卡',
      description: '每日打卡记录，追踪进度，养成良好习惯，持续成长',
    },
    {
      icon: Smartphone,
      title: '移动优先',
      description: '专为移动端设计，随时随地使用，简洁流畅的交互体验',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">返回导航</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border-2 border-black px-4 py-1 mb-6">
                <span className="text-sm uppercase tracking-widest font-bold">Mobile Application</span>
              </div>
              <h1 className="text-6xl font-bold uppercase tracking-tight mb-6">Poop</h1>
              <p className="text-xl leading-relaxed mb-8 opacity-80">
                极简设计的专注打卡应用，帮助你培养专注习惯，提升时间管理能力。随时随地开启专注模式，记录每一次进步。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors border-2 border-black"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider">下载应用</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 border-2 border-black hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold uppercase tracking-wider">了解更多</span>
                </a>
              </div>
            </div>
            <div className="border-4 border-black overflow-hidden max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHRpbWVyJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzI1MTY4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="专注计时应用界面"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b-4 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">核心特性</h2>
            <p className="text-sm uppercase tracking-wider opacity-60">Key Features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="border-2 border-black p-8 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Icon className="w-12 h-12 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{feature.title}</h3>
                  <p className="leading-relaxed opacity-70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">立即下载</h2>
            <p className="text-sm uppercase tracking-wider opacity-60">Available Now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="#"
              className="block border-2 border-black p-8 text-center hover:bg-black hover:text-white transition-colors group"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">iOS</h3>
              <p className="text-sm opacity-60 mb-4 group-hover:opacity-100">App Store</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>下载</span>
              </div>
            </a>
            <a
              href="#"
              className="block border-2 border-black p-8 text-center hover:bg-black hover:text-white transition-colors group"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Android</h3>
              <p className="text-sm opacity-60 mb-4 group-hover:opacity-100">Google Play</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>下载</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm uppercase tracking-wider opacity-60">
            © 2026 Poop - Focus & Productivity Timer
          </p>
        </div>
      </footer>
    </div>
  );
}