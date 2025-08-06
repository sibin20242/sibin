import React, { useState } from 'react';
import ccsaImg from '../assets/ccsa.jpg';
import aiImg from '../assets/AI.jpg';

const Certificate = () => {
  const [showModal, setShowModal] = useState({ ccsa: false, ai: false });

  const handleMouseEnter = (e, type) => {
    e.target.style.transform = 'scale(1.02)';
    e.target.style.boxShadow = '0 8px 30px rgba(0,188,212,0.3)';
    e.target.style.border = '2px solid var(--primary)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    e.target.style.border = '2px solid transparent';
  };

  const handleClick = (type) => {
    setShowModal(prev => ({ ...prev, [type]: true }));
  };

  const closeModal = (type) => {
    setShowModal(prev => ({ ...prev, [type]: false }));
  };



  const certificates = [
    {
      id: 'ccsa',
      img: ccsaImg,
      title: 'CCSA Certificate',
      fullTitle: 'Certified Cyber Security Analyst (CCSA)',
      issuer: 'RedTeam Hacker Academy',
      date: 'March 1, 2023',
      description: 'This certification demonstrates comprehensive knowledge in cybersecurity principles, ethical hacking methodologies, and defensive security practices. It validates understanding of network security, threat analysis, and incident response protocols essential for protecting digital infrastructure.',
      longDescription: 'Successfully completed the CCSA program, demonstrating practical skills in identifying threats, assessing vulnerabilities, implementing security controls, analyzing logs, and responding to incidents. This certification covers IT Infrastructure Technologies, Open Source Intelligence (OSINT), Web Application Penetration Testing, Vulnerability Assessment, Network Security, Security Operations Center (SOC), and Security Information and Event Management (SIEM). The program is designed for individuals seeking to enter or advance their careers in cybersecurity, particularly in roles related to security analysis, operations, and vulnerability management.',
      skills: ['IT Infrastructure Technologies', 'OSINT', 'Web Application Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'SOC Operations', 'SIEM Analysis'],
      additionalInfo: {
        focusAreas: [
          'IT Infrastructure Technologies',
          'Open Source Intelligence (OSINT)',
          'Web Application Penetration Testing',
          'Vulnerability Assessment',
          'Network Security',
          'Security Operations Center (SOC)',
          'Security Information and Event Management (SIEM)'
        ],
        careerPaths: [
          'Cybersecurity Analyst',
          'SOC Analyst',
          'Vulnerability Analyst',
          'Network Security Analyst',
          'Junior Penetration Tester'
        ],
        targetAudience: 'Individuals seeking to enter or advance their careers in the cybersecurity field, particularly those interested in roles related to security analysis, operations, and vulnerability management.'
      }
    },
    {
      id: 'ai',
      img: aiImg,
      title: 'AI Training Certificate',
      fullTitle: 'Beginners Training Program in Artificial Intelligence',
      issuer: 'UL Research and Open Source Pharma Foundation (OSPF)',
      date: 'August 1, 2025',
      description: 'This certificate confirms successful completion of the Beginners Training Program in Artificial Intelligence, jointly conducted by UL Research and Open Source Pharma Foundation (OSPF) for Little Flower Institute of Social Sciences and Health (LISSAH).',
      longDescription: 'Successfully completed a comprehensive 30-hour training program in Artificial Intelligence fundamentals, covering essential AI concepts, machine learning principles, and practical applications. The program was conducted for LISSAH College located at Kaithapoyil P.O, Kozhikode - 673586 during the academic year 2024-2025.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'AI Fundamentals', 'Data Analysis'],
      additionalInfo: {
        academicYear: '2024-2025',
        duration: '30 hours',
        institution: 'Little Flower Institute of Social Sciences and Health (LISSAH)',
        location: 'Kaithapoyil P.O, Kozhikode - 673586',
        signatories: [
          'Sandesh E PA (Director, UL Research)',
          'Jayakumar Menon (Chairman, Open Source Pharma Foundation)',
          'Dr. Benny Joseph (Principal, LISSAH College)'
        ]
      }
    }
  ];

  return (
    <section id="certificates" className="card">
      <h2>Certificates</h2>
      <p style={{ 
        color: 'var(--text-muted)', 
        fontSize: '1.1rem', 
        marginBottom: '30px', 
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Professional certifications that validate my expertise in cybersecurity and artificial intelligence, demonstrating my commitment to continuous learning and skill development.
      </p>
      
      <div className="certificate-container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
        gap: '30px',
        justifyContent: 'center'
      }}>
        {certificates.map((cert) => (
          <div key={cert.id} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={cert.img} 
                alt={`${cert.title}`} 
                className="certificate-pdf"
                style={{ 
                  width: 520, 
                  height: 370, 
                  borderRadius: 10, 
                  objectFit: 'cover', 
                  cursor: 'pointer', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => handleMouseEnter(e, cert.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(cert.id)}
              />
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,188,212,0.9)',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <i className="fas fa-certificate" style={{ marginRight: '6px' }}></i>
                Certified
              </div>
            </div>

            
          </div>
        ))}
      </div>

      {/* Modals */}
      {certificates.map((cert) => (
        <div 
          key={`modal-${cert.id}`}
          className={`certificate-modal ${showModal[cert.id] ? 'active' : ''}`}
          onClick={() => closeModal(cert.id)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={() => closeModal(cert.id)}>&times;</span>
            <img 
              src={cert.img} 
              alt={`${cert.title} Full`} 
              className="modal-certificate-img"
              style={{ 
                width: 400, 
                height: 280, 
                borderRadius: 10, 
                objectFit: 'cover', 
                background: '#23272a',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
              }}
            />
            <div className="modal-certificate-details">
              <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.4rem' }}>{cert.title}</h3>
              <p style={{ color: '#b0b0b0', fontSize: '1.08rem', marginBottom: '12px' }}>
                <strong>{cert.fullTitle}</strong><br />
                <span style={{ color: 'var(--accent)' }}>Issued by: {cert.issuer}</span><br />
                <span style={{ color: 'var(--accent)' }}>Date: {cert.date}</span>
              </p>
              <p style={{ 
                marginTop: '10px', 
                color: '#eee', 
                lineHeight: '1.6', 
                fontSize: '1.1rem',
                fontStyle: 'italic',
                background: 'rgba(0,188,212,0.05)',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(0,188,212,0.2)',
                marginBottom: '15px'
              }}>
                {cert.description}
              </p>
              <p style={{ marginTop: '10px', color: '#eee', lineHeight: '1.6', fontSize: '1.1rem' }}>
                {cert.longDescription}
              </p>
                             {cert.additionalInfo && (
                 <div style={{ 
                   marginTop: '15px', 
                   padding: '12px', 
                   background: 'rgba(0,188,212,0.05)', 
                   borderRadius: '8px',
                   border: '1px solid rgba(0,188,212,0.2)',
                   marginBottom: '15px'
                 }}>
                   {cert.additionalInfo.academicYear ? (
                     <>
                       <p style={{ color: '#b0b0b0', fontSize: '1rem', marginBottom: '8px' }}>
                         <strong>Academic Year:</strong> {cert.additionalInfo.academicYear}<br />
                         <strong>Duration:</strong> {cert.additionalInfo.duration}<br />
                         <strong>Institution:</strong> {cert.additionalInfo.institution}<br />
                         <strong>Location:</strong> {cert.additionalInfo.location}
                       </p>
                       <p style={{ color: '#b0b0b0', fontSize: '0.95rem', marginTop: '8px' }}>
                         <strong>Signatories:</strong><br />
                         {cert.additionalInfo.signatories.map((sig, index) => (
                           <span key={index} style={{ display: 'block', marginLeft: '10px' }}>• {sig}</span>
                         ))}
                       </p>
                     </>
                   ) : (
                     <>
                       <p style={{ color: '#b0b0b0', fontSize: '1rem', marginBottom: '8px' }}>
                         <strong>Target Audience:</strong><br />
                         <span style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{cert.additionalInfo.targetAudience}</span>
                       </p>
                       <p style={{ color: '#b0b0b0', fontSize: '0.95rem', marginTop: '8px' }}>
                         <strong>Focus Areas:</strong><br />
                         {cert.additionalInfo.focusAreas.map((area, index) => (
                           <span key={index} style={{ display: 'block', marginLeft: '10px' }}>• {area}</span>
                         ))}
                       </p>
                       <p style={{ color: '#b0b0b0', fontSize: '0.95rem', marginTop: '8px' }}>
                         <strong>Career Paths:</strong><br />
                         {cert.additionalInfo.careerPaths.map((path, index) => (
                           <span key={index} style={{ display: 'block', marginLeft: '10px' }}>• {path}</span>
                         ))}
                       </p>
                     </>
                   )}
                 </div>
               )}
              <div style={{ 
                marginTop: '15px', 
                padding: '12px 16px', 
                background: 'rgba(0,188,212,0.1)', 
                borderRadius: '8px',
                border: '1px solid rgba(0,188,212,0.3)'
              }}>
                <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem' }}>Skills Validated:</span>
                <div style={{ color: '#b0b0b0', marginTop: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {cert.skills.map((skill, index) => (
                    <span key={index}>• {skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certificate; 