import React from 'react';
import sibinImage from '../assets/sibin.jpg';

const About = () => {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={sibinImage} alt="Sibin KS" className="about-photo" />
        <p>
          I'm <strong>Sibin K S</strong>,a dedicated and enthusiastic
 Computer Science graduate with
 a strong interest in full-stack web
 development. I have developed
 several personal and academic
 projects that reflect my
 understanding of both frontend
 and backend technologies.
        </p>
      </div>
    </section>
  );
};

export default About; 