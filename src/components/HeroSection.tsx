import ContactLinks from './ContactLinks';
import LogoLoop from './LogoLoop';
import PixelBlast from './PixelBlast';
import { useLanguage } from '@/contexts/LanguageContext';

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
];

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="h-dvh flex flex-col items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
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
                <h1 className="text-7xl md:text-9xl leading-none">{t.hero.name}</h1>
                <p className="text-xl text-killua md:text-2xl max-w-2xl mx-auto">{t.hero.title}</p>

                <div className="flex justify-center">
                    <ContactLinks />
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full z-10">
                <LogoLoop logos={allLogos} speed={30} gap={40} scaleOnHover pauseOnHover />
            </div>
        </section>
    );
}
