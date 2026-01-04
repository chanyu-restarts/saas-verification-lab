
import type { ReviewData } from "@/lib/types";

/**
 * Synthesia レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const review: ReviewData = {
    slug: "synthesia-review",
    category: "video-generation",
    title: "Synthesia (2026 Enterprise Edition): エンタープライズ向けビジネス標準",
    subtitle: "Fortune 100企業の90%以上が採用。Express-2アバター、140+言語対応、ISO 42001認証取得",
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
        score: 8.8,
        summary: "仕様によると、Synthesiaは50,000社以上、Fortune 100企業の90%以上が採用するエンタープライズ向けプラットフォーム。Express-2アバター（全身・ジェスチャー対応）、140+言語、1クリック翻訳機能を提供。ISO 42001 AI認証取得でセキュリティ重視。",
        targetAudience: "大企業のL&D（人材開発）部門、コンプライアンス研修担当者、グローバル社内コミュニケーション責任者",
    },

    radarData: [
        { category: "価格競争力", score: 6.0, industryAverage: 6.0 },
        { category: "音声品質", score: 8.5, industryAverage: 7.0 },
        { category: "リップシンク", score: 9.0, industryAverage: 6.5 },
        { category: "生成速度", score: 7.5, industryAverage: 7.0 },
        { category: "操作性", score: 9.0, industryAverage: 6.5 },
        { category: "多言語対応", score: 9.0, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "140以上の言語・アクセントに対応、1クリック翻訳機能（Enterprise）",
            importance: "high",
        },
        {
            text: "Express-2アバター：全身表示、自然なジェスチャー、複数アングル対応",
            importance: "high",
        },
        {
            text: "Fortune 100企業の90%以上が採用、50,000社以上の導入実績",
            importance: "high",
        },
        {
            text: "ISO 42001 AI認証取得、エンタープライズ級セキュリティ",
            importance: "medium",
        },
        {
            text: "29言語でボイスクローン対応、音声のトーン・ペーシング維持",
            importance: "medium",
        },
        {
            text: "Video Agents（双方向インタラクティブ動画）、Veo 3統合（Enterprise）",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "Enterprise機能（1クリック翻訳、Digital Twin等）は上位プラン限定",
            importance: "high",
        },
        {
            text: "一部の高度なExpressiveアバターはEnterprise専用",
            importance: "medium",
        },
        {
            text: "API Copilot（AI動画エディター）は2026年中リリース予定",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "小規模チームには機能過剰の可能性",
            description: "仕様によると、Synthesiaはエンタープライズ向けに最適化されており、大規模チーム向けのコラボレーション機能やAIガバナンスフレームワークが充実。個人クリエイターや小規模チームには機能過剰でコスト高になる可能性がある。",
            affectedUsers: [
                "月間動画制作数が10本未満の小規模チーム",
                "高度なセキュリティ・ガバナンス機能が不要なユーザー",
                "価格よりも機能のシンプルさを優先するユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://synthesia.io/?ref=verification-lab",
            label: "Synthesia公式サイト（無料デモあり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "Synthesia 2026年最新仕様レビュー。Fortune 100企業90%採用、Express-2アバター、140+言語、ISO 42001認証。エンタープライズ向け客観的分析。",
    keywords: ["Synthesia", "2026", "AI動画生成", "Express-2", "エンタープライズ", "多言語対応"],
};
