# AGENTS.md - AI Agent Context

このファイルはAIエージェント（GitHub Copilot、Claude等）がプロジェクトのコンテキストを理解するためのドキュメントです。

## プロジェクト概要

**プロジェクト名**: 鎌倉空手の日 2026 ランディングページ  
**目的**: 沖縄伝統の空手と鎌倉の精神が融合する歴史的イベントのLP  
**ターゲット**: 空手愛好家、文化・伝統に関心のある方、地域イベント参加者

### イベント情報

- **奉納演武**: 2026年10月25日（日） @ 鎌倉市円覚寺
- **沖縄×鎌倉交流祭**: 2026年11月8日（日） @ 鎌倉海浜公園 由比ヶ浜地域多目的広場

### 実行委員会

- 実行委員長: 菅 倫明
- 事務局長: 稲垣 安成
- 沖縄部会長: 長堂 嘉寿将

## 技術スタック

- **フレームワーク**: Next.js 16+ (App Router)
- **言語**: TypeScript 6+ (strict mode)
- **スタイリング**: Tailwind CSS 4+
- **フォント**: Noto Sans JP (Google Fonts)
- **i18n**: next-intl（日英バイリンガル対応予定）
- **ホスティング**: GitHub Pages（静的エクスポート）
- **デプロイ**: GitHub Actions
- **パッケージマネージャー**: npm

## ディレクトリ構造

```
kamakura-karateday-lp/
├── .github/
│   ├── dependabot.yml          # 依存関係自動更新設定
│   └── workflows/
│       └── deploy.yml          # GitHub Pages自動デプロイ（今後作成）
├── app/
│   ├── [locale]/              # 多言語対応ルート（今後作成）
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # メインページ
│   └── globals.css             # グローバルスタイル
├── components/
│   ├── sections/              # セクションコンポーネント（今後作成）
│   ├── Header.tsx              # ヘッダー（今後作成）
│   └── Footer.tsx              # フッター（今後作成）
├── lib/
│   └── i18n.ts                 # i18n設定（今後作成）
├── locales/
│   ├── ja.json                 # 日本語翻訳（今後作成）
│   └── en.json                 # 英語翻訳（今後作成）
├── public/
│   └── images/                 # 画像アセット（今後追加）
├── .env.example                # 環境変数テンプレート
├── .eslintrc.json              # ESLint設定
├── .gitignore                  # Git除外設定
├── AGENTS.md                   # このファイル
├── CLAUDE.md                   # シンボリックリンク → AGENTS.md
├── LICENSE                     # MITライセンス
├── next.config.js              # Next.js設定（静的エクスポート、セキュリティヘッダー）
├── package.json                # npm設定
├── postcss.config.js           # PostCSS設定
├── README.md                   # プロジェクト説明
├── SECURITY.md                 # セキュリティポリシー
├── tailwind.config.ts          # Tailwind CSS設定（和モダンカラー）
└── tsconfig.json               # TypeScript設定
```

## 実装方針

### デザインコンセプト

**和モダン** - 伝統と現代の融合

#### カラーパレット

- **藍色（Indigo）**: `#3f51b5` - 日本伝統色、メインカラー
- **墨色（Charcoal）**: `#616161` - 黒に近いグレー、テキスト・背景
- **金色（Gold）**: `#d4af37` - アクセントカラー、CTA

#### タイポグラフィ

- **和文**: Noto Sans JP（Google Fonts）
- **ウェイト**: 400（Regular）、500（Medium）、700（Bold）

### アーキテクチャ

- **静的サイト生成（SSG）**: `output: 'export'`でGitHub Pagesへデプロイ
- **App Router**: Next.js 13+の最新ルーティング
- **Server Components優先**: クライアントコンポーネントは最小限
- **TypeScript strict mode**: 型安全性を最大化

### コンポーネント設計

```tsx
// ✅ 推奨: Server Component（デフォルト）
export default function AboutSection() {
  return <section>...</section>;
}

// ✅ 必要な場合のみClient Component
'use client';
export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('ja');
  return <button onClick={...}>...</button>;
}
```

### Tailwindクラス命名規則

- **レスポンシブ**: `md:`, `lg:` プレフィックス
- **ホバー**: `hover:` プレフィックス
- **カスタムカラー**: `text-indigo-500`, `bg-charcoal-800`, `border-gold-500`

## コーディング規約

### TypeScript

```typescript
// ✅ 型を明示的に定義
interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

// ✅ Propsの分割代入
export default function EventCard({ title, date, location, description }: EventCardProps) {
  return <div>...</div>;
}

// ❌ any型は避ける
const data: any = {}; // NG

// ✅ 適切な型を指定
const data: { name: string; age: number } = {}; // OK
```

### コンポーネント

```tsx
// ✅ ファイル名はPascalCase
// components/sections/HeroSection.tsx

// ✅ export defaultを使用
export default function HeroSection() {
  return (
    <section className="...">
      {/* コンポーネント本体 */}
    </section>
  );
}

// ✅ 適切なセマンティックHTML
<section>, <article>, <nav>, <header>, <footer>
```

### Tailwind CSS

```tsx
// ✅ 長いクラスリストは改行
<div
  className="
    relative h-screen flex items-center justify-center
    bg-gradient-to-br from-indigo-900 via-charcoal-800 to-charcoal-900
    px-4 md:px-8 lg:px-12
  "
>

// ✅ カスタムカラーを使用
className="text-indigo-500 bg-charcoal-800 border-gold-500"

// ❌ ハードコードされた色は避ける
className="text-[#3f51b5]" // NG
```

## セキュリティポリシー

### 実装済み対策

- ✅ `.gitignore`で機密情報除外（`.env*`, `node_modules`, `*.pem`）
- ✅ セキュリティヘッダー設定（CSP、X-Frame-Options、X-Content-Type-Options）
- ✅ Dependabot有効化（週次で依存関係更新PR）
- ✅ HTTPS強制（GitHub Pages）
- ✅ TypeScript strict mode
- ✅ `npm audit`定期実行

### 除外されるリスク（静的サイトのため不要）

- バックエンドAPI脆弱性
- データベースセキュリティ
- ユーザー認証・認可
- 決済処理セキュリティ

### フォームセキュリティ

- クライアントサイドバリデーション実装
- Reactのデフォルトエスケープ（XSS対策）
- CSRF対策不要（静的サイト、外部API連携なし）

## 開発コマンド

```bash
# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド（静的エクスポート → out/）
npm run build

# 本番サーバー起動（ローカル確認用）
npm run start

# ESLint実行
npm run lint

# 依存関係の脆弱性チェック
npm audit

# 依存関係の脆弱性修正
npm audit fix
```

## デプロイフロー

1. **ローカルでコミット**: `git add .` → `git commit -m "..."`
2. **mainブランチにpush**: `git push origin main`
3. **GitHub Actions自動実行**: `.github/workflows/deploy.yml`
4. **静的ファイル生成**: `npm run build` → `out/`
5. **GitHub Pagesへデプロイ**: `gh-pages`ブランチに自動push
6. **公開URL**: `https://kNagadou.github.io/kamakura-karateday-lp/`

## i18n（多言語対応）実装予定

### 設計方針

- `next-intl`使用
- URLベースルーティング: `/ja/`, `/en/`
- デフォルト言語: 日本語（`ja`）
- 翻訳ファイル: `locales/ja.json`, `locales/en.json`

### 実装パターン

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await import(`@/locales/${locale}.json`);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages.default}>
        {children}
      </NextIntlClientProvider>
    </html>
  );
}
```

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー: `Image Optimization using the default loader is not compatible with export.`

**原因**: Next.js Image Optimizationは静的エクスポートと互換性なし  
**解決**: `next.config.js`で`images.unoptimized: true`設定済み

#### 2. GitHub Pagesで404エラー

**原因**: `basePath`設定ミス  
**解決**: `next.config.js`の`basePath: '/kamakura-karateday-lp'`を確認

#### 3. Tailwindのカスタムカラーが反映されない

**原因**: `tailwind.config.ts`の設定不足  
**解決**: `theme.extend.colors`にカラー定義を追加

## 今後の実装予定

- [ ] 多言語対応（next-intl）
- [ ] セクション別コンポーネント分離
- [ ] Header/Footerコンポーネント
- [ ] スクロールアニメーション（Intersection Observer）
- [ ] お問い合わせフォーム
- [ ] タイムライン・スケジュールセクション
- [ ] 実行委員会紹介セクション
- [ ] 協賛企業ロゴセクション
- [ ] GitHub Actionsデプロイワークフロー
- [ ] sitemap.xml, robots.txt
- [ ] OGP画像

## 参照リソース

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [GitHub Pages Documentation](https://docs.github.com/pages)

---

**最終更新**: 2026年4月15日  
**管理**: 鎌倉空手の日実行委員会
