# Design System & Legal Requirements

このドキュメントは、SaaS Verification Lab のデザインシステムと法的コンプライアンス要件を定義します。

---

## Color Palette: Trust & Defense

### Base Colors (金融機関のような重厚さ)

| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|-------|
| **Background** | `bg-slate-50` | `bg-slate-950` | ページ背景 |
| **Surface** | `bg-white` | `bg-slate-900` | カード、コンテナ |
| **Border** | `border-slate-200` | `border-slate-800` | 区切り線 |
| **Text Primary** | `text-slate-900` | `text-slate-50` | 見出し |
| **Text Muted** | `text-slate-600` | `text-slate-400` | 説明文 |

### Semantic Colors

| Role | Color | Usage |
|------|-------|-------|
| **Primary/Trust** | `text-blue-700` / `bg-blue-50` | 検証結果、信頼性の強調 |
| **Critical/Dealbreaker** | `text-rose-700` / `bg-rose-50` | 警告、欠点、Dealbreaker |
| **Success** | `text-emerald-700` / `bg-emerald-50` | 肯定的評価 |
| **Neutral** | `text-slate-500` | 業界平均値 |

---

## Typography Scale

```css
/* Headings */
.heading-1 { @apply text-3xl font-bold tracking-tight; }
.heading-2 { @apply text-2xl font-semibold; }
.heading-3 { @apply text-xl font-medium; }

/* Body */
.body-large { @apply text-lg leading-relaxed; }
.body-base { @apply text-base leading-relaxed; }
.body-small { @apply text-sm text-slate-600; }

/* Labels */
.label { @apply text-xs font-medium uppercase tracking-wide; }
```

---

## Legal Compliance (Must Implement)

> [!CAUTION]
> 以下の法的要件は **すべてのレビュー記事で必須** です。省略は許可されません。

### 1. Glass Box Disclosure (収益構造説明ボックス)

すべてのレビュー記事の冒頭（H1直下）に配置する透明性開示：

```tsx
// 必須要素
<TrustDisclosureAlert>
  <Summary>当ラボは読者の支援により運営されています</Summary>
  <Details>
    - 検証費用は自腹で負担しています
    - 編集権はスポンサーから完全に独立しています
    - アフィリエイトリンク経由で購入された場合、紹介料を受け取ることがあります
  </Details>
</TrustDisclosureAlert>
```

**Design Requirements:**
- `bg-slate-50` background
- `border-l-4 border-blue-600` left accent
- `Collapsible` によるプログレッシブ開示

### 2. No Raw Text (著作権回避)

> [!WARNING]
> スクレイピングした口コミの「原文」をそのまま表示することは **禁止** です。

**Allowed:**
```tsx
// ✅ AI分析した傾向データの表示
<InsightCard>
  <Metric>87%</Metric>
  <Label>のユーザーが「使いやすい」と評価</Label>
  <Source>G2, Capterra等 計1,247件のレビュー分析</Source>
</InsightCard>
```

**Prohibited:**
```tsx
// ❌ 原文の直接表示
<Quote>
  「このツールは使いやすくて最高です！」
  - John D., 2024/01/15
</Quote>
```

---

## Component Styling Patterns

### Evidence Container (検証証拠)
```tsx
<div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6">
  {/* 検証画像/動画 */}
</div>
```

### Verdict Badge
```tsx
// Recommended
<Badge className="bg-emerald-100 text-emerald-800">推奨</Badge>

// Use with Caution
<Badge className="bg-amber-100 text-amber-800">条件付き推奨</Badge>

// Dealbreaker
<Badge className="bg-rose-100 text-rose-800">非推奨</Badge>
```

### Radar Chart Styling
```tsx
// 検証対象: Blue
fill="rgba(29, 78, 216, 0.3)"
stroke="#1d4ed8"

// 業界平均: Gray
fill="rgba(100, 116, 139, 0.2)"
stroke="#64748b"
```
