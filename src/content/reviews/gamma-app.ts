import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "gamma-app",
    category: "image-design",
    title: "Gamma: ドキュメンテーションコストを破壊するAIプレゼンテーションエンジン",
    subtitle: "「脱・ピクセル調整」を実現するWebネイティブな情報伝達ツール",
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
        score: 9.0,
        summary: "エンジニアやPMのメモ書きを即座に顧客提示可能なスライドへ変換可能。デザイン工数を80%削減するROIは圧倒的。",
        targetAudience: "ドキュメント作成に追われるPM、エンジニア、セールス担当者"
    },
    radarData: [
        { category: "機能性", score: 4.2, industryAverage: 3.8 },
        { category: "使いやすさ", score: 3.5, industryAverage: 4.0 },
        { category: "処理速度", score: 4.8, industryAverage: 3.5 },
        { category: "サポート", score: 3.0, industryAverage: 3.5 },
        { category: "コストパフォーマンス", score: 4.5, industryAverage: 4.0 }
    ],
    pros: [
        { text: "HTML/CSSベースのレスポンシブな生成物は、スマホでの閲覧体験がPDFより格段に優れる", importance: "high" },
        { text: "Word/Google Docs/PPTXからのインポート精度が高く、過去資産を再利用しやすい", importance: "medium" },
        { text: "Filmstrip UIにより、ストーリー構成の推敲が視覚的かつ直感的に行える", importance: "medium" }
    ],
    cons: [
        { text: "PPTXエクスポート時にフォントやレイアウト崩れが発生しやすく、再編集が必要", importance: "high" },
        { text: "完全なオフライン環境では編集・実行が制限される", importance: "medium" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "日本語縦書き（Tategaki）の完全非対応",
            description: "CSSの縦書きレンダリングエンジンを持たないため、和風デザインや年賀状的な表現は不可能。無理に回転させても句読点が崩れる。",
            affectedUsers: ["国内向け広報担当", "出版・エンタメ業界のデザイナー"]
        }
    ],
    affiliateLinks: [
        { url: "https://gamma.app", label: "公式サイト", disclosure: "Standard", isSponsored: false }
    ],
    metaDescription: "AIプレゼンツールGammaの徹底検証レビュー。Markdownからのスライド自動生成機能や、日本語縦書き非対応の注意点、推奨プラン(Plus)のROIを解説。",
    keywords: ["Gamma", "AIプレゼンテーション", "スライド生成", "ドキュメント作成", "SaaS"],
    content: `
        <h2>Gammaの革命性：情報は「配置」するものではなく「構造化」するもの</h2>
        <p>Gammaは従来の「キャンバスベース」のツールとは異なり、Web技術をベースとした「ドキュメントベース」の生成エンジンです。ユーザーはデザインの微調整から解放され、コンテンツの中身に集中できます。</p>
        
        <h3>導入のメリット</h3>
        <ul>
            <li><strong>圧倒的な時短効果：</strong>Markdownのメモから数クリックでプレゼン資料が完成。平均して週5.6時間の工数削減が見込めます。</li>
            <li><strong>レスポンシブデザイン：</strong>生成物は本質的にWebページであり、あらゆるデバイスで最適に表示されます。</li>
        </ul>

        <h3>注意点と推奨プラン</h3>
        <p>日本語の縦書きには対応していないため、用途は横書きのビジネス文書に限定されます。SaaS検証ラボとしては、透かし削除と無制限生成が可能な<strong>Plusプラン ($8/user)</strong>を強く推奨します。</p>
    `
};
