/**
 * 日付を言語に応じたフォーマットで返す
 * @param date - Date オブジェクト
 * @param locale - ロケール（'ja' または 'en'）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date, locale: 'ja' | 'en'): string {
    if (locale === 'en') {
        // 英語: "October 25, 2026"
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } else {
        // 日本語: "2026年10月25日"
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
}

/**
 * 曜日付きの日付フォーマット
 * @param date - Date オブジェクト
 * @param locale - ロケール（'ja' または 'en'）
 * @returns フォーマットされた日付文字列（曜日付き）
 */
export function formatDateWithDay(date: Date, locale: 'ja' | 'en'): string {
    if (locale === 'en') {
        // 英語: "Sunday, October 25, 2026"
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } else {
        // 日本語: "2026年10月25日（日）"
        const dateStr = date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const dayStr = date.toLocaleDateString('ja-JP', { weekday: 'short' });
        return `${dateStr}（${dayStr}）`;
    }
}
