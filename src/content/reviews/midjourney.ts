import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "midjourney",
    category: "image-design",
    title: "Midjourney: クリエイティブアセット生成の絶対王者",
    subtitle: "「ガチャ」から「ツール」へ進化したビジュアル生成エンジン",
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
        score: 9.5,
        summary: "v6以降の理解力とWeb Editorの搭載により、実務利用のハードルが激減。外注費を固定費化する最強のソリューション。",
        targetAudience: "Webデザイナー、マーケター、UI/UXエンジニア"
    },
    radarData: [
        { category: "機能性", score: 10.0, industryAverage: 8.4 },
        { category: "使いやすさ", score: 9.0, industryAverage: 7.0 },
        { category: "処理速度", score: 7.0, industryAverage: 8.0 },
        { category: "サポート", score: 5.0, industryAverage: 6.0 },
        { category: "コストパフォーマンス", score: 8.0, industryAverage: 9.0 }
    ],
    pros: [
        { text: "Web Editorの実装により、Discord不要で画像編集・生成が可能になった", importance: "high" },
        { text: "Character Reference (--cref) で同一キャラクターの一貫性を保持できる", importance: "high" },
        { text: "Style Reference (--sref) によりブランドトーンの統一が容易", importance: "medium" }
    ],
    cons: [
        { text: "画像内の正確な文字描画（ロゴ等）はDALL-E 3に劣る", importance: "medium" },
        { text: "公式APIが限定的で、システムへの自動組み込みには工夫が必要", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "年商100万ドル超企業のプラン制限",
            description: "年間総収益が100万ドル（約1.5億円）を超える企業は、Proプラン以上の契約が必須。下位プランでの商用利用はライセンス違反となる。",
            affectedUsers: ["中堅・大企業の制作部門", "スケーリング中のスタートアップ"]
        }
    ],
    affiliateLinks: [
        { url: "https://midjourney.com", label: "公式サイト", disclosure: "Standard", isSponsored: false }
    ],
    metaDescription: "Midjourney v6の業務利用ガイド。Web Editorによる操作性向上、キャラクター一貫性維持機能、そして企業利用時のライセンス注意点を解説。",
    keywords: ["Midjourney", "画像生成AI", "クリエイティブ", "Webデザイン", "SaaS"],
    content: `
        <h2>クリエイティブの内製化によるコスト革命</h2>
        <p>Midjourneyは、単なる画像生成ツールを超え、デザインリソースのボトルネックを解消するインフラとなりました。特にWeb Editorの登場は、エンジニア以外のメンバーへの普及を後押しします。</p>
        
        <h3>実務活用のキーポイント</h3>
        <ul>
            <li><strong>一貫性の確保：</strong><code>--cref</code>や<code>--sref</code>を活用することで、キャラクターやブランドカラーを統一したアセット量産が可能です。</li>
            <li><strong>Webでの完結：</strong>Discordコマンドを覚える必要はなく、直感的なGUIでインペインティングやズームアウトが行えます。</li>
        </ul>

        <h3>コンプライアンス遵守</h3>
        <p>企業利用における最大のリスクはライセンス違反です。年商100万ドルを超える場合は必ず<strong>Proプラン ($48/mo)</strong>を選択し、Stealth Modeを活用して知的財産を保護してください。</p>
    `
};
