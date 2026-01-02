import type { ReviewData } from "./types";

/**
 * HeyGen レビュー用ダミーデータ
 * 実際の検証データに近いリアルな値を設定
 */
export const heygenReview: ReviewData = {
    slug: "heygen-review",
    title: "HeyGen検証レビュー 2026：高価だがその価値はあるか？",
    subtitle: "AI動画生成ツールの最高峰を120時間かけて徹底検証",
    publishedAt: "2026-01-02",
    updatedAt: "2026-01-02",

    author: {
        name: "田中 誠",
        title: "シニア検証エンジニア",
        avatar: "/avatars/tanaka.jpg",
        bio: "元Adobe勤務。動画編集・AI技術分野で15年以上の経験。",
    },

    verdict: {
        type: "BUY",
        score: 8.7,
        summary: "エンタープライズ向けAI動画生成ツールとして、現時点で最も完成度が高い。価格は高いが、品質と多言語対応の精度を考慮すれば十分に価値がある。",
        targetAudience: "グローバル展開を視野に入れた企業のマーケティング・研修担当者",
    },

    radarData: [
        { category: "価格競争力", score: 5.5, industryAverage: 6.0 },
        { category: "音声品質", score: 9.0, industryAverage: 7.0 },
        { category: "リップシンク", score: 9.5, industryAverage: 6.5 },
        { category: "生成速度", score: 7.0, industryAverage: 7.0 },
        { category: "操作性", score: 8.5, industryAverage: 6.5 },
        { category: "多言語対応", score: 9.2, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "業界最高水準のリップシンク精度（検証では95%以上の自然さ）",
            importance: "high",
        },
        {
            text: "40以上の言語に対応し、アクセント調整も可能",
            importance: "high",
        },
        {
            text: "API連携が充実しており、大規模運用に対応",
            importance: "medium",
        },
        {
            text: "カスタムアバター作成機能が強力",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "月額$89〜と競合比で高価格帯",
            importance: "high",
        },
        {
            text: "無料プランの制限が厳しい（1分/月）",
            importance: "medium",
        },
        {
            text: "日本語UIが一部未翻訳",
            importance: "low",
        },
    ],

    forensicSections: [
        {
            title: "リップシンク精度の検証",
            description: "同一スクリプト（日本語・英語混合）を両ツールで生成し、リップシンクの自然さを比較。特に「ぱ行」「ば行」の破裂音に注目。",
            leftVideo: {
                src: "/demo/heygen-sample.mp4",
                label: "HeyGen",
                poster: "/demo/heygen-poster.jpg",
            },
            rightVideo: {
                src: "/demo/synthesia-sample.mp4",
                label: "Synthesia",
                poster: "/demo/synthesia-poster.jpg",
            },
            finding: "HeyGenは破裂音でも口の動きが自然に追従。Synthesiaはやや遅延が見られた。",
        },
    ],

    dealbreakers: [
        {
            title: "予算重視の個人クリエイターには不向き",
            description: "最低価格が月額$89からで、Synthesiaの$29プランと比較すると約3倍。低予算での運用を検討している場合は、他のツールを推奨します。",
            affectedUsers: [
                "月額予算が$50以下の個人クリエイター",
                "動画生成頻度が月1-2本程度のライトユーザー",
                "品質より量を優先するコンテンツ制作者",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://heygen.com/?ref=verification-lab",
            label: "HeyGen公式サイト（14日間無料トライアル）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "HeyGenを120時間かけて徹底検証。リップシンク精度、多言語対応、価格対効果を実測データで解説。Synthesiaとの比較検証動画付き。",
    keywords: ["HeyGen", "レビュー", "AI動画生成", "Synthesia比較", "リップシンク"],
};

// レビューデータのマップ（スラッグでアクセス可能）
export const reviewsMap: Record<string, ReviewData> = {
    "heygen-review": heygenReview,
};

// 全レビューの一覧取得
export function getAllReviews(): ReviewData[] {
    return Object.values(reviewsMap);
}

// スラッグからレビューを取得
export function getReviewBySlug(slug: string): ReviewData | undefined {
    return reviewsMap[slug];
}
