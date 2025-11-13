// import { useRef, useEffect, type ReactNode } from 'react';
// import { ReactLenis } from 'lenis/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function SmoothScroll({ children }: { children: ReactNode }) {
//     const lenisRef = useRef<any>(null);

//     useEffect(() => {
//         // Actualiza ScrollTrigger en cada frame de Lenis
//         function onScroll() {
//             ScrollTrigger.update();
//         }

//         // Atacha evento Lenis para actualizar ScrollTrigger
//         const lenis = lenisRef.current?.lenis;
//         if (lenis) {
//             lenis.on('scroll', onScroll);
//         }

//         ScrollTrigger.refresh();

//         return () => {
//             if (lenis) {
//                 lenis.off('scroll', onScroll);
//             }
//         };
//     }, []);

//     return (
//         <ReactLenis
//             root
//             options={{
//                 lerp: 0.1,
//                 duration: 1.2,
//                 smoothWheel: true,
//             }}
//             ref={lenisRef}
//         >
//             {children}
//         </ReactLenis>
//     );
// }
