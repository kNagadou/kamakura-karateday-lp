import { useTranslations, useLocale } from 'next-intl';
import { formatDateWithDay } from '@/lib/formatDate';

export default function EventsSection() {
  const t = useTranslations('events');
  const locale = useLocale() as 'ja' | 'en';

  // イベント日付
  const event1Date = new Date(2026, 9, 25); // 2026年10月25日
  const event2Date = new Date(2026, 10, 8); // 2026年11月8日

  return (
    <section id="events" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 奉納演武 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-indigo-500">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">
              {t('dedication.title')}
            </h3>
            <div className="space-y-3 text-charcoal-700">
              <p className="flex items-center">
                <span className="font-semibold mr-2">📅</span>
                {t('dedication.date', {
                  date: formatDateWithDay(event1Date, locale),
                })}
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📍</span>
                {t('dedication.location')}
              </p>
              <p className="mt-4">{t('dedication.description')}</p>
            </div>
          </div>

          {/* 沖縄×鎌倉交流祭 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-gold-500">
            <h3 className="text-2xl font-bold mb-4 text-gold-600">
              {t('festival.title')}
            </h3>
            <div className="space-y-3 text-charcoal-700">
              <p className="flex items-center">
                <span className="font-semibold mr-2">📅</span>
                {t('festival.date', {
                  date: formatDateWithDay(event2Date, locale),
                })}
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">📍</span>
                {t('festival.location')}
              </p>
              <p className="mt-4">{t('festival.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
