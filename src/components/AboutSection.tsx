// src/components/AboutSection.tsx
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import SectionLayout from '@/layouts/SectionLayout';

import { useGsapFloatReveal } from '@/hooks/useGsapFloatReveal';

import { skills as skillsEs } from '@/data/skills.es';
import { skills as skillsEn } from '@/data/skills.en';

export default function AboutSection() {
    const { language, t } = useLanguage();
    const skills = language === 'es' ? skillsEs : skillsEn;

    const aboutRef = useRef<HTMLElement>(null);

    // Nuevo hook con animación artística premium
    useGsapFloatReveal(aboutRef, '.gsap-reveal');

    return (
        <SectionLayout id="about">
            <section ref={aboutRef} className="relative w-full px-6 py-28 max-w-7xl mx-auto" aria-labelledby="about-heading">
                <div className="grid md:grid-cols-2 gap-20">
                    {/* LEFT */}
                    <div className="space-y-10">
                        <header className="space-y-4">
                            <h2
                                id="about-heading"
                                className="gsap-reveal text-5xl md:text-6xl font-bold tracking-tight
                                           bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60"
                            >
                                {t.about.title}
                            </h2>

                            <div className="gsap-reveal h-1 w-20 bg-killua/80 rounded-full"></div>
                        </header>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                            {t.about.bio.map((p: string, idx: number) => (
                                <p key={idx} className="gsap-reveal">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-6 pt-4">
                            <h3 className="gsap-reveal text-2xl font-semibold tracking-wide text-killua">{t.about.education}</h3>

                            <div className="grid gap-5">
                                {t.about.educationList.map((edu: any, i: number) => (
                                    <div key={i} className="gsap-reveal">
                                        <p className="text-lg font-medium text-foreground">{edu.degree}</p>
                                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - SKILLS */}
                    <div className="space-y-12">
                        <h3
                            className="gsap-reveal text-4xl font-bold tracking-tight mb-6
                                       bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60"
                        >
                            {t.about.skillsTitle}
                        </h3>

                        <div className="space-y-10">
                            {skills.map((section) => (
                                <div key={section.category} className="gsap-reveal">
                                    <h4 className="text-sm md:text-md font-semibold text-killua/90 tracking-widest mb-3 uppercase">{section.label}</h4>

                                    <div className="flex flex-wrap gap-3">
                                        {section.items.map((skill: string) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="rounded-sm px-3 py-1 text-xs font-medium
                                                           bg-background/60 border border-border/40
                                                           hover:bg-killua/10 hover:text-killua transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SectionLayout>
    );
}
