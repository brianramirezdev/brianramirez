// src/components/services/ServiceCard.tsx
import {
    Globe,
    Settings2,
    Database,
    BrainCircuit,
    Plug,
    Server,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
    Globe,
    Settings2,
    Database,
    BrainCircuit,
    Plug,
    Server,
};

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    const Icon = iconMap[icon] ?? Globe;

    return (
        <div className="gsap-card group relative flex flex-col gap-5 rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-killua/40 hover:shadow-lg hover:shadow-killua/5">
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-killua/10 text-killua transition-colors group-hover:bg-killua/20">
                <Icon className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
