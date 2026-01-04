import Link from "next/link";
import { getAllReviews } from "@/lib/dummy-data";
import { ReviewCard } from "@/components/verification-lab/ReviewCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  Microscope,
  BarChart3,
  ChevronDown,
  FlaskConical
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const reviews = getAllReviews();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* ===== A. Hero Section ===== */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90" />

        {/* グリッドパターン背景 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
          {/* ロゴ/ブランド */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <FlaskConical className="h-10 w-10 text-blue-400" aria-hidden="true" />
            <span className="text-sm font-medium tracking-widest text-blue-400 uppercase">
              Verification Lab
            </span>
          </div>

          {/* メインコピー */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            B2B SaaS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Verification Lab
            </span>
          </h1>

          {/* サブコピー */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            マーケティングの嘘を暴く。
            <br className="hidden md:block" />
            独立検証による一次情報だけのAIツール分析プラットフォーム。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#reviews">
                最新のレポートを見る
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce" aria-hidden="true" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/about">
                検証方法論について
              </Link>
            </Button>
          </div>

          {/* 信頼指標 */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">120+</span>
              <span>時間の検証</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">$5,000+</span>
              <span>独立投資</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">0</span>
              <span>スポンサー検閲</span>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== B. Verified Reviews Grid ===== */}
      <section
        id="reviews"
        className="py-16 md:py-24"
        aria-labelledby="reviews-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* セクションヘッダー */}
          <div className="text-center mb-12">
            <h2
              id="reviews-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            >
              検証済みレビュー
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              すべてのツールは編集部が実費で契約・検証しています。
              スポンサーによる事前チェックは一切行っていません。
            </p>
          </div>

          {/* レビューカードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}

            {/* プレースホルダー: 今後追加予定 */}
            {reviews.length < 3 && (
              <>
                <div className="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-slate-500 dark:text-slate-500 mb-2">Coming Soon</p>
                    <p className="text-sm text-slate-400 dark:text-slate-600">Synthesia検証レビュー</p>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-slate-500 dark:text-slate-500 mb-2">Coming Soon</p>
                    <p className="text-sm text-slate-400 dark:text-slate-600">D-ID検証レビュー</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* ===== C. Methodology Icons ===== */}
      <section
        className="py-16 md:py-24 bg-white dark:bg-slate-900"
        aria-labelledby="methodology-heading"
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* セクションヘッダー */}
          <div className="text-center mb-12">
            <h2
              id="methodology-heading"
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            >
              私たちの約束
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Verification Labが守る3つの原則
            </p>
          </div>

          {/* 3つの約束 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Unbiased */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Unbiased
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                広告主による事前検閲なし。
                <br />
                編集権は完全に独立しています。
              </p>
            </div>

            {/* 2. Forensic Tested */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                <Microscope className="h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Forensic Tested
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                フレーム単位の動画検証。
                <br />
                主観ではなく実測データで評価。
              </p>
            </div>

            {/* 3. Data Driven */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                <BarChart3 className="h-8 w-8 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Data Driven
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                感情ではなくデータで評価。
                <br />
                定量的な比較指標を公開。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* ブランド */}
            <div className="flex items-center gap-2">
              <FlaskConical className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                SaaS Verification Lab
              </span>
            </div>

            {/* リンク */}
            <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/about" className="hover:text-slate-900 dark:hover:text-slate-100">
                About
              </Link>
              <Link href="/methodology" className="hover:text-slate-900 dark:hover:text-slate-100">
                Methodology
              </Link>
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-100">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100">
                Contact
              </Link>
            </nav>

            {/* コピーライト */}
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © 2026 SaaS Verification Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
