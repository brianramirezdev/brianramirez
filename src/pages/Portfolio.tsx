import { lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Suspense fallback={null}>
                <AboutSection />
            </Suspense>
            <Suspense fallback={null}>
                <ProjectsSection />
            </Suspense>
            <Suspense fallback={null}>
                <ContactSection />
            </Suspense>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </>
    );
};

export default Portfolio;
