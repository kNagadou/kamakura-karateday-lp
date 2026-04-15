export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-charcoal-800 to-charcoal-900"
    >
      <div className="text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          鎌倉空手の日 2026
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-indigo-100">
          Kamakura Karate Day 2026
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          唐手から空手へ。Re-brand して世界へ。
        </p>
        <div className="space-y-2 text-gold-500 font-medium">
          <p>奉納演武: 2026年10月25日（日）会場調整中</p>
          <p>沖縄×鎌倉交流祭: 2026年11月8日（日）会場調整中</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
