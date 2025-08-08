import React, { useState, useEffect } from 'react';
import sibinImage from '../assets/sibin.jpg';

const roles = [
  'Full Stack Developer',
  'Frontend Specialist',
  'Backend Enthusiast',
  'UI/UX Explorer',
  'Tech Innovator'
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    setIsVisible(true);
    let typingTimeout;
    const currentRole = roles[typeIndex % roles.length];
    if (!isDeleting && displayedText.length < currentRole.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 80);
    } else if (isDeleting && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTypeIndex((prev) => prev + 1);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typeIndex]);

  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-left" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        position: 'relative',
        zIndex: 2
      }}>
        <p className="intro">Hi I am</p>
        <h1 className="name">Sibin K S</h1>
        <h2 className="role" style={{ minHeight: 40 }}>
          <span>{displayedText}</span>
          <span className="typewriter-cursor">|</span>
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          marginBottom: '24px',
          lineHeight: '1.6'
        }}>
          Passionate about creating innovative digital solutions and turning ideas into reality through code.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn hire-me">Hire Me</a>
          <a href="/SIBIN.pdf" className="btn download-cv" download>Download CV</a>
        </div>
        <div style={{ 
          marginTop: '30px', 
          display: 'flex', 
          gap: '20px',
          flexWrap: 'wrap'
        }}>
        </div>
      </div>
      <img 
        src={sibinImage} 
        alt="Sibin" 
        className="hero-image"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          zIndex: 2,
          boxShadow: '0 8px 32px rgba(0,188,212,0.18)'
        }}
      />
    </section>
  );
};

export default Hero; 