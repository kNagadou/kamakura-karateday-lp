import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
          {t('title')}
        </h2>
        <div className="prose prose-lg mx-auto text-charcoal-700">
          <p className="text-lg leading-relaxed mb-6">{t('intro')}</p>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 my-8">
            {t('quote')}
            <footer className="text-sm mt-2 text-gray-600">
              — {t('quoteSource')}
            </footer>
          </blockquote>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-charcoal-800">
            {t('section1Title')}
          </h3>
          <p className="text-lg leading-relaxed mb-6">{t('section1Para1')}</p>
          <p className="text-lg leading-relaxed mb-6">{t('section1Para2')}</p>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-charcoal-800">
            {t('section2Title')}
          </h3>
          <p className="text-lg leading-relaxed mb-6">{t('section2Para1')}</p>
          <p className="text-lg leading-relaxed mb-6">{t('section2Para2')}</p>
        </div>
      </div>
    </section>
  );
}
