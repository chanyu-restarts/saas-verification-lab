import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "jasper-ai",
    category: "text-assistant",
    title: "Jasper (Jasper AI)",
    subtitle: "ブランドボイスを統一するエンタープライズ・マーケティング・コパイロット",
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
        score: 9.2,
        summary: "汎用LLMでの『プロンプト試行錯誤』に疲弊しているSMEマーケティング担当者にとっての決定版。特に『Brand Voice』機能によるトーン統一と、SOC2準拠のセキュリティは、B2B企業が導入する際の必須要件を満たしている。",
        targetAudience: "専任マーケティング担当がいるB2B企業、複数のライターを抱える編集部"
    },

    radarData: [
        { category: "コストパフォーマンス", score: 7.0, industryAverage: 8.5 },
        { category: "使いやすさ", score: 8.0, industryAverage: 9.0 },
        { category: "機能性", score: 9.5, industryAverage: 8.0 },
        { category: "サポート", score: 8.5, industryAverage: 7.5 },
        { category: "処理速度", score: 9.0, industryAverage: 8.5 }
    ],

    pros: [
        { text: "Brand Voice機能により、誰が書いても企業の人格（トーン＆マナー）を統一可能", importance: "high" },
        { text: "GPT-4, Claude 3, PaLM 2などをタスクに応じて自動で切り替えるマルチモデル独自エンジン", importance: "high" },
        { text: "SOC2 Type 2準拠およびゼロリテンションポリシーによる高い安全性", importance: "medium" },
        { text: "Chrome拡張機能によりCMSやメール画面で直接呼び出し可能", importance: "medium" }
    ],

    cons: [
        { text: "Teams/Enterpriseプランは高額であり、コンテンツ制作頻度が低い企業ではROIが出にくい", importance: "high" },
        { text: "高度な設定画面や一部テンプレートの説明が英語のままの場合がある", importance: "medium" },
        { text: "クリエイティブな小説執筆やプログラミング支援には不向き", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "コンテンツ制作量の不足",
            description: "月に数本のブログ記事しか作成しない場合、高額な月額コストを正当化できない。",
            affectedUsers: ["更新頻度の低いWebサイト管理者", "小規模店舗"]
        },
        {
            title: "予算制約",
            description: "月額数百ドルの固定費負担が重い小規模事業者。",
            affectedUsers: ["個人事業主", "創業初期のスタートアップ"]
        }
    ],

    affiliateLinks: [
        { url: "https://www.jasper.ai/", label: "Jasper 公式サイト", disclosure: "公式リンク", isSponsored: false }
    ],

    metaDescription: "2026年版Jasper AIレビュー。日本の中小企業が導入すべき理由、ROI、およびDealbreakerを徹底解説。ChatGPTとの違いやBrand Voiceの実用性を検証。",
    keywords: ["Jasper AI", "生成AI", "マーケティング", "SaaS", "B2B", "コピーライティング"],

    content: `
        <h2>2026年の市場ポジショニング</h2>
        <p>Jasperは、汎用的な対話型AIであるChatGPTとは明確に異なり、企業のマーケティング成果を最大化するために設計された「B2B向けコンテンツオーケストレーション・プラットフォーム」です。2026年現在、単一のLLMに依存せず、OpenAI、Anthropic、Google等の最先端モデルを独自のレイヤーで統合・最適化するアプローチをとっています。</p>

        <h2>日本企業が知るべき技術的深層</h2>
        <ul>
            <li><strong>Brand Voice & Knowledge Base:</strong> 企業の過去のブログ、プレスリリース、スタイルガイドを読み込ませ、独自の「人格」を作成。日本語の敬語レベルや専門用語の使用ルールを厳格に適用可能です。</li>
            <li><strong>セキュリティ:</strong> SOC2 Type 2準拠、GDPR準拠。エンタープライズプランでは入力データがAIモデルの再学習に使用されないことが明記されており、機密情報を扱うB2B企業の最低条件をクリアしています。</li>
        </ul>

        <h2>ROI視点での評価</h2>
        <p>多くのSMEが「ChatGPTで十分ではないか」という疑問を抱きますが、JasperのROIは「プロンプトエンジニアリングの排除」と「編集時間の短縮」にあります。検証済みテンプレートと文脈理解により、初稿の完成度が高く、編集にかかる時間を20-30%削減できるとのデータがあります。</p>

        <h2>活用シミュレーション：B2B SaaS企業（従業員50名）</h2>
        <p><strong>背景:</strong> マーケティング担当は1名のみ。リソースが枯渇している状態。</p>
        <p><strong>導入効果:</strong> 「Brand Voice」に社長のインタビュー記事等を学習させ、信頼感あるトーンを構築。新機能キャンペーンでは、概要を入力するだけでブログ、SNS、プレスリリースを一括生成。外部ライターへの発注コスト（月額15万円相当）を削減しつつ、記事更新頻度を3倍に増強することに成功しました。</p>
    `
};
