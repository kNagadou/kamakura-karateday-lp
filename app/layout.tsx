import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "鎌倉空手の日 2026 | Kamakura Karate Day 2026",
  description: "沖縄伝統の空手が今後ますます発展し、世界の平和と人々の幸福に貢献することに願いを込めて。2026年10月25日、鎌倉にて奉納演武を開催。",
  keywords: ["空手", "鎌倉", "沖縄", "karate", "kamakura"],
  authors: [{ name: "鎌倉空手の日実行委員会" }],
  openGraph: {
    title: "鎌倉空手の日 2026",
    description: "沖縄伝統の空手と鎌倉の精神が融合する歴史的イベント",
    type: "website",
    locale: "ja_JP",
    siteName: "鎌倉空手の日",
  },
  twitter: {
    card: "summary_large_image",
    title: "鎌倉空手の日 2026",
    description: "沖縄伝統の空手と鎌倉の精神が融合する歴史的イベント",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
