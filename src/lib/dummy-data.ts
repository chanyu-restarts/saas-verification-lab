/**
 * @AI_AGENT_INSTRUCTION
 * 新しいレビュー記事を追加する際のルール:
 * 1. `slug` は `title` から英語のURLスラッグを生成すること。
 * 2. `category` は適切な既存IDを選ぶか、なければ `categories` 配列に新規追加すること。
 * 3. `status` は常に "Verified" とすること。
 * 4. `affiliateLinks` は情報がなければ空配列 `[]` でよい。
 * 5. 本文テキストは適切なHTML/JSXタグ（h2, p, ul等）で整形して `content` に格納すること。
 */
import type { ReviewData } from "./types";

/**
 * HeyGen レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * 検証した主観ではなく、公式仕様に基づく客観的なデータ。
 */
export const heygenReview: ReviewData = {
    slug: "heygen-review",
    category: "video-generation",
    title: "HeyGen (2026年最新仕様): AI動画生成の業界標準",
    subtitle: "175+言語対応、Interactive Avatar、リアルタイム会話機能を搭載したエンタープライズ向けプラットフォーム",
    publishedAt: "2026-01-03",
    updatedAt: "2026-01-03",

    author: {
        name: "検証ラボ編集部",
        title: "スペック分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },

    verdict: {
        type: "BUY",
        score: 9.0,
        summary: "仕様によると、HeyGenは175以上の言語・方言に対応し、700以上のストックアバター、リアルタイムInteractive Avatar機能を提供。Creator Plan $29/月から利用可能で、業界標準のAI動画生成プラットフォームとして位置づけられている。",
        targetAudience: "グローバル展開を視野に入れたマーケティング担当者、研修コンテンツ制作者、カスタマーサポート部門",
    },

    radarData: [
        { category: "価格競争力", score: 7.0, industryAverage: 6.0 },
        { category: "音声品質", score: 9.0, industryAverage: 7.0 },
        { category: "リップシンク", score: 9.5, industryAverage: 6.5 },
        { category: "生成速度", score: 8.0, industryAverage: 7.0 },
        { category: "操作性", score: 8.5, industryAverage: 6.5 },
        { category: "多言語対応", score: 9.5, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "175以上の言語・方言に対応したVideo Translate機能（リップシンク自動調整付き）",
            importance: "high",
        },
        {
            text: "700以上のストックアバター、カスタムアバター作成、写真からのアバター生成に対応",
            importance: "high",
        },
        {
            text: "Interactive Avatar機能でリアルタイム会話・Zoom連携が可能",
            importance: "high",
        },
        {
            text: "Creator Plan $29/月からスタート可能（年払い$24/月）",
            importance: "medium",
        },
        {
            text: "300以上のAIボイス、ボイスクローン機能を搭載",
            importance: "medium",
        },
        {
            text: "4K出力対応（Team/Enterprise Plan）、API連携充実",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "無料プランは月3本・3分以内・720pで透かし付き",
            importance: "high",
        },
        {
            text: "高度な機能（Interactive Avatar等）はクレジット消費制",
            importance: "medium",
        },
        {
            text: "Team Planは2025年1月に「HeyGen For Business」へ移行予定",
            importance: "medium",
        },
        {
            text: "プレミアムアドオンアバターは別途費用が発生",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "無料プランの制限を理解しておくべき",
            description: "仕様によると、無料プランは月3本・各3分以内・720p解像度で、すべての動画にHeyGen透かしが入る。プロフェッショナル用途には有料プランへのアップグレードが必須。",
            affectedUsers: [
                "透かしなしの動画が必要なビジネスユーザー",
                "月3本以上の動画を制作する必要があるユーザー",
                "1080p/4K解像度が必要なユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://heygen.com/?ref=verification-lab",
            label: "HeyGen公式サイト（無料プランあり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "HeyGen 2026年最新仕様レビュー。175+言語対応、700+アバター、Interactive Avatar、Creator Plan $29/月。公式スペックに基づく客観的な分析。",
    keywords: ["HeyGen", "2026", "AI動画生成", "Interactive Avatar", "多言語対応", "料金プラン"],
};

/**
 * Synthesia レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const synthesiaReview: ReviewData = {
    slug: "synthesia-review",
    category: "video-generation",
    title: "Synthesia (2026 Enterprise Edition): エンタープライズ向けビジネス標準",
    subtitle: "Fortune 100企業の90%以上が採用。Express-2アバター、140+言語対応、ISO 42001認証取得",
    publishedAt: "2026-01-03",
    updatedAt: "2026-01-03",

    author: {
        name: "検証ラボ編集部",
        title: "スペック分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },

    verdict: {
        type: "BUY",
        score: 8.8,
        summary: "仕様によると、Synthesiaは50,000社以上、Fortune 100企業の90%以上が採用するエンタープライズ向けプラットフォーム。Express-2アバター（全身・ジェスチャー対応）、140+言語、1クリック翻訳機能を提供。ISO 42001 AI認証取得でセキュリティ重視。",
        targetAudience: "大企業のL&D（人材開発）部門、コンプライアンス研修担当者、グローバル社内コミュニケーション責任者",
    },

    radarData: [
        { category: "価格競争力", score: 6.0, industryAverage: 6.0 },
        { category: "音声品質", score: 8.5, industryAverage: 7.0 },
        { category: "リップシンク", score: 9.0, industryAverage: 6.5 },
        { category: "生成速度", score: 7.5, industryAverage: 7.0 },
        { category: "操作性", score: 9.0, industryAverage: 6.5 },
        { category: "多言語対応", score: 9.0, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "140以上の言語・アクセントに対応、1クリック翻訳機能（Enterprise）",
            importance: "high",
        },
        {
            text: "Express-2アバター：全身表示、自然なジェスチャー、複数アングル対応",
            importance: "high",
        },
        {
            text: "Fortune 100企業の90%以上が採用、50,000社以上の導入実績",
            importance: "high",
        },
        {
            text: "ISO 42001 AI認証取得、エンタープライズ級セキュリティ",
            importance: "medium",
        },
        {
            text: "29言語でボイスクローン対応、音声のトーン・ペーシング維持",
            importance: "medium",
        },
        {
            text: "Video Agents（双方向インタラクティブ動画）、Veo 3統合（Enterprise）",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "Enterprise機能（1クリック翻訳、Digital Twin等）は上位プラン限定",
            importance: "high",
        },
        {
            text: "一部の高度なExpressiveアバターはEnterprise専用",
            importance: "medium",
        },
        {
            text: "API Copilot（AI動画エディター）は2026年中リリース予定",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "小規模チームには機能過剰の可能性",
            description: "仕様によると、Synthesiaはエンタープライズ向けに最適化されており、大規模チーム向けのコラボレーション機能やAIガバナンスフレームワークが充実。個人クリエイターや小規模チームには機能過剰でコスト高になる可能性がある。",
            affectedUsers: [
                "月間動画制作数が10本未満の小規模チーム",
                "高度なセキュリティ・ガバナンス機能が不要なユーザー",
                "価格よりも機能のシンプルさを優先するユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://synthesia.io/?ref=verification-lab",
            label: "Synthesia公式サイト（無料デモあり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "Synthesia 2026年最新仕様レビュー。Fortune 100企業90%採用、Express-2アバター、140+言語、ISO 42001認証。エンタープライズ向け客観的分析。",
    keywords: ["Synthesia", "2026", "AI動画生成", "Express-2", "エンタープライズ", "多言語対応"],
};

/**
 * D-ID レビュー用データ
 * 
 * > **Note**: This data is based on official specifications as of Jan 2026.
 * Verification: Spec-Check Verified (Jan 2026)
 */
export const didReview: ReviewData = {
    slug: "d-id-review",
    category: "video-generation",
    title: "D-ID (2026 Creative Suite): リアルタイムAI Agents & API特化",
    subtitle: "1枚の画像からリアルな動画生成。100+言語対応、RAG技術搭載のインテリジェントAgents",
    publishedAt: "2026-01-03",
    updatedAt: "2026-01-03",

    author: {
        name: "検証ラボ編集部",
        title: "スペック分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },

    verdict: {
        type: "CONSIDER",
        score: 8.2,
        summary: "仕様によると、D-IDは1枚の静止画像からリアルな動画を生成できる「Live Portrait」技術が強み。100+言語対応、RAG（検索拡張生成）技術を活用したナレッジベース統合Agents、低レイテンシーのリアルタイムストリーミングAPI等、開発者向け機能が充実。",
        targetAudience: "AI製品を開発するエンジニア・スタートアップ、カスタマーサポートのAI化を検討する企業、クリエイティブエージェンシー",
    },

    radarData: [
        { category: "価格競争力", score: 7.5, industryAverage: 6.0 },
        { category: "音声品質", score: 8.0, industryAverage: 7.0 },
        { category: "リップシンク", score: 8.5, industryAverage: 6.5 },
        { category: "生成速度", score: 8.5, industryAverage: 7.0 },
        { category: "操作性", score: 7.5, industryAverage: 6.5 },
        { category: "多言語対応", score: 8.5, industryAverage: 5.5 },
    ],

    pros: [
        {
            text: "1枚の静止画像からリアルな動画アバターを生成（Live Portrait技術）",
            importance: "high",
        },
        {
            text: "100+言語対応、119言語・方言でのテキスト読み上げ",
            importance: "high",
        },
        {
            text: "RAG技術搭載のAI Agents：ナレッジベース統合でコンテキスト認識応答",
            importance: "high",
        },
        {
            text: "リアルタイムストリーミングAPI：低レイテンシーでビデオ通話並みの体験",
            importance: "medium",
        },
        {
            text: "Premium+ HDアバター、カスタム背景、感情・表情コントロール",
            importance: "medium",
        },
        {
            text: "API + Studio両対応：開発者もノーコードユーザーも利用可能",
            importance: "medium",
        },
    ],

    cons: [
        {
            text: "HeyGen/Synthesiaと比較してアバターのストック数が少ない",
            importance: "medium",
        },
        {
            text: "Studio UIは技術者向けで、非技術者には学習コストがある",
            importance: "medium",
        },
        {
            text: "Speaking Portraitの言語拡張は顧客需要ベースで段階的",
            importance: "low",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "API中心のプラットフォームであることを理解すべき",
            description: "仕様によると、D-IDは開発者向けAPI機能が強みで、既存システムへの統合を前提とした設計。完成されたエンドツーエンドのビデオ制作プラットフォームを求めるユーザーには、HeyGenやSynthesiaの方が適している可能性がある。",
            affectedUsers: [
                "コーディング不要の完全GUIソリューションを求めるユーザー",
                "既存システムへのAPI統合リソースがないチーム",
                "ストックアバターの豊富さを重視するユーザー",
            ],
        },
    ],

    affiliateLinks: [
        {
            url: "https://d-id.com/?ref=verification-lab",
            label: "D-ID公式サイト（API無料枠あり）",
            disclosure: "このリンク経由で申し込まれた場合、当ラボは紹介料を受け取ります。",
            isSponsored: false,
        },
    ],

    metaDescription: "D-ID 2026年最新仕様レビュー。Live Portrait技術、100+言語、RAG搭載AI Agents、リアルタイムAPI。開発者向け客観的分析。",
    keywords: ["D-ID", "2026", "AI動画生成", "Live Portrait", "AI Agents", "API"],
};










/**
 * ChatGPT (2026) Review Data
 */
export const chatgptReview: ReviewData = {
    slug: "chatgpt-review-2026",
    category: "chat-ai",
    title: "ChatGPT (2026) 徹底レビュー：王者の座は「o1 Pro」で守れるか？",
    subtitle: "推論能力は最強だが、インフラの脆弱さと「怠慢」が業務リスクに",
    publishedAt: "2026-01-04",
    updatedAt: "2026-01-04",
    author: {
        name: "検証ラボ編集部",
        title: "エンタープライズAI分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },
    verdict: {
        type: "BUY",
        score: 8.8,
        summary: "生成AIの代名詞。新機能「Deep Research」と推論モデル「o1」は圧倒的だが、頻発するシステム障害と回答の省略（怠慢）が目立つ。月額200ドルのProプランが実務の分水嶺となる。",
        targetAudience: "研究開発（R&D）部門、Deep Researchを活用したいマーケター、Microsoft経済圏の企業",
    },
    radarData: [
        { category: "機能性", score: 10, industryAverage: 8.0 },
        { category: "コスト", score: 6.0, industryAverage: 7.0 },
        { category: "速度", score: 7.0, industryAverage: 7.5 },
        { category: "日本語力", score: 7.0, industryAverage: 8.5 },
        { category: "サポート", score: 6.0, industryAverage: 6.0 },
        { category: "安定性", score: 4.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "o1 Proモデルによる圧倒的な推論・数学能力", importance: "high" },
        { text: "Deep Researchによる自律的な市場調査", importance: "high" },
        { text: "Canvas機能によるドキュメント共同編集", importance: "medium" },
        { text: "DALL·E 3、データ分析などのオールインワン機能", importance: "medium" },
    ],
    cons: [
        { text: "世界規模のシステム障害が年数回発生する", importance: "high" },
        { text: "モデルが回答を省略する「怠慢（Laziness）」現象", importance: "high" },
        { text: "Proプラン（$200/月）が高額すぎる", importance: "medium" },
        { text: "日本語出力が依然として「翻訳調」で不自然", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: インフラの不安定さとSLAの欠如",
            description: "2025年に数回の大規模障害（10時間以上の停止含む）が発生しており、ミッションクリティカルな業務への依存は危険です。また、コード生成時に「残りは自分で書いて」と省略されるケースが増加しており、生産性を阻害します。",
            affectedUsers: [
                "24時間365日の安定稼働を求めるカスタマーサポート",
                "月額200ドルの予算確保が難しい個人開発者",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://chatgpt.com/",
            label: "ChatGPT公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイト（Freeプランあり）",
    content: `<h3>業界標準だが、もはや「万能」ではない</h3><p>ChatGPTは依然として業界のリーダーですが、2026年の現状は「絶対王者」とは言えません。特にOpenAIが推論コストの増大に伴い、月額200ドルの「Pro」プランへ誘導を強めている点は、ユーザー選別の始まりと言えます。</p><h3>主な特徴と実力</h3><ul><li><strong>o1 / o3 シリーズ（推論モデル）:</strong> 「考える」時間を設けることで、複雑な数学や科学の難問を解く能力は他社を圧倒しています。研究開発（R&D）部門には必須のツールです。</li><li><strong>Deep Research:</strong> ユーザーの代わりにWebを検索・調査し、レポートを作成する機能は、市場調査の初動を劇的に短縮します。</li><li><strong>Canvas:</strong> エディタ画面での共同作業は便利ですが、現時点では「修正指示が無視される」などのバグも散見されます。</li></ul><h3>ビジネス利用の懸念点</h3><p>最大のリスクは<strong>「稼働の不安定さ」</strong>です。Azureの障害に巻き込まれる形でのダウンタイムや、フロントエンドの不具合が定期的に発生しています。また、日本語の出力品質に関しては、Claudeと比較して「硬い」「不自然」と感じる場面が多く、顧客向けメールの作成などにはリライトが必要です。</p>`,
    metaDescription: "ChatGPT (2026) レビュー。o1 ProモデルやDeep Researchは強力だが、インフラの不安定さと「怠慢」問題に注意が必要。",
    keywords: ["ChatGPT", "o1", "Deep Research", "OpenAI", "2026"],
};

/**
 * Gemini (2026) Review Data
 */
export const geminiReview: ReviewData = {
    slug: "gemini-review-2026",
    category: "chat-ai",
    title: "Gemini (Google) 徹底レビュー：Workspace統合の「巨人」か、期待外れか",
    subtitle: "100万トークンは革命的だが、深刻なハルシネーションに注意",
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
        score: 7.9,
        summary: "Google Workspaceとの連携と100万トークンのコンテキストウィンドウが最大の武器。ただし、事実と異なる回答をする「ハルシネーション」が多く、日本語の不自然さも課題。",
        targetAudience: "Google Workspaceを既に導入している企業、長文ドキュメント分析が必要なリサーチャー",
    },
    radarData: [
        { category: "機能性", score: 9.0, industryAverage: 8.0 },
        { category: "コスト", score: 9.0, industryAverage: 7.0 },
        { category: "速度", score: 8.0, industryAverage: 7.5 },
        { category: "日本語力", score: 5.0, industryAverage: 8.5 },
        { category: "サポート", score: 7.0, industryAverage: 6.0 },
        { category: "安定性", score: 6.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "100万トークン超の超ロングコンテキスト", importance: "high" },
        { text: "Docs, Gmail, Driveとのシームレスな連携", importance: "high" },
        { text: "動画・音声をネイティブに理解するマルチモーダル性能", importance: "medium" },
        { text: "Google One契約に含まれる高いコストパフォーマンス", importance: "medium" },
    ],
    cons: [
        { text: "もっともらしい嘘（ハルシネーション）の頻度が高い", importance: "high" },
        { text: "過剰な安全フィルターが業務の邪魔をする", importance: "high" },
        { text: "日本語出力が不自然で「ポンコツ」と評されることも", importance: "medium" },
        { text: "検索能力はあるが、事実確認には不向き", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: 信頼性の低さと過剰コンプライアンス",
            description: "検索巨人でありながら、回答の正確性に欠けます。また、画像生成や編集において無害な指示でも「安全ポリシー違反」として拒否されることが多く、クリエイティブ業務でのストレス要因となっています。",
            affectedUsers: [
                "正確な事実確認を必要とする法務・調査業務",
                "自然な日本語文章を求めるライター",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://gemini.google.com/",
            label: "Gemini公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "Google Workspaceで試す",
    content: `<h3>Google経済圏の住人には「最強」のサブスク</h3><p>Geminiの価値は、単体性能よりも「Google Workspaceの中にいる」ことにあります。Gmailの要約やドライブ内の資料検索など、実務への統合レベルは他社を圧倒しています。特に、1時間の会議動画や数百ページの資料を一発で読み込める<strong>100万トークンのコンテキスト</strong>は、RAG（検索拡張生成）の構築コストを無効化するほどの破壊力があります。</p><h3>精度の課題</h3><p>一方で、言語モデルとしての「知能」には疑問符がつきます。日本のユーザーからは「日本語が直訳調で使いにくい」「指示を守らない」といった声が多く上がっています。また、ハルシネーション（嘘）の頻度が競合と比較しても高く、出力された情報のファクトチェックが欠かせません。</p><p>セキュリティ面では、無料版は学習データに利用されるため、企業利用では必ず<strong>Business/Enterpriseプラン</strong>を契約する必要があります。</p>`,
    metaDescription: "Gemini (2026) レビュー。Google Workspace連携と100万トークンが強みだが、ハルシネーションと日本語の不自然さが課題。",
    keywords: ["Gemini", "Google", "Workspace", "100万トークン", "2026"],
};

/**
 * Claude (2026) Review Data
 */
export const claudeReview: ReviewData = {
    slug: "claude-review-2026",
    category: "chat-ai",
    title: "Claude (Anthropic) 徹底レビュー：エンジニアと文筆家が選ぶ「最高傑作」",
    subtitle: "日本語能力とコーディングはNo.1。しかしサポート体制は「絶望的」",
    publishedAt: "2026-01-04",
    updatedAt: "2026-01-04",
    author: {
        name: "検証ラボ編集部",
        title: "エンタープライズAI分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },
    verdict: {
        type: "BUY",
        score: 9.2,
        summary: "「Artifacts」機能で開発体験を革命し、最も人間らしい日本語を書くAI。性能は最高峰だが、サポート不在によるアカウント誤BANや請求トラブルが最大のリスク。",
        targetAudience: "エンジニア、ライター、高品質な日本語出力を求めるプロフェッショナル",
    },
    radarData: [
        { category: "機能性", score: 9.0, industryAverage: 8.0 },
        { category: "コスト", score: 7.0, industryAverage: 7.0 },
        { category: "速度", score: 8.0, industryAverage: 7.5 },
        { category: "日本語力", score: 10, industryAverage: 8.5 },
        { category: "サポート", score: 2.0, industryAverage: 6.0 },
        { category: "安定性", score: 7.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "Artifactsによるプレビュー付きコーディング体験", importance: "high" },
        { text: "GPT-4oを凌駕する自然で流暢な日本語能力", importance: "high" },
        { text: "文脈を読み取る「行間」の理解力", importance: "high" },
        { text: "憲法AIによる高い安全性", importance: "medium" },
    ],
    cons: [
        { text: "サポートが機能しておらず、トラブル時に連絡がつかない", importance: "high" },
        { text: "誤検知によるアカウント停止（BAN）のリスク", importance: "high" },
        { text: "UIの完全日本語化が遅れている", importance: "medium" },
        { text: "高負荷時の制限が厳しい", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: サポート体制の欠如",
            description: "性能は素晴らしいですが、SaaSとしての運営体制に深刻な欠陥があります。課金トラブルやアカウント誤停止が発生しても、有人サポートからの返信は期待できません。ビジネスの主要インフラとして依存するには、このリスクの許容が必要です。",
            affectedUsers: [
                "即時のトラブルシューティングを求める企業",
                "アカウント停止が業務停止に直結するフリーランス",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://claude.ai/",
            label: "Claude公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイト（Freeプランあり）",
    content: `<h3>「書く」「創る」人のための最高峰</h3><p>Claudeは、現時点で<strong>「最も日本語が上手い」</strong>AIです。謝罪メールから情緒的なコピーライティングまで、修正不要なレベルのアウトプットを出せるのはClaudeだけです。また、右画面でコードやUIをプレビューできる<strong>「Artifacts」</strong>機能は、フロントエンド開発のプロセスを根本から変えました。</p><h3>導入の壁は「運営への信頼」</h3><p>プロダクトは超一流ですが、サービス運営は三流と言わざるを得ません。Reddit等では「理由なきアカウント停止」や「二重請求」に対する悲鳴が溢れています。日本法人のプレゼンスも弱く、エンタープライズ契約を結ぶ際の後ろ盾に不安が残ります。</p><p>それでもなお、その性能の高さゆえに多くのプロフェッショナルが課金し続けているのが現状です。導入する際は、バックアップのアカウント確保を推奨します。</p>`,
    metaDescription: "Claude (2026) レビュー。日本語能力とコーディングは最高峰だが、サポート体制に重大な懸念あり。",
    keywords: ["Claude", "Anthropic", "Artifacts", "日本語能力", "2026"],
};

/**
 * Perplexity (2026) Review Data
 */
export const perplexityReview: ReviewData = {
    slug: "perplexity-review-2026",
    category: "chat-ai",
    title: "Perplexity 徹底レビュー：検索の未来か、著作権の破壊者か",
    subtitle: "情報収集速度は爆速。しかし企業導入には「訴訟リスク」の壁",
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
        score: 8.0,
        summary: "Web検索とAI回答を統合した「回答エンジン」。出典明記で信頼性は高いが、日経新聞など国内外のメディアから著作権侵害で訴訴されており、企業コンプライアンス上の時限爆弾となっている。",
        targetAudience: "迅速な情報収集を求めるリサーチャー、最新ニュースを追う専門職（ただし個人利用推奨）",
    },
    radarData: [
        { category: "機能性", score: 8.0, industryAverage: 8.0 },
        { category: "コスト", score: 8.0, industryAverage: 7.0 },
        { category: "速度", score: 10, industryAverage: 7.5 },
        { category: "日本語力", score: 6.0, industryAverage: 8.5 },
        { category: "サポート", score: 3.0, industryAverage: 6.0 },
        { category: "安定性", score: 3.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "常に最新のWeb情報を反映した回答", importance: "high" },
        { text: "明確な出典（Citations）によるファクトチェックの容易さ", importance: "high" },
        { text: "GPT-4oやClaude 3.5など複数モデルの切り替えが可能", importance: "medium" },
        { text: "Deep Researchによる深掘り調査", importance: "medium" },
    ],
    cons: [
        { text: "国内外での著作権侵害訴訟リスク（日経・朝日など）", importance: "high" },
        { text: "日本語検索において英語ソースに偏る傾向", importance: "medium" },
        { text: "サポートからの応答がないという報告多数", importance: "medium" },
        { text: "Proプランでも利用制限がかかる場合がある", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: コンプライアンスと訴訟リスク",
            description: "現在、複数の大手メディアから提訴されています。裁判の結果次第では、Perplexityを使って作成した資料が著作権侵害生成物とみなされるリスクがあり、法務部門の審査が厳しい日本企業での導入は極めて困難です。",
            affectedUsers: [
                "コンプライアンス重視の上場企業",
                "国内ローカル情報の精緻な検索",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://www.perplexity.ai/",
            label: "Perplexity公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイトを見る",
    content: `<h3>ググる手間をゼロにする「回答エンジン」</h3><p>Perplexityは、検索結果のリンクを開いて回るという苦痛から人類を解放しました。複数の最新モデル（ClaudeやGPT-4o）を月額20ドルの中で切り替えて使える点は、コストパフォーマンス最強のツールと言えます。</p><h3>法務リスクという地雷</h3><p>しかし、その利便性は「メディアのコンテンツを無断利用している」という批判の上に成り立っています。日本でも日経新聞や朝日新聞が抗議・提訴を行っており、対岸の火事ではありません。業務で利用する場合、あくまで「情報ソースの発見」に留め、アウトプットの生成自体はクリーンな環境（契約済みのChatGPT Enterprise等）で行うのが安全策です。</p>`,
    metaDescription: "Perplexity (2026) レビュー。検索速度は最高だが、著作権訴訟リスクにより企業導入には慎重な判断が必要。",
    keywords: ["Perplexity", "AI検索", "著作権", "2026"],
};

/**
 * Monica (2026) Review Data
 */
export const monicaReview: ReviewData = {
    slug: "monica-review-2026",
    category: "chat-ai",
    title: "Monica 徹底レビュー：便利すぎる「諸刃の剣」",
    subtitle: "最強のブラウザ統合ツール。代償は「全閲覧データのアクセス権」",
    publishedAt: "2026-01-04",
    updatedAt: "2026-01-04",
    author: {
        name: "検証ラボ編集部",
        title: "エンタープライズAI分析チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "公式仕様と公開情報に基づく客観的な分析を提供。",
    },
    verdict: {
        type: "AVOID",
        score: 6.5,
        summary: "Chrome拡張機能として動作するオールインワンAI。全モデル搭載＆ブラウザ操作は神レベルの便利さだが、セキュリティ権限の広さと運営元の不透明さが企業導入の致命的な壁。",
        targetAudience: "リスク許容度の高い個人ユーザー（企業利用は非推奨）",
    },
    radarData: [
        { category: "機能性", score: 8.0, industryAverage: 8.0 },
        { category: "コスト", score: 4.0, industryAverage: 7.0 },
        { category: "速度", score: 9.0, industryAverage: 7.5 },
        { category: "日本語力", score: 8.0, industryAverage: 8.5 },
        { category: "サポート", score: 1.0, industryAverage: 6.0 },
        { category: "安定性", score: 2.0, industryAverage: 7.0 },
    ],
    pros: [
        { text: "ブラウザサイドバーであらゆるAIモデルを使用可能", importance: "high" },
        { text: "Webページ、YouTube、PDFの即時要約", importance: "high" },
        { text: "安価なモデルからハイエンドまで選べる柔軟性", importance: "medium" },
        { text: "優れたUI/UXによる生産性向上", importance: "medium" },
    ],
    cons: [
        { text: "ブラウザ上の「全データ」へのアクセス権限を要求される", importance: "high" },
        { text: "「無制限プラン」でも実際には厳しい制限がある", importance: "high" },
        { text: "サポートが最悪（返金拒否、無視）", importance: "medium" },
        { text: "データガバナンスの透明性が低い", importance: "medium" },
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "警告: セキュリティとプライバシー",
            description: "仕組み上、社内システムやクラウドストレージを含む「ブラウザで表示する全ての情報」を読み取る権限を要求します。運営企業の信頼性やデータ管理ポリシーを考慮すると、機密情報を扱う企業での利用は推奨できません。",
            affectedUsers: [
                "金融・医療・官公庁などの機密情報取扱者",
                "セキュリティポリシーの厳しい企業社員",
            ],
        },
    ],
    affiliateLinks: [
        {
            url: "https://monica.im/",
            label: "Monica公式サイト",
            disclosure: "直接契約の場合、アフィリエイト収益は発生しません。",
            isSponsored: false,
        },
    ],
    affiliate_text_cta: "公式サイトを見る",
    content: `<h3>個人の生産性は爆上がりするが…</h3><p>Monicaは、一度使うと手放せなくなるほど便利なツールです。ブラウザのサイドバーに常駐し、GPT-4oもClaudeもGeminiも使い放題（に見える）。WebブラウジングしながらのAI利用体験としては最高峰です。</p><h3>企業の情シスは絶対に許可しない</h3><p>しかし、その利便性はセキュリティと引き換えです。中国系企業による運営、不透明なデータポリシー、そして「すべてのWebサイト上のデータ」へのアクセス権限要求は、企業セキュリティの観点からは悪夢です。また、「無制限」と謳いながら複雑なクレジット制限があったり、解約トラブルが絶えないサポート体制など、信頼性には大きな疑問符がつきます。あくまで「個人の趣味の範囲」で、リスクを承知の上で使うツールです。</p>`,
    metaDescription: "Monica (2026) レビュー。Chrome拡張として便利だが、セキュリティ権限と運営の不透明さが致命的。",
    keywords: ["Monica", "Chrome拡張", "AI", "セキュリティリスク", "2026"],
};

// レビューデータのマップ（スラッグでアクセス可能）
export const reviewsMap: Record<string, ReviewData> = {
    "heygen-review": heygenReview,
    "d-id-review": didReview,
    "chatgpt-review-2026": chatgptReview,
    "gemini-review-2026": geminiReview,
    "claude-review-2026": claudeReview,
    "perplexity-review-2026": perplexityReview,
    "monica-review-2026": monicaReview,
};

// 全レビューの一覧取得
export function getAllReviews(): ReviewData[] {
    return Object.values(reviewsMap);
}

// スラッグからレビューを取得
export function getReviewBySlug(slug: string): ReviewData | undefined {
    return reviewsMap[slug];
}
