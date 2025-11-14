import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Portfolio;
