import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "perplexity-enterprise",
    category: "analysis-data",
    title: "Perplexity Enterprise: 次世代ナレッジディスカバリーエンジン",
    subtitle: "「ググる」時間を消滅させる、自律型リサーチエージェント",
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
        summary: "技術調査や市場分析にかかる時間を50%以上削減可能。エンジニアやリサーチャーにとって、検索結果を巡回する手間を省き、意思決定に集中するための必須ツール。",
        targetAudience: "技術調査が多いエンジニアリングチーム、市場調査を行うマーケター"
    },

    radarData: [
        { category: "Search Efficiency", score: 10.0, industryAverage: 7.0 },
        { category: "Citation/Trust", score: 9.0, industryAverage: 6.0 },
        { category: "Deep Research", score: 9.5, industryAverage: 5.0 },
        { category: "Model Flexibility", score: 9.0, industryAverage: 8.0 },
        { category: "Security", score: 9.0, industryAverage: 8.0 }
    ],

    pros: [
        { text: "Deep Research機能による包括的な市場調査・技術選定レポートの自動生成", importance: "high" },
        { text: "複数のソースを横断検索し、出典付きで要約するPro Search", importance: "high" },
        { text: "SOC 2 Type II準拠のセキュリティとデータ学習の除外設定", importance: "medium" },
        { text: "検索バックエンドとしてGPT-4oやClaude 3.5を選択可能", importance: "medium" }
    ],
    cons: [
        { text: "SEO目的の低品質サイトや誤情報を拾うリスクがゼロではない", importance: "medium" },
        { text: "SSOなどの高度な管理機能には一定規模の契約が必要", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "一次情報の厳密な裏取りが必要な業務",
            description: "AIによる要約は誤解を含む可能性があるため、医療や法律などのクリティカルな判断には、必ず引用元を確認する必要がある。",
            affectedUsers: ["法務担当者", "医療研究者"]
        }
    ],

    affiliateLinks: [
        {
            url: "https://www.perplexity.ai/enterprise",
            label: "公式サイト",
            disclosure: "紹介料は発生しません",
            isSponsored: false
        }
    ],

    metaDescription: "Perplexity Enterprise徹底レビュー。Deep Research機能がもたらすリサーチ業務の自動化とROIを解説。",
    keywords: ["Perplexity", "検索AI", "Deep Research", "技術調査"],

    content: `
        <h2>検索エンジンから「回答エンジン」へ</h2>
        <p>Perplexity Enterprise Pro（月額$40/ユーザー）は、従来の検索行為を根本から変革します。エンジニアが直面する「最新技術のトレンド調査」や「エラーログの原因究明」といったタスクにおいて、無数のリンクをクリックする時間を過去のものにします。</p>
        
        <h3>Deep Research：市場調査の完全自動化</h3>
        <p>特筆すべきは「Deep Research」機能です。これは数百のソースを自律的に探索し、数千文字に及ぶ詳細なレポートを作成する機能です。</p>
        <ul>
            <li><strong>ユースケース：</strong>競合製品の機能比較表作成、特定の技術スタック導入事例の調査。</li>
            <li><strong>ROI：</strong>従来数日かかっていた文献レビューや調査業務を数分で完了させ、リサーチ時間を50%以上削減します。</li>
        </ul>

        <h3>Pro Searchとモデルの柔軟性</h3>
        <p>Pro Searchは、ユーザーの意図を汲み取り、多角的な検索を実行して情報を統合します。検索バックエンドにはGPT-4oやClaude 3.5 Sonnetを選択できるため、用途に合わせて最適な「頭脳」を利用可能です。</p>

        <h3>信頼性とセキュリティ</h3>
        <p>Enterpriseプランでは、API利用データやクエリデータがモデル学習に使用されないことが保証されており、SOC 2 Type IIにも準拠しています。ただし、検索結果には誤情報（ハルシネーションやフェイクニュース）が含まれるリスクもゼロではないため、必ず提示される引用元（Citation）を確認するリテラシーが求められます。</p>
    `
};
