
import type { ReviewData } from "@/lib/types";

/**
 * D-ID レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const review: ReviewData = {
    slug: "d-id-review",
    category: "video-generation",
    title: "D-ID (2026 Creative Suite): リアルタイムAI Agents & API特化",
    subtitle: "1枚の画像からリアルな動画生成。100+言語対応、RAG技術搭載のインテリジェントAgents",
    publishedAt: "2026-01-03",
    updatedAt: "2026-01-03",

    author: {
        name: "検証ラボ編集部",
        title: "スペック分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },

    verdict: {
        type: "CONSIDER",
        score: 8.2,
        summary: "仕様によると、D-IDは1枚の静止画像からリアルな動画を生成できる「Live Portrait」技術が強み。100+言語対応、RAG（検索拡張生成）技術を活用したナレッジベース統合Agents、低レイテンシーのリアルタイムストリーミングAPI等、開発者向け機能が充実。",
        targetAudience: "AI製品を開発するエンジニア・スタートアップ、カスタマーサポートのAI化を検討する企業、クリエイティブエージェンシー",
    },

    radarData: [
        { category: "価格競争力", score: 7.5, industryAverage: 6.0 },
        { category: "音声品質", score: 8.0, industryAverage: 7.0 },
        { category: "リップシンク", score: 8.5, industryAverage: 6.5 },
        { category: "生成速度", score: 8.5, industryAverage: 7.0 },
        { category: "操作性", score: 7.5, industryAverage: 6.5 },
        { category: "多言語対応", score: 8.5, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "1枚の静止画像からリアルな動画アバターを生成（Live Portrait技術）",
            importance: "high",
        },
        {
            text: "100+言語対応、119言語・方言でのテキスト読み上げ",
            importance: "high",
        },
        {
            text: "RAG技術搭載のAI Agents：ナレッジベース統合でコンテキスト認識応答",
            importance: "high",
        },
        {
            text: "リアルタイムストリーミングAPI：低レイテンシーでビデオ通話並みの体験",
            importance: "medium",
        },
        {
            text: "Premium+ HDアバター、カスタム背景、感情・表情コントロール",
            importance: "medium",
        },
        {
            text: "API + Studio両対応：開発者もノーコードユーザーも利用可能",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "HeyGen/Synthesiaと比較してアバターのストック数が少ない",
            importance: "medium",
        },
        {
            text: "Studio UIは技術者向けで、非技術者には学習コストがある",
            importance: "medium",
        },
        {
            text: "Speaking Portraitの言語拡張は顧客需要ベースで段階的",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "API中心のプラットフォームであることを理解すべき",
            description: "仕様によると、D-IDは開発者向けAPI機能が強みで、既存システムへの統合を前提とした設計。完成されたエンドツーエンドのビデオ制作プラットフォームを求めるユーザーには、HeyGenやSynthesiaの方が適している可能性がある。",
            affectedUsers: [
                "コーディング不要の完全GUIソリューションを求めるユーザー",
                "既存システムへのAPI統合リソースがないチーム",
                "ストックアバターの豊富さを重視するユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://d-id.com/?ref=verification-lab",
            label: "D-ID公式サイト（API無料枠あり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "D-ID 2026年最新仕様レビュー。Live Portrait技術、100+言語、RAG搭載AI Agents、リアルタイムAPI。開発者向け客観的分析。",
    keywords: ["D-ID", "2026", "AI動画生成", "Live Portrait", "AI Agents", "API"],
};
