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

          <h3 className="text-2xl font-bold mt-12 mb-6 text-charcoal-800">
            鎌倉と沖縄をつなぎ、「平和の武」空手を世界へ！
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            鎌倉と沖縄。遠く離れたこの2つの地域には、実は深い「縁」があるのをご存知でしょうか？
          </p>
          <p className="text-lg leading-relaxed mb-6">
            私たちは、市民や地元企業、寺社仏閣が一体となって活動する「鎌倉×沖縄 空手の日プロジェクト」実行委員会です。
            現在、世界中に1億3000万人以上の愛好家を持つ「空手」をテーマに、2つの地域をつなぐ新たなプロジェクトに挑戦しています。
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-charcoal-800">
            なぜ、鎌倉と沖縄をつなぐのか？
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            空手は沖縄発祥の武術ですが、かつては中国由来の「唐手（とうで）」と呼ばれていました。
            その名称が「空手（からて）」へと生まれ変わった舞台が、実は鎌倉の円覚寺なのです。
          </p>
          <p className="text-lg leading-relaxed mb-6">
            1920年代、当時の空手家たちが円覚寺で禅の修行を行い、仏教の「空（くう）」の概念を取り入れたことで、単なる武術から精神修養の「道」へと昇華されました。
            つまり、沖縄が空手の「肉体的な発祥の地」なら、鎌倉は「精神的な誕生の地」なのです。
          </p>
        </div>
      </div>
    </section>
  );
}
