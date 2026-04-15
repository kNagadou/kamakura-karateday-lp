/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // ローカル開発時はbasePathを無効化、本番環境（GitHub Pages）では有効化
  basePath: process.env.NODE_ENV === 'production' ? '/kamakura-karateday-lp' : '',
  images: {
    unoptimized: true,
  },
  // セキュリティヘッダー設定
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
