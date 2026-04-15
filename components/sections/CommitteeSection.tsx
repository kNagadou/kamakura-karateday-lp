export default function CommitteeSection() {
  return (
    <section id="committee" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-800">
          鎌倉空手の日実行委員会
        </h2>

        {/* 実行委員会の説明 */}
        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            鎌倉空手の日実行委員会は、沖縄と鎌倉の歴史的な繋がりを基に、
            <br/>
            空手道の発展と世界平和を目指して活動しています。
          </p>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            メンバーは鎌倉市内の空手愛好者、鎌倉のまちづくりに積極的に関わる市民、
            <br/>
            そして有志企業で構成されています。
          </p>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            私たちは、これを一過性のお祭りで終わらせるつもりはありません。 
            <br/>
            世界中の空手ファンがルーツを求めて鎌倉や沖縄を訪れる「武道ツーリズム」の基盤を作り、
            <br/>
            地域の歴史や文化を深く体験してもらう「リジェネラティブ（再生型）観光」のモデルに
            <br/>
            育てていきたいと考えています。
          </p>
        </div>
      </div>
    </section>
  );
}
