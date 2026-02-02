import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "suno",
    category: "voice-meeting",
    title: "Suno",
    subtitle: "音楽制作の民主化と著作権の迷宮",
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-27",

    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "日本の中小企業におけるSaaS実装と法的リスク評価を専門とするリサーチチーム。"
    },

    verdict: {
        type: "CONSIDER",
        score: 7.5,
        summary: "社内イベントやSNS動画のBGM作成には強力な『スパイス』となるが、権利帰属（Ownership）に関する法的解釈が流動的であるため、主要なブランド資産としての利用には慎重さが求められる。",
        targetAudience: "イベント企画会社、動画コンテンツ制作者、地方自治体の観光課"
    },

    radarData: [
        { category: "コストパフォーマンス", score: 9.0, industryAverage: 8.0 },
        { category: "使いやすさ", score: 9.0, industryAverage: 7.0 },
        { category: "機能性", score: 8.5, industryAverage: 8.0 },
        { category: "サポート", score: 6.0, industryAverage: 7.5 },
        { category: "処理速度", score: 9.5, industryAverage: 8.5 }
    ],

    pros: [
        { text: "音楽知識ゼロでも、ジャンルと歌詞入力だけで高品質なフルコーラス曲を生成可能", importance: "high" },
        { text: "日本語歌詞の発音やイントネーションが自然（v3.5/v4以降）", importance: "medium" },
        { text: "ステム分離機能により、ボーカルと伴奏を分けてBGM利用が可能", importance: "medium" },
        { text: "月額数千円で商用利用権（Pro以上）が得られ、BGM外注費を劇的に削減", importance: "medium" }
    ],

    cons: [
        { text: "生成された楽曲の著作権（Copyright）は法的に認められない可能性が高く、排他的権利を主張しにくい", importance: "high" },
        { text: "Freeプランで生成した楽曲は後から有料プランに入っても商用利用不可（遡及しない）", importance: "high" },
        { text: "既存曲の歌詞などを入力した場合の権利侵害リスクはユーザー責任", importance: "medium" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "独占的排他権の確保",
            description: "自社のサウンドロゴなど、他社の模倣を法的に完全に禁止したい資産には不向き。",
            affectedUsers: ["大手企業のブランディング担当", "プロの作曲家"]
        },
        {
            title: "既存曲のカバー",
            description: "権利未処理の既存曲を再現する目的での利用はリスクが高い。",
            affectedUsers: ["「歌ってみた」動画制作者"]
        }
    ],

    affiliateLinks: [
        { url: "https://suno.com/", label: "Suno 公式サイト", disclosure: "公式リンク", isSponsored: false }
    ],

    metaDescription: "2026年版Sunoレビュー。AI音楽生成の商用利用ルールと著作権リスクを徹底解説。SMEが安全にオリジナルソングを活用する方法とは。",
    keywords: ["Suno", "音楽生成AI", "著作権", "商用利用", "BGM作成", "動画制作"],

    content: `
        <h2>2026年の市場ポジショニング</h2>
        <p>Sunoは、テキストプロンプトからボーカル入りの楽曲を生成するAIであり、音楽制作の民主化を象徴するツールです。v3.5/v4モデルにより、最長4分のフルコーラス曲生成が可能になりました。SMEにとっては、社内イベントや製品プロモーション用のオリジナルソングを自作できる強力なツールですが、権利関係は最も複雑な領域です。</p>

        <h2>商用利用と著作権の注意点</h2>
        <ul>
            <li><strong>商用利用権:</strong> Pro/Premierプラン契約期間中に生成した楽曲のみ商用利用が可能。Freeプランで生成した曲は、後から有料契約しても商用利用できません（遡及不可）。</li>
            <li><strong>著作権帰属:</strong> 規約上はユーザーに所有権があるとされますが、日米の法的解釈では「AIのみで生成されたコンテンツに著作権は発生しない」との見解が優勢です。他人の利用を法的に差し止めることは難しい可能性があります。</li>
        </ul>

        <h2>活用シミュレーション：地方自治体・観光課</h2>
        <p><strong>背景:</strong> 観光名所のPR動画を制作したいが、オリジナルソングを作る予算がない。</p>
        <p><strong>導入効果:</strong> Proプランを契約し、Jasper等で作詞した地元PR歌詞を入力。「Upbeat City Pop」などの指定で楽曲を生成。ステム分離でインスト版（BGM用）とボーカル版を使い分け、動画編集ソフトで統合。製作費数千円で地域色豊かな動画を完成させました。</p>
    `
};
