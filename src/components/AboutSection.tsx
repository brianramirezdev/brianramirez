import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from './ui/badge';
import { skills as skillsEs } from '@/data/skills.es';
import { skills as skillsEn } from '@/data/skills.en';
import SectionLayout from '@/layouts/SectionLayout';

export default function AboutSection() {
    const { language, t } = useLanguage();
    const skills = language === 'es' ? skillsEs : skillsEn;

    return (
        <SectionLayout id="about">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Info & Educación */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 tracking-tight">{t.about.title}</h2>
                    <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed">
                        {t.about.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-12">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-killua">Educación</h3>
                        <div className="space-y-3 md:space-y-4 text-muted-foreground">
                            {t.about.educationList.map((education, index) => (
                                <div key={index}>
                                    <p className="font-medium text-foreground">{education.degree}</p>
                                    <p className="text-sm">{education.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-12 md:mt-0">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 tracking-tight">{t.about.skillsTitle}</h3>
                    <div className="space-y-6 md:space-y-8">
                        {skills.map((section) => (
                            <div key={section.category}>
                                <h4 className="text-killua font-semibold mb-2 md:mb-3 text-sm md:text-md tracking-wider">{section.label}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {section.items.map((skill) => (
                                        <Badge key={skill} variant="outline" className="hover:border-killua hover:text-killua rounded-sm">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
