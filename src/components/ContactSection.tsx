import { Mail } from 'lucide-react';
import ContactLinks from './ContactLinks';

export default function ContactSection() {
    return (
        <section id="contact" data-scroll-section className="min-h-screen flex items-center px-6 py-24">
            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-3xl">
                    <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
                        Trabajemos <br />
                        <span className="text-killua">Juntos</span>
                    </h2>

                    <p className="text-xl text-muted-foreground mb-12">
                        Actualmente disponible para trabajos freelance y oportunidades a tiempo completo. No dudes en contactarme si te gustaría colaborar.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:brianrd.dev@gmail.com" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors group">
                            <Mail className="group-hover:scale-110 mt-1 transition-transform" />
                            brianrd.dev@gmail.com
                        </a>

                        <a href="tel:+34611154764" className="flex items-center gap-4 text-2xl hover:text-killua transition-colors">
                            +34 611 15 47 64
                        </a>

                        <ContactLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}
