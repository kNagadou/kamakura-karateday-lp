export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-4 bg-gray-50">
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
  );
}
