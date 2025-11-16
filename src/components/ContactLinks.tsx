import type { contactLink } from '@/types';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const contactLinks: contactLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/brianramirezdev',
        icon: <Github size={28} />,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/brianramirez-dev/',
        icon: <Linkedin size={28} />,
    },
];

export default function ContactLinks() {
    return (
        <div className="flex gap-6">
            {contactLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" className="hover:text-killua rounded-md" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${link.name}`}>
                        {link.icon}
                    </a>
                </Button>
            ))}
        </div>
    );
}
