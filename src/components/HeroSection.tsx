import { useRef } from "react";
import ContactLinks from "@/components/ContactLinks";
import LogoLoop from "@/components/LogoLoop";
// import PixelBlast from "@/components/PixelBlast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGsap } from "@/hooks/useGsap";
import { useHeroRevealAnimation } from "@/hooks/useHeroRevealAnimation";

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
  SiHostinger,
  SiNetlify,
  SiVercel,
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypeorm,
} from "@icons-pack/react-simple-icons";

const allLogos = [
  { node: <SiHtml5 size={36} /> },
  { node: <SiCss size={36} /> },
  { node: <SiJavascript size={36} /> },
  { node: <SiTypescript size={36} /> },

  { node: <SiReact size={36} /> },
  { node: <SiNextdotjs size={36} /> },
  { node: <SiAstro size={36} /> },
  { node: <SiJquery size={36} /> },
  { node: <SiTailwindcss size={36} /> },

  { node: <SiNodedotjs size={36} /> },
  { node: <SiExpress size={36} /> },
  { node: <SiLaravel size={36} /> },
  { node: <SiPhp size={36} /> },
  { node: <SiPython size={36} /> },

  { node: <SiMysql size={36} /> },
  { node: <SiPostgresql size={36} /> },
  { node: <SiTypeorm size={36} /> },

  { node: <SiStripe size={36} /> },

  { node: <SiDocker size={36} /> },

  { node: <SiGit size={36} /> },
  { node: <SiGithub size={36} /> },
  { node: <SiGitlab size={36} /> },

  { node: <SiHostinger size={36} /> },
  { node: <SiNetlify size={36} /> },
  { node: <SiVercel size={36} /> },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  const gsap = useGsap();
  useHeroRevealAnimation(gsap, heroRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="
                relative h-screen w-full overflow-hidden
                flex flex-col items-center justify-center
                px-6 text-foreground
            "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 hero-background pointer-events-none z-0 hidden md:block">
        {/*<PixelBlast
                    pixelSize={4}
                    patternScale={2}
                    patternDensity={1}
                    pixelSizeJitter={0.5}
                    noiseAmount={0.1}
                    edgeFade={0.55}
                    liquid={false}
                    enableRipples={false}
                    transparent
                    color="var(--pixelblast)"
                    variant="square"
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.5}
                />*/}
      </div>

      {/* WRAPPER oculto al inicio para evitar parpadeos */}
      <div className="hero-content opacity-0">
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
                        "
          >
            {t.hero.name}
          </h1>

          {/* SUBTITLE */}
          <p
            className="
                        hero-subtitle
                        max-w-3xl mx-auto
                        text-xl md:text-3xl font-light
                        text-killua leading-relaxed tracking-wide
                    "
          >
            {t.hero.title}
          </p>

          {/* CONTACT LINKS */}
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
          <LogoLoop
            logos={allLogos}
            speed={30}
            gap={40}
            scaleOnHover
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
}
