import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "runway-ml",
    category: "video-motion",
    title: "Runway: 物理法則を理解する動画シミュレーションエンジン",
    subtitle: "静止画に「魂」を吹き込み、動画制作コストを1/100にする",
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
        score: 8.5,
        summary: "Gen-3 Alphaの物理演算能力は圧巻。Unlimitedプランでの運用を前提とすれば、動画広告のPDCA速度を劇的に向上させる。",
        targetAudience: "動画マーケター、プロモーション担当、Webディレクター"
    },
    radarData: [
        { category: "機能性", score: 4.7, industryAverage: 4.0 },
        { category: "使いやすさ", score: 4.8, industryAverage: 3.5 },
        { category: "処理速度", score: 3.0, industryAverage: 3.0 },
        { category: "サポート", score: 3.5, industryAverage: 3.5 },
        { category: "コストパフォーマンス", score: 3.0, industryAverage: 3.5 }
    ],
    pros: [
        { text: "Motion Brushにより「雲だけ動かす」といった部分的な動きの制御が可能", importance: "high" },
        { text: "物理法則（流体、重力）に基づいたリアリスティックな挙動再現", importance: "high" },
        { text: "カメラワーク（ズーム、パン）を数値で指定し、映像演出をコントロールできる", importance: "medium" }
    ],
    cons: [
        { text: "高品質モデル(Gen-3)のクレジット消費が激しく、試行錯誤のコストが高い", importance: "high" },
        { text: "長尺動画（10秒以上）では一貫性が崩れやすい", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "クレジット消費の青天井リスク",
            description: "Gen-3モデルは1秒生成に約15円相当を消費する。従量課金上限を設定しないと予算が即座に枯渇するため、Unlimitedプランが実質必須。",
            affectedUsers: ["予算管理が厳格なプロジェクト", "試行回数が多いクリエイター"]
        }
    ],
    affiliateLinks: [
        { url: "https://runwayml.com", label: "公式サイト", disclosure: "Standard", isSponsored: false }
    ],
    metaDescription: "動画生成AI Runway Gen-3 Alphaの徹底レビュー。物理シミュレーションの精度、Motion Brushによる制御性、そしてコスト爆増を防ぐためのプラン選定を解説。",
    keywords: ["Runway", "動画生成AI", "Gen-3 Alpha", "動画マーケティング", "SaaS"],
    content: `
        <h2>動画制作の「試行錯誤」を民主化する</h2>
        <p>Runwayは、数百万かかっていた動画制作を、数百円の計算コストに置き換えます。特にMotion Brushによる「指示出し」の精密さは、ランダム生成の枠を超えています。</p>
        
        <h3>活用シナリオ</h3>
        <ul>
            <li><strong>LPのヒーロー動画：</strong>Midjourneyで作った高品質な静止画に、微細な動き（雲の流れ、光の反射）を与えてループ動画化。</li>
            <li><strong>A/Bテスト素材：</strong>異なる動きや演出のバリエーションを短時間で大量生成し、広告効果を最大化。</li>
        </ul>

        <h3>コスト管理の鉄則</h3>
        <p>「良いテイク」が出るまで回し続けるのがAI動画の常です。従量課金で破産しないためにも、SaaS検証ラボは<strong>Unlimitedプラン ($76/mo)</strong>一択と結論づけました。</p>
    `
};
