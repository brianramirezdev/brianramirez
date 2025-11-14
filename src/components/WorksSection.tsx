// src/components/WorksSection.tsx
import { useRef } from 'react';
import { useGsapCardsAnimation } from '@/hooks/useGsapCardsAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from '@/components/ProjectCard';

// Importar proyectos
import { projects as projectsEs } from '@/data/projects.es';
import { projects as projectsEn } from '@/data/projects.en';

export default function WorksSection() {
    const mainRef = useRef<HTMLElement>(null);
    const { language, t } = useLanguage();

    useGsapCardsAnimation(mainRef);

    // Seleccionar los proyectos según el idioma actual
    const projects = language === 'es' ? projectsEs : projectsEn;

    return (
        <section id="work" ref={mainRef} className="card-container min-h-screen px-6 py-24 bg-secondary/30" aria-labelledby="works-heading">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 space-y-4">
                    <h2 id="works-heading" className="text-5xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {t.works.featuredTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">{t.works.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={`${language}-${index}`} project={project} index={index} projectImageAlt={t.works.projectImageAlt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
