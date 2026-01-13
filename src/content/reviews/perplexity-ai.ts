import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "perplexity-ai",
    category: "analysis-data",
    title: "Perplexity AI: RAGアーキテクチャによる技術調査の高速化とエンジニアリング活用",
    subtitle: "情報の鮮度と「幻覚」の問題を解決する、エンジニアのための検索エンジン",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "エンジニアリング効率化ツールを専門に検証するテクニカルチーム。"
    },
    verdict: {
        type: "BUY",
        score: 9.6,
        summary: "従来のLLMが抱える「情報の古さ」と「幻覚」をライブWeb検索で解決。Deep Research機能はシニアエンジニア数時間分の調査を数分で完遂し、Enterpriseプランでのデータ保護も盤石。",
        targetAudience: "情報の正確性が求められるエンジニア、技術選定を行うアーキテクト、コードのデバッグを行う開発者"
    },
    radarData: [
        { category: "機能性", score: 9.5, industryAverage: 8.5 },
        { category: "使いやすさ", score: 9.0, industryAverage: 8.0 },
        { category: "処理速度", score: 8.0, industryAverage: 7.5 },
        { category: "コストパフォーマンス", score: 10.0, industryAverage: 8.0 },
        { category: "サポート", score: 9.0, industryAverage: 7.0 }
    ],
    pros: [
        { text: "情報の鮮度：リアルタイムWeb検索により、最新のライブラリ変更やゼロデイ脆弱性を即座に把握可能", importance: "high" },
        { text: "透明性の高い引用：すべての回答に出典元が明示され、一次ソースでのファクトチェックが容易", importance: "high" },
        { text: "Enterpriseプランの安全性：学習データへの利用を契約レベルで除外し、SOC2に準拠", importance: "high" },
        { text: "Deep Research：自律エージェントが多段階調査を行い、網羅的なレポートを作成", importance: "medium" }
    ],
    cons: [
        { text: "デフォルトの学習利用：Free/Proプランではデフォルトで入力データが学習に使用されるリスクがある", importance: "high" },
        { text: "検索クエリ制限：Deep Research等の高度な機能には1日あたりの回数制限が存在する", importance: "medium" },
        { text: "過去データの削除不可：オプトアウト設定前のデータは遡って削除されない", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "厳格なデータ入力禁止ポリシー",
            description: "企業のセキュリティポリシーとして「入力データのAI学習利用」が禁止されている場合、Enterpriseプラン以外は導入不可となる。Proプラン以下のオプトアウトはユーザー依存であるため。",
            affectedUsers: ["金融・医療機関のエンジニア", "厳格なNDA下にあるプロジェクトチーム"]
        }
    ],
    affiliateLinks: [
        { url: "https://www.perplexity.ai/enterprise", label: "Perplexity Enterprise", disclosure: "Official Site", isSponsored: false }
    ],
    metaDescription: "Perplexity AIのエンジニアリング活用における詳細評価。RAGアーキテクチャによる情報の鮮度、プライバシーリスク、ROIを徹底分析。",
    keywords: ["Perplexity", "RAG", "エンジニアリング", "AI検索", "技術調査"],
    content: `
    <h2>エンジニアリング推奨理由</h2>
    <p>エンジニアリングの現場において、ChatGPTやClaude単体では解決できない最大の課題は「情報の鮮度（Freshness）」と「幻覚（Hallucination）」です。Perplexityは常にライブウェブをクロールし、回答の根拠となるURL（出典）を明示するため、エンジニアは情報の真偽を即座に一次ソースで検証できます。特に「Deep Research」機能は、複雑な技術的問いに対して自律的に多段階の検索と推論を行い、シニアエンジニアレベルの調査レポートを数分で生成する能力を持ちます。</p>

    <h2>プライバシーと情報の鮮度</h2>
    <h3>データプライバシーの構造的リスク</h3>
    <p>Perplexityの標準設定では、ユーザーの検索クエリや対話内容がAIモデルの再学習に使用される仕様となっています。エンジニアが機密性の高いエラーログやコードを貼り付けた場合、情報漏洩のリスクがあります。Enterpriseプランにおいては、顧客データは決して学習に使用されない契約上の保証が提供され、OpenAI等のサードパーティに対してもデータ保護が担保されます。</p>

    <h3>情報の鮮度とRAGの特性</h3>
    <p>Google検索のインデックスと同様に、Web上の変更をほぼリアルタイムで反映します。GithubのIssueでの議論や最新フレームワークのドキュメントを即座に回答に反映できる点が技術的優位性です。Deep Researchモードでは、1〜5分程度のレイテンシが発生しますが、人間が数時間かける調査量に匹敵する成果物を生成します。</p>

    <h2>ROIロジック</h2>
    <p>エンジニアの技術調査時間を週3時間削減できたと仮定した場合、Enterpriseプラン（月額$40）のROIは約3,025%に達します。高給なエンジニアのリサーチ時間を大幅に圧縮できる点が、高い投資対効果の根拠となります。</p>
  `
};
