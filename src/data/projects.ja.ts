// src/data/projects.ja.ts
export const projects = [
    {
        id: 1,
        title: 'Queater',
        link: 'https://github.com/brianrddev/Queater',
        year: '2024',
        description: 'QRコードを使用してメニュー閲覧や注文をシームレスに行える、レストラン向けのサービス向上Webアプリケーション。',
        tech: ['Laravel', 'jQuery', 'Tailwind', 'MySQL', 'PHP'],
        highlight: true,
        image: './assets/queater.avif',
    },
    {
        id: 2,
        title: 'JC Tus Asesores',
        link: 'https://jctusasesores.com/',
        year: '2025',
        description: 'AstroとTailwind CSSで構築した企業向けWebサイト。BOEデータ取得の自動化システム、ホテルのITインフラ管理などを全面的に担当しました。',
        tech: ['Astro', 'Tailwind', 'JavaScript', 'MySQL'],
        highlight: true,
        image: './assets/jctusasesores.avif',
    },
    {
        id: 3,
        title: 'Vulca Comics',
        link: '#',
        year: '2025',
        description:
            'Laravel + React + Inertiaで構築されたゲーム・トーナメント管理プラットフォーム。モジュール型管理パネル、汎用CRUD、再利用可能なフォーム、FormRequestによる堅牢なバリデーションを備えています。',
        tech: ['Laravel', 'React', 'Inertia', 'TypeScript', 'Tailwind', 'MySQL'],
        highlight: false,
        image: './assets/vulcacomics.avif',
    },
];
