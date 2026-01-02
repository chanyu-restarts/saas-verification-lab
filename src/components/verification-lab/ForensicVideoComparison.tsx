"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderHandle } from "react-compare-slider";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoSource {
    src: string;
    label: string;
    poster?: string;
}

interface ForensicVideoComparisonProps {
    leftVideo: VideoSource;
    rightVideo: VideoSource;
    className?: string;
}

/**
 * useVideoSync - 2つの動画をフレーム単位で同期するカスタムフック
 */
function useVideoSync(
    leftVideoRef: React.RefObject<HTMLVideoElement | null>,
    rightVideoRef: React.RefObject<HTMLVideoElement | null>
) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const animationFrameRef = useRef<number | null>(null);

    const syncVideos = useCallback(() => {
        const leftVideo = leftVideoRef.current;
        const rightVideo = rightVideoRef.current;

        if (leftVideo && rightVideo) {
            // 右動画を左動画に同期
            if (Math.abs(leftVideo.currentTime - rightVideo.currentTime) > 0.05) {
                rightVideo.currentTime = leftVideo.currentTime;
            }
            setCurrentTime(leftVideo.currentTime);
        }

        if (isPlaying) {
            animationFrameRef.current = requestAnimationFrame(syncVideos);
        }
    }, [leftVideoRef, rightVideoRef, isPlaying]);

    const play = useCallback(() => {
        const leftVideo = leftVideoRef.current;
        const rightVideo = rightVideoRef.current;

        if (leftVideo && rightVideo) {
            leftVideo.play();
            rightVideo.play();
            setIsPlaying(true);
        }
    }, [leftVideoRef, rightVideoRef]);

    const pause = useCallback(() => {
        const leftVideo = leftVideoRef.current;
        const rightVideo = rightVideoRef.current;

        if (leftVideo && rightVideo) {
            leftVideo.pause();
            rightVideo.pause();
            setIsPlaying(false);
        }
    }, [leftVideoRef, rightVideoRef]);

    const reset = useCallback(() => {
        const leftVideo = leftVideoRef.current;
        const rightVideo = rightVideoRef.current;

        if (leftVideo && rightVideo) {
            leftVideo.currentTime = 0;
            rightVideo.currentTime = 0;
            leftVideo.pause();
            rightVideo.pause();
            setIsPlaying(false);
            setCurrentTime(0);
        }
    }, [leftVideoRef, rightVideoRef]);

    const seek = useCallback(
        (time: number) => {
            const leftVideo = leftVideoRef.current;
            const rightVideo = rightVideoRef.current;

            if (leftVideo && rightVideo) {
                leftVideo.currentTime = time;
                rightVideo.currentTime = time;
                setCurrentTime(time);
            }
        },
        [leftVideoRef, rightVideoRef]
    );

    // 再生中は同期処理を実行
    useEffect(() => {
        if (isPlaying) {
            animationFrameRef.current = requestAnimationFrame(syncVideos);
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isPlaying, syncVideos]);

    // 動画メタデータ読み込み時にdurationを設定
    useEffect(() => {
        const leftVideo = leftVideoRef.current;

        const handleLoadedMetadata = () => {
            if (leftVideo) {
                setDuration(leftVideo.duration);
            }
        };

        if (leftVideo) {
            leftVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
            // 既に読み込まれている場合
            if (leftVideo.duration) {
                setDuration(leftVideo.duration);
            }
        }

        return () => {
            if (leftVideo) {
                leftVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
        };
    }, [leftVideoRef]);

    return {
        isPlaying,
        currentTime,
        duration,
        play,
        pause,
        reset,
        seek,
    };
}

/**
 * ForensicVideoComparison - 2つの動画を比較するスライダー
 * 
 * 法医学的な精密さで2つの動画（例: HeyGen vs Synthesia）を比較。
 * react-compare-sliderを使用し、片方の動画を操作すると
 * もう片方もフレーム単位で同期される。
 */
export function ForensicVideoComparison({
    leftVideo,
    rightVideo,
    className,
}: ForensicVideoComparisonProps) {
    const leftVideoRef = useRef<HTMLVideoElement>(null);
    const rightVideoRef = useRef<HTMLVideoElement>(null);

    const { isPlaying, currentTime, duration, play, pause, reset, seek } =
        useVideoSync(leftVideoRef, rightVideoRef);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        seek(parseFloat(e.target.value));
    };

    return (
        <div
            className={cn(
                "rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700",
                "bg-slate-50 dark:bg-slate-900",
                "overflow-hidden",
                className
            )}
        >
            {/* ラベル */}
            <div className="flex justify-between px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {leftVideo.label}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {rightVideo.label}
                </span>
            </div>

            {/* 比較スライダー */}
            <div className="relative aspect-video">
                <ReactCompareSlider
                    itemOne={
                        <video
                            ref={leftVideoRef}
                            src={leftVideo.src}
                            poster={leftVideo.poster}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            loop
                            aria-label={`${leftVideo.label}の動画`}
                        />
                    }
                    itemTwo={
                        <video
                            ref={rightVideoRef}
                            src={rightVideo.src}
                            poster={rightVideo.poster}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            loop
                            aria-label={`${rightVideo.label}の動画`}
                        />
                    }
                    handle={
                        <ReactCompareSliderHandle
                            buttonStyle={{
                                display: "none",
                            }}
                            linesStyle={{
                                width: 2,
                                background: "white",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                        />
                    }
                    position={50}
                    className="h-full"
                />

                {/* 中央の分割線インジケーター */}
                <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 
                     bg-white/90 dark:bg-slate-900/90 
                     text-xs font-medium text-slate-700 dark:text-slate-300
                     px-2 py-1 rounded shadow-sm
                     pointer-events-none"
                    aria-hidden="true"
                >
                    ← ドラッグで比較 →
                </div>
            </div>

            {/* コントロール */}
            <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                    {/* 再生/一時停止 */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={isPlaying ? pause : play}
                        className="h-8 w-8 p-0"
                        aria-label={isPlaying ? "一時停止" : "再生"}
                    >
                        {isPlaying ? (
                            <Pause className="h-4 w-4" />
                        ) : (
                            <Play className="h-4 w-4" />
                        )}
                    </Button>

                    {/* リセット */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={reset}
                        className="h-8 w-8 p-0"
                        aria-label="最初から再生"
                    >
                        <RotateCcw className="h-4 w-4" />
                    </Button>

                    {/* プログレスバー */}
                    <div className="flex-1 flex items-center gap-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums w-10">
                            {formatTime(currentTime)}
                        </span>
                        <input
                            type="range"
                            min={0}
                            max={duration || 100}
                            step={0.1}
                            value={currentTime}
                            onChange={handleSliderChange}
                            className="flex-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-3 
                         [&::-webkit-slider-thumb]:h-3 
                         [&::-webkit-slider-thumb]:bg-blue-600 
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:shadow-sm"
                            aria-label="動画再生位置"
                        />
                        <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums w-10 text-right">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
