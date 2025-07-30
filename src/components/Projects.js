import React, { useState } from 'react';

const projects = [
  {
    name: 'Portfolio Website',
    icon: 'fas fa-globe',
    description: 'Responsive site using HTML, CSS, JS',
    details: 'A personal portfolio website to showcase my skills, projects, and contact information. Built with modern web technologies and fully responsive design.'
  },
  {
    name: 'AQUAFLOW App & Website',
    icon: 'fab fa-android',
    description: 'Water Supply Management System for Panchayath',
    details: 'AQUAFLOW is a comprehensive water supply management system developed as my final year academic project. It features a detailed time schedule for water supply, online application for new connections, and a complaint management system. Built with Flutter and React, it provides both web and mobile interfaces for residents and administrators.'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="skills-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`skill-item project-item${activeIndex === index ? ' active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={
              activeIndex === index
                ? {
                    boxShadow: '0 0 24px var(--primary)',
                    transform: 'translateY(-10px) scale(1.05)',
                    zIndex: 2,
                    background: 'rgba(0,188,212,0.10)'
                  }
                : {}
            }
          >
            <i className={project.icon}></i>
            <p>
              <strong>{project.name}</strong><br />
              {project.description}
            </p>
            {activeIndex === index && (
              <div className="POP" style={{ 
                display: 'block', 
                background: 'var(--bg-card)', 
                color: 'var(--text-main)', 
                border: '1px solid var(--primary)', 
                boxShadow: '0 0 18px var(--primary)', 
                zIndex: 10 
              }}>
                {project.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 