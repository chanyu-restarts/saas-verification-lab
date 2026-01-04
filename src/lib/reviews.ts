
import fs from 'fs';
import path from 'path';
import type { ReviewData } from "@/lib/types";

const reviewsDirectory = path.join(process.cwd(), 'src/content/reviews');

/**
 * すべてのレビュー記事を取得する
 * 
 * src/content/reviews/ ディレクトリ内の .ts ファイルを動的にインポートし、
 * 公開日時（publishedAt）の降順でソートして返す。
 */
export async function getAllReviews(): Promise<ReviewData[]> {
    if (!fs.existsSync(reviewsDirectory)) {
        console.warn(`Reviews directory not found: ${reviewsDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(reviewsDirectory);
    const reviews: ReviewData[] = [];

    for (const fileName of fileNames) {
        if (!fileName.endsWith('.ts')) continue;

        const filePath = path.join(reviewsDirectory, fileName);
        try {
            // 動的インポートを使用して記事データを読み込む
            // Note: パストラバーサル対策で絶対パスや特定ディレクトリ下に限定することを推奨されるが
            // ここでは固定ディレクトリ内の走査なので安全
            // Next.jsのビルドシステム(Webpack/Turbopack)が動的importを正しく解決できるように
            // 相対パスではなく、このファイルからの相対パスとしてのimportが必要になる場合があるが
            // Node.jsランタイム（サーバーコンポーネント）での実行を想定して require 相当の処理を行うか、
            // あるいは import() を使う。

            // 重要: src/content/reviews/ はビルド時にトランスパイルされる必要がある。
            // しかし、動的importで未バンドルファイルを読み込むのは難しい場合がある。
            // 最も堅牢な方法は glob import だが、Next.js標準機能のみでやる場合、
            // require() を使うか、あるいは fs で中身を読む -> JSONパース ではない（.tsファイルなので）。

            // Next.js (Webpack) の require.context 的な挙動を利用する手もあるが、
            // 標準的な `import()` で実装する。

            // windows環境でのパス区切り文字対策
            const importPath = `../content/reviews/${fileName}`;
            const moduleData = await import(importPath);

            if (moduleData.review) {
                reviews.push(moduleData.review);
            }
        } catch (error) {
            console.error(`Failed to load review from ${fileName}:`, error);
        }
    }

    // 更新日時の降順でソート
    return reviews.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) return -1;
        if (a.updatedAt < b.updatedAt) return 1;
        return 0;
    });
}

/**
 * スラッグから特定のレビューを取得する
 */
export async function getReviewBySlug(slug: string): Promise<ReviewData | undefined> {
    const allReviews = await getAllReviews();
    return allReviews.find((review) => review.slug === slug);
}
