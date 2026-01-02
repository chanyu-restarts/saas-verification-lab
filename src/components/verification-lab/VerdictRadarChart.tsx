"use client";

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import { cn } from "@/lib/utils";

interface VerdictMetric {
    category: string;
    score: number;
    industryAverage: number;
    maxScore?: number;
}

interface VerdictRadarChartProps {
    data: VerdictMetric[];
    productName: string;
    className?: string;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
        dataKey: string;
        color: string;
    }>;
    label?: string;
}

/**
 * CustomTooltip - ホバー時の詳細表示
 */
function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (!active || !payload || payload.length === 0) {
        return null;
    }

    const productScore = payload.find((p) => p.dataKey === "score");
    const industryScore = payload.find((p) => p.dataKey === "industryAverage");

    return (
        <div
            className={cn(
                "bg-white dark:bg-slate-900",
                "border border-slate-200 dark:border-slate-700",
                "rounded-lg shadow-lg",
                "px-4 py-3",
                "text-sm"
            )}
        >
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {label}
            </p>
            <div className="space-y-1">
                {productScore && (
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-blue-700 dark:text-blue-400">検証スコア:</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                            {productScore.value}/10
                        </span>
                    </div>
                )}
                {industryScore && (
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-slate-500 dark:text-slate-400">業界平均:</span>
                        <span className="font-medium text-slate-600 dark:text-slate-300">
                            {industryScore.value}/10
                        </span>
                    </div>
                )}
                {productScore && industryScore && (
                    <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-700">
                        <span
                            className={cn(
                                "text-xs font-medium",
                                productScore.value > industryScore.value
                                    ? "text-emerald-600"
                                    : productScore.value < industryScore.value
                                        ? "text-rose-600"
                                        : "text-slate-500"
                            )}
                        >
                            {productScore.value > industryScore.value
                                ? `+${(productScore.value - industryScore.value).toFixed(1)} 業界平均超`
                                : productScore.value < industryScore.value
                                    ? `${(productScore.value - industryScore.value).toFixed(1)} 業界平均以下`
                                    : "業界平均と同等"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * VerdictRadarChart - 客観的評決レーダーチャート
 * 
 * ツールのスコア（価格、速度、品質など）を視覚化。
 * 検証対象（青）と業界平均（グレー）を重ねて表示し、
 * ホバー時に詳細なスコア比較を表示。
 */
export function VerdictRadarChart({
    data,
    productName,
    className,
}: VerdictRadarChartProps) {
    return (
        <div
            className={cn(
                "bg-white dark:bg-slate-900",
                "border border-slate-200 dark:border-slate-800",
                "rounded-lg",
                "p-6",
                className
            )}
            role="figure"
            aria-label={`${productName}の評価レーダーチャート`}
        >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                検証スコア総覧
            </h3>

            <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
                    <PolarGrid
                        stroke="#e2e8f0"
                        strokeWidth={1}
                    />
                    <PolarAngleAxis
                        dataKey="category"
                        tick={{
                            fill: "#64748b",
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                        tickLine={false}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, 10]}
                        tick={{
                            fill: "#94a3b8",
                            fontSize: 10,
                        }}
                        tickCount={6}
                        axisLine={false}
                    />

                    {/* 業界平均 (グレー) */}
                    <Radar
                        name="業界平均"
                        dataKey="industryAverage"
                        stroke="#64748b"
                        strokeWidth={2}
                        fill="rgba(100, 116, 139, 0.2)"
                        fillOpacity={1}
                    />

                    {/* 検証対象 (青) */}
                    <Radar
                        name={productName}
                        dataKey="score"
                        stroke="#1d4ed8"
                        strokeWidth={2}
                        fill="rgba(29, 78, 216, 0.3)"
                        fillOpacity={1}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{
                            paddingTop: 20,
                        }}
                        formatter={(value: string) => (
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                {value}
                            </span>
                        )}
                    />
                </RadarChart>
            </ResponsiveContainer>

            {/* スコアサマリー */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {data.map((metric) => (
                        <div
                            key={metric.category}
                            className="flex flex-col"
                        >
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                {metric.category}
                            </span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                    {metric.score}
                                </span>
                                <span className="text-xs text-slate-400">/10</span>
                                {metric.score > metric.industryAverage && (
                                    <span className="text-xs text-emerald-600 ml-1">
                                        ↑
                                    </span>
                                )}
                                {metric.score < metric.industryAverage && (
                                    <span className="text-xs text-rose-600 ml-1">
                                        ↓
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * サンプルデータ（開発・テスト用）
 */
export const sampleVerdictData: VerdictMetric[] = [
    { category: "価格競争力", score: 7.5, industryAverage: 6.0 },
    { category: "音声品質", score: 8.2, industryAverage: 7.0 },
    { category: "動画品質", score: 9.0, industryAverage: 7.5 },
    { category: "生成速度", score: 6.5, industryAverage: 7.0 },
    { category: "操作性", score: 8.0, industryAverage: 6.5 },
    { category: "多言語対応", score: 9.2, industryAverage: 5.5 },
];
