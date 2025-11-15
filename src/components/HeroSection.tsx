import ContactLinks from './ContactLinks';
import LogoLoop from './LogoLoop';
import PixelBlast from './PixelBlast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import { useHeroRevealAnimation } from '@/hooks/useHeroRevealAnimation';

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
    SiHostinger,
    SiNetlify,
} from '@icons-pack/react-simple-icons';

const allLogos = [
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
    { node: <SiHostinger size={36} title="Hostinger" /> },
    { node: <SiNetlify size={36} title="Netlify" /> },
];

export default function HeroSection() {
    const { t } = useLanguage();
    const heroRef = useRef<HTMLElement>(null);

    useHeroRevealAnimation(heroRef, {
        titleSelector: '.hero-title',
        subtitleSelector: '.hero-subtitle',
        logosSelector: '.hero-logos > *',
        backgroundSelector: '.hero-background',
    });

    return (
        <section
            id="hero"
            ref={heroRef}
            className="
        relative h-dvh w-full overflow-hidden
        flex flex-col items-center justify-center
        px-6 text-foreground
    "
        >
            {/* Background */}
            <div className="absolute inset-0 hero-background pointer-events-none z-0">
                <PixelBlast
                    variant="square"
                    pixelSize={2}
                    patternScale={3}
                    patternDensity={1}
                    liquid={false}
                    enableRipples={false}
                    pixelSizeJitter={1}
                    noiseAmount={0}
                    edgeFade={0.55}
                    transparent
                />
            </div>

            {/* Soft vignette for clarity */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/40 via-background/10 to-background/40 z-1" />

            {/* CONTENT */}
            <div
                className="
            relative z-10
            max-w-7xl w-full mx-auto
            flex flex-col items-center text-center
            space-y-10
        "
            >
                {/* NAME */}
                <h1
                    className="
                hero-title
                font-bold leading-[0.95]
                text-6xl md:text-8xl lg:text-[10rem]
                tracking-[-0.02em]
                bg-clip-text text-transparent
                bg-linear-to-b from-foreground to-foreground/70
                drop-shadow-sm
            "
                >
                    {t.hero.name}
                </h1>

                {/* SUBTITLE */}
                <p className="hero-subtitle max-w-3xl mx-auto text-xl md:text-3xl font-light text-killua leading-relaxed tracking-wide">{t.hero.title}</p>

                {/* Contact links */}
                <div className="hero-contacts">
                    <ContactLinks />
                </div>
            </div>

            {/* LOGO LOOP */}
            <div
                className="
            hero-logos
            absolute bottom-12 left-1/2 -translate-x-1/2
            w-full max-w-7xl
            z-10 opacity-95
        "
            >
                <LogoLoop logos={allLogos} speed={30} gap={40} scaleOnHover pauseOnHover />
            </div>
        </section>
    );
}
