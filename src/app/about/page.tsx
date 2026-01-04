import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FlaskConical, ShieldCheck, Search, Users } from "lucide-react";

export default function AboutPage() {
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
                {/* H1 & Lead */}
                <section className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6 font-display">
                        運営者情報
                        <span className="block text-xl text-slate-500 dark:text-slate-400 mt-2 font-normal">
                            当ラボについて
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        SaaS Verification Labは、生成AI動画ツールを中心としたB2Bソリューションの検証・比較を行う専門メディアです。
                    </p>
                </section>

                <Separator className="my-12" />

                {/* Mission */}
                <section className="mb-16">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                ミッション：現場視点での「真実」を伝える
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                公式サイトのスペック表だけでは分からない、日本語環境での挙動や実際の生成スピード、コストパフォーマンスを実機検証し、ビジネス導入の失敗を防ぐことを目的としています。
                                私たちは、マーケティング用語に惑わされず、データと事実に基づいた情報を提供することを約束します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Verification Policy */}
                <section className="mb-16">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                            <Search className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                検証ポリシー
                            </h2>
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5" />
                                        <span className="text-slate-700 dark:text-slate-300">
                                            <strong>100% 自社リソースによる実機検証</strong>
                                            <br />
                                            <span className="text-sm text-slate-500">外部ライターによるまとめ記事ではなく、編集部が実際にツールを契約・操作して記事を執筆しています。</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5" />
                                        <span className="text-slate-700 dark:text-slate-300">
                                            <strong>デメリット（Dealbreakers）の明記</strong>
                                            <br />
                                            <span className="text-sm text-slate-500">メリットだけでなく、「どのようなユーザーには向かないか」「決定的な欠点は何か」を隠さず記載します。</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5" />
                                        <span className="text-slate-700 dark:text-slate-300">
                                            <strong>定期的な再検証と情報アップデート</strong>
                                            <br />
                                            <span className="text-sm text-slate-500">SaaS機能のアップデートに合わせて、検証データも定期的に見直し・更新を行います。</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Information */}
                <section className="mb-12">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                                運営体制
                            </h2>
                            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
                                <table className="w-full text-sm text-left">
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                                            <th className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 w-1/3">サイト名</th>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">SaaS Verification Lab</td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-900">
                                            <th className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">責任者</th>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Verification Lead</td>
                                        </tr>
                                        <tr className="bg-slate-50 dark:bg-slate-900/50">
                                            <th className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">所在地</th>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Japan</td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-900">
                                            <th className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">お問い合わせ</th>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                                <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                                                    お問い合わせフォーム
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-slate-500">
                        © 2026 SaaS Verification Lab
                    </div>
                    <nav className="flex gap-6 text-sm">
                        <Link href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            Home
                        </Link>
                        <Link href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 font-medium">
                            About
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
