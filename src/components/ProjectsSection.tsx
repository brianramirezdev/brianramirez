// src/components/projectsSection.tsx
import { useRef } from 'react';
import { useGsapScrollReveal } from '@/hooks/useGsapScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from '@/components/ProjectCard';

// Importar proyectos
import { projects as projectsEs } from '@/data/projects.es';
import { projects as projectsEn } from '@/data/projects.en';
import SectionLayout from '@/layouts/SectionLayout';
import { useGsapFloatReveal } from '@/hooks/useGsapFloatReveal';

export default function projectsSection() {
    const mainRef = useRef<HTMLElement>(null);
    const { language, t } = useLanguage();

    useGsapScrollReveal(mainRef);
    useGsapFloatReveal(mainRef);

    // Seleccionar los proyectos según el idioma actual
    const projects = language === 'es' ? projectsEs : projectsEn;

    return (
        <SectionLayout id="projects" ref={mainRef} className="bg-secondary/30 m-4 inset-0 rounded-md border border-foreground/10 ">
            <div className="max-w-7xl mx-auto md:pt-30 md:pb-20 lg:pb-30">
                <div className="mb-16 space-y-6">
                    <h2
                        id="projects-heading"
                        className="gsap-reveal text-5xl md:text-7xl font-bold tracking-tight leading-tight
        "
                    >
                        {t.projects.featuredTitle}
                    </h2>

                    {/* línea decorativa */}
                    <div className="gsap-reveal h-[3px] w-24 bg-killua/80 rounded-full"></div>

                    <p className="gsap-reveal text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.projects.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={`${language}-${index}`} project={project} index={index} projectImageAlt={t.projects.projectImageAlt} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
}
