interface sectionLayoutProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    ref?: React.RefObject<HTMLElement | null>;
    bgColor?: 'default' | 'gray';
}

export default function SectionLayout({ children, className = '', id, ref, bgColor = 'default' }: sectionLayoutProps) {
    return (
        <section id={id} ref={ref} className={`flex items-center px-4 md:px-6 py-12 md:py-2 ${className} ${bgColor === 'gray' ? 'bg-secondary/30' : ''} `}>
            {children}
        </section>
    );
}
