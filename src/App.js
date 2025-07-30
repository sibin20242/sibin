import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import useSectionFadeIn from './hooks/useSectionFadeIn';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Section fade-in hooks
  const heroRef = useSectionFadeIn();
  const aboutRef = useSectionFadeIn();
  const skillsRef = useSectionFadeIn();
  const experienceRef = useSectionFadeIn();
  const projectsRef = useSectionFadeIn();
  const educationRef = useSectionFadeIn();
  const contactRef = useSectionFadeIn();
  const certificateRef = useSectionFadeIn();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #181a1b 0%, #23272a 100%)', color: '#00bcd4'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>SIBIN K S</h1>
          <div style={{ width: '50px', height: '50px', border: '3px solid #00bcd4', borderTop: '3px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto' }}></div>
          <style>{`@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}`}</style>
        </div>
      </div>
    );
  }

  return (
    <div className={`App theme-${theme}`}>
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <div ref={heroRef} className="section-fade-in"><Hero /></div>
      <div ref={aboutRef} className="section-fade-in"><About /></div>
      <div ref={skillsRef} className="section-fade-in"><Skills theme={theme} /></div>
      <div ref={experienceRef} className="section-fade-in"><Experience /></div>
      <div ref={projectsRef} className="section-fade-in"><Projects /></div>
      <div ref={educationRef} className="section-fade-in"><Education /></div>
      <div ref={contactRef} className="section-fade-in"><Contact /></div>
      <div ref={certificateRef} className="section-fade-in"><Certificate /></div>
      <Footer />
    </div>
  );
}

export default App; 