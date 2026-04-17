import { useTranslations, useLocale } from 'next-intl';
import { formatDateWithDay } from '@/lib/formatDate';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale() as 'ja' | 'en';

  // イベント日付
  const event1Date = new Date(2026, 9, 25); // 2026年10月25日
  const event2Date = new Date(2026, 10, 8); // 2026年11月8日

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-charcoal-800 to-charcoal-900"
    >
      <div className="text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-indigo-100">
          {t('subtitle')}
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">{t('tagline')}</p>
        <div className="space-y-2 text-gold-500 font-medium">
          <p>
            {t('event1', { date: formatDateWithDay(event1Date, locale) })} {t('event1Location')}
          </p>
          <p>
            {t('event2', { date: formatDateWithDay(event2Date, locale) })} {t('event2Location')}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
