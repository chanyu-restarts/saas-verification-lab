/**
 * @AI_AGENT_INSTRUCTION
 * 新しいレビュー記事を追加する際のルール:
 * 1. `slug` は `title` から英語のURLスラッグを生成すること。
 * 2. `category` は適切な既存IDを選ぶか、なければ `categories` 配列に新規追加すること。
 * 3. `status` は常に "Verified" とすること。
 * 4. `affiliateLinks` は情報がなければ空配列 `[]` でよい。
 * 5. 本文テキストは適切なHTML/JSXタグ（h2, p, ul等）で整形して `content` に格納すること。
 */
import type { ReviewData } from "./types";

/**
 * HeyGen レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * 検証した主観ではなく、公式仕様に基づく客観的なデータ。
 */
export const heygenReview: ReviewData = {
    slug: "heygen-review",
    category: "video-generation",
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

/**
 * Synthesia レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const synthesiaReview: ReviewData = {
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

/**
 * D-ID レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const didReview: ReviewData = {
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









// レビューデータのマップ（スラッグでアクセス可能）
export const reviewsMap: Record<string, ReviewData> = {
    "heygen-review": heygenReview,
    "synthesia-review": synthesiaReview,
    "d-id-review": didReview,

};

// 全レビューの一覧取得
export function getAllReviews(): ReviewData[] {
    return Object.values(reviewsMap);
}

// スラッグからレビューを取得
export function getReviewBySlug(slug: string): ReviewData | undefined {
    return reviewsMap[slug];
}
