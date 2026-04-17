import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold text-charcoal-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-charcoal-700 mb-4">
              {t('title')}
            </h2>
            <p className="text-charcoal-600 mb-8">{t('description')}</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
