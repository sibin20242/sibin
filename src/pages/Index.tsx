import { Suspense, lazy } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('@/components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('@/components/Skills').then(module => ({ default: module.Skills })));
const Experience = lazy(() => import('@/components/Experience').then(module => ({ default: module.Experience })));
const Projects = lazy(() => import('@/components/Projects').then(module => ({ default: module.Projects })));
const Education = lazy(() => import('@/components/Education').then(module => ({ default: module.Education })));
const Certificates = lazy(() => import('@/components/Certificates').then(module => ({ default: module.Certificates })));
const Contact = lazy(() => import('@/components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('@/components/Footer').then(module => ({ default: module.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="relative">
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
