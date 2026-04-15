export default function CommitteeSection() {
  return (
    <section id="committee" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
          実行委員会
        </h2>
        <div className="space-y-8">
          {/* 実行委員長 */}
          <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              実行委員長
            </h3>
            <p className="text-2xl font-semibold text-charcoal-800">
              菅 倫明（かん みちあき）
            </p>
          </div>

          {/* 事務局長 */}
          <div className="bg-gradient-to-r from-gold-50 to-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gold-600 mb-2">事務局長</h3>
            <p className="text-2xl font-semibold text-charcoal-800">
              稲垣 安成（いながき やすなり）
            </p>
          </div>

          {/* 沖縄部会長 */}
          <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              沖縄部会長
            </h3>
            <p className="text-2xl font-semibold text-charcoal-800">
              長堂 嘉寿将（ながどう かずまさ）
            </p>
          </div>
        </div>

        {/* 実行委員会の説明 */}
        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal-700 leading-relaxed">
            鎌倉空手の日実行委員会は、沖縄と鎌倉の歴史的な繋がりを基に、
            空手道の発展と世界平和を目指して活動しています。
          </p>
        </div>
      </div>
    </section>
  );
}
