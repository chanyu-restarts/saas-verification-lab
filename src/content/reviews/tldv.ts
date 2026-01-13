import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "tldv",
    category: "voice-meeting",
    title: "tl;dv: 会議インテリジェンスとCRM連携による暗黙知の資産化",
    subtitle: "会議を「情報のブラックボックス」から「共有資産」へ変えるツール",
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
        score: 8.8,
        summary: "会議中の重要な瞬間をクリップしてJiraやSlackに即時連携できる点が強力。日本語精度には課題があるものの、CRMへの自動同期による事務工数削減効果は絶大。",
        targetAudience: "セールスエンジニア、プロダクトマネージャー、リモートワーク主体の開発チーム"
    },
    radarData: [
        { category: "機能性", score: 9.0, industryAverage: 8.0 },
        { category: "使いやすさ", score: 10.0, industryAverage: 8.5 },
        { category: "処理速度", score: 8.0, industryAverage: 8.0 },
        { category: "コストパフォーマンス", score: 9.5, industryAverage: 7.5 },
        { category: "サポート", score: 8.0, industryAverage: 7.0 }
    ],
    pros: [
        { text: "クリップ共有機能：「ここバグです」等の瞬間を切り取りSlack等に即時共有、再現手順の説明コストをゼロに", importance: "high" },
        { text: "GDPR準拠とMistralモデル：欧州モデルを選択可能で、データ処理の透明性が高い", importance: "medium" },
        { text: "導入容易性：ボットが自動参加するためインストール不要感覚で利用可能", importance: "high" },
        { text: "CRMデータマッピング：会議のハイライトをSalesforce等の特定フィールドに自動入力可能", importance: "medium" }
    ],
    cons: [
        { text: "Freeプランの保持制限：録画データが3ヶ月で削除されるため、ナレッジベースとしては機能しない", importance: "high" },
        { text: "日本語のニュアンス：ハイコンテクストな表現やクロストーク時の認識精度に課題あり", importance: "medium" },
        { text: "価格の断絶：Salesforce連携にはPro($18)ではなくBusiness($59)が必要で価格差が大きい", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "長期アーカイブと無料利用",
            description: "「完全無料で無期限の議事録アーカイブを作りたい」場合、tl;dvのFreeプラン（3ヶ月削除）は不適。また、機密保持契約上、クラウドへのデータ送信が禁止されている場合も導入不可。",
            affectedUsers: ["予算ゼロのスタートアップ", "オンプレミス必須の企業"]
        }
    ],
    affiliateLinks: [
        { url: "https://tldv.io", label: "tl;dv Official", disclosure: "Official Site", isSponsored: false }
    ],
    metaDescription: "tl;dvの機能評価とCRM連携分析。日本語認識精度、GDPR対応、Salesforce連携のコスト構造をエンジニア視点で解説。",
    keywords: ["tl;dv", "議事録自動化", "CRM連携", "セールスエンジニアリング", "ミーティング解析"],
    content: `
    <h2>エンジニアリング推奨理由</h2>
    <p>tl;dvは会議データを「資産」として活用するためのプラットフォームです。会議中の「機能要望」や「バグ報告」の瞬間にタイムスタンプを押し、そのクリップを直接JiraやSlackに送信することで、「言った言わない」の論争を排除し、フィードバックループを高速化します。</p>

    <h2>日本語精度とCRM連携</h2>
    <h3>日本語認識と課題</h3>
    <p>日本語の認識精度は向上しているものの、技術用語やクロストーク（同時発話）には弱点があります。また、ハイコンテクストなコミュニケーションの真意をAIが見落とすリスクに留意が必要です。</p>

    <h3>CRM連携と価格の壁</h3>
    <p>SalesforceやHubSpotへのネイティブ連携はBusinessプラン（$59/月）に限定されます。ProプランではZapier経由となりますが、Businessプランでは会議の「ハイライト」をCRMの特定フィールドに自動マッピングできる強力な機能を提供します。</p>

    <h2>ROIロジック</h2>
    <p>会議後の議事録作成と共有にかかる時間を1回あたり40分削減できると仮定すると、Proプラン（$18/月）の投資に対し、約7,233%のROIが見込まれます。最初の1時間の会議で月額コストを回収可能です。</p>
  `
};
