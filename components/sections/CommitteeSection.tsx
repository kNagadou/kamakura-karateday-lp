import { useTranslations } from 'next-intl';

export default function CommitteeSection() {
  const t = useTranslations('committee');

  return (
    <section id="committee" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
          {t('title')}
        </h2>

        {/* 実行委員会の説明 */}
        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            {t('para1')}
          </p>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            {t('para2')}
          </p>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            {t('para3')}
          </p>
        </div>
      </div>
    </section>
  );
}
