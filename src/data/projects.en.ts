// src/data/projects.en.ts
export const projects = [
    {
        id: 1,
        title: 'Queater',
        link: 'https://github.com/brianrddev/Queater',
        year: '2024',
        description: 'Web application that enhances restaurant service through QR codes, allowing customers to view the menu and place orders seamlessly.',
        tech: ['Laravel', 'jQuery', 'Tailwind', 'MySQL', 'PHP'],
        highlight: true,
        image: './assets/queater.avif',
    },
    {
        id: 2,
        title: 'JC Tus Asesores',
        link: 'https://jctusasesores.com/',
        year: '2025',
        description:
            "Complete development of the corporate website using Astro and Tailwind CSS. Automated system for BOE data retrieval and full management of the hotel's IT infrastructure.",
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
            'Comprehensive platform for managing games and tournaments, built with Laravel + React + Inertia. Features a modular admin panel, generic CRUD systems, reusable form components, and robust validation powered by FormRequest.',
        tech: ['Laravel', 'React', 'Inertia', 'TypeScript', 'Tailwind', 'MySQL'],
        highlight: false,
        image: './assets/vulcacomics.avif',
    },
    {
        id: 4,
        title: 'Toti Sanz',
        link: 'https://www.totisanz.com/',
        year: '2025',
        description:
            'Official website for artist Toti Sanz, designed as a high-performance visual and musical experience. The project focuses on performance, accessibility, and animation, featuring optimized resource loading, multimedia integration (YouTube, Spotify, Apple Music), and a modern architecture built around SEO and Core Web Vitals.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'GSAP', 'YouTube Embed', 'Vercel'],
        highlight: true,
        image: './assets/totisanz.avif',
    },
];
