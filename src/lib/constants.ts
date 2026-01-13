// src/lib/constants.ts

export const CATEGORY_META: Record<string, { label: string; color: string }> = {
    // 1. 文章・チャット・検索
    'text-assistant': {
        label: 'Text & Assistant',
        color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    // 2. 画像・デザイン
    'image-design': {
        label: 'Image & Design',
        color: 'text-pink-700 bg-pink-50 border-pink-200'
    },
    // 3. 動画・モーション
    'video-motion': {
        label: 'Video & Motion',
        color: 'text-red-700 bg-red-50 border-red-200'
    },
    // 4. 音声・議事録
    'voice-meeting': {
        label: 'Voice & Meeting',
        color: 'text-orange-700 bg-orange-50 border-orange-200'
    },
    // 5. 分析・データ活用
    'analysis-data': {
        label: 'Analysis & Data',
        color: 'text-teal-700 bg-teal-50 border-teal-200'
    },
    // 6. 業務自動化・エージェント
    'automation-agent': {
        label: 'Automation & Agent',
        color: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    // 7. アプリ開発・ノーコード
    'app-builder': {
        label: 'App Builder & No-Code',
        color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    // 未定義のカテゴリが来た場合のフォールバック
    'default': {
        label: 'Other Tools',
        color: 'text-gray-600 bg-gray-50 border-gray-200'
    }
};
