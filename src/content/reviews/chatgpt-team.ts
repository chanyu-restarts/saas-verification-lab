import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "chatgpt-team",
    category: "text-assistant",
    title: "ChatGPT Team: 汎用性とエコシステムの絶対王者",
    subtitle: "Canvasとo1モデルが実現する「思考する」エンジニアリング支援",
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
        score: 9.4,
        summary: "SMEにとっての「最初のAI」として最適。Canvasによる共同編集とAdvanced Data Analysisによるデータ分析は、エンジニアだけでなく全職種の生産性を向上させる。",
        targetAudience: "全業種のSME、特にデータ分析やドキュメント作成の頻度が高いチーム"
    },

    radarData: [
        { category: "Versatility", score: 10.0, industryAverage: 8.5 },
        { category: "Reasoning (o1)", score: 9.8, industryAverage: 8.0 },
        { category: "Data Analysis", score: 9.5, industryAverage: 7.0 },
        { category: "使いやすさ", score: 9.5, industryAverage: 8.5 },
        { category: "Collaboration", score: 9.0, industryAverage: 7.5 }
    ],

    pros: [
        { text: "Canvas機能によるドキュメント・コードのインライン共同編集", importance: "high" },
        { text: "o1 (Strawberry) モデルによる深い推論と論理的正確性", importance: "high" },
        { text: "Advanced Data AnalysisによるPythonベースのデータ分析・グラフ作成", importance: "high" },
        { text: "最低2シートから契約可能で導入ハードルが低い", importance: "medium" }
    ],
    cons: [
        { text: "Advanced Data Analysisの大容量ファイル処理には物理的限界あり", importance: "medium" },
        { text: "UIプロトタイピングの即時性はClaude Artifactsにやや劣る", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "完全オフライン環境",
            description: "クラウドベースであるため、インターネット接続が制限された環境では使用不可。",
            affectedUsers: ["防衛産業", "厳格な閉域網を利用する金融機関"]
        }
    ],

    affiliateLinks: [
        {
            url: "https://openai.com/chatgpt/team",
            label: "公式サイト",
            disclosure: "紹介料は発生しません",
            isSponsored: false
        }
    ],

    metaDescription: "ChatGPT Teamプラン徹底レビュー。Canvas機能とo1モデルがもたらすエンジニアリング変革とROI分析。",
    keywords: ["ChatGPT", "OpenAI", "Canvas", "o1", "データ分析"],

    content: `
        <h2>汎用性最強の「最初のAIツール」</h2>
        <p>OpenAIのChatGPT Teamプラン（月額$30/ユーザー）は、その圧倒的な汎用性とエコシステムの広さにより、SMEが最初に導入すべきツールであり続けています。特に、最新の「Canvas」インターフェースと推論モデル「o1」の登場は、エンジニアリング支援ツールとしての価値を大きく高めました。</p>
        
        <h3>Canvas：対話から「共創」へ</h3>
        <p>Canvasは、チャットの隣に独立したエディタを開き、AIとドキュメントやコードを共同編集できる機能です。ClaudeのArtifactsが「プレビュー」に強みを持つのに対し、Canvasは「リファクタリング」や「推敲」に特化しています。</p>
        <ul>
            <li><strong>インライン編集：</strong>「この関数を最適化して」といった局所的な指示が可能。</li>
            <li><strong>読解レベル調整：</strong>技術ドキュメントを非エンジニア向けに「翻訳」するスライダー機能。</li>
            <li><strong>ショートカット：</strong>コードレビューや他言語への移植をワンクリックで実行。</li>
        </ul>

        <h3>Advanced Data Analysis (ADA) の実力</h3>
        <p>エンジニアがデータ分析を行う際、ADAは強力な武器となります。Python環境がサンドボックス内で実行されるため、数十万行レベルのデータ分析や複雑なグラフ作成を自然言語で完結できます。これにより、データアナリストを専任で雇用できないSMEでも、高度なデータドリブンな意思決定が可能になります。</p>

        <h3>推論モデル「o1」の役割</h3>
        <p>即時性が求められるタスクにはGPT-4o、複雑なアルゴリズム設計や論理チェックにはo1という使い分けが推奨されます。o1は時間をかけて「思考（Chain of Thought）」を行うため、従来のモデルで起きがちだったハルシネーションを大幅に抑制します。</p>
    `
};
