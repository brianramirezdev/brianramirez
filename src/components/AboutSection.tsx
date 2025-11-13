import { Badge } from './ui/badge';
import { skills } from '@/data/skills';

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 py-24">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-5xl font-bold mb-8 tracking-tight">Sobre mí</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>Desarrollador Full Stack con experiencia en tecnologías web modernas y especialización en IA y Big Data.</p>
                        <p>
                            Actualmente expandiendo mis conocimientos en inteligencia artificial mientras desarrollo soluciones web robustas que combinan rendimiento y diseño de
                            vanguardia.
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
    );
}
