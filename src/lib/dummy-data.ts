import type { ReviewData } from "./types";

/**
 * HeyGen レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * 検証した主観ではなく、公式仕様に基づく客観的なデータ。
 */
export const heygenReview: ReviewData = {
    slug: "heygen-review",
    title: "HeyGen (2026年最新仕様): AI動画生成の業界標準",
    subtitle: "175+言語対応、Interactive Avatar、リアルタイム会話機能を搭載したエンタープライズ向けプラットフォーム",
    publishedAt: "2026-01-03",
    updatedAt: "2026-01-03",

    author: {
        name: "検証ラボ編集部",
        title: "スペック分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },

    verdict: {
        type: "BUY",
        score: 9.0,
        summary: "仕様によると、HeyGenは175以上の言語・方言に対応し、700以上のストックアバター、リアルタイムInteractive Avatar機能を提供。Creator Plan $29/月から利用可能で、業界標準のAI動画生成プラットフォームとして位置づけられている。",
        targetAudience: "グローバル展開を視野に入れたマーケティング担当者、研修コンテンツ制作者、カスタマーサポート部門",
    },

    radarData: [
        { category: "価格競争力", score: 7.0, industryAverage: 6.0 },
        { category: "音声品質", score: 9.0, industryAverage: 7.0 },
        { category: "リップシンク", score: 9.5, industryAverage: 6.5 },
        { category: "生成速度", score: 8.0, industryAverage: 7.0 },
        { category: "操作性", score: 8.5, industryAverage: 6.5 },
        { category: "多言語対応", score: 9.5, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "175以上の言語・方言に対応したVideo Translate機能（リップシンク自動調整付き）",
            importance: "high",
        },
        {
            text: "700以上のストックアバター、カスタムアバター作成、写真からのアバター生成に対応",
            importance: "high",
        },
        {
            text: "Interactive Avatar機能でリアルタイム会話・Zoom連携が可能",
            importance: "high",
        },
        {
            text: "Creator Plan $29/月からスタート可能（年払い$24/月）",
            importance: "medium",
        },
        {
            text: "300以上のAIボイス、ボイスクローン機能を搭載",
            importance: "medium",
        },
        {
            text: "4K出力対応（Team/Enterprise Plan）、API連携充実",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "無料プランは月3本・3分以内・720pで透かし付き",
            importance: "high",
        },
        {
            text: "高度な機能（Interactive Avatar等）はクレジット消費制",
            importance: "medium",
        },
        {
            text: "Team Planは2025年1月に「HeyGen For Business」へ移行予定",
            importance: "medium",
        },
        {
            text: "プレミアムアドオンアバターは別途費用が発生",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "無料プランの制限を理解しておくべき",
            description: "仕様によると、無料プランは月3本・各3分以内・720p解像度で、すべての動画にHeyGen透かしが入る。プロフェッショナル用途には有料プランへのアップグレードが必須。",
            affectedUsers: [
                "透かしなしの動画が必要なビジネスユーザー",
                "月3本以上の動画を制作する必要があるユーザー",
                "1080p/4K解像度が必要なユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://heygen.com/?ref=verification-lab",
            label: "HeyGen公式サイト（無料プランあり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "HeyGen 2026年最新仕様レビュー。175+言語対応、700+アバター、Interactive Avatar、Creator Plan $29/月。公式スペックに基づく客観的な分析。",
    keywords: ["HeyGen", "2026", "AI動画生成", "Interactive Avatar", "多言語対応", "料金プラン"],
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
