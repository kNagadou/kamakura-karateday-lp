# 鎌倉空手の日 2026 - ランディングページ

沖縄伝統の空手と鎌倉の精神が融合する歴史的イベントのランディングページです。

[![Deploy to GitHub Pages](https://github.com/kNagadou/kamakura-karateday-lp/actions/workflows/deploy.yml/badge.svg)](https://github.com/kNagadou/kamakura-karateday-lp/actions/workflows/deploy.yml)

## 🎯 プロジェクト概要

**奉納演武**: 2026年10月25日（日） @ 鎌倉市円覚寺  
**沖縄×鎌倉交流祭**: 2026年11月8日（日） @ 鎌倉海浜公園 由比ヶ浜地域多目的広場

### 実行委員会

- 実行委員長: 菅 倫明
- 事務局長: 稲垣 安成
- 沖縄部会長: 長堂 嘉寿将

## 🚀 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **デプロイ**: GitHub Pages（静的エクスポート）
- **CI/CD**: GitHub Actions

## 📦 セットアップ

- **パッケージマネージャー**: pnpm

### 必要要件

- Node.js 20以上
- pnpm 10以上

### ローカル開発

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動（http://localhost:3000）
pnpm dev

# 本番ビルド（静的エクスポート）
pnpm build

# リント実行
pnpm lint

# セキュリティ監査
pnpm audit
```

## 🎨 デザイン

**コンセプト**: 和モダン - 伝統と現代の融合

### カラーパレット

- **藍色（Indigo）**: `#3f51b5` - メインカラー
- **墨色（Charcoal）**: `#616161` - テキスト・背景
- **金色（Gold）**: `#d4af37` - アクセント

### フォント

- Noto Sans JP（Google Fonts）

## 📁 ディレクトリ構造

```
kamakura-karateday-lp/
├── .github/
│   ├── dependabot.yml          # 依存関係自動更新
│   └── workflows/
│       └── deploy.yml          # GitHub Pages自動デプロイ
├── app/
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # メインページ
│   └── globals.css             # グローバルスタイル
├── components/                 # 再利用可能コンポーネント（今後追加）
├── lib/                        # ユーティリティ（今後追加）
├── locales/                    # 多言語翻訳ファイル（今後追加）
├── public/
│   └── robots.txt              # SEO設定
├── .env.example                # 環境変数テンプレート
├── AGENTS.md                   # AIエージェント用コンテキスト
├── CLAUDE.md                   # シンボリックリンク → AGENTS.md
├── SECURITY.md                 # セキュリティポリシー
├── next.config.js              # Next.js設定
├── tailwind.config.ts          # Tailwind CSS設定
└── tsconfig.json               # TypeScript設定
```

## 🔒 セキュリティ

- ✅ Dependabot有効化（週次更新）
- ✅ セキュリティヘッダー設定（CSP、X-Frame-Options等）
- ✅ TypeScript strict mode
- ✅ 定期的な`pnpm audit`実行
- ✅ HTTPS強制（GitHub Pages）

詳細は[SECURITY.md](SECURITY.md)をご覧ください。

## 🚢 デプロイ

mainブランチへのpushで自動的にGitHub Pagesへデプロイされます。

**公開URL**: https://knagadou.github.io/kamakura-karateday-lp/

### GitHub Pages設定

1. リポジトリ → Settings → Pages
2. Source: "GitHub Actions"を選択
3. 自動デプロイ開始

## 📝 今後の実装予定

- [ ] 多言語対応（日英バイリンガル）
- [x] Header/Footerコンポーネント
- [x] セクション別コンポーネント分離
- [x] 実行委員会紹介セクション
- [x] お問い合わせフォーム（UIのみ）
- [ ] 沖縄と鎌倉の繋がりセクション
- [ ] タイムライン/スケジュールセクション
- [ ] スクロールアニメーション
- [ ] 画像アセット追加

## 📄 ライセンス

### ソースコード

MIT License - 詳細は[LICENSE](LICENSE)をご覧ください。

### コンテンツ

掲載されている写真、ロゴ、文章などのコンテンツの著作権は、**鎌倉空手の日実行委員会**に帰属します。これらコンテンツの無断転載・再利用は禁止します。

## 🤝 貢献

プルリクエストは歓迎します。大きな変更の場合は、まずIssueを開いて変更内容を議論してください。

## 📧 お問い合わせ

鎌倉空手の日実行委員会  
（お問い合わせ先は後日追加予定）

---

© 2026 鎌倉空手の日実行委員会. All rights reserved.
