import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "descript",
    category: "video-motion",
    title: "Descript",
    subtitle: "動画を「ドキュメントのように」編集するオールインワン・マルチメディアハブ",
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
        score: 8.8,
        summary: "専門的な動画編集スキルを持たない広報・人事・営業担当者にとっての革命的ツール。「Studio Sound」による音質改善は、高価な録音機材の代替として即座に元が取れるレベルである。",
        targetAudience: "社内マニュアル作成者、ウェビナー主催者、ポッドキャスト配信企業"
    },

    radarData: [
        { category: "コストパフォーマンス", score: 9.0, industryAverage: 8.0 },
        { category: "使いやすさ", score: 9.5, industryAverage: 6.0 },
        { category: "機能性", score: 8.0, industryAverage: 8.5 },
        { category: "サポート", score: 7.5, industryAverage: 7.5 },
        { category: "処理速度", score: 8.0, industryAverage: 8.0 }
    ],

    pros: [
        { text: "テキストを削除・修正するだけで動画編集が完了する直感的なUI", importance: "high" },
        { text: "「Studio Sound」機能により、劣悪な環境で録音された音声もスタジオ品質に変換可能", importance: "high" },
        { text: "「えー」「あー」などのフィラーワードをワンクリックで一括削除（日本語対応）", importance: "medium" },
        { text: "字幕生成や翻訳がツール内で完結し、外注費を削減できる", importance: "medium" }
    ],

    cons: [
        { text: "長時間の4K動画やレイヤー多用時に動作が不安定になり、クラッシュするリスクがある", importance: "high" },
        { text: "AI音声クローン（Overdub）作成時の同意文読み上げが英語必須であり、日本人にはハードルが高い", importance: "medium" },
        { text: "高度なカラーグレーディングやVFXには不向き", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "高度な映像表現の要求",
            description: "MVや映画のような複雑な合成、色調整が必要なプロジェクトには不適合。",
            affectedUsers: ["プロの映像クリエイター", "CM制作"]
        },
        {
            title: "PCスペックの不足",
            description: "低スペックのマシンでは動作が重く実用に耐えない。",
            affectedUsers: ["古い貸与PCを使用している営業部門"]
        },
        {
            title: "日本語カスタムボイスの完全運用",
            description: "英語での同意文読み上げが不可能な場合、自身の声のAI化ができない。",
            affectedUsers: ["英語が苦手な経営者"]
        }
    ],

    affiliateLinks: [
        { url: "https://www.descript.com/", label: "Descript 公式サイト", disclosure: "公式リンク", isSponsored: false }
    ],

    metaDescription: "2026年版Descriptレビュー。動画編集をテキスト編集に変える革新的ツールの日本企業向け仕様書。日本語文字起こし精度やStudio Soundの実力を検証。",
    keywords: ["Descript", "動画編集", "文字起こし", "AI", "SaaS", "業務効率化"],

    content: `
        <h2>2026年の市場ポジショニング</h2>
        <p>Descriptは、従来のタイムライン型編集ソフトとは根本的に異なる「テキストエディタ型動画編集ツール」です。動画をWord文書のように編集できるコンセプトは、編集スキルを持たないSMEの現場担当者にとって、マニュアル作成やウェビナーアーカイブ化の標準ツールとしての地位を確立しています。</p>

        <h2>構造化仕様詳細：日本語環境における実用性</h2>
        <ul>
            <li><strong>文字起こし (Transcription):</strong> 22言語以上に対応し、日本語の精度も飛躍的に向上。話者分離も自動ですが、専門用語の手動修正は必須プロセスです。</li>
            <li><strong>Studio Sound:</strong> AIによる強力なノイズ除去機能。防音設備のない会議室での録音でも、スタジオ品質に近いクリアな音声に変換します。</li>
            <li><strong>AI Dubbingの注意点:</strong> 自身の声をAIクローン化する際の「同意ステートメント」読み上げは英語で行う必要があり、これが日本市場における障壁となっています。</li>
        </ul>

        <h2>ROI視点での評価</h2>
        <p>最大のROIは「編集スキルの民主化」と「外注費削減」です。フィラーカットやノイズ除去を社内で数秒で完了でき、字幕作成や翻訳もツール内で完結するため、翻訳会社や制作会社への外注費をゼロにすることが可能です。</p>

        <h2>活用シミュレーション：製造業・品質管理部門</h2>
        <p><strong>背景:</strong> 工場の作業手順マニュアルを動画化したいが、現場の騒音がひどく声が聞こえない。多言語化も必要。</p>
        <p><strong>導入効果:</strong> スマートフォンで撮影した動画をDescriptに取り込み、「Studio Sound」で機械ノイズを除去。言い淀みをテキスト削除でカットし、AI翻訳機能で英語・ベトナム語版を作成。専門業者に依頼すれば数百万かかるプロジェクトを、サブスク費用と社内工数のみで完結させました。</p>
    `
};
