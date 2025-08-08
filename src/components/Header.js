import React, { useState, useEffect, useRef } from 'react';
import sibinImage from '../assets/sibin.jpg';

const SCROLL_HIDE_THRESHOLD_PX = 6;   // smaller delta
const MIN_SCROLL_Y_TO_HIDE_PX = 40;   // hide sooner

const Header = ({ onToggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('mobile-nav-backdrop')) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    lastScrollYRef.current = window.pageYOffset || document.documentElement.scrollTop || 0;

    const handleScroll = () => {
      const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const lastY = lastScrollYRef.current;
      const delta = currentY - lastY;

      // Always show near the top
      if (currentY < MIN_SCROLL_Y_TO_HIDE_PX || isMobileMenuOpen) {
        if (isHeaderHidden) setIsHeaderHidden(false);
        lastScrollYRef.current = currentY <= 0 ? 0 : currentY;
        return;
      }

      if (delta > SCROLL_HIDE_THRESHOLD_PX) {
        // Scrolling down
        if (!isHeaderHidden) setIsHeaderHidden(true);
      } else if (delta < -SCROLL_HIDE_THRESHOLD_PX) {
        // Scrolling up
        if (isHeaderHidden) setIsHeaderHidden(false);
      }

      lastScrollYRef.current = currentY <= 0 ? 0 : currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, isHeaderHidden]);

  const headerClassName = isHeaderHidden ? 'hide-on-scroll' : '';

  return (
    <>
      <header className={headerClassName}>
        <div className="brand">
          <img src={sibinImage} alt="Profile" className="nav-photo" />
          <h1>SIBIN K S</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="#certificates">Certificates</a>
          <button 
            onClick={onToggleTheme} 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontSize: '1.3rem',
              marginLeft: 18,
              cursor: 'pointer',
              transition: 'color 0.3s',
              outline: 'none',
              verticalAlign: 'middle'
            }}
            aria-label="Toggle dark/light mode"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Navigation Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleBackdropClick}
      ></div>

      {/* Mobile Navigation Modal */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobileMenu}>
          ×
        </button>
        <a onClick={() => handleNavClick('hero')}>Home</a>
        <a onClick={() => handleNavClick('about')}>About</a>
        <a onClick={() => handleNavClick('skills')}>Skills</a>
        <a onClick={() => handleNavClick('experience')}>Experience</a>
        <a onClick={() => handleNavClick('projects')}>Projects</a>
        <a onClick={() => handleNavClick('education')}>Education</a>
        <a onClick={() => handleNavClick('contact')}>Contact</a>
        <a onClick={() => handleNavClick('certificates')}>Certificates</a>
        <button 
          onClick={() => {
            onToggleTheme();
            closeMobileMenu();
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            fontSize: '1.1rem',
            padding: '12px 20px',
            width: '100%',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '10px',
            marginTop: '8px'
          }}
          aria-label="Toggle dark/light mode"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          {' '}{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  );
};

export default Header; 