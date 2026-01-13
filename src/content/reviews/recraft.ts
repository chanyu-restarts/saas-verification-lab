import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "recraft",
    category: "image-design",
    title: "Recraft: エンジニアのためのベクター生成AIと商用利用権",
    subtitle: "ラスターの限界を超え、SVG編集と実装を直結させるデザインツール",
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
        summary: "SVGをネイティブ生成できる唯一無二の特性により、レスポンシブ対応やUI実装の工数を激減させる。商用利用には有料プランが必須だが、アイコンセット作成などのデザインリソース不足を解消する。",
        targetAudience: "フロントエンドエンジニア、個人開発者、UIデザイナー不在のチーム"
    },
    radarData: [
        { category: "機能性", score: 9.5, industryAverage: 7.5 },
        { category: "使いやすさ", score: 9.0, industryAverage: 8.5 },
        { category: "処理速度", score: 8.5, industryAverage: 8.0 },
        { category: "コストパフォーマンス", score: 9.0, industryAverage: 8.0 },
        { category: "サポート", score: 8.0, industryAverage: 7.5 }
    ],
    pros: [
        { text: "ネイティブベクター生成：クリーンなトポロジーを持つSVGを出力し、生成後のパス編集が容易", importance: "high" },
        { text: "スタイルの一貫性：Style Set機能により、統一感のあるアイコンセットを一括生成可能", importance: "high" },
        { text: "テキストレンダリング：スペルミスが少なく、ロゴやバッジ作成において実用レベルの精度", importance: "medium" },
        { text: "フォーマット多様性：Lottieアニメーションの出力もネイティブサポートし実装工数を削減", importance: "medium" }
    ],
    cons: [
        { text: "Freeプランの商用禁止：無料版での生成物には商用利用権がなく、権利侵害リスクがある", importance: "high" },
        { text: "「綺麗すぎる」バイアス：整った出力になりやすく、芸術的なカオスやテクスチャ感はMidjourneyに劣る", importance: "medium" },
        { text: "クレジット消費の視認性：試行錯誤中もクレジットを消費するためコストが見えにくい", importance: "low" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "Freeプランでの商用利用",
            description: "「完全無料で商用利用可能な素材」を探している場合、Recraftは不適。Freeプランは商用禁止かつパブリックギャラリーへの強制公開となるため、有料プランが必須条件となる。",
            affectedUsers: ["予算ゼロのプロジェクト", "権利関係にルーズな運用体制"]
        }
    ],
    affiliateLinks: [
        { url: "https://www.recraft.ai", label: "Recraft Official", disclosure: "Official Site", isSponsored: false }
    ],
    metaDescription: "Recraftのエンジニアリング活用レビュー。ベクター(SVG)生成の品質、商用利用権の法的構造、UI開発におけるROIを解説。",
    keywords: ["Recraft", "ベクター生成AI", "SVG", "UIデザイン", "アイコン生成"],
    content: `
    <h2>エンジニアリング推奨理由</h2>
    <p>Recraftは「SVG」を直接生成するため、エンジニアは生成後に色変更や要素の削除をコードレベル（SVGタグ）やベクターツールで容易に行えます。これは、レスポンシブデザイン対応やRetinaディスプレイ対応が必須の現代的なUI開発フローにおいて、ラスター画像では解決できない「アセットパイプラインのボトルネック」を解消します。</p>

    <h2>ベクター編集と権利関係</h2>
    <h3>ベクターデータの品質</h3>
    <p>従来のトレーサーとは異なり、最初からベクターとして描画するため、人間が描いたようなクリーンなパス構造を持ちます。また、最新モデルV3はテキスト生成能力が高く、正確なスペルを含むロゴ作成が可能です。</p>

    <h3>商用利用の法的枠組み</h3>
    <p>利用規約はプランによる「バイナリー構造」です。Freeプランは商用利用厳禁かつ著作権はRecraft側に帰属しますが、有料プランでは所有権がユーザーに移転し、無制限の商用利用が可能となります。企業プロダクトへの組み込みには有料プランが必須です。</p>

    <h2>ROIロジック</h2>
    <p>デザイナーへの外注費（$3,100相当）を、月額$20のツールコストで代替し、さらに納期を2週間から半日に短縮できるシミュレーションでは、約15,400%という驚異的なROIが算出されます。</p>
  `
};
