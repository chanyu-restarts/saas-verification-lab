import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "guidde",
    category: "automation-agent",
    title: "Guidde: ドキュメンテーション自動化とメンテナンス革命",
    subtitle: "「撮り直し」を不要にする、テキストベースの動画マニュアル作成ツール",
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
        score: 9.0,
        summary: "操作を記録するだけで動画と手順書を同時生成。最大の特徴は「テキスト修正で動画が直る」メンテナンス性であり、アジャイル開発におけるドキュメント陳腐化を防ぐ。",
        targetAudience: "QAエンジニア、カスタマーサクセス、社内システム管理者"
    },
    radarData: [
        { category: "機能性", score: 8.5, industryAverage: 7.5 },
        { category: "使いやすさ", score: 9.5, industryAverage: 8.0 },
        { category: "処理速度", score: 10.0, industryAverage: 7.0 },
        { category: "コストパフォーマンス", score: 9.0, industryAverage: 8.0 },
        { category: "サポート", score: 8.0, industryAverage: 7.5 }
    ],
    pros: [
        { text: "圧倒的なメンテナンス性：文言修正だけでAI音声と字幕が更新されるため、UI変更時の撮り直しが不要", importance: "high" },
        { text: "Magic Capture：DOM要素を解析し、操作内容を自動的にテキスト化して手順書を作成", importance: "high" },
        { text: "多言語展開：日本語マニュアルから英語音声を即座に自動生成でき、グローバル展開が容易", importance: "medium" },
        { text: "自動墨消し（Magic Blur）：機密情報やPIIを自動検出してぼかしを入れるセキュリティ機能", importance: "medium" }
    ],
    cons: [
        { text: "クリエイター課金：「作る人」単位での課金となるため、チーム全員を編集者にする運用はコスト増", importance: "medium" },
        { text: "表現力の限界：操作説明に特化しており、Premiere Proのような高度な映像演出は不可", importance: "low" },
        { text: "Freeプランの透かし：無料版ではロゴが入り、エクスポート形式も制限される", importance: "low" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "マーケティング用途の高品質ビデオ",
            description: "プロモーションビデオのような高度な演出やトランジションを求める場合、Guiddeは不適。あくまで操作説明（How-to）に特化したツールである。",
            affectedUsers: ["映像クリエイター", "ブランドマーケティング担当"]
        }
    ],
    affiliateLinks: [
        { url: "https://www.guidde.com", label: "Guidde Official", disclosure: "Official Site", isSponsored: false }
    ],
    metaDescription: "Guiddeのマニュアル作成効率とメンテナンス性を評価。動画とテキストの同時生成、AI音声修正機能によるドキュメント更新の革命的変化を解説。",
    keywords: ["Guidde", "マニュアル作成", "DAP", "自動化", "動画マニュアル"],
    content: `
    <h2>エンジニアリング推奨理由</h2>
    <p>Guiddeの最大の推奨理由は「メンテナンス性」にあります。動画のナレーションやテロップを、動画編集ソフトではなく「テキストエディタ」で修正できるため、UI変更のたびに再撮影する必要がありません。これにより、開発サイクルとドキュメント更新のタイムラグを解消します。</p>

    <h2>作成・修正の自動化効率</h2>
    <h3>Magic Captureとマルチモーダル出力</h3>
    <p>ブラウザ操作を記録するだけで、DOM要素を解析してステップごとの説明を生成します。ベンチマークでは作成時間を従来比11分の1に短縮可能です。また、動画とテキスト手順書を同時に生成するため、ユーザーの好みに合わせた情報提供が可能です。</p>

    <h3>修正容易性とAI編集</h3>
    <p>生成されたスクリプトを修正するだけで、AI音声が再生成され動画タイミングも調整されます。100種類以上の言語に対応し、クリック一つで多言語化が可能です。Magic Blur機能により、APIキーなどの機密情報を自動で隠すこともできます。</p>

    <h2>ROIロジック</h2>
    <p>機能リリースごとのドキュメント作成工数と、問い合わせ対応コストの削減を合わせると、月額$35のコストに対し約2,042%のROIが試算されます。</p>
  `
};
