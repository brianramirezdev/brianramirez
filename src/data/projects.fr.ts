// src/data/projects.fr.ts
export const projects = [
  {
    id: 1,
    title: "Focuspan",
    link: "https://github.com/brianramirezdev/todo-app",
    year: "2025",
    description:
      "Application web full-stack de gestion de tâches et de notes, conçue pour centraliser le travail dans un panneau unique axé sur la productivité. Intègre une pagination serveur réelle, une recherche et un tri côté serveur, offrant une expérience utilisateur fluide et moderne.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "Tailwind CSS",
      "Docker",
    ],
    highlight: true,
    image: "./assets/focuspan.avif",
  },
  {
    id: 2,
    title: "Toti Sanz",
    link: "https://www.totisanz.com/",
    year: "2025",
    description:
      "Site officiel de l'artiste Toti Sanz, conçu comme une expérience visuelle et musicale haute performance. Le projet met l'accent sur la performance, l'accessibilité et l'animation, avec un chargement optimisé des ressources, une intégration multimédia (YouTube, Spotify, Apple Music) et une architecture moderne orientée SEO et Core Web Vitals.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
      "YouTube Embed",
      "Vercel",
    ],
    highlight: true,
    image: "./assets/totisanz.avif",
  },
  {
    id: 3,
    title: "JC Tus Asesores",
    link: "https://jctusasesores.com/",
    year: "2025",
    description:
      "Développement complet du site web corporate avec Astro et Tailwind CSS. Système automatisé de consultation des données du BOE et gestion complète du système informatique de l'hôtel.",
    tech: ["Astro", "Tailwind", "JavaScript", "MySQL"],
    highlight: false,
    image: "./assets/jctusasesores.avif",
  },
  {
    id: 4,
    title: "Queater",
    link: "https://github.com/brianramirezdev/Queater",
    year: "2024",
    description:
      "Application web qui améliore le service en restauration via des QR codes, permettant aux clients de consulter le menu et de passer des commandes.",
    tech: ["Laravel", "jQuery", "Tailwind", "MySQL", "PHP"],
    highlight: true,
    image: "./assets/queater.avif",
  },
  // {
  //     id: 5,
  //     title: 'Vulca Comics',
  //     link: '#',
  //     year: '2025',
  //     description:
  //         'Plateforme complète de gestion de jeux et tournois, développée avec Laravel + React + Inertia. Dispose d\'un panneau d\'administration modulaire, de CRUDs génériques, de formulaires et modales réutilisables, et de validations robustes via FormRequest, le tout dans une architecture évolutive et cohérente.',
  //     tech: ['Laravel', 'React', 'Inertia', 'TypeScript', 'Tailwind', 'MySQL'],
  //     highlight: false,
  //     image: './assets/vulcacomics.avif',
  // },
];
