
import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "perplexity-enterprise-2026",
    category: "ai-platform",
    title: "神ツールか、セキュリティの悪夢か：Perplexity導入前に知るべき「検索」のリスク",
    subtitle: "Perplexity Enterprise (2026) 徹底検証",
    publishedAt: "2026-01-04",
    updatedAt: "2026-01-04",
    author: {
        name: "検証ラボ編集部",
        title: "エンタープライズAI分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },
    verdict: {
        type: "CONSIDER",
        score: 8.5,
        summary: "【要厳格管理】検索・調査能力は神懸かり的だが、コンシューマー向けの攻撃的な拡大戦略が企業ガバナンスと衝突する恐れがある。情シスによる完全なコントロールが必須。",
        targetAudience: "セキュリティリスクを許容・管理できる、高度な情報収集を求める専門調査組織",
    },
    radarData: [
        { category: "機能性", score: 10, industryAverage: 8.0 },
        { category: "コスト", score: 8.0, industryAverage: 7.0 },
        { category: "速度", score: 10, industryAverage: 7.5 },
        { category: "日本語力", score: 9.0, industryAverage: 8.5 },
        { category: "サポート", score: 6.0, industryAverage: 6.0 },
        { category: "安定性", score: 8.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "全ての回答に引用（Citation）が付く、信頼性の高い検索体験", importance: "high" },
        { text: "Deep Researchによる、アナリスト級の自律的な深掘り調査", importance: "high" },
        { text: "複数のトップモデル（GPT-4o, Claude 3等）を切り替えて利用可能", importance: "medium" },
    ],
    cons: [
        { text: "学生や一般ユーザーを「販売員」化する攻撃的なリファラル戦略への懸念", importance: "high" },
        { text: "非Enterprise環境におけるデータプロファイリングとGDPR上の懸念", importance: "high" },
        { text: "スクレイピングに関するパブリッシャーとの係争リスク", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告：シャドーITの温床になるリスク",
            description: "Perplexityは学生向けキャンペーンや現金報酬付き紹介プログラムなど、B2C的なグロースハックを多用しています。従業員が個人のアカウント（Pro版）で業務データを入力してしまうと、GDPRレベルでの完全な匿名化が保証されないリスクがあります。導入するなら必ず「Enterpriseプラン」で契約し、SSOでガチガチに管理する必要があります。",
            affectedUsers: [
                "従業員のITリテラシー管理に自信がない組織",
                "厳格なデータ隔離（エアギャップ等）が求められる防衛・公的機関",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://www.perplexity.ai/enterprise",
            label: "公式サイト（注意点あり）",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイト（注意点あり）",
    content: `<h3>検索エンジンを過去にする性能</h3><p>機能面だけを見れば、Perplexity Enterpriseは最高です。金融機関や法律事務所において、<strong>Deep Research</strong>機能は数時間かかる調査業務を数分に短縮します。常に最新のウェブ情報を引用付きで提示する能力は、従来のLLMにはない決定的な強みです。</p><h3>アフィリエイト戦略の危うさ</h3><p>しかし、B2Bツールとしての「お行儀」には疑問符がつきます。現金報酬でのユーザー獲得や、学生をアンバサダーにする戦略は、企業のコンプライアンス担当者を不安にさせる要素です。</p><h3>データガバナンスの死角</h3><p>セキュリティ研究者は、Enterprise以外のプランにおけるデータ利用（プロファイリング）のリスクを警告しています。便利なツールであるからこそ、従業員が勝手に個人利用しやすく、そこから情報が漏れる「シャドーAI」のリスクが最も高いツールと言えます。導入は「劇薬」を扱う覚悟で。</p>`,
    metaDescription: "Perplexity Enterprise (2026) 徹底検証。検索能力は神懸かり的だが、シャドーITリスクと法務上の懸念に要注意。",
    keywords: ["Perplexity", "Enterprise", "Deep Research", "セキュリティリスク", "2026"],
};
