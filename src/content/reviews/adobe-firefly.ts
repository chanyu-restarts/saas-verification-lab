import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "adobe-firefly",
    category: "image-design",
    title: "Adobe Firefly",
    subtitle: "コンプライアンス特化型クリエイティブジェネレーター",
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-27",

    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "日本の中小企業におけるSaaS実装と法的リスク評価を専門とするリサーチチーム。"
    },

    verdict: {
        type: "BUY",
        score: 9.0,
        summary: "商用利用の安全性（Commercial Safety）を最優先する日本企業にとって、実質的に唯一の選択肢。IP補償と権利クリアな学習データにより、コンプライアンスリスクを極限まで低減する。",
        targetAudience: "広告代理店、制作会社、上場企業の広報・マーケティング部門"
    },

    radarData: [
        { category: "コストパフォーマンス", score: 8.0, industryAverage: 8.5 },
        { category: "使いやすさ", score: 8.5, industryAverage: 8.0 },
        { category: "機能性", score: 8.5, industryAverage: 9.0 },
        { category: "サポート", score: 9.5, industryAverage: 7.5 },
        { category: "処理速度", score: 8.5, industryAverage: 8.5 }
    ],

    pros: [
        { text: "エンタープライズ版における「IP補償（Indemnification）」により、著作権侵害訴訟リスクをカバー", importance: "high" },
        { text: "Adobe Stock等の権利クリアな画像のみで学習されており、倫理的に安全", importance: "high" },
        { text: "PhotoshopやIllustratorにネイティブ統合されており、ワークフローを分断しない", importance: "medium" },
        { text: "コンテンツ認証（Content Credentials）により透明性を担保", importance: "medium" }
    ],

    cons: [
        { text: "特定の著名キャラクターや作家の画風を模倣するような生成はできない（表現の制約）", importance: "high" },
        { text: "IP補償を受けるには高額なエンタープライズ契約が必要な場合がある", importance: "medium" },
        { text: "Midjourneyのような偶発的・芸術的な表現力はやや劣る", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "特定のIP・画風の模倣",
            description: "「人気アニメ風」や「特定の作家風」の画像を生成したいニーズには応えられない。",
            affectedUsers: ["同人活動", "特定の画風を求めるエンタメ系"]
        },
        {
            title: "低予算",
            description: "エンタープライズ版の導入コストが予算に見合わない場合。",
            affectedUsers: ["小規模事業者", "個人利用"]
        }
    ],

    affiliateLinks: [
        { url: "https://www.adobe.com/products/firefly.html", label: "Adobe Firefly 公式サイト", disclosure: "公式リンク", isSponsored: false }
    ],

    metaDescription: "2026年版Adobe Fireflyレビュー。商用利用における法的安全性とIP補償の仕組みを解説。コンプライアンス重視の企業が選ぶべき理由とは。",
    keywords: ["Adobe Firefly", "画像生成AI", "著作権", "商用利用", "コンプライアンス", "Photoshop"],

    content: `
        <h2>2026年の市場ポジショニング</h2>
        <p>Adobe Fireflyは、Midjourney等の自由な生成AIとは対極にある「商用利用の安全性」を最優先にしたツールです。学習データはAdobe Stockやパブリックドメインに限定されており、コンプライアンスを重視する日本の上場企業やそのサプライチェーンにとって、最も安全な選択肢です。</p>

        <h2>知的財産権（IP）補償の全貌</h2>
        <ul>
            <li><strong>学習データ・クリーンネス:</strong> 違法に収集された画像を含まないクリーンな学習データセット。</li>
            <li><strong>IP補償 (Indemnification):</strong> エンタープライズプラン契約者に対し、Firefly出力物に起因する著作権侵害訴訟が発生した場合、Adobeが法的防御と賠償責任を肩代わりする制度です。（商標指示などの違反がない場合に限る）</li>
            <li><strong>構成参照:</strong> 自社ラフスケッチの構図を維持したまま、高品質な画像を生成可能。</li>
        </ul>

        <h2>ROI視点での評価</h2>
        <p>ROIは「リーガルリスクの排除」と「素材調達コストの最適化」にあります。IP補償により著作権侵害リスクをバランスシートから切り離せる点は、法務コストの削減に直結します。また、ストックフォト購入費の代替としても機能します。</p>

        <h2>活用シミュレーション：広告代理店</h2>
        <p><strong>背景:</strong> 大手自動車メーカーのキャンペーン。コンプライアンス基準が厳しく、短期間で大量の背景バリエーションが必要。</p>
        <p><strong>導入効果:</strong> アートディレクターのラフ画を「構成参照」で読み込み、権利クリアな背景画像を生成。Photoshopで自動車を合成し、「生成塗りつぶし」で馴染ませる。クライアントに対し、AdobeのIP補償対象であることを説明し、スムーズに承認を獲得。ロケ撮影やCG制作費を数百万単位で削減しました。</p>
    `
};
