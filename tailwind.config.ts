import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // 和モダンカラーパレット
                indigo: {
                    50: '#e8eaf6',
                    100: '#c5cae9',
                    200: '#9fa8da',
                    300: '#7986cb',
                    400: '#5c6bc0',
                    500: '#3f51b5', // 藍色
                    600: '#3949ab',
                    700: '#303f9f',
                    800: '#283593',
                    900: '#1a237e',
                },
                charcoal: {
                    50: '#f5f5f5',
                    100: '#e0e0e0',
                    200: '#bdbdbd',
                    300: '#9e9e9e',
                    400: '#757575',
                    500: '#616161', // 墨色
                    600: '#424242',
                    700: '#303030',
                    800: '#212121',
                    900: '#0a0a0a',
                },
                gold: {
                    50: '#fffde7',
                    100: '#fff9c4',
                    200: '#fff59d',
                    300: '#fff176',
                    400: '#ffee58',
                    500: '#d4af37', // 金色
                    600: '#c5a028',
                    700: '#b8941f',
                    800: '#a68617',
                    900: '#8b6f0f',
                },
            },
            fontFamily: {
                sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
