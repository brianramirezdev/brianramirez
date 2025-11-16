import { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('@/components/Navbar'));
const HeroSection = lazy(() => import('@/components/HeroSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const Portfolio = () => {
    return (
        <>
            <Suspense fallback={null}>
                <Navbar />
            </Suspense>
            <Suspense fallback={null}>
                <HeroSection />
            </Suspense>
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
