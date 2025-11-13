import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import PixelBlast from '@/components/PixelBlast';
import LogoLoop from '@/components/LogoLoop';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import { Github, Linkedin, Mail } from 'lucide-react';

import {
    SiTypescript,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiAstro,
    SiJquery,
    SiTailwindcss,
    SiLaravel,
    SiPhp,
    SiPython,
    SiMysql,
    SiGit,
    SiGithub,
    SiGitlab,
    SiStripe,
    SiChartdotjs,
    SiPusher,
} from '@icons-pack/react-simple-icons';

export const allLogos = [
    { node: <SiHtml5 size={36} title="HTML5" /> },
    { node: <SiCss size={36} title="CSS3" /> },
    { node: <SiJavascript size={36} title="JavaScript" /> },
    { node: <SiTypescript size={36} title="TypeScript" /> },
    { node: <SiReact size={36} title="React" /> },
    { node: <SiAstro size={36} title="Astro" /> },
    { node: <SiJquery size={36} title="jQuery" /> },
    { node: <SiTailwindcss size={36} title="TailwindCSS" /> },
    { node: <SiLaravel size={36} title="Laravel" /> },
    { node: <SiPhp size={36} title="PHP" /> },
    { node: <SiPython size={36} title="Python" /> },
    { node: <SiMysql size={36} title="MySQL" /> },
    { node: <SiStripe size={36} title="Stripe" /> },
    { node: <SiChartdotjs size={36} title="Chart.js" /> },
    { node: <SiPusher size={36} title="Pusher" /> },
    { node: <SiGit size={36} title="Git" /> },
    { node: <SiGithub size={36} title="GitHub" /> },
    { node: <SiGitlab size={36} title="GitLab" /> },
];
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lenis = (window as any).lenis;

        // 🔹 Asegura que GSAP actualice los ScrollTriggers cuando Lenis se mueve
        if (lenis) {
            lenis.on('scroll', () => {
                ScrollTrigger.update();
            });
        }

        // 🔹 Estado inicial de las cards
        gsap.set('.gsap-card-item', { y: 60, opacity: 0 });

        // 🔹 Animación simple al entrar en viewport
        gsap.utils.toArray('.gsap-card-item').forEach((card: any, i) => {
            gsap.fromTo(
                card,
                {
                    y: 60, // posición inicial (más abajo)
                    scale: 0.9, // ligeramente más pequeño
                    opacity: 0, // invisible
                },
                {
                    y: 0, // vuelve a su posición original
                    scale: 1, // tamaño normal
                    opacity: 1, // completamente visible
                    duration: 1, // duración de la animación (1s)
                    ease: 'power3.out', // easing suave
                    delay: i * 0.15, // pequeño retardo entre cada card (efecto cascada)
                    scrollTrigger: {
                        trigger: card, // el elemento que activa la animación
                        start: 'top 85%', // empieza cuando el top del card entra al 85% del viewport
                        end: 'bottom 20%', // termina cuando el card llega al 20% del viewport
                        toggleActions: 'play none none reverse', // cómo se comporta al entrar/salir
                    },
                }
            );
        });

        // 🔹 Refresca triggers al cargar todo
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill(true));
        };
    }, []);

    const links = {
        github: 'https://github.com/brianrddev',
        linkedin: 'https://www.linkedin.com/in/brianramirez-dev/',
        mail: 'mailto:brianrd.dev@gmail.com',
    };

    const projects = [
        {
            title: 'Queater',
            link: 'https://github.com/brianrddev/Queater',
            year: '2024',
            description: 'Aplicación web que optimiza el servicio en restaurantes mediante códigos QR, permitiendo a los clientes ver el menú y hacer pedidos.',
            tech: ['Laravel', 'jQuery', 'Tailwind', 'MySQL', 'PHP'],
            highlight: true,
            image: './assets/queater.png',
        },
        {
            title: 'JC Tus Asesores',
            link: 'https://jctusasesores.com/',
            year: '2025',
            description:
                'Desarrollo integral del sitio web corporativo con Astro y Tailwind CSS. Sistema automatizado de consulta de datos del BOE y gestión completa del área de sistemas del hotel.',
            tech: ['Astro', 'Tailwind', 'JavaScript', 'MySQL'],
            highlight: true,
            image: './assets/jctusasesores.png',
        },
        {
            title: 'Vulca Comics',
            link: '#',
            year: '2025',
            description:
                'Plataforma integral para gestionar juegos y torneos, creada con Laravel + React + Inertia. Cuenta con panel administrativo modular, CRUDs genéricos, formularios y modales reutilizables, y validaciones sólidas mediante FormRequest, todo bajo una arquitectura escalable y coherente.',
            tech: ['Laravel', 'React', 'Inertia', 'TypeScript', 'Tailwind', 'MySQL'],
            highlight: true,
            image: './assets/vulcacomics.png',
        },
    ];

    const skills = {
        frontend: ['HTML5', 'CSS', 'JavaScript', 'React', 'jQuery', 'Tailwind', 'Astro'],
        backend: ['PHP', 'Laravel', 'Python', 'MySQL'],
        tools: ['Git', 'Github', 'Gitlab', 'Photoshop', 'Illustrator'],
    };

    return (
        <div className="bg-background text-foreground min-h-screen font-sans">
            {/* 🧭 NAVIGATION */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 `}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex gap-8 text-sm">
                        <a href="#about" className="hover:text-killua transition-colors">
                            Sobre mí
                        </a>
                        <a href="#work" className="hover:text-killua transition-colors">
                            Trabajo
                        </a>
                        <a href="#contact" className="hover:text-killua transition-colors">
                            Contacto
                        </a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <DownloadCVButton />
                        <ModeToggle />
                    </div>
                </div>
            </nav>

            {/* 🎯 HERO SECTION */}
            <section id="hero" data-scroll-section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none ">
                    <PixelBlast
                        variant="square"
                        pixelSize={2}
                        patternScale={3}
                        patternDensity={1}
                        liquid={false}
                        enableRipples={false}
                        pixelSizeJitter={0}
                        noiseAmount={0}
                        edgeFade={0.2}
                        transparent
                        color="#f1f1f1"
                    />
                </div>

                <div className="max-w-7xl w-full relative z-10 text-center space-y-6">
                    <h1 className="text-7xl md:text-9xl  leading-none">Brian Ramírez</h1>
                    <p className="text-xl text-killua md:text-2xl  max-w-2xl mx-auto">Desarrollador Full Stack especializado en aplicaciones web, IA y Big Data.</p>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button variant="outline" size="icon" className="hover:border-killua hover:text-killua rounded-md" asChild>
                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="hover:border-killua hover:text-killua rounded-md" asChild>
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="hover:border-killua hover:text-killua rounded-md" asChild>
                            <a href={links.mail}>
                                <Mail size={20} />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full z-10">
                    <LogoLoop logos={allLogos} speed={30} gap={40} scaleOnHover pauseOnHover />
                </div>
            </section>

            {/* 📘 ABOUT SECTION */}
            <section id="about" data-scroll-section className="min-h-screen flex items-center px-6 py-24">
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-bold mb-8 tracking-tight">Sobre mí</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>Desarrollador Full Stack con experiencia en tecnologías web modernas y especialización en IA y Big Data.</p>
                            <p>
                                Actualmente expandiendo mis conocimientos en inteligencia artificial mientras desarrollo soluciones web robustas que combinan rendimiento y diseño
                                de vanguardia.
                            </p>
                            <p>Abordo cada proyecto con razonamiento analítico, adaptabilidad y un fuerte enfoque en el trabajo en equipo usando metodologías ágiles como SCRUM.</p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-semibold mb-4 text-killua">Educación</h3>
                            <div className="space-y-4 text-muted-foreground">
                                <div>
                                    <p className="font-medium text-foreground">Especialización en IA y Big Data</p>
                                    <p className="text-sm">CIFP Zonzamas • 2024 - 2025</p>
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Técnico Superior en Desarrollo de Aplicaciones Web</p>
                                    <p className="text-sm">CIFP Zonzamas • 2022 - 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold mb-8 tracking-tight">Habilidades</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-killua font-semibold mb-3 text-sm tracking-wider">FRONTEND</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge key={skill} variant="outline" className="hover:border-killua hover:text-killua rounded-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-killua font-semibold mb-3 text-sm tracking-wider">BACKEND & DATABASE</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge key={skill} variant="outline" className="hover:border-killua hover:text-killua rounded-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-killua font-semibold mb-3 text-sm tracking-wider">HERRAMIENTAS & DISEÑO</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge key={skill} variant="outline" className="hover:border-killua hover:text-killua rounded-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💼 WORK SECTION */}
            <section id="work" data-scroll-section className="min-h-screen px-6 py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 tracking-tight">Proyectos Destacados</h2>

                    <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="gsap-card-item group hover:border-killua/50 transition-all duration-300 overflow-hidden rounded-md group">
                                <div className="w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                                    ) : (
                                        <span className="text-sm">Imagen del proyecto</span>
                                    )}
                                </div>

                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-2xl group-hover:text-killua transition-colors">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                        </CardTitle>
                                        {project.highlight && <Badge className="bg-killua hover:bg-killua/90 rounded-sm">DESTACADO</Badge>}
                                    </div>
                                    <CardDescription className="text-sm text-muted-foreground">{project.year}</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs rounded-sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✉️ CONTACT SECTION */}
            <section id="contact" data-scroll-section className="min-h-screen flex items-center px-6 py-24">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-3xl">
                        <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
                            Trabajemos <br />
                            <span className="text-killua">Juntos</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-12">
                            Actualmente disponible para trabajos freelance y oportunidades a tiempo completo. No dudes en contactarme si te gustaría colaborar.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:brianrd.dev@gmail.com" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors group">
                                <Mail className="group-hover:scale-110 mt-1 transition-transform" />
                                brianrd.dev@gmail.com
                            </a>

                            <a href="tel:+34611154764" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors">
                                +34 611 15 47 64
                            </a>

                            <div className="flex gap-6 pt-8">
                                <Button variant="ghost" size="icon" className="hover:text-killua rounded-md" asChild>
                                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                                        <Github size={28} />
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:text-killua rounded-md" asChild>
                                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={28} />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ⚡ FOOTER */}
            <footer className="border-t px-6 py-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
                    <p>© 2025 Brian Ramírez. Todos los derechos reservados.</p>
                    <p>Las Palmas de Gran Canaria, ES</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
