import Link from "next/link";
import { Mail, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            {/* Header */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
                        <FlaskConical className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-sm">SaaS Verification Lab</span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow max-w-2xl mx-auto px-4 py-16 w-full">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                        お問い合わせ
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        当ラボへの取材依頼、検証リクエスト、その他のお問い合わせはこちらからお願いいたします。
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                    <div className="flex flex-col items-center justify-center text-center space-y-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                            <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                                Googleフォームでのお問い合わせ
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                以下のボタンよりお問い合わせフォームへ移動します。
                            </p>
                        </div>

                        <Button asChild className="w-full max-w-xs bg-blue-600 hover:bg-blue-700">
                            {/* 実際のフォームURLがないため、一時的に#としています。後ほど差し替えてください。 */}
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                お問い合わせフォームを開く
                            </a>
                        </Button>

                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 w-full">
                            <p className="text-xs text-slate-400">
                                ※ 原則として3営業日以内にご返信いたします。<br />
                                ※ 営業・勧誘メールには返信しない場合がございます。
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        © 2026 SaaS Verification Lab. All rights reserved.
                    </p>
                    <nav className="flex gap-6 text-sm">
                        <Link href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            Home
                        </Link>
                        <Link href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                            About
                        </Link>
                        <Link href="/contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 font-medium">
                            Contact
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
