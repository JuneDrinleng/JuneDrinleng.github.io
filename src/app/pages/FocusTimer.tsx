import { ArrowLeft, Download, Smartphone, Timer, TrendingUp, Bell } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export default function FocusTimer() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Timer,
      title: t('专注计时', 'Focus Timer'),
      description: t('番茄工作法计时器，帮助你集中注意力，高效完成任务', 'Pomodoro timer to help you stay focused and complete tasks efficiently'),
    },
    {
      icon: TrendingUp,
      title: t('习惯打卡', 'Habit Tracking'),
      description: t('每日打卡记录，追踪进度，养成良好习惯，持续成长', 'Daily check-ins, track progress, build good habits, continuous growth'),
    },
    {
      icon: Smartphone,
      title: t('移动优先', 'Mobile First'),
      description: t('专为移动端设计，随时随地使用，简洁流畅的交互体验', 'Designed for mobile, use anytime anywhere, clean and smooth interaction'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">{t('返回导航', 'Back to Home')}</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-block border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-1 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">Mobile Application</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">Poop</h1>
              <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 opacity-80">
                {t(
                  '极简设计的专注打卡应用，帮助你培养专注习惯，提升时间管理能力。随时随地开启专注模式，记录每一次进步。',
                  'A minimalist focus & habit tracking app to help you develop concentration habits and improve time management. Start focus mode anytime, record every progress.'
                )}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 hover:opacity-80 transition-opacity border-2 border-black dark:border-white"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider text-sm">{t('下载应用', 'Download')}</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black dark:border-neutral-100 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="font-bold uppercase tracking-wider text-sm">{t('了解更多', 'Learn More')}</span>
                </a>
              </div>
            </div>
            <div className="border-4 border-black dark:border-neutral-100 overflow-hidden max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHRpbWVyJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzI1MTY4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Focus Timer"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b-4 border-black dark:border-neutral-100 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">{t('核心特性', 'Key Features')}</h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">Key Features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="border-2 border-black dark:border-neutral-100 p-6 sm:p-8 bg-white dark:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
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
      <section id="download" className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight mb-2">{t('立即下载', 'Download Now')}</h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">Available Now</p>
          </div>
          <div className="max-w-md mx-auto">
            <a
              href="#"
              className="block border-2 border-black dark:border-neutral-100 p-8 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Android</h3>
              <p className="text-sm opacity-60 mb-4 group-hover:opacity-100">Google Play</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>{t('下载', 'Download')}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-neutral-100">
        <div className="max-w-7xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2025 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}