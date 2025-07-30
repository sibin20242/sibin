import React from 'react';

const experiences = [
  {
    title: 'Academic Project: AQUAFLOW',
    company: 'Final Year Project',
    period: '2024',
    description: 'Developed a comprehensive water supply management system (AQUAFLOW) as part of my final year project. Implemented both web and mobile interfaces using modern technologies.',
    skills: ['Flutter', 'UI/UX', 'Teamwork']
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="card">
      <h2>Experience</h2>
      <div style={{ marginTop: '30px' }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '14px',
              padding: '28px',
              marginBottom: '24px',
              borderLeft: '4px solid var(--primary)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              color: 'var(--text-main)'
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem', marginBottom: '5px' }}>
                  {exp.title}
                </h3>
                <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '600' }}>
                  {exp.company}
                </p>
              </div>
              <span style={{
                background: 'var(--primary)',
                color: 'var(--text-main)',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {exp.period}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '15px' }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  style={{
                    background: 'rgba(0, 188, 212, 0.1)',
                    color: 'var(--primary)',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(0, 188, 212, 0.3)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 