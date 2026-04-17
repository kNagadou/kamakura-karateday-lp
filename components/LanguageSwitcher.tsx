type Props = {
  locale: string;
};

export default function LanguageSwitcher({ locale }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <a
        href="/ja"
        className={`
          px-3 py-1 text-sm font-medium rounded transition-colors
          ${
            locale === 'ja'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-charcoal-700 hover:bg-gray-300'
          }
        `}
        aria-label="日本語に切り替え"
      >
        JA
      </a>
      <a
        href="/en"
        className={`
          px-3 py-1 text-sm font-medium rounded transition-colors
          ${
            locale === 'en'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-charcoal-700 hover:bg-gray-300'
          }
        `}
        aria-label="Switch to English"
      >
        EN
      </a>
    </div>
  );
}
