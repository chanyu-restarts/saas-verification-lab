import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "notion-ai",
    category: "analysis-data",
    title: "Notion AI: 組織のサイロを破壊するナレッジOS",
    subtitle: "「探す時間」を「考える時間」に変える、コネクタ型RAGプラットフォーム",
    publishedAt: "2026-01-27",
    updatedAt: "2026-01-27",
    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "SaaS検証ラボ チーフ・リサーチ・オフィサー率いるエンジニアリング解析チーム。"
    },
    verdict: {
        type: "BUY",
        score: 9.0,
        summary: "Slack/Drive連携による横断検索は、ナレッジワークの生産性を劇的に向上させる。自前RAG構築より圧倒的に安価。",
        targetAudience: "情報共有に課題を持つ組織、ドキュメント管理管理者"
    },
    radarData: [
        { category: "機能性", score: 4.0, industryAverage: 4.0 },
        { category: "使いやすさ", score: 3.0, industryAverage: 4.0 },
        { category: "処理速度", score: 4.5, industryAverage: 3.5 },
        { category: "サポート", score: 5.0, industryAverage: 3.5 },
        { category: "コストパフォーマンス", score: 4.5, industryAverage: 4.0 }
    ],
    pros: [
        { text: "SlackやGoogle Driveと連携し、Notion外の情報も含めた横断的な回答生成が可能", importance: "high" },
        { text: "顧客データをAI学習に利用しない「ゼロデータリテンション」ポリシーによる安全性", importance: "high" },
        { text: "ページ内の文脈を理解した執筆補助機能により、ドキュメント作成の初動負荷を低減", importance: "medium" }
    ],
    cons: [
        { text: "外部コネクタ機能の利用にはBusinessプラン以上が必要で、導入ハードルが高い", importance: "high" },
        { text: "日本語検索における同義語の揺らぎ吸収や精度に課題が残る場合がある", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "コネクタ機能のプラン要件",
            description: "RAG（外部データ連携）機能を利用するには、ワークスペース全体をBusinessプラン以上にアップグレードする必要がある。個人利用やPlusプランでは不可。",
            affectedUsers: ["Plusプラン利用中の小規模チーム", "予算権限のないリーダー"]
        }
    ],
    affiliateLinks: [
        { url: "https://notion.so", label: "公式サイト", disclosure: "Standard", isSponsored: false }
    ],
    metaDescription: "Notion AIのコネクタ機能（RAG）徹底解説。Slack/Google Drive連携による社内検索の効率化、セキュリティ仕様、およびBusinessプラン導入のROIを分析。",
    keywords: ["Notion AI", "ナレッジマネジメント", "RAG", "社内検索", "SaaS"],
    content: `
        <h2>組織の「第2の脳」を構築する</h2>
        <p>Notion AIの真価は、単なる文章作成支援ではなく、Q&A機能による「社内情報の統合」にあります。Slackのフロー情報とDriveのストック情報を横断検索できる体験は、一度使うと戻れません。</p>
        
        <h3>導入の決め手</h3>
        <ul>
            <li><strong>検索コストのゼロ化：</strong>「あの仕様書どこ？」という会話が不要になります。AIに聞けば、ソース付きで回答が得られます。</li>
            <li><strong>セキュリティ：</strong>エンタープライズ水準のデータ保護により、社外秘情報も安心してインデックス化できます。</li>
        </ul>

        <h3>推奨構成</h3>
        <p>真のROIを引き出すには、<strong>Businessプラン + AIアドオン</strong>の構成が必須です。情シス部門と連携し、早期にセキュリティレビューをクリアすることを推奨します。</p>
    `
};
