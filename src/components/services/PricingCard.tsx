// src/components/services/PricingCard.tsx
import { Check } from 'lucide-react';

interface PricingCardProps {
    badge: string;
    title: string;
    price: string;
    description: string;
    children?: React.ReactNode;
    highlighted?: boolean;
}

export default function PricingCard({
    badge,
    title,
    price,
    description,
    children,
    highlighted = false,
}: PricingCardProps) {
    return (
        <div
            className={`gsap-card relative flex flex-col gap-5 rounded-xl border p-6 transition-all duration-300 ${
                highlighted
                    ? 'border-killua/60 bg-killua/5 shadow-md shadow-killua/10'
                    : 'border-border/60 bg-card hover:border-killua/30'
            }`}
        >
            {/* Badge */}
            <span className="inline-flex self-start rounded-full border border-killua/30 bg-killua/10 px-3 py-0.5 text-xs font-semibold tracking-widest text-killua uppercase">
                {badge}
            </span>

            {/* Title & Price */}
            <div className="space-y-1">
                <h3 className="text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-2xl font-bold text-killua">{price}</p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

            {/* Optional extra content */}
            {children && <div className="mt-auto pt-2">{children}</div>}
        </div>
    );
}

// Small reusable check-item for maintenance includes list
export function IncludeItem({ label }: { label: string }) {
    return (
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 shrink-0 text-killua" />
            {label}
        </li>
    );
}
