import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReviewData, VerdictType } from "@/lib/types";

interface ReviewCardProps {
    review: ReviewData;
    className?: string;
}

// スコアに応じたバッジスタイル
function getScoreBadgeStyle(score: number) {
    if (score >= 8.0) {
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300";
    } else if (score >= 6.0) {
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
    } else if (score >= 4.0) {
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
    } else {
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300";
    }
}

// 評決タイプに応じたラベル
function getVerdictLabel(type: VerdictType) {
    switch (type) {
        case "BUY":
            return { label: "推奨", color: "text-emerald-600 dark:text-emerald-400" };
        case "CONSIDER":
            return { label: "条件付き", color: "text-amber-600 dark:text-amber-400" };
        case "AVOID":
            return { label: "非推奨", color: "text-rose-600 dark:text-rose-400" };
    }
}

/**
 * ReviewCard - レビュー記事のカードコンポーネント
 * 
 * トップページのグリッド表示用。
 * カード全体がリンクとして機能し、レビューページへ遷移。
 */
export function ReviewCard({ review, className }: ReviewCardProps) {
    const scoreBadgeStyle = getScoreBadgeStyle(review.verdict.score);
    const verdictLabel = getVerdictLabel(review.verdict.type);

    return (
        <Link
            href={`/review/${review.slug}`}
            className="block group"
        >
            <Card
                className={cn(
                    "overflow-hidden",
                    "bg-white dark:bg-slate-900",
                    "border-slate-200 dark:border-slate-800",
                    "transition-all duration-300",
                    "hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",
                    "hover:-translate-y-1",
                    className
                )}
            >
                {/* サムネイル */}
                <div className="relative aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    {/* ダミーサムネイル（実際の画像がない場合） */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-slate-400 dark:text-slate-600">
                            {review.title.charAt(0)}
                        </div>
                    </div>

                    {/* グラデーションオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* スコアバッジ（右上） */}
                    <Badge
                        className={cn(
                            "absolute top-3 right-3",
                            "text-sm font-bold px-2 py-1",
                            scoreBadgeStyle
                        )}
                    >
                        {review.verdict.score.toFixed(1)}/10
                    </Badge>

                    {/* 評決ラベル（左下） */}
                    <div className="absolute bottom-3 left-3">
                        <span className={cn("text-sm font-semibold", verdictLabel.color)}>
                            {verdictLabel.label}
                        </span>
                    </div>
                </div>

                <CardContent className="p-4">
                    {/* タイトル */}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {review.title}
                    </h3>

                    {/* 抜粋（メタ説明の最初の部分） */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                        {review.metaDescription}
                    </p>

                    {/* メタ情報 */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                        <span>{review.author.name}</span>
                        <span>{review.updatedAt}</span>
                    </div>

                    {/* アクションボタン */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                    >
                        レビューを読む
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </CardContent>
            </Card>
        </Link>
    );
}
