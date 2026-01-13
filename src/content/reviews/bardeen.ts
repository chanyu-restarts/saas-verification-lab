import type { ReviewData } from "@/lib/types";

export const review: ReviewData = {
    slug: "bardeen",
    category: "automation-agent",
    title: "Bardeen: ブラウザオートメーションによるリード獲得と定型業務の民主化",
    subtitle: "API不要、ブラウザ上で完結する「自分だけの」自動化エージェント",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    author: {
        name: "検証ラボ編集部",
        title: "SME導入支援チーム",
        avatar: "/avatars/lab-team.jpg",
        bio: "エンジニアリング効率化ツールを専門に検証するテクニカルチーム。"
    },
    verdict: {
        type: "CONSIDER",
        score: 8.5,
        summary: "APIのないWebサイトを自動操作できる点が画期的。LinkedInを活用したリード獲得において圧倒的なコスト効率を誇るが、対象サイトのHTML構造変更に弱い点に注意が必要。",
        targetAudience: "グロースエンジニア、Sales Ops、APIのないSaaS利用者"
    },
    radarData: [
        { category: "機能性", score: 9.0, industryAverage: 8.0 },
        { category: "使いやすさ", score: 8.0, industryAverage: 7.5 },
        { category: "処理速度", score: 9.0, industryAverage: 8.0 },
        { category: "コストパフォーマンス", score: 8.5, industryAverage: 7.0 },
        { category: "サポート", score: 7.5, industryAverage: 7.0 }
    ],
    pros: [
        { text: "API不要の自動化：ブラウザで見えている情報であればスクレイピング・操作が可能", importance: "high" },
        { text: "ユーザー数無制限：クレジット課金制のため、チームメンバーを増やしても追加コストがかからない", importance: "high" },
        { text: "Magic Box：自然言語で「このページをスプレッドシートに」と指示するだけでワークフローを生成", importance: "medium" },
        { text: "コンテキスト認識：開いているタブの種類を認識し、適切なアクションを提案", importance: "medium" }
    ],
    cons: [
        { text: "ブラウザ依存と脆弱性：対象サイトのHTML構造（DOM）が変わるとスクレイパーが動作しなくなる", importance: "high" },
        { text: "実行環境の制約：基本はローカルブラウザでの実行となるため、PCを閉じると処理が止まる", importance: "medium" },
        { text: "クレジット計算の複雑さ：アクションごとに消費量が異なり、コスト予測が難しい場合がある", importance: "low" }
    ],
    forensicSections: [],
    dealbreakers: [
        {
            title: "大規模バックグラウンド処理",
            description: "「PCを閉じた状態で10万件のデータを夜間に処理したい」といった要件には不向き。サーバーサイド処理が必要な場合はPythonやZapierを選択すべき。",
            affectedUsers: ["データエンジニア", "大量データ処理が必要な運用担当"]
        }
    ],
    affiliateLinks: [
        { url: "https://www.bardeen.ai", label: "Bardeen Official", disclosure: "Official Site", isSponsored: false }
    ],
    metaDescription: "Bardeenのブラウザ自動化機能とコスト対効果をレビュー。API不要のスクレイピング、リード獲得の自動化、クレジット制料金モデルの詳細。",
    keywords: ["Bardeen", "ブラウザ自動化", "スクレイピング", "RPA", "リード獲得"],
    content: `
    <h2>エンジニアリング推奨理由</h2>
    <p>APIが存在しないSaaSやWebサイトを操作する際、BardeenはPythonスクリプト（Selenium/Puppeteer）を書く手間を省き、保守コストを劇的に下げます。「Magic Box」機能により自然言語でスクリプトを生成できるため、Growth EngineeringやSales Ops領域でのハックに不可欠です。</p>

    <h2>リード獲得自動化とコスト</h2>
    <h3>リード獲得のメカニズム</h3>
    <p>LinkedIn等のページ構造を認識し、プロフィール抽出、メールアドレス検索（エンリッチメント）、CRM登録までをワンクリックで実行します。Delay設定などで人間らしい挙動を模倣し、BANリスクを低減する配慮もなされています。</p>

    <h3>クレジットモデルの優位性</h3>
    <p>ユーザー数（Seats）ではなく実行量（Credit）に基づく課金体系であり、チームメンバー無制限で利用可能です。外部からリードリストを購入するよりも、Professionalプラン等で自前で生成する方がコスト効率は極めて高いです。</p>

    <h2>ROIロジック</h2>
    <p>手作業でのリードリスト作成（1日1.5時間）を5分に短縮した場合、クレジットコストを差し引いても約2,150%のROIを達成します。データ入力ミスがゼロになる品質向上効果も見逃せません。</p>
  `
};
