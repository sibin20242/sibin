import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5', tooltip: 'Standard markup language for creating structured web content.', level: '95%' },
  { name: 'CSS', icon: 'fab fa-css3-alt', tooltip: 'Used to style HTML elements and control visual layout.', level: '92%' },
  { name: 'JavaScript', icon: 'fab fa-js-square', tooltip: 'Adds interactivity and dynamic behavior to web pages.', level: '75%' },
  { name: 'React', icon: 'fab fa-react', tooltip: 'JavaScript library for building user interfaces and single-page applications.', level: '40%' },
  { name: 'Python', icon: 'fab fa-python', tooltip: 'General-purpose programming language known for simplicity and versatility.', level: '80%' },
  { name: 'Flutter', icon: 'fas fa-mobile-alt', tooltip: 'Framework for building cross-platform mobile apps.', level: '65%' },
  { name: 'Java', icon: 'fab fa-java', tooltip: 'Popular object-oriented language used in enterprise applications.', level: '50%' },
  { name: 'C', icon: 'fas fa-code', tooltip: 'Powerful language used in system programming and embedded systems.', level: '75%' },
  { name: 'SQL', icon: 'fas fa-database', tooltip: 'Structured Query Language for managing relational databases.', level: '75%' },
  { name: 'PHP', icon: 'fab fa-php', tooltip: 'Server-side scripting language mainly used for web development.', level: '60%' },
  { name: 'Shell', icon: 'fas fa-terminal', tooltip: 'Used for command-line scripting and automation in Unix/Linux.', level: '60%' }
];

const Skills = ({ theme }) => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="card" ref={sectionRef}>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
            <div className="tooltip">{skill.tooltip}</div>
            <div className="skill-bar">
              <div
                className={`skill-bar-inner${visible ? ' visible' : ''}`}
                style={{ '--skill-level': visible ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 