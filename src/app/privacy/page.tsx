import Link from "next/link";
import { ShieldAlert, Cookie, Scale, FlaskConical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
                        <FlaskConical className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-sm">SaaS Verification Lab</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                    プライバシーポリシー・免責事項
                </h1>

                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-10">
                    {/* 1. 個人情報の取り扱い */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                個人情報の取り扱い・Cookieについて
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            <p>
                                当サイト「SaaS Verification Lab」（以下、当ラボ）では、Googleによるアクセス解析ツール「Google Analytics」を利用しています。
                                Google Analyticsはトラフィックデータの収集のためにCookie（クッキー）を使用します。
                                このデータは匿名で収集されており、氏名、住所、メールアドレス、電話番号などの個人を特定する情報は一切含まれません。
                            </p>
                            <p>
                                ユーザーはご自身のブラウザ設定によりCookieを無効にすることで、データの収集を拒否することが可能です。
                                この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics利用規約</a>をご確認ください。
                            </p>
                        </div>
                    </section>

                    <Separator />

                    {/* 2. アフィリエイトプログラムの開示 */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldAlert className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                アフィリエイトプログラムについて
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            <p>
                                当ラボは、製品やサービスを紹介し、リンクを経由して申し込まれた場合に紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムの参加者です。
                            </p>
                            <p>
                                当ラボで紹介している製品やサービスの一部にはアフィリエイトリンクが含まれており、リンクを経由して製品を購入またはサービスの申し込みをされた場合、当ラボが紹介料を受け取ることがあります。
                                しかしながら、これは当ラボの検証結果や評価・スコアに一切の影響を与えるものではありません。
                                当ラボでは「独立性」と「公平性」を最優先事項とし、アフィリエイト報酬の多寡によって推奨製品を変更することは一切ありません。
                            </p>
                            <p className="bg-slate-100 dark:bg-slate-800 p-4 rounded text-xs">
                                <strong>法的開示:</strong> 当サイトは、適格販売により収入を得ています。
                            </p>
                        </div>
                    </section>

                    <Separator />

                    {/* 3. 免責事項 */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                免責事項
                            </h2>
                        </div>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            <p>
                                当ラボのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
                                特にAIツール・SaaS製品は機能のアップデート頻度が高いため、最新の情報は必ず各公式サイトにてご確認ください。
                            </p>
                            <p>
                                当ラボに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                                また、当ラボからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                            </p>
                        </div>
                    </section>

                    <Separator />

                    {/* 4. 著作権 */}
                    <section>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                            著作権について
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            当ラボに掲載されている文章・画像・動画等の著作物の情報を無断転載することを禁止します。
                            引用の範囲を超えるものについては、法的処置を行う場合があります。
                            転載を希望される場合は、「お問い合わせ」よりご連絡をお願いいたします。
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        © 2026 SaaS Verification Lab. All rights reserved.
                    </p>
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <Link href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            Home
                        </Link>
                        <Link href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            About
                        </Link>
                        <Link href="/privacy" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 font-medium">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            Contact
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
