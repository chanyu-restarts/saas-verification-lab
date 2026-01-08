import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "google-notebooklm",
    category: "knowledge-assistant",
    title: "NotebookLM: RAG特化型学習・分析エンジン",
    subtitle: "「ソース限定」の回答生成でハルシネーションを極小化",
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",

    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "中小企業の現場目線で、実益に繋がるツールのみを厳選。"
    },

    verdict: {
        type: "BUY",
        score: 9.0,
        summary: "Google Workspaceユーザーなら追加コストなしで利用可能。アップロードした資料のみに基づく回答生成は信頼性が高く、契約書確認や学習用途に最適。",
        targetAudience: "大量のドキュメントを扱う法務・研究職、新入社員のオンボーディング"
    },

    radarData: [
        { category: "Accuracy (Grounding)", score: 9.8, industryAverage: 7.5 },
        { category: "Context Capacity", score: 10.0, industryAverage: 8.0 },
        { category: "Learning Aid (Audio)", score: 9.5, industryAverage: 6.0 },
        { category: "コストパフォーマンス", score: 10.0, industryAverage: 8.0 },
        { category: "Integration", score: 8.5, industryAverage: 7.5 }
    ],

    pros: [
        { text: "ソース内の情報のみに基づいて回答するためハルシネーションが極めて低い", importance: "high" },
        { text: "Audio Overview機能により、ドキュメントを対話形式の音声コンテンツに変換可能", importance: "high" },
        { text: "Google WorkspaceのCore Serviceとして追加コストなしで利用可能", importance: "high" },
        { text: "最大2,500万語という膨大なコンテキスト処理能力", importance: "medium" }
    ],
    cons: [
        { text: "生成された回答のエクスポート機能が限定的", importance: "medium" },
        { text: "汎用的なチャットボット（一般的な知識を問う用途）としては機能しない", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "外部情報の検索が必要なタスク",
            description: "インターネット上の最新情報を検索する機能はないため、アップロードした資料以外のことは答えられない。",
            affectedUsers: ["トレンド調査を行うマーケター"]
        }
    ],

    affiliateLinks: [
        {
            url: "https://notebooklm.google.com/",
            label: "公式サイト",
            disclosure: "紹介料は発生しません",
            isSponsored: false
        }
    ],

    metaDescription: "NotebookLM徹底レビュー。RAG特化型の仕様と、Audio Overviewを活用した新しい学習体験を解説。",
    keywords: ["NotebookLM", "Google", "RAG", "ハルシネーション抑制"],

    content: `
        <h2>最も信頼できる「専用アシスタント」</h2>
        <p>GoogleのNotebookLMは、汎用的なチャットボットとは一線を画す、RAG（Retrieval-Augmented Generation）の純粋な実装例です。「ユーザーがアップロードしたソースのみに基づいて回答する」という制約により、ハルシネーション（嘘）を極限まで抑制しています。</p>
        
        <h3>ソースグランディングと信頼性</h3>
        <p>回答の根拠となるソースの該当箇所（Citation）を必ず提示する仕様になっており、情報が見つからない場合は「情報がありません」と正直に答えます。これにより、契約書の条項確認や法規制のチェックなど、正確性が最優先されるタスクにおいて、他のLLMツールよりも遥かに高い信頼性を提供します。</p>

        <h3>Audio Overview：学習体験の革新</h3>
        <p>特筆すべきは「Audio Overview」機能です。アップロードされたドキュメントの内容を基に、2人のAIホストがポッドキャスト風に対話・解説します。これは、新入社員向けのオンボーディング資料や複雑な技術仕様書を「聴くコンテンツ」に変換できることを意味し、移動中などの隙間時間を有効活用した社員教育が可能になります。</p>

        <h3>コストと容量</h3>
        <p>Google WorkspaceのCore Serviceとして提供されており、多くの商用プランに追加コストなしで含まれます。1ノートブックあたり最大2,500万語という膨大なコンテキストを処理できるため、SMEの社内ナレッジを丸ごと読み込ませて活用するのに最適なツールです。</p>
    `
};
