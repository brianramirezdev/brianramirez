// src/components/ServicesSection.tsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGsap } from '@/hooks/useGsap';
import { useGsapFloatReveal } from '@/hooks/useGsapFloatReveal';
import { useGsapScrollReveal } from '@/hooks/useGsapScrollReveal';
import SectionLayout from '@/layouts/SectionLayout';
import ServiceCard from '@/components/services/ServiceCard';
import PricingCard, { IncludeItem } from '@/components/services/PricingCard';
import { Clock, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const gsap = useGsap();

    useGsapFloatReveal(gsap, sectionRef);
    useGsapScrollReveal(gsap, sectionRef);

    return (
        <SectionLayout id="services" ref={sectionRef}>
            <div className="relative w-full px-6 md:pt-30 md:pb-20 lg:pb-30 max-w-7xl mx-auto space-y-24">

                {/* ── HERO DE SECCIÓN ── */}
                <header className="space-y-6 max-w-3xl">
                    <div className="space-y-4">
                        <h2
                            id="services-heading"
                            className="gsap-reveal text-5xl md:text-6xl font-bold tracking-tight leading-tight"
                        >
                            {t.services.title}
                        </h2>
                        <div className="gsap-reveal h-1 w-20 bg-killua/80 rounded-full" />
                        <p className="gsap-reveal text-xl md:text-2xl font-light text-killua leading-relaxed">
                            {t.services.subtitle}
                        </p>
                    </div>
                    <p className="gsap-reveal text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {t.services.intro}
                    </p>
                </header>

                {/* ── ÁREAS DE SERVICIO ── */}
                <div className="space-y-10">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        aria-label={t.services.title}
                    >
                        {t.services.areas.map((area) => (
                            <ServiceCard
                                key={area.title}
                                icon={area.icon}
                                title={area.title}
                                description={area.description}
                            />
                        ))}
                    </div>
                </div>

                {/* ── MODELOS DE CONTRATACIÓN ── */}
                <div className="space-y-12">
                    {/* Section heading */}
                    <div className="space-y-3">
                        <h2 className="gsap-reveal text-4xl md:text-5xl font-bold tracking-tight">
                            {t.services.pricingTitle}
                        </h2>
                        <div className="gsap-reveal h-0.5 w-14 bg-killua/60 rounded-full" />
                        <p className="gsap-reveal text-muted-foreground text-lg">
                            {t.services.pricingSubtitle}
                        </p>
                    </div>

                    {/* 4 pricing cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* 1 · Bolsa de Horas */}
                        <PricingCard
                            badge="01"
                            title={t.services.packageTitle}
                            price=""
                            description={t.services.packageDescription}
                        >
                            <div className="space-y-3">
                                {/* Table header */}
                                <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-widest text-killua/70 border-b border-border/40 pb-2">
                                    <span>{t.services.packageHours}</span>
                                    <span>{t.services.packagePrice}</span>
                                    <span>{t.services.packageRate}</span>
                                </div>
                                {/* Table rows */}
                                {t.services.packages.map((pkg) => (
                                    <div
                                        key={pkg.hours}
                                        className="grid grid-cols-3 text-sm text-muted-foreground py-1 border-b border-border/20 last:border-0"
                                    >
                                        <span className="font-medium text-foreground">{pkg.hours}</span>
                                        <span className="font-semibold text-killua">{pkg.price}</span>
                                        <span>{pkg.rate}</span>
                                    </div>
                                ))}
                            </div>
                        </PricingCard>

                        {/* 2 · Por Hora */}
                        <PricingCard
                            badge="02"
                            title={t.services.hourlyTitle}
                            price={t.services.hourlyPrice}
                            description={t.services.hourlyDescription}
                            highlighted
                        />

                        {/* 3 · Proyecto Cerrado */}
                        <PricingCard
                            badge="03"
                            title={t.services.fixedTitle}
                            price=""
                            description={t.services.fixedDescription}
                        >
                            <div className="space-y-2">
                                {t.services.fixedProjects.map((proj) => (
                                    <div
                                        key={proj.type}
                                        className="flex items-center justify-between gap-4 rounded-lg bg-background/60 border border-border/30 px-4 py-3"
                                    >
                                        <span className="text-sm text-muted-foreground">{proj.type}</span>
                                        <span className="text-sm font-semibold text-killua shrink-0">{proj.price}</span>
                                    </div>
                                ))}
                                <p className="text-xs text-muted-foreground/70 pt-2 leading-relaxed">
                                    💡 {t.services.fixedNote}
                                </p>
                            </div>
                        </PricingCard>

                        {/* 4 · Mantenimiento */}
                        <PricingCard
                            badge="04"
                            title={t.services.maintenanceTitle}
                            price={t.services.maintenancePrice}
                            description=""
                        >
                            <ul className="space-y-2">
                                {t.services.maintenanceIncludes.map((item) => (
                                    <IncludeItem key={item} label={item} />
                                ))}
                            </ul>
                        </PricingCard>
                    </div>
                </div>

                {/* ── DISPONIBILIDAD ── */}
                <div className="gsap-reveal flex flex-col sm:flex-row gap-6 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-3 flex-1">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-killua" />
                        <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-widest text-killua/80">
                                {t.services.schedule}
                            </p>
                            <p className="text-sm text-muted-foreground">{t.services.scheduleValue}</p>
                        </div>
                    </div>
                    <div className="hidden sm:block w-px bg-border/40" />
                    <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30 animate-pulse" />
                        <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-widest text-killua/80">
                                {t.services.mode}
                            </p>
                            <p className="text-sm text-muted-foreground">{t.services.modeValue}</p>
                        </div>
                    </div>
                </div>

                {/* ── CTA FINAL ── */}
                <div className="gsap-reveal flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-killua/20 bg-killua/5 px-8 py-8">
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-center sm:text-left">
                        {t.services.ctaTitle}
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 shrink-0 rounded-full bg-killua px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-killua/90 hover:shadow-killua/30 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    >
                        {t.services.ctaButton}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </SectionLayout>
    );
}
