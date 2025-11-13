// src/components/WorksSection.tsx
import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGsapCardsAnimation } from '@/hooks/useGsapCardsAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects as projectsEs } from '@/data/projects.es';
import { projects as projectsEn } from '@/data/projects.en';

export default function WorksSection() {
    const mainRef = useRef<HTMLElement>(null);
    const { language, t } = useLanguage();
    const projects = language === 'es' ? projectsEs : projectsEn;

    useGsapCardsAnimation(mainRef);

    return (
        <section id="work" ref={mainRef} className="card-container min-h-screen px-6 py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 tracking-tight">{t.works.featuredTitle}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="gsap-card group hover:border-killua/50 transition-all duration-300 overflow-hidden rounded-md">
                            <div className="w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} - ${t.works.projectImageAlt}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                                    />
                                ) : (
                                    <span className="text-sm">{t.works.projectImageAlt}</span>
                                )}
                            </div>

                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-2xl group-hover:text-killua transition-colors">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </CardTitle>
                                    {project.highlight && <Badge className="bg-killua hover:bg-killua/90 rounded-sm">{t.works.badgeFeatured}</Badge>}
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
    );
}
