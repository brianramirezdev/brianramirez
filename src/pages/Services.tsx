// src/pages/Services.tsx
import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';

const Footer = lazy(() => import('@/components/Footer'));

const Services = () => {
    return (
        <>
            <Navbar />
            <ServicesSection />
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </>
    );
};

export default Services;
