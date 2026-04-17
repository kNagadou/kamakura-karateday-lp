import { useTranslations, useLocale } from 'next-intl';
import { formatDateWithDay } from '@/lib/formatDate';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale() as 'ja' | 'en';

  // イベント日付
  const event1Date = new Date(2026, 9, 25); // 2026年10月25日
  const event2Date = new Date(2026, 10, 8); // 2026年11月8日

  return (
    <footer className="bg-charcoal-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 実行委員会情報 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('committeeTitle')}
            </h3>
          </div>

          {/* イベント情報 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('eventsTitle')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                {t('event1', { date: formatDateWithDay(event1Date, locale) })}
              </li>
              <li>{t('event1Venue')}</li>
              <li className="mt-3">{t('event2Label')}</li>
              <li>{t('event2', { date: formatDateWithDay(event2Date, locale) })}</li>
              <li>{t('event2Venue')}</li>
            </ul>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('linksTitle')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-gold-500 transition-colors"
                >
                  {t('linkAbout')}
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-gold-500 transition-colors"
                >
                  {t('linkEvents')}
                </a>
              </li>
              <li>
                <a
                  href="#committee"
                  className="hover:text-gold-500 transition-colors"
                >
                  {t('linkCommittee')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold-500 transition-colors"
                >
                  {t('linkContact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="mb-2">{t('copyright')}</p>
          <p className="text-xs text-gray-400">{t('license')}</p>
        </div>
      </div>
    </footer>
  );
}
