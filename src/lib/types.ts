/**
 * SaaS Verification Lab - Type Definitions
 * レビュー記事に必要なデータ型定義
 */

// レーダーチャート用の評価指標
export interface VerdictMetric {
    category: string;
    score: number;
    industryAverage: number;
    maxScore?: number;
}

// 動画比較用のソース情報
export interface VideoSource {
    src: string;
    label: string;
    poster?: string;
}

// 長所・短所アイテム
export interface ProConItem {
    text: string;
    importance: "high" | "medium" | "low";
}

// アフィリエイトリンク情報
export interface AffiliateLink {
    url: string;
    label: string;
    disclosure: string;
    isSponsored: boolean;
}

// 著者情報
export interface Author {
    name: string;
    title: string;
    avatar?: string;
    bio?: string;
}

// 評決（結論）
export type VerdictType = "BUY" | "CONSIDER" | "AVOID";

export interface Verdict {
    type: VerdictType;
    score: number; // 0-10
    summary: string;
    targetAudience: string;
}

// 検証セクション
export interface ForensicSection {
    title: string;
    description: string;
    leftVideo: VideoSource;
    rightVideo: VideoSource;
    finding: string;
}

// Dealbreaker（欠点）セクション
export interface Dealbreaker {
    title: string;
    description: string;
    affectedUsers: string[];
}

// メインのレビューデータ型
export interface ReviewData {
    // 基本情報
    slug: string;
    category: string;
    title: string;
    subtitle?: string;
    publishedAt: string;
    updatedAt: string;
    author: Author;

    // 評決・スコア
    verdict: Verdict;
    radarData: VerdictMetric[];

    // 長所・短所
    pros: ProConItem[];
    cons: ProConItem[];

    // 検証セクション
    forensicSections: ForensicSection[];

    // Dealbreaker
    dealbreakers: Dealbreaker[];

    // アフィリエイト
    affiliateLinks: AffiliateLink[];

    // 自由記述のHTMLコンテンツ（オプション）
    content?: string;

    // SEO
    metaDescription: string;
    keywords: string[];
}
