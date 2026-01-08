import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "microsoft-copilot",
    category: "office-assistant",
    title: "Microsoft Copilot: 統合型オフィスアシスタント",
    subtitle: "TeamsとWordで真価を発揮する、業務効率化の要",
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",

    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "中小企業の現場目線で、実益に繋がるツールのみを厳選。"
    },

    verdict: {
        type: "CONSIDER",
        score: 8.2,
        summary: "Teams会議の要約機能だけで元が取れるツールだが、Excelでの分析精度には課題が残る。Microsoft 365環境への依存度が高いSMEには推奨。",
        targetAudience: "Microsoft 365を既に利用している企業、会議が多い組織"
    },

    radarData: [
        { category: "Office Integration", score: 10.0, industryAverage: 5.0 },
        { category: "Meeting Summary", score: 9.5, industryAverage: 7.0 },
        { category: "Data Accuracy (Excel)", score: 6.0, industryAverage: 8.0 },
        { category: "Internal Search", score: 8.5, industryAverage: 6.0 },
        { category: "Cost Efficiency", score: 8.0, industryAverage: 8.0 }
    ],

    pros: [
        { text: "Teams会議のリアルタイム文字起こしと要約機能による議事録工数の削減", importance: "high" },
        { text: "Graph Groundingによる社内データ（メール、SharePoint）に基づいた回答", importance: "high" },
        { text: "Wordにおけるドラフト作成機能の利便性", importance: "medium" },
        { text: "Microsoft 365のテナント内でデータが保護される高いセキュリティ", importance: "medium" }
    ],
    cons: [
        { text: "Excelでの複雑な計算や分析においてハルシネーションのリスクがある", importance: "high" },
        { text: "年間契約が基本で、途中解約の柔軟性が低い", importance: "medium" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "Google Workspace中心の企業",
            description: "Microsoft 365のエコシステムに依存するため、Google Workspace環境では機能が限定的。",
            affectedUsers: ["Google Workspace利用企業"]
        },
        {
            title: "厳密な財務モデリング",
            description: "Excel Copilotの精度は発展途上であり、数値の正確性が生命線となるタスクには不向き。",
            affectedUsers: ["経理部", "財務アナリスト"]
        }
    ],

    affiliateLinks: [
        {
            url: "https://www.microsoft.com/microsoft-365/copilot",
            label: "公式サイト",
            disclosure: "紹介料は発生しません",
            isSponsored: false
        }
    ],

    metaDescription: "Microsoft Copilot徹底検証。Teams/Excelでの実用性と、導入前に知っておくべき精度の限界。",
    keywords: ["Microsoft Copilot", "Teams", "Office AI", "議事録自動化"],

    content: `
        <h2>Office連携の光と影</h2>
        <p>Microsoft Copilot for Microsoft 365（月額$30/ユーザー）は、日常業務ツールにAIを直接統合する点でユニークです。しかし、エンジニアリング用途においては、その得意・不得意を明確に理解する必要があります。</p>
        
        <h3>TeamsとWord：圧倒的なROI</h3>
        <p>最も明確な価値はTeamsにあります。会議のリアルタイム文字起こしと要約機能は、議事録作成業務をほぼ消滅させます。「誰が何を発言し、何が決まったか」を自動記録するため、エンジニアはメモ取りから解放され議論に集中できます。また、Wordの"Draft with Copilot"機能は、箇条書きから仕様書や報告書を高速にドラフトするのに優れています。</p>

        <h3>Excel連携の課題</h3>
        <p>一方で、Excel連携には注意が必要です。調査データによると、Excel Copilotのタスク精度は人間（71.3%）に対し57.2%程度に留まる場合があり、特に複雑な論理において誤った数式を生成するリスクがあります。データの並べ替えや単純集計には有用ですが、企業の意思決定に関わる財務モデリング等での利用には慎重な検証が不可欠です。</p>

        <h3>Graph Groundingと社内検索</h3>
        <p>Copilot Studioを使用すると、社内データ（SharePoint, Webサイト等）に基づいた回答生成（Graph Grounding）が可能になります。「あのプロジェクトの仕様書は？」といった曖昧な問いに対し、社内資産から答えを導き出せる点は、RAGの手軽な実装として評価できます。</p>
    `
};
