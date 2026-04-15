export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 実行委員会情報 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              鎌倉空手の日実行委員会
            </h3>
            <ul className="space-y-2 text-sm">
              <li>実行委員長: 菅 倫明</li>
              <li>事務局長: 稲垣 安成</li>
              <li>沖縄部会長: 長堂 嘉寿将</li>
            </ul>
          </div>

          {/* イベント情報 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">イベント情報</h3>
            <ul className="space-y-2 text-sm">
              <li>奉納演武: 2026年10月25日（日）</li>
              <li>会場: 調整中</li>
              <li className="mt-3">沖縄×鎌倉交流祭:</li>
              <li>2026年11月8日（日）</li>
              <li>調整中</li>
            </ul>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-gold-500 transition-colors"
                >
                  空手の日とは
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-gold-500 transition-colors"
                >
                  イベント詳細
                </a>
              </li>
              <li>
                <a
                  href="#committee"
                  className="hover:text-gold-500 transition-colors"
                >
                  実行委員会
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold-500 transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="mb-2">
            © 2026 鎌倉空手の日実行委員会. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            ソースコードは MIT License で公開しています。
            コンテンツ（写真・ロゴ・文章）の著作権は鎌倉空手の日実行委員会に帰属します。
          </p>
        </div>
      </div>
    </footer>
  );
}
