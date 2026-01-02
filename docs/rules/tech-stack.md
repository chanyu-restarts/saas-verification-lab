# Technology Stack & Coding Standards

このドキュメントは、SaaS Verification Lab プロジェクトの技術スタックとコーディング規約を定義します。

---

## Framework & Core Technologies

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Next.js (App Router) | 14+ |
| **Language** | TypeScript | Strict Mode |
| **Styling** | Tailwind CSS | Latest |
| **UI Library** | shadcn/ui (Radix Primitives) | Latest |
| **Icons** | Lucide React | Latest |
| **Charts** | Recharts | Latest |
| **Video Comparison** | react-compare-slider | Latest |

---

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Home page
│   └── [slug]/            # Dynamic routes
├── components/
│   ├── ui/                # shadcn/ui base components
│   └── verification-lab/  # Domain-specific components
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── hooks/                 # Custom React hooks
```

---

## Coding Standards

### Component Declaration

```typescript
// ✅ Correct: Named export with function declaration
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  return <div>...</div>;
}

// ❌ Avoid: Default export or arrow function components
export default function ComponentName() { ... }
const ComponentName = () => { ... };
```

### Client Components Strategy

> [!IMPORTANT]
> **Server Components優先**: `"use client"` は必要な末端コンポーネントのみに付与すること。

```typescript
// ✅ Correct: Client directive only when needed (hooks, events, browser APIs)
"use client";

import { useState } from "react";

export function InteractiveButton() {
  const [clicked, setClicked] = useState(false);
  // ...
}

// ✅ Correct: Server Component (no directive needed)
export function StaticContent() {
  return <article>...</article>;
}
```

### Accessibility Requirements

すべてのインタラクティブ要素には適切なARIA属性を付与すること：

```typescript
// ✅ Correct: Proper ARIA attributes
<button
  aria-label="レビュー詳細を展開"
  aria-expanded={isExpanded}
  aria-controls="disclosure-content"
>
  詳細を見る
</button>

// ✅ Correct: Semantic HTML with roles
<section role="region" aria-labelledby="verdict-heading">
  <h2 id="verdict-heading">検証結果</h2>
</section>
```

---

## TypeScript Strict Mode Rules

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## Import Order Convention

```typescript
// 1. React/Next.js
import { useState, useEffect } from "react";
import Link from "next/link";

// 2. Third-party libraries
import { ChevronDown } from "lucide-react";
import { Radar, RadarChart } from "recharts";

// 3. Internal components (absolute imports)
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 4. Utilities and types
import { cn } from "@/lib/utils";
import type { VerdictData } from "@/types";
```
