import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'sibinks46@gmail.com', link: 'mailto:sibinks46@gmail.com' },
    { icon: 'fas fa-phone', text: '8590637451', link: 'tel:+918590637451' },
    { icon: 'fab fa-instagram', text: 'Instagram', link: 'https://instagram.com/_sibin_k_s_' },
    { icon: 'fab fa-facebook', text: 'Facebook', link: 'https://facebook.com/sibin26' },
    { icon: 'fab fa-whatsapp', text: 'WhatsApp', link: 'https://wa.me/918590637451' },
    { icon: 'fab fa-linkedin', text: 'LinkedIn', link: 'https://linkedin.com/in/sibin-k-s' }
  ];

  return (
    <section id="contact" className="card" style={{ minHeight: 320 }}>
      <h2>Contact Me</h2>
      <div className="contact-section-grid">
        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Get In Touch</h3>
          <div className="contact-info">
            {contactInfo.map((contact, index) => (
              <p key={index}>
                <i className={contact.icon}></i>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.text}
                </a>
              </p>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact; 