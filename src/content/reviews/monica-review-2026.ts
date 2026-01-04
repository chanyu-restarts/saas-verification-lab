
import type { ReviewData } from "@/lib/types";

/**
 * Monica (2026) Review Data
 */
export const review: ReviewData = {
    slug: "monica-review-2026",
    category: "chat-ai",
    title: "Monica 徹底レビュー：便利すぎる「諸刃の剣」",
    subtitle: "最強のブラウザ統合ツール。代償は「全閲覧データのアクセス権」",
    publishedAt: "2026-01-04",
    updatedAt: "2026-01-04",
    author: {
        name: "検証ラボ編集部",
        title: "エンタープライズAI分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },
    verdict: {
        type: "AVOID",
        score: 6.5,
        summary: "Chrome拡張機能として動作するオールインワンAI。全モデル搭載＆ブラウザ操作は神レベルの便利さだが、セキュリティ権限の広さと運営元の不透明さが企業導入の致命的な壁。",
        targetAudience: "リスク許容度の高い個人ユーザー（企業利用は非推奨）",
    },
    radarData: [
        { category: "機能性", score: 8.0, industryAverage: 8.0 },
        { category: "コスト", score: 4.0, industryAverage: 7.0 },
        { category: "速度", score: 9.0, industryAverage: 7.5 },
        { category: "日本語力", score: 8.0, industryAverage: 8.5 },
        { category: "サポート", score: 1.0, industryAverage: 6.0 },
        { category: "安定性", score: 2.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "ブラウザサイドバーであらゆるAIモデルを使用可能", importance: "high" },
        { text: "Webページ、YouTube、PDFの即時要約", importance: "high" },
        { text: "安価なモデルからハイエンドまで選べる柔軟性", importance: "medium" },
        { text: "優れたUI/UXによる生産性向上", importance: "medium" },
    ],
    cons: [
        { text: "ブラウザ上の「全データ」へのアクセス権限を要求される", importance: "high" },
        { text: "「無制限プラン」でも実際には厳しい制限がある", importance: "high" },
        { text: "サポートが最悪（返金拒否、無視）", importance: "medium" },
        { text: "データガバナンスの透明性が低い", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: セキュリティとプライバシー",
            description: "仕組み上、社内システムやクラウドストレージを含む「ブラウザで表示する全ての情報」を読み取る権限を要求します。運営企業の信頼性やデータ管理ポリシーを考慮すると、機密情報を扱う企業での利用は推奨できません。",
            affectedUsers: [
                "金融・医療・官公庁などの機密情報取扱者",
                "セキュリティポリシーの厳しい企業社員",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://monica.im/",
            label: "Monica公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイトを見る",
    content: `<h3>個人の生産性は爆上がりするが…</h3><p>Monicaは、一度使うと手放せなくなるほど便利なツールです。ブラウザのサイドバーに常駐し、GPT-4oもClaudeもGeminiも使い放題（に見える）。WebブラウジングしながらのAI利用体験としては最高峰です。</p><h3>企業の情シスは絶対に許可しない</h3><p>しかし、その利便性はセキュリティと引き換えです。中国系企業による運営、不透明なデータポリシー、そして「すべてのWebサイト上のデータ」へのアクセス権限要求は、企業セキュリティの観点からは悪夢です。また、「無制限」と謳いながら複雑なクレジット制限があったり、解約トラブルが絶えないサポート体制など、信頼性には大きな疑問符がつきます。あくまで「個人の趣味の範囲」で、リスクを承知の上で使うツールです。</p>`,
    metaDescription: "Monica (2026) レビュー。Chrome拡張として便利だが、セキュリティ権限と運営の不透明さが致命的。",
    keywords: ["Monica", "Chrome拡張", "AI", "セキュリティリスク", "2026"],
};
