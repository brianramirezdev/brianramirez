// src/locales/ja.ts
export const ja = {
    navbar: {
        about: '私について',
        services: 'サービス',
        projects: 'プロジェクト',
        contact: 'お問い合わせ',
        sidebarTitle: 'メニュー',
        openMenu: 'メニューを開く',
        closeMenu: 'メニューを閉じる',
    },
    hero: {
        name: 'Brian Ramírez',
        title: 'Webアプリケーション、AI、ビッグデータを専門とするフルスタック開発者。',
    },
    about: {
        title: '自己紹介',
        bio: [
            'モダンなWeb技術に精通し、AIとビッグデータを専門とするフルスタック開発者です。',
            '現在は人工知能分野の知識をさらに深めながら、高性能で洗練されたデザインのWebソリューションを開発しています。',
            '各プロジェクトでは、分析的な思考力や柔軟性を活かし、SCRUMなどのアジャイル手法を用いたチームワークを大切にしています。',
        ],
        education: '学歴',
        educationList: [
            {
                degree: 'AI・ビッグデータ専門課程',
                institution: 'CIFP Zonzamas • 2024 - 2025',
            },
            {
                degree: 'Webアプリケーション開発 高度技術者',
                institution: 'CIFP Zonzamas • 2022 - 2024',
            },
        ],
        skillsTitle: 'スキル',
        frontend: 'フロントエンド',
        backend: 'バックエンド & データベース',
        tools: 'ツール & デザイン',
    },
    projects: {
        featuredTitle: '注目のプロジェクト',
        description:
            'Laravel、React、TypeScript、Astroなどのモダン技術を用いて構築したプロジェクトです。スケーラブルなアーキテクチャを採用し、実際の課題解決に焦点を当てています。',
        projectImageAlt: 'プロジェクト画像',
    },

    contact: {
        title: '一緒に',
        together: '創りましょう',
        tagline: '小さなアイデアから本格的なプロダクトまで、価値あるものを一緒に形にしていきましょう。',
        description: '現在、フリーランス案件やフルタイムの機会に対応可能です。コラボレーションをご希望の方はお気軽にご連絡ください。',
        email: 'contact@brianramirez.dev',
        phone: '+34 611 15 47 64',
        closingMessage: '興味深いプロジェクトやコンサルティング、アイデアのご相談など、幅広く対応しております。いつでもお気軽にご連絡ください。できるだけ早く返信いたします。',
    },

    contactForm: {
        title: 'お問い合わせ',

        // Labels
        name: '氏名',
        email: 'メールアドレス',
        message: 'メッセージ',

        // Placeholders
        placeholders: {
            name: '氏名を入力してください',
            email: 'メールアドレスを入力してください',
            message: 'プロジェクトの内容をお聞かせください…',
        },

        // Buttons
        submit: '送信する',
        sending: '送信中…',

        // Errors
        errors: {
            name: {
                required: '氏名は必須項目です。',
                min: '氏名が短すぎます。',
            },
            email: {
                required: 'メールアドレスは必須項目です。',
                invalid: '有効なメールアドレスを入力してください。',
            },
            message: {
                required: 'メッセージは必須項目です。',
                min: 'メッセージが短すぎます。',
            },
        },

        // Status messages
        status: {
            success: 'メッセージが正常に送信されました！ 追ってご連絡いたします。',
            error: 'メッセージの送信中にエラーが発生しました。もう一度お試しください。',
        },
    },

    footer: {
        copyright: '© 2025 Brian Ramírez',
        location: 'ランサローテ島（スペイン）',

        // Light CTA
        ctaMiniTitle: 'ポートフォリオをご覧いただきありがとうございます。',
        ctaMiniSubtitle: '新しい機会や挑戦、コラボレーションを常に歓迎しています。',

        // Columns
        colAboutTitle: 'このサイトについて',
        colAboutText: 'モダンな技術を用いて構築されたポートフォリオ。パフォーマンス、アクセシビリティ、そして洗練されたビジュアル体験に重点を置いています。',

        colLocationTitle: '所在地',
        colWorld: '世界中どこからでも対応可能です。',

        colLinksTitle: 'ナビゲーション',
        linkAbout: '私について',
        linkServices: 'サービス',
        linkProjects: 'プロジェクト',
        linkContact: 'お問い合わせ',

        // Bottom bar
        rights: '無断転載を禁じます。',
        crafted: 'デザインと開発はすべて私自身が手がけました。',
    },

    services: {
        title: 'サービス',
        subtitle: '私にできること',
        intro: 'ビジネスやプロジェクトに対して、実際の成果を出せるオーダーメイドの技術ソリューションを提供します。アイデアから本番環境に至るまで、すべてのフェーズで卆身に取り組みます。',

        areas: [
            { icon: 'Globe', title: 'Web開発', description: 'モダンなデザインと高パフォーマンスなウェブサイト、ランディングページ、管理ダッシュボードの構築および最適化。' },
            { icon: 'Settings2', title: 'カスタムシステム', description: '業務ロジック、社内プロセスの自動化、お客様の業務に合わせた管理ツールの開発。' },
            { icon: 'Database', title: 'データ管理', description: 'リレーショナルデータベースの設計・管理、データ分析およびレポート作成。' },
            { icon: 'BrainCircuit', title: '人工知能', description: '分類、予測、タスク自動化、インテリジェントアシスタントなどのAIソリューションの実装。' },
            { icon: 'Plug', title: '連携・インテグレーション', description: '決済ゲートウェイ（Stripe）、メッセージング、外部API、プラットフォーム間の接続。' },
            { icon: 'Server', title: 'インフラストラクチャ', description: 'ホスティング、アプリケーションデプロイ、環境構築、本番環境のセキュリティ管理。' },
        ],

        pricingTitle: '契約モデル',
        pricingSubtitle: 'プロジェクトやチームに対応できる柔軟な選択肢。',

        packageTitle: '時間パッケージ',
        packageDescription: '継続的な開発、技術サポート、コンサルティングに適しています。前払い制。',
        packageHours: '時間',
        packagePrice: '料金',
        packageRate: '時間単価',
        packages: [
            { hours: '10時間', price: '200 €', rate: '20 €/h' },
            { hours: '20時間', price: '360 €', rate: '18 €/h' },
        ],

        hourlyTitle: '時間単価',
        hourlyPrice: '25 € / 時間',
        hourlyDescription: '小規模な修正、バグ修正、特定の調整など、長期コミットなしの小規模な作業に適しています。',

        fixedTitle: '固定料金プロジェクト',
        fixedDescription: '要件分析に基づく固定予算。明確なスコープのプロジェクトに最適。',
        fixedProjects: [
            { type: 'コーポレートサイト', price: '600 €から' },
            { type: 'アプリ / 管理ダッシュボード', price: '1,200 €から' },
            { type: '管理システム / デジタル化', price: '900 €から' },
        ],
        fixedNote: '最終的な料金は、複雑さと業務対応後に決定されます。',

        maintenanceTitle: '月次メンテナンス',
        maintenancePrice: '90 € / 月',
        maintenanceIncludes: [
            'セキュリティ監視',
            '重要アップデート',
            'バックアップ',
            '月舁2時間の技術サポート',
        ],

        availabilityTitle: '対応可能時間',
        schedule: 'スケジュール',
        scheduleValue: '月曜日～金曜日 · 16:00～20:00（カナリア時間）',
        mode: '対応方法',
        modeValue: 'リモート · 非同期コミュニケーションおよびスケジュール済ミーティング',

        ctaTitle: 'プロジェクトの構想はありますか？',
        ctaButton: '相談する',
    },

    downloadCV: {
        label: '履歴書をダウンロード',
    },

    theme: {
        toggle: 'テーマ切り替え',
        light: 'ライト',
        dark: 'ダーク',
        system: 'システム',
    },

    language: {
        toggle: '言語切り替え',
    },
};
