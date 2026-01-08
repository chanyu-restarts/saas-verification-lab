import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "claude-team",
    category: "code-assistant",
    title: "Claude Team: エンジニアリング特化型ワークスペース",
    subtitle: "「Artifacts」が変える開発体験と圧倒的な実装能力",
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",

    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "中小企業の現場目線で、実益に繋がるツールのみを厳選。"
    },

    verdict: {
        type: "BUY",
        score: 9.6,
        summary: "エンジニアリングタスクにおいて現在最も高い評価を得ているソリューション。特に「Artifacts」によるプロトタイピングの即時性と、複雑なコードベースを扱えるコンテキスト管理能力は、開発工数を劇的に削減する。",
        targetAudience: "内製化を進めるSMEの開発チーム、プロトタイプを高速に回したいPM"
    },

    radarData: [
        { category: "Coding Capability", score: 9.8, industryAverage: 8.5 },
        { category: "Context Handling", score: 9.5, industryAverage: 8.0 },
        { category: "UI/UX (Artifacts)", score: 10.0, industryAverage: 7.5 },
        { category: "コストパフォーマンス", score: 9.0, industryAverage: 8.5 },
        { category: "処理速度", score: 8.5, industryAverage: 9.0 }
    ],

    pros: [
        { text: "Artifacts機能によるアプリ/UIの即時プレビューとバージョン管理", importance: "high" },
        { text: "Claude 3.5 Sonnetの卓越したコード生成・バグ特定能力", importance: "high" },
        { text: "Projects機能によるチーム単位でのナレッジ・規定の共有", importance: "medium" },
        { text: "200kトークンの広大なコンテキストウィンドウ", importance: "medium" }
    ],
    cons: [
        { text: "5時間のローリングウィンドウによるメッセージ制限", importance: "medium" },
        { text: "Web検索機能（リアルタイム情報）は他社に劣る場合がある", importance: "low" }
    ],

    forensicSections: [],

    dealbreakers: [
        {
            title: "厳格なメッセージ制限",
            description: "短時間に大量のクエリを投げる自動化タスクやヘビーユースには、API利用への切り替えが必要になる場合がある。",
            affectedUsers: ["高頻度で対話を行うQAチーム", "自動化スクリプトのテスト担当"]
        }
    ],

    affiliateLinks: [
        {
            url: "https://www.anthropic.com/claude",
            label: "公式サイト",
            disclosure: "紹介料は発生しません",
            isSponsored: false
        }
    ],

    metaDescription: "Claude Teamプラン徹底検証。Artifacts機能がもたらす開発革命と、SMEが導入すべき技術的理由を解説。",
    keywords: ["Claude", "Anthropic", "Artifacts", "コード生成", "SME開発"],

    content: `
        <h2>エンジニアリング特化の理由：ArtifactsとProjects</h2>
        <p>AnthropicのClaude、特にTeamプランと「Claude 3.5 Sonnet」の組み合わせは、2026年現在、エンジニアリングチームにとっての「最適解」としての地位を確立しました。その理由は単なるLLMの賢さだけではありません。</p>
        
        <h3>Artifacts：使い捨てツールの内製化革命</h3>
        <p>最大の特徴である「Artifacts」は、チャットウィンドウとは独立したパネルでコード（React, HTML, SVG等）を即座にレンダリングする機能です。これにより、以下のような「開発リソースを割くほどではないが必要なツール」を、PMやマーケター自身が数分で構築可能になります。</p>
        <ul>
            <li>特定のCSVフォーマット変換ツール</li>
            <li>複雑な計算ロジックを持つシミュレーター（例：CAC/LTV計算）</li>
            <li>社内アンケートの可視化ダッシュボード</li>
        </ul>
        <p>実際に、モンテカルロ法を用いた財務シミュレーションツールを非エンジニアが作成した事例もあり、組織全体のデジタル生産性を底上げします。</p>

        <h3>Projects：コンテキストの共有資産化</h3>
        <p>Teamプラン（月額$30/ユーザー）で利用可能な「Projects」機能は、200kトークン相当のドキュメント（API仕様書、デザインガイドライン等）をナレッジベースとして保持できます。これにより、プロジェクトごとに異なるコーディング規約や前提条件を毎回プロンプトに入力する必要がなくなり、開発の一貫性が保たれます。</p>

        <h2>SMEにおけるROI試算</h2>
        <p>最低5シートからの契約（月額$150〜）となりますが、コーディングやドキュメント作成の時間を30-40%短縮できるポテンシャルがあり、エンジニアの時給換算で月に数時間の工数削減ができれば十分にペイします。特に大規模なコードベースの理解やリファクタリングにおいて、その広大なコンテキストウィンドウと推論能力は強力な武器となります。</p>
    `
};
