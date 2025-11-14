// src/components/ProjectCard.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    project: {
        title: string;
        link: string;
        year: string;
        description: string;
        tech: string[];
        highlight?: boolean;
        image?: string;
    };
    index: number;
    projectImageAlt: string;
}

export function ProjectCard({ project, projectImageAlt }: ProjectCardProps) {
    return (
        <article className="gsap-card group">
            <Card className="relative h-full overflow-hidden rounded-md border-border/40 bg-card transition-all duration-300 hover:border-killua/50 hover:shadow-xl hover:-translate-y-1">
                {/* Featured Badge - Esquina superior derecha */}
                {project.highlight && (
                    <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1.5 rounded-full bg-killua px-3 py-1 shadow-lg">
                            <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                            <span className="sr-only">Proyecto destacado</span>
                        </div>
                    </div>
                )}

                {/* Link wrapper - Hace toda la card clicable */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-killua focus-visible:ring-offset-2 rounded-md"
                    aria-label={`Ver proyecto ${project.title}, año ${project.year}`}
                >
                    {/* Imagen del proyecto */}
                    <div className="relative h-64 w-full overflow-hidden bg-muted">
                        {project.image ? (
                            <>
                                <img
                                    src={project.image}
                                    alt={`${project.title} - ${projectImageAlt}`}
                                    className="h-full w-full object-cover transition-transform duration-300  group-hover:saturate-110 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay oscuro en hover para mejor contraste */}
                                <div className="absolute inset-0 bg-linear-to-t from-white/30 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </>
                        ) : (
                            <div className="flex h-full items-center justify-center text-muted-foreground">
                                <span className="text-sm">{projectImageAlt}</span>
                            </div>
                        )}

                        {/* Icono de enlace externo - Aparece en hover */}
                        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                            <ExternalLink className="h-4 w-4 text-foreground" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Contenido de la card */}
                    <CardContent className="space-y-4 p-5">
                        {/* Header: Título y año */}
                        <div className="space-y-1">
                            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground transition-colors duration-200 group-hover:text-killua">
                                {project.title}
                            </h3>
                            <p className="text-sm font-medium text-muted-foreground">{project.year}</p>
                        </div>

                        {/* Descripción */}
                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                        {/* Stack tecnológico */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tech.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="rounded-sm px-2.5 py-0.5 text-xs font-medium transition-colors duration-200 hover:bg-killua/10 hover:text-killua"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </a>
            </Card>
        </article>
    );
}
