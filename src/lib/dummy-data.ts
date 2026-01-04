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
 * ChatGPT レビュー用データ
 */
export const chatgptReview: ReviewData = {
    slug: "chatgpt-review",
    category: "chat-ai",
    title: "【2026年版】ChatGPT (GPT-5) は「法人契約」すべきか？ 圧倒的シェアの裏で囁かれる「怠惰問題」と日本企業の現実解",
    subtitle: "推論能力は最強だが「手抜き」も覚えた覇者。全社導入のインフラとして選ぶべき理由と、現場運用の注意点。",
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
        score: 9.6,
        summary: "2026年現在もシェア60-80%を誇る絶対王者。GPT-5の「Thinking Mode」による推論能力は圧倒的だが、回答を省略する「怠惰」問題や独特な翻訳調の日本語には注意が必要。Microsoft経済圏の企業には必須のインフラ。",
        targetAudience: "全社員向けのAIインフラを検討する企業、Microsoft 365利用企業、高度な推論を必要とする専門職",
    },

    radarData: [
        { category: "推論能力", score: 9.8, industryAverage: 8.0 },
        { category: "知識量", score: 9.5, industryAverage: 8.5 },
        { category: "日本語精度", score: 8.5, industryAverage: 9.0 },
        { category: "処理速度", score: 9.0, industryAverage: 7.5 },
        { category: "コスト", score: 8.0, industryAverage: 7.0 },
        { category: "多機能性", score: 9.5, industryAverage: 7.0 },
    ],

    pros: [
        {
            text: "「Thinking Mode」による圧倒的な論理推論とマルチモーダル処理",
            importance: "high",
        },
        {
            text: "Excel/PPT連携を含む「Advanced Data Analysis」の実務統合",
            importance: "high",
        },
        {
            text: "Microsoft Azure基盤による99.9%以上の可用性とセキュリティ",
            importance: "high",
        },
    ],

    cons: [
        {
            text: "コード生成等で発生する「怠惰（Laziness/手抜き）」現象",
            importance: "high",
        },
        {
            text: "ビジネス文書における「翻訳調」の不自然さと冗長な言い回し",
            importance: "medium",
        },
        {
            text: "直接契約時のクレカ依存と、データ学習境界の不透明さ",
            importance: "medium",
        },
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "プログラマーやライターにはストレスの可能性",
            description: "「怠惰」問題によるコード省略や、不自然な日本語回しは、専門職の生産性を下げる可能性がある。これらにはClaude等の併用が推奨される。",
            affectedUsers: [
                "シニアエンジニア",
                "広報・ライティング担当",
            ],
        },
    ],

    affiliateLinks: [],

    content: `<h2>2026年、なぜ今さら「ChatGPT」なのか？</h2><p>2023年のブームから3年。生成AI市場には数多のプレイヤー参入しましたが、2026年現在においても<strong>ChatGPT (OpenAI)</strong>は市場シェアの約60-80%を維持する「絶対王者」です[cite: 10]。2025年8月に投入された<strong>「GPT-5」</strong>シリーズにより、その地位は盤石なものとなりました。</p><p>しかし、現場のプロフェッショナル層からは「以前より使いにくくなった」「Claudeの方が優秀ではないか」という声も聞こえてきます。本記事では、B2B SaaSの視点から、ChatGPTの「進化」と「退化」を冷静に分析し、日本企業が導入すべき理由を検証します。</p><h2>評価すべき進化：IQの向上と業務インフラ化</h2><h3>1. [cite_start]「Thinking Mode」による思考の自律化</h3><p>かつて「o1」として試験運用されていた推論技術は、GPT-5において<strong>「Thinking Mode」</strong>として標準化されました[cite: 21][cite_start]。これにより、AIは即答するのではなく、内部で「思考の連鎖（Chain of Thought）」を回し、論理的整合性をチェックしてから回答を出力します。</p><p>サプライチェーンの最適化計算や、複雑な法務リスクの洗い出しにおいて、この機能は人間の専門家レベル、あるいはそれ以上の精度を発揮します。「とりあえずこれに投げればなんとかなる」という安心感こそが、ChatGPT最大の強みです[cite: 23]。</p><h3>2. [cite_start]Advanced Data Analysisの爆速化</h3><p>データ分析機能も劇的に進化しました。数百万行のCSVデータをブラウザ上で軽快に処理し、Pythonコードを自律的に書いてグラフ化・分析を行います[cite: 26]。Microsoft 365 Copilotとの連携により、ExcelデータからPowerPointスライドを生成するフローも確立されており、非エンジニア社員にとっての「分析アウトソーシング」として機能しています。</p><h2>見過ごせない欠点：AIの「怠惰」と日本語の違和感</h2><p>一方で、導入担当者が知っておくべき「Dealbreaker（決定的な欠点）」も存在します。</p><h3>1. [cite_start]プロを苛立たせる「Laziness（怠惰）」問題</h3><p>GPT-5になっても解決されていないのが、<strong>「回答の手抜き」</strong>です。複雑なコーディングを依頼した際、「以前のコードを参照してください」「残りの処理はご自身で記述してください」といった省略が頻発します[cite: 33]。これはトークン節約のための最適化と考えられますが、業務効率を著しく下げる要因となっており、エンジニア層がClaudeへ流出する主因となっています。</p><h3>2. [cite_start]「心に響かない」翻訳調の日本語</h3><p>日本語能力は向上していますが、依然として「英語の思考回路を日本語に変換した」ような独特のクセが抜けません。「重要なので留意すべき点は～」といった冗長な接続詞や、過剰な敬語表現が目立ちます[cite: 36][cite_start]。謝罪メールや広報文など、情緒的な配慮が必要なタスクには不向きであり、人間のリライトが必須です。</p><h2>日本企業への適合度：導入の鍵は「リセラー」</h2><p>機能面では「A」評価ですが、商習慣への対応は「B+」です。最大の壁は<strong>「クレジットカード決済」</strong>です。OpenAIとの直接契約はドル建て・クレカ決済が基本であり、日本企業の経理フローには馴染みません[cite: 50][cite_start]。</p><p>解決策として、日本企業は国内リセラー（ChatSense、KDDI、ソフトバンク等）を活用すべきです[cite: 53, 54][cite_start]。これにより、「日本円での請求書払い」や「日本語サポート」が可能になります。多少の割高感はありますが、為替リスクの回避と稟議の通りやすさを考えれば、リセラー経由が正解です。</p><h2>結論：全社員に配る「標準装備」として</h2><p>ChatGPTは、尖った性能では競合に譲る部分もありますが、<strong>「汎用性」と「インフラとしての安定性」</strong>において右に出るものはありません[cite: 20][cite_start]。特定のスペシャリスト（エンジニア等）にはClaude、リサーチャーにはPerplexityを個別に契約しつつ、全社員向けのベースラインとしてはChatGPT (Team/Enterprise) を導入するのが、2026年の最も賢いポートフォリオ戦略と言えるでしょう[cite: 139]。</p>`,

    metaDescription: "2026年版ChatGPT(GPT-5)レビュー。シェア80%の絶対王者だが「怠惰」問題に注意。日本企業のリセラー活用法と全社導入の是非を徹底検証。",
    keywords: ["ChatGPT", "GPT-5", "2026", "Thinking Mode", "Advanced Data Analysis", "法人契約"],
};

/**
 * Claude Review Data (2026)
 */
export const claudeReview: ReviewData = {
    slug: "claude-review-2026",
    category: "chat-ai",
    title: "Claude 3.7/4.5 検証レビュー2026：なぜエンジニアと広報はChatGPTを捨ててこちらを選ぶのか？",
    subtitle: "「Artifacts」による開発革命と、文学的な日本語力が生むプロフェッショナル層の熱狂",
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
        score: 4.7,
        summary: "Claudeは高度なArtifacts機能と自然な日本語生成でエンジニア・広報に最適。Rate LimitsやWeb検索の弱さが課題。",
        targetAudience: "エンジニア、広報・ライティング担当、AI活用を検討する企業",
    },
    radarData: [
        { category: "Artifacts機能", score: 9.5, industryAverage: 7.0 },
        { category: "日本語精度", score: 9.2, industryAverage: 8.5 },
        { category: "長文処理", score: 9.0, industryAverage: 7.5 },
        { category: "処理速度", score: 8.5, industryAverage: 7.0 },
        { category: "コスト", score: 8.0, industryAverage: 7.0 },
        { category: "多機能性", score: 9.0, industryAverage: 7.5 },
    ],
    pros: [
        { text: "Artifacts機能によりコードと同時にアプリをプレビュー可能", importance: "high" },
        { text: "文学的で自然な日本語生成能力", importance: "high" },
        { text: "長文コンテキスト（200k-500kトークン）処理精度が高い", importance: "high" },
    ],
    cons: [
        { text: "メッセージ送信制限が厳しく業務が中断しやすい", importance: "high" },
        { text: "Web検索機能が弱く最新情報取得に不向き", importance: "medium" },
        { text: "安全性重視で過剰に回答を拒否するケースがある", importance: "medium" },
    ],

    forensicSections: [],
    dealbreakers: [],
    affiliateLinks: [],
    content: `
<h2>市場の「覇者」に挑む、最強のスペシャリスト・ツール</h2>
<p>2026年のB2B AI市場で、汎用インフラとしてChatGPTが君臨する中、エンジニアやクリエイターはAnthropic社の<strong>Claude（クロード）</strong>に熱狂しています。Artifacts機能と文学的日本語が鍵です。</p>
<h3>1. Artifacts機能：コードから即時アプリプレビューへ</h3>
<p>Claudeは生成したコード（React, HTML/CSS等）をサイドパネルで即座にレンダリングし、<strong>「会話」から「共同制作」へ</strong>を実現します。これによりプロトタイピングが劇的に高速化し、開発者は対話的にUIを調整できます。</p>
<h3>2. 文学的日本語生成</h3>
<p>日本語においてClaudeは文脈を深く理解し、敬語や情緒的表現を自然に使い分けます。広報・ライティング担当は「翻訳調」や冗長さが少ない文章をそのまま利用でき、リライト工数が大幅に削減されます。</p>
<h3>3. 長文コンテキスト処理</h3>
<p>200k〜500kトークンの長文でも高精度で処理でき、技術ドキュメントや法務文書の要約・分析に強みがあります。</p>
<h2>課題と注意点</h2>
<p>しかし、<strong>Rate Limits</strong>が厳しく、業務が中断しやすい点や、Web検索が弱い点がデメリットです。また、安全性重視のため過剰に回答を拒否するケースがあります。</p>
`,
    metaDescription: "Claude 2026レビュー。Artifacts機能と日本語精度が強み。Rate LimitsとWeb検索が課題。",
    keywords: ["Claude", "Artifacts", "2026", "日本語", "AI開発"],
};


// レビューデータのマップ（スラッグでアクセス可能）
export const reviewsMap: Record<string, ReviewData> = {
    "heygen-review": heygenReview,
    "synthesia-review": synthesiaReview,
    "d-id-review": didReview,
    "chatgpt-review": chatgptReview,
    "claude-review-2026": claudeReview,
};

// 全レビューの一覧取得
export function getAllReviews(): ReviewData[] {
    return Object.values(reviewsMap);
}

// スラッグからレビューを取得
export function getReviewBySlug(slug: string): ReviewData | undefined {
    return reviewsMap[slug];
}
