import React from 'react';

const Education = () => {
  const education = [
    {
      icon: 'fas fa-school',
      title: 'HSS | Science',
      institution: 'Govt HSS Puduppadi',
      link: 'https://g.co/kgs/opCGXPj'
    },
    {
      icon: 'fas fa-university',
      title: 'Bachelor of Computer Science',
      institution: 'LISSAH College Kaithapoyil',
      link: 'https://www.lissah.com/'
    }
  ];

  return (
    <section id="education" className="card">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <a 
            key={index} 
            href={edu.link} 
            className="education-card" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className={edu.icon}></i>
            <div className="education-info">
              <p>
                <strong>{edu.title}</strong><br /><br />
                {edu.institution}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education; 