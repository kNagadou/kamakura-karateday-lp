export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-indigo-700">
              鎌倉空手の日 2026
            </h1>
          </div>

          {/* ナビゲーションメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-charcoal-700 hover:text-indigo-600 transition-colors font-medium"
            >
              空手の日とは
            </a>
            <a
              href="#events"
              className="text-charcoal-700 hover:text-indigo-600 transition-colors font-medium"
            >
              イベント詳細
            </a>
            <a
              href="#committee"
              className="text-charcoal-700 hover:text-indigo-600 transition-colors font-medium"
            >
              実行委員会
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              お問い合わせ
            </a>
          </div>

          {/* モバイルメニューボタン（今後実装予定） */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-charcoal-700 hover:text-indigo-600"
              aria-label="メニュー"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
