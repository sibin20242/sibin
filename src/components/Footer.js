import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const socialLinks = [
    { icon: 'fab fa-instagram', link: 'https://instagram.com/_sibin_k_s_' },
    { icon: 'fab fa-facebook', link: 'https://facebook.com/sibin26' },
    { icon: 'fab fa-whatsapp', link: 'https://wa.me/918590637451' },
    { icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/sibin-k-s' }
  ];

  return (
    <footer>
      <div className="footer-socials">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
      <p>&copy; 2025 SIBIN K S. All rights reserved.</p>
      
      {/* Enhanced Back to Top Button */}
      <button 
        className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
        <span className="back-to-top-text">Top</span>
      </button>
    </footer>
  );
};

export default Footer; 