export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
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
            <footer className="text-sm mt-2 text-gray-600">
              — 沖縄県議会 決議文
            </footer>
          </blockquote>
          <p className="text-lg leading-relaxed">
            沖縄県から「空手の日」のイベント同時開催の提案を受け、
            沖縄空手と縁が深い鎌倉円覚寺にて、空手道の発展と世界平和を祈念する
            奉納演武を開催いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
