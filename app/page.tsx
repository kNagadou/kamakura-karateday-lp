export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-charcoal-800 to-charcoal-900">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            鎌倉空手の日 2026
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-indigo-100">
            Kamakura Karate Day 2026
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            唐手から空手へ。円覚寺で Re-brand して世界へ。
          </p>
          <div className="space-y-2 text-gold-500 font-medium">
            <p>奉納演武: 2026年10月25日（日）円覚寺</p>
            <p>沖縄×鎌倉交流祭: 2026年11月8日（日）鎌倉海浜公園</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* 企画概要セクション */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
            空手の日とは
          </h2>
          <div className="prose prose-lg mx-auto text-charcoal-700">
            <p className="text-lg leading-relaxed mb-6">
              平成17年3月29日、沖縄県議会によって10月25日が「空手の日」に制定されました。
            </p>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 my-8">
              「沖縄伝統の空手が今後ますます発展し、世界の平和と人々の幸福に貢献することに願いを込めて、
              「10月25日」を「空手の日」とすることを宣言する。」
              <footer className="text-sm mt-2 text-gray-600">— 沖縄県議会 決議文</footer>
            </blockquote>
            <p className="text-lg leading-relaxed">
              沖縄県から「空手の日」のイベント同時開催の提案を受け、
              沖縄空手と縁が深い鎌倉円覚寺にて、空手道の発展と世界平和を祈念する
              奉納演武を開催いたします。
            </p>
          </div>
        </div>
      </section>

      {/* イベント詳細セクション */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
            イベント詳細
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 奉納演武 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-indigo-500">
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">
                奉納演武
              </h3>
              <div className="space-y-3 text-charcoal-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📅 開催日:</span>
                  2026年10月25日（日）
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📍 場所:</span>
                  鎌倉市円覚寺
                </p>
                <p className="mt-4">
                  沖縄空手と縁が深い鎌倉円覚寺にて、空手道の発展と世界平和を祈念します。
                </p>
              </div>
            </div>

            {/* 沖縄×鎌倉交流祭 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-gold-500">
              <h3 className="text-2xl font-bold mb-4 text-gold-600">
                沖縄×鎌倉交流祭
              </h3>
              <div className="space-y-3 text-charcoal-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📅 開催日:</span>
                  2026年11月8日（日）
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">📍 場所:</span>
                  鎌倉海浜公園 由比ヶ浜地域多目的広場
                </p>
                <p className="mt-4">
                  空手一斉演武、エイサー演舞、グルメグランプリなど、
                  沖縄と鎌倉の新たな交流と発展の機会を生み出すフェスティバル。
                  沖縄国際通りで開催される記念演武祭とZoomで映像中継予定。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-charcoal-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">鎌倉空手の日実行委員会</h3>
          <p className="text-gray-400 mb-6">
            実行委員長: 菅 倫明 | 事務局長: 稲垣 安成 | 沖縄部会長: 長堂 嘉寿将
          </p>
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-sm text-gray-500">
              © 2026 鎌倉空手の日実行委員会. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              ソースコード: MIT License | コンテンツ著作権: 鎌倉空手の日実行委員会
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
