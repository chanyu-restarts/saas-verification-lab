import { ReviewCard } from "@/components/verification-lab/ReviewCard";
import type { ReviewData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategorySectionProps {
    title: string;
    subtitle?: string;
    reviews: ReviewData[];
    className?: string;
}

/**
 * CategorySection - カテゴリ別レビューセクションコンポーネント
 * 
 * ミニマルでプロフェッショナルなデザイン。
 * アイコンは使用せず、左ボーダーとタイポグラフィで区切りを表現。
 */
export function CategorySection({
    title,
    subtitle,
    reviews,
    className,
}: CategorySectionProps) {
    if (reviews.length === 0) {
        return null;
    }

    return (
        <section className={cn("mb-20", className)}>
            {/* セクション見出し（左ボーダー + テキストのみ） */}
            <div className="border-l-4 border-slate-800 dark:border-slate-200 pl-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* レビューカードグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <ReviewCard key={review.slug} review={review} />
                ))}
            </div>
        </section>
    );
}
