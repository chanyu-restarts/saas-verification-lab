import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "canva",
    category: "image-design",
    title: "Canva",
    subtitle: "デザインの民主化と日本市場への徹底したローカライズ",
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
        score: 9.8,
        summary: "日本企業にとって最も導入障壁が低い『Must-Have』ツール。ラクスル連携による印刷発注やPayPay決済対応など、日本の商習慣に完全に適応しており、非デザイナー部門の生産性を劇的に向上させる。",
        targetAudience: "小売・飲食業の店長、総務・人事担当者、営業資料作成者"
    },

    radarData: [
        { category: "コストパフォーマンス", score: 10.0, industryAverage: 8.0 },
        { category: "使いやすさ", score: 10.0, industryAverage: 7.5 },
        { category: "機能性", score: 9.0, industryAverage: 9.0 },
        { category: "サポート", score: 9.0, industryAverage: 8.0 },
        { category: "処理速度", score: 9.5, industryAverage: 8.5 }
    ],

    pros: [
        { text: "ラクスルとのパートナーシップにより、デザイン画面から直接・専門知識不要で印刷発注が可能", importance: "high" },
        { text: "PayPay決済に対応しており、法人カードを持たない部署でも導入しやすい", importance: "high" },
        { text: "Magic Switch機能により、一つのデザインをSNS用、チラシ用などに瞬時にリサイズ・展開可能", importance: "medium" },
        { text: "年賀状や日本の季節行事に合わせた豊富な日本向けテンプレート", importance: "medium" }
    ],

    cons: [
        { text: "CMYKの厳密な色指定やアウトライン化など、プロフェッショナルな入稿データ作成には限界がある", importance: "medium" },
        { text: "AI画像生成（Dream Lab）には生成回数の月間上限がある", importance: "low" },
        { text: "オフライン環境では作業ができない", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "厳密なブランドカラー管理",
            description: "DICやPANTONEなどの特色指定が必須の印刷物には不向き。",
            affectedUsers: ["高級ブランドのカタログ制作", "厳密な色管理が必要なプロダクト"]
        },
        {
            title: "高度なベクター編集",
            description: "Illustratorのようなパス（Path）の細かな操作はできない。",
            affectedUsers: ["ロゴデザイナー", "イラストレーター"]
        }
    ],

    affiliateLinks: [
        { url: "https://www.canva.com/", label: "Canva 公式サイト", disclosure: "公式リンク", isSponsored: false }
    ],

    metaDescription: "2026年版Canvaレビュー。ラクスル連携やPayPay対応など、日本市場に特化した機能を徹底解説。SMEがデザイナー不在でも販促物を内製化する方法。",
    keywords: ["Canva", "デザイン", "ラクスル", "SaaS", "PayPay", "内製化"],

    content: `
        <h2>2026年の市場ポジショニング</h2>
        <p>Canvaは単なる画像編集ツールではなく、「統合ビジュアル・コミュニケーション・プラットフォーム」です。Adobeがプロ向けであるのに対し、CanvaはSMEの非デザイナー層をターゲットにしています。特に日本市場ではラクスル提携やPayPay対応など、ローカライズが極めて深化しており、導入障壁の低いツールです。</p>

        <h2>日本企業への影響と機能詳細</h2>
        <ul>
            <li><strong>Magic Studio (AI):</strong> 日本語プロンプトで違和感なく動作。特に「Magic Switch」によるサイズ展開は生産性を劇的に向上させます。</li>
            <li><strong>印刷・入稿連携 (Raksul):</strong> Canvaから直接ラクスルへ入稿・発注が可能。トンボ設定などの専門知識が不要で、デジタルからアナログ（紙）への移行がシームレスです。</li>
            <li><strong>チーム決済:</strong> 日本独自のQR決済「PayPay」に対応し、立替精算を行う小規模チームの利便性を高めています。</li>
        </ul>

        <h2>活用シミュレーション：小売チェーン・販促部</h2>
        <p><strong>背景:</strong> 50店舗展開。全店共通のセールPOPを作りたいが、店舗ごとの独自コメントも入れたい。</p>
        <p><strong>導入効果:</strong> 本部が「ブランドキット」でテンプレートを作成し、ロゴなどをロック。各店長はCanva上で自店のおすすめコメントのみを入力。店頭用はプリンターで、大量配布用はCanvaからラクスルへ直送指示。配送コストとタイムラグをゼロにし、地域密着の販促をリアルタイムに実現しました。</p>
    `
};
