import React, { useState } from 'react';
import ccsaImg from '../assets/ccsa.jpg';

const Certificate = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (e) => {
    setShowDetails(true);
    e.target.style.transform = 'scale(1.02)';
    e.target.style.boxShadow = '0 8px 30px rgba(0,188,212,0.3)';
    e.target.style.border = '2px solid var(--primary)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    e.target.style.border = '2px solid transparent';
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <section id="certificates" className="card">
      <h2>Certificate</h2>
      <p style={{ 
        color: 'var(--text-muted)', 
        fontSize: '1.1rem', 
        marginBottom: '30px', 
        textAlign: 'center',
        lineHeight: '1.6'
      }}>
        Professional certifications that validate my expertise in cybersecurity and demonstrate my commitment to continuous learning and skill development.
      </p>
      <div className="certificate-container">
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={ccsaImg} 
            alt="CCSA Certificate" 
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
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

        {showDetails && (
          <div className="certificate-details show">
            <button 
              onClick={closeDetails}
              style={{
                position: 'absolute',
                top: '10px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '10px',
                height: '30px',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                fontWeight: 'bold'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>
            <h3 style={{ color: 'var(--primary)', marginBottom: '15px', fontSize: '1.4rem' }}>CCSA Certificate</h3>
            <p style={{ color: '#b0b0b0', fontSize: '1.1rem', marginBottom: '12px' }}>
              <strong>Certified Cyber Security Associate (CCSA)</strong><br />
              <span style={{ color: 'var(--accent)' }}>Issued by: RedTeam Hacker Academy</span><br />
              <span style={{ color: 'var(--accent)' }}>Date: December 2024</span>
            </p>
            <p style={{ 
              marginTop: '15px', 
              color: '#eee', 
              lineHeight: '1.6', 
              fontSize: '1rem',
              fontStyle: 'italic',
              background: 'rgba(0,188,212,0.05)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(0,188,212,0.2)',
              marginBottom: '15px'
            }}>
              This certification demonstrates foundational knowledge in cybersecurity principles, ethical hacking methodologies, and defensive security practices. It validates understanding of network security, threat analysis, and incident response protocols essential for protecting digital infrastructure.
            </p>
            <p style={{ marginTop: '15px', color: '#eee', lineHeight: '1.6', fontSize: '1rem' }}>
              Successfully completed the CCSA program, demonstrating comprehensive knowledge and practical skills in cyber security fundamentals, network defense strategies, threat mitigation techniques, and security best practices. This certification validates expertise in protecting digital assets and maintaining secure computing environments.
            </p>
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: 'rgba(0,188,212,0.1)', 
              borderRadius: '10px',
              border: '1px solid rgba(0,188,212,0.3)'
            }}>
              <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem', display: 'block', marginBottom: '10px' }}>Skills Validated:</span>
              <div style={{ color: '#b0b0b0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.95rem' }}>
                <span>• Network Security</span>
                <span>• Threat Analysis</span>
                <span>• Incident Response</span>
                <span>• Security Protocols</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <div 
        className={`certificate-modal ${showModal ? 'active' : ''}`}
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-modal" onClick={closeModal}>&times;</span>
          <img 
            src={ccsaImg} 
            alt="CCSA Certificate Full" 
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
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.4rem' }}>CCSA Certificate</h3>
            <p style={{ color: '#b0b0b0', fontSize: '1.08rem', marginBottom: '12px' }}>
              <strong>Certified Cyber Security Associate (CCSA)</strong><br />
              <span style={{ color: 'var(--accent)' }}>Issued by: RedTeam Hacker Academy</span><br />
              <span style={{ color: 'var(--accent)' }}>Date: December 2024</span>
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
              This certification demonstrates foundational knowledge in cybersecurity principles, ethical hacking methodologies, and defensive security practices. It validates understanding of network security, threat analysis, and incident response protocols essential for protecting digital infrastructure.
            </p>
            <p style={{ marginTop: '10px', color: '#eee', lineHeight: '1.6', fontSize: '1.1rem' }}>
              Successfully completed the CCSA program, demonstrating comprehensive knowledge and practical skills in cyber security fundamentals, network defense strategies, threat mitigation techniques, and security best practices. This certification validates expertise in protecting digital assets and maintaining secure computing environments.
            </p>
            <div style={{ 
              marginTop: '15px', 
              padding: '12px 16px', 
              background: 'rgba(0,188,212,0.1)', 
              borderRadius: '8px',
              border: '1px solid rgba(0,188,212,0.3)'
            }}>
              <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1.1rem' }}>Skills Validated:</span>
              <div style={{ color: '#b0b0b0', marginTop: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <span>• Network Security</span>
                <span>• Threat Analysis</span>
                <span>• Incident Response</span>
                <span>• Security Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate; 