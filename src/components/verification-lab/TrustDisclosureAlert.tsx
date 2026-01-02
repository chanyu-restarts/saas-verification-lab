"use client";

import { useState } from "react";
import { ChevronDown, Shield, ExternalLink } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface TrustDisclosureAlertProps {
  className?: string;
}

/**
 * TrustDisclosureAlert - 法的開示アラート
 * 
 * すべてのレビュー記事の冒頭（H1直下）に配置する透明性開示コンポーネント。
 * Collapsibleを使用したプログレッシブ開示により、詳細情報を折りたたみ表示。
 */
export function TrustDisclosureAlert({ className }: TrustDisclosureAlertProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        "bg-slate-50 dark:bg-slate-900",
        "border-l-4 border-blue-600",
        "rounded-r-lg",
        "overflow-hidden",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <CollapsibleTrigger
        className={cn(
          "w-full flex items-center justify-between",
          "px-4 py-3",
          "text-left",
          "hover:bg-slate-100 dark:hover:bg-slate-800",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
          "transition-colors duration-200"
        )}
        aria-label="収益構造の詳細を表示"
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
      >
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            当ラボは読者の支援により運営されています
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-500",
            "transition-transform duration-300 ease-in-out",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </CollapsibleTrigger>

      <CollapsibleContent
        id="disclosure-content"
        className={cn(
          "overflow-hidden",
          "data-[state=open]:animate-slideDown",
          "data-[state=closed]:animate-slideUp"
        )}
      >
        <div className="px-4 pb-4 pt-2 space-y-3 border-t border-slate-200 dark:border-slate-700">
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5" aria-hidden="true">✓</span>
              <span>
                <strong className="text-slate-700 dark:text-slate-300">特定のベンダーに依存しない独立した検証</strong>
                — 編集部の判断で検証対象を選定しています
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-0.5" aria-hidden="true">✓</span>
              <span>
                <strong className="text-slate-700 dark:text-slate-300">公平性を守るため、記事の事前検閲は一切なし</strong>
                — ベンダーによるレビュー内容の確認・修正要請には応じません
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5" aria-hidden="true">ℹ</span>
              <span>
                <strong className="text-slate-700 dark:text-slate-300">アフィリエイト収益</strong>
                — 本記事内のリンク経由で申し込まれた場合、紹介料を受け取ることがあります
              </span>
            </li>
          </ul>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
            <a
              href="/about/methodology"
              className={cn(
                "inline-flex items-center gap-1.5",
                "text-xs text-blue-600 hover:text-blue-700",
                "hover:underline focus:outline-none focus:underline"
              )}
            >
              検証方法論について詳しく
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
