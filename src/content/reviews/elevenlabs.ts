import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "elevenlabs",
    category: "voice-meeting",
    title: "ElevenLabs: 言語の壁を融解させるAIボイス・レイヤー",
    subtitle: "「人間らしさ」を極めた音声合成と、リアルタイム多言語吹き替え",
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
        score: 9.2,
        summary: "多言語対応のDubbing Studioは、グローバル展開を狙うSaaSにとって最強の武器。Turbo v2.5の低遅延は対話AIにも最適。",
        targetAudience: "グローバルSaaS開発者、動画コンテンツ制作者、広報担当"
    },
    radarData: [
        { category: "機能性", score: 9.8, industryAverage: 9.0 },
        { category: "使いやすさ", score: 8.0, industryAverage: 8.0 },
        { category: "処理速度", score: 9.6, industryAverage: 7.6 },
        { category: "サポート", score: 9.0, industryAverage: 8.0 },
        { category: "コストパフォーマンス", score: 7.6, industryAverage: 8.0 }
    ],
    pros: [
        { text: "Turbo v2.5モデルによる超低遅延生成は、リアルタイム対話エージェントを実現する", importance: "high" },
        { text: "Dubbing Studioにより、声質を維持したまま動画の多言語吹き替えが完結する", importance: "high" },
        { text: "Professional Voice Cloningで、特定人物の声を極めて高い精度で再現可能", importance: "medium" }
    ],
    cons: [
        { text: "日本語の固有名詞や同音異義語で、稀にピッチアクセントが不自然になる", importance: "medium" },
        { text: "長尺のオーディオブック等を大量生産する場合、従量コストがかさむ", importance: "low" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "Voice Cloningの厳格な本人認証",
            description: "高品質なクローン音声を作成するには、指定されたスクリプトを本人の声で読み上げる認証が必須。他人の声を勝手に作ることはシステム的に不可能。",
            affectedUsers: ["有名人の声を使いたい開発者", "権限を持たない担当者"]
        }
    ],
    affiliateLinks: [
        { url: "https://elevenlabs.io", label: "公式サイト", disclosure: "Standard", isSponsored: false }
    ],
    metaDescription: "AI音声合成ElevenLabsの実装ガイド。Turbo v2.5による低遅延対話システム、Dubbing Studioによる多言語展開、そしてVoice Cloningの認証プロセスについて詳述。",
    keywords: ["ElevenLabs", "音声合成", "多言語対応", "Voice Cloning", "SaaS"],
    content: `
        <h2>グローバル展開の「声」をデザインする</h2>
        <p>ElevenLabsは、SaaSプロダクトが世界に出る際の「言語バリア」を破壊します。翻訳コストとナレーター手配の手間を、APIコール一つで代替可能です。</p>
        
        <h3>推奨ユースケース</h3>
        <ul>
            <li><strong>製品デモの多言語化：</strong>日本語の動画をアップロードするだけで、英語・中国語版を即座に生成。声質も維持されます。</li>
            <li><strong>AIエージェント：</strong>Turbo v2.5の低遅延を活かし、ユーザーと自然に会話するボイスボットを構築できます。</li>
        </ul>

        <h3>実装上の注意</h3>
        <p>自社ブランドの「公式ボイス」を作る場合、<strong>Creatorプラン ($22/mo)</strong>以上が必要です。また、クローン作成には本人の協力（認証録音）が不可欠なため、事前のスケジュール調整を忘れないでください。</p>
    `
};
