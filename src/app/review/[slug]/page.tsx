import Link from "next/link";
import { notFound } from "next/navigation";
import { getReviewBySlug, getAllReviews } from "@/lib/dummy-data";
import { TrustDisclosureAlert } from "@/components/verification-lab/TrustDisclosureAlert";
import { ForensicVideoComparison } from "@/components/verification-lab/ForensicVideoComparison";
import { VerdictRadarChart } from "@/components/verification-lab/VerdictRadarChart";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Calendar,
    User,
    ExternalLink,
    CheckCircle2,
    XCircle,
    AlertTriangle,
    TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { VerdictType } from "@/lib/types";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// 静的生成用のパラメータ
export async function generateStaticParams() {
    const reviews = getAllReviews();
    return reviews.map((review) => ({
        slug: review.slug,
    }));
}

// メタデータ生成
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const review = getReviewBySlug(slug);

    if (!review) {
        return { title: "レビューが見つかりません" };
    }

    return {
        title: review.title,
        description: review.metaDescription,
        keywords: review.keywords,
    };
}

// 評決バッジのスタイル
function getVerdictStyle(type: VerdictType) {
    switch (type) {
        case "BUY":
            return {
                bg: "bg-emerald-100 dark:bg-emerald-900/30",
                text: "text-emerald-800 dark:text-emerald-300",
                label: "推奨"
            };
        case "CONSIDER":
            return {
                bg: "bg-amber-100 dark:bg-amber-900/30",
                text: "text-amber-800 dark:text-amber-300",
                label: "条件付き推奨"
            };
        case "AVOID":
            return {
                bg: "bg-rose-100 dark:bg-rose-900/30",
                text: "text-rose-800 dark:text-rose-300",
                label: "非推奨"
            };
    }
}

export default async function ReviewPage({ params }: PageProps) {
    const { slug } = await params;
    const review = getReviewBySlug(slug);

    if (!review) {
        notFound();
    }

    const verdictStyle = getVerdictStyle(review.verdict.type);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Header */}
            <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <a href="/" className="text-sm text-blue-600 hover:underline">
                        ← SaaS Verification Lab
                    </a>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* ===== 1. Header Area ===== */}
                <section className="mb-8">
                    {/* H1 Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-3">
                        {review.title}
                    </h1>

                    {review.subtitle && (
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                            {review.subtitle}
                        </p>
                    )}

                    {/* Author & Date */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" aria-hidden="true" />
                            <span>{review.author.name}</span>
                            <span className="text-slate-400">|</span>
                            <span>{review.author.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" aria-hidden="true" />
                            <span>更新: {review.updatedAt}</span>
                        </div>
                    </div>

                    {/* Trust Disclosure - H1直下に配置 */}
                    <TrustDisclosureAlert className="mb-0" />
                </section>

                <Separator className="my-8" />

                {/* ===== 2. The Verdict Box ===== */}
                <section
                    className="mb-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                    aria-labelledby="verdict-heading"
                >
                    <div className="p-6 bg-slate-100 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                        <h2 id="verdict-heading" className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-blue-600" aria-hidden="true" />
                            検証結果サマリー
                        </h2>
                    </div>

                    <div className="p-6">
                        {/* 2カラムレイアウト */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* 左: レーダーチャート */}
                            <div>
                                <VerdictRadarChart
                                    data={review.radarData}
                                    productName="HeyGen"
                                />
                            </div>

                            {/* 右: 総合スコアと結論 */}
                            <div className="flex flex-col justify-between">
                                {/* 総合スコア */}
                                <div className="text-center md:text-left mb-6">
                                    <div className="inline-flex items-baseline gap-2 mb-3">
                                        <span className="text-6xl font-bold text-slate-900 dark:text-slate-100">
                                            {review.verdict.score}
                                        </span>
                                        <span className="text-2xl text-slate-400">/10</span>
                                    </div>

                                    <Badge className={cn("text-sm px-3 py-1", verdictStyle.bg, verdictStyle.text)}>
                                        {verdictStyle.label}
                                    </Badge>
                                </div>

                                {/* 結論サマリー */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        結論
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {review.verdict.summary}
                                    </p>
                                </div>

                                {/* 対象ユーザー */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                        おすすめユーザー
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {review.verdict.targetAudience}
                                    </p>
                                </div>

                                {/* CTAボタン */}
                                {review.affiliateLinks[0] && (
                                    <div>
                                        <Button
                                            size="lg"
                                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                                            asChild
                                        >
                                            <a
                                                href={review.affiliateLinks[0].url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {review.affiliateLinks[0].label}
                                                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 長所・短所 */}
                        <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                            {/* 長所 */}
                            <div>
                                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                                    長所
                                </h3>
                                <ul className="space-y-2">
                                    {review.pros.map((pro, index) => (
                                        <li
                                            key={index}
                                            className={cn(
                                                "flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300",
                                                pro.importance === "high" && "font-medium"
                                            )}
                                        >
                                            <span className="text-emerald-600 mt-0.5" aria-hidden="true">✓</span>
                                            {pro.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 短所 */}
                            <div>
                                <h3 className="font-semibold text-rose-700 dark:text-rose-400 mb-4 flex items-center gap-2">
                                    <XCircle className="h-5 w-5" aria-hidden="true" />
                                    短所
                                </h3>
                                <ul className="space-y-2">
                                    {review.cons.map((con, index) => (
                                        <li
                                            key={index}
                                            className={cn(
                                                "flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300",
                                                con.importance === "high" && "font-medium"
                                            )}
                                        >
                                            <span className="text-rose-600 mt-0.5" aria-hidden="true">✗</span>
                                            {con.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator className="my-8" />

                {/* ===== 3. Forensic Analysis ===== */}
                {review.forensicSections.map((section, index) => (
                    <section key={index} className="mb-12" aria-labelledby={`forensic-${index}`}>
                        <h2
                            id={`forensic-${index}`}
                            className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4"
                        >
                            {section.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            {section.description}
                        </p>

                        <ForensicVideoComparison
                            leftVideo={section.leftVideo}
                            rightVideo={section.rightVideo}
                            className="mb-4"
                        />

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                                検証結果
                            </h3>
                            <p className="text-blue-700 dark:text-blue-400 text-sm">
                                {section.finding}
                            </p>
                        </div>
                    </section>
                ))}

                <Separator className="my-8" />

                {/* ===== 4. The Dealbreaker ===== */}
                {review.dealbreakers.map((dealbreaker, index) => (
                    <section key={index} className="mb-12" aria-labelledby={`dealbreaker-${index}`}>
                        <Alert variant="destructive" className="bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-800">
                            <AlertTriangle className="h-5 w-5" />
                            <AlertTitle
                                id={`dealbreaker-${index}`}
                                className="text-rose-800 dark:text-rose-300 text-lg"
                            >
                                ⚠️ {dealbreaker.title}
                            </AlertTitle>
                            <AlertDescription className="text-rose-700 dark:text-rose-400">
                                <p className="mb-4">{dealbreaker.description}</p>
                                <div>
                                    <p className="font-medium mb-2">以下のユーザーには不向きです：</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {dealbreaker.affectedUsers.map((user, userIndex) => (
                                            <li key={userIndex}>{user}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AlertDescription>
                        </Alert>
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-12">
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
                        <Link href="/privacy" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
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
