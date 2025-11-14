interface sectionLayoutProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    ref?: React.RefObject<HTMLElement | null>;
}

export default function SectionLayout({ children, className = '', id, ref }: sectionLayoutProps) {
    return (
        <section id={id} ref={ref} className={`min-h-screen flex items-center px-4 md:px-6 py-12 md:py-2 ${className} `}>
            {children}
        </section>
    );
}
