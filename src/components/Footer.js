import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <a href="#hero" className="back-to-top" onClick={scrollToTop}>
        Back to Top &uarr;
      </a>
    </footer>
  );
};

export default Footer; 