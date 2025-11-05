// Force download for resume links - Works locally and on live servers
window.forceDownloadResume = function(url, event) {
  const filename = 'SIBIN_Resume.pdf';
  
  // Check if running on local file system (file:// protocol)
  const isLocalFile = window.location.protocol === 'file:';
  
  // For local files, use simple download (CORS blocks XHR)
  if (isLocalFile) {
    console.log('Local file detected, using direct download');
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  
  // For live websites, use XHR with blob for better download control
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      const blob = xhr.response;
      
      // Check for IE/Edge msSaveBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
        console.log('Downloaded using IE/Edge method');
        return;
      }
      
      // CRITICAL: Create new blob with octet-stream to force download
      const forceDownloadBlob = new Blob([blob], { type: 'application/octet-stream' });
      
      // Create object URL
      const urlCreator = window.URL || window.webkitURL;
      const downloadUrl = urlCreator.createObjectURL(forceDownloadBlob);
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        urlCreator.revokeObjectURL(downloadUrl);
        console.log('Download completed successfully');
      }, 100);
    } else {
      console.error('XHR failed with status:', xhr.status);
      fallbackDirectDownload(url, filename);
    }
  };
  
  xhr.onerror = function() {
    console.error('XHR error, using fallback');
    fallbackDirectDownload(url, filename);
  };
  
  try {
    xhr.send();
  } catch (e) {
    console.error('XHR send failed:', e);
    fallbackDirectDownload(url, filename);
  }
};

// Simple fallback download method
function fallbackDirectDownload(url, filename) {
  console.log('Using direct download fallback');
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
}

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const progressFill = document.getElementById('progress-fill');
  const progressPercent = document.getElementById('progress-percent');
  const loadingText = document.getElementById('loading-text');
  
  const loadingMessages = [
    'Initializing...',
    'Loading portfolio...',
    'Preparing experience...',
    'Almost ready...',
    'Welcome!'
  ];
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    progressFill.style.width = `${progress}%`;
    progressPercent.textContent = `${progress}%`;
    
    const messageIndex = Math.floor((progress / 100) * (loadingMessages.length - 1));
    loadingText.textContent = loadingMessages[messageIndex] || loadingMessages[0];
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          document.body.style.opacity = '1';
        }, 500);
      }, 800);
    }
  }, 50);
  
  // Preload images
  const images = [
    'src/assets/profile-avatar.jpg',
    'src/assets/hero-bg.jpg',
    'src/assets/sibin.jpeg'
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// Typewriter Effect
const typewriterRoles = [
  'Full Stack Developer',
  'Frontend Specialist',
  'Backend Enthusiast',
  'UI/UX Explorer',
  'Tech Innovator'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let displayText = '';

function typewriter() {
  const typewriterText = document.getElementById('typewriter-text');
  if (!typewriterText) return;
  
  const currentRole = typewriterRoles[roleIndex];
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = isDeleting ? 500 : 2000;
  
  setTimeout(() => {
    if (!isDeleting && charIndex < currentRole.length) {
      displayText = currentRole.substring(0, charIndex + 1);
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      displayText = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % typewriterRoles.length;
    }
    
    typewriterText.textContent = displayText;
    typewriter();
  }, typingSpeed);
}

// Start typewriter when page loads
window.addEventListener('load', () => {
  setTimeout(typewriter, 2000); // Wait for loading screen
});

// Navigation
const navigation = document.getElementById('navigation');
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');
const navIcon = document.getElementById('nav-icon');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Close mobile menu function
function closeMobileMenu() {
  if (navMobile) {
    navMobile.classList.remove('active');
    if (navIcon) {
      navIcon.classList.remove('fa-times');
      navIcon.classList.add('fa-bars');
    }
  }
}

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = navMobile.classList.contains('active');
    if (isActive) {
      closeMobileMenu();
    } else {
      navMobile.classList.add('active');
      if (navIcon) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
      }
    }
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMobile && navMobile.classList.contains('active')) {
    // Check if click is on a menu item
    const clickedMenuItem = e.target.closest('.nav-link.mobile');
    
    // If clicked on menu item, let it handle navigation, then close menu
    if (clickedMenuItem) {
      // Menu will close after navigation in scrollToSection function
      return;
    }
    
    // If clicked outside menu items (but inside menu container), close menu
    if (navMobile.contains(e.target) && !clickedMenuItem) {
      closeMobileMenu();
      return;
    }
    
    // If clicked outside menu container and toggle button, close menu
    if (!navMobile.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Close mobile menu
    closeMobileMenu();
  }
}

// Add click handlers to all nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    if (section) {
      scrollToSection(`#${section}`);
    }
  });
});

// Add click handlers to buttons with data-section
document.querySelectorAll('[data-section]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const section = btn.getAttribute('data-section');
    if (section) {
      scrollToSection(`#${section}`);
    }
  });
});

// Active section detection
let activeSection = 'hero';

function updateActiveSection() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection = sectionId;
      
      // Update nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Nav scroll effect
function handleNavScroll() {
  if (window.scrollY > 50) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
  updateActiveSection();
}

window.addEventListener('scroll', handleNavScroll);
window.addEventListener('load', handleNavScroll);

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact Form
const contactForm = document.getElementById('contact-form');

function buildMessage() {
  const formData = new FormData(contactForm);
  return `Hello Sibin 👋

Name: ${formData.get('name')}
Email: ${formData.get('email')}
Subject: ${formData.get('subject')}
Message: ${formData.get('message')}`;
}

function sendViaWhatsApp() {
  const message = buildMessage();
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918590637451?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
  contactForm.reset();
  showToast('Opening WhatsApp...', 'success');
}

function sendViaTelegram() {
  const message = buildMessage();
  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/sibin_k_s?text=${encodedMessage}`;
  window.open(telegramUrl, '_blank');
  contactForm.reset();
  showToast('Opening Telegram...', 'success');
}

// Copy to clipboard
async function copyToClipboard(text, label) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    showToast(`${label} copied to clipboard!`, 'success');
  } catch (err) {
    showToast('Copy failed. Please copy manually.', 'error');
  }
}

// Toast Notification
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Certificate Modal
const certificateData = {
  ccsa: {
    title: 'Certified Cyber Security Analyst (CCSA)',
    issuer: 'RedTeam Hacker Academy',
    year: '2023',
    image: 'src/assets/ccsa.jpg',
    description: 'Training in cybersecurity covering pentesting, SOC, SIEM, and network security.',
    skills: ['Penetration Testing', 'SOC Analysis', 'SIEM', 'Network Security', 'Incident Response'],
    icon: '<i class="fas fa-shield-alt"></i>',
    color: 'primary',
    credentialId: 'CCSA-2023-001'
  },
  ai: {
    title: 'Artificial Intelligence',
    issuer: 'UL Research & OSPF',
    year: '2025',
    image: 'src/assets/AI.jpg',
    description: 'Completed a certified training in AI fundamentals, machine learning concepts, and practical applications.',
    skills: ['Machine Learning', 'AI Fundamentals', 'Data Analysis', 'Neural Networks', 'Python'],
    icon: '<i class="fas fa-brain"></i>',
    color: 'secondary',
    credentialId: 'AI-2025-001'
  }
};

function openCertificateModal(certId) {
  const cert = certificateData[certId];
  if (!cert) return;
  
  const modal = document.getElementById('certificate-modal');
  const modalBody = document.getElementById('modal-body');
  
  // Lock body scroll - store scroll position
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
  
  // Prevent modal overlay from scrolling
  modal.style.overflow = 'hidden';
  
  // Store scroll position for restoration
  modal.dataset.scrollY = scrollY;
  
  modalBody.innerHTML = `
    <div style="margin-bottom: 1rem;">
      <h2 style="display: flex; align-items: center; gap: 0.75rem; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
        ${cert.icon}
        ${cert.title}
      </h2>
    </div>
    
    <div style="margin-bottom: 1.5rem;">
      <div style="position: relative; height: 256px; overflow: hidden; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: 100%; object-fit: contain; background: hsl(var(--muted) / 0.5);">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);"></div>
        <div style="position: absolute; top: 1rem; right: 1rem; width: 80px; height: 80px; background: linear-gradient(135deg, hsl(var(--${cert.color}) / 0.9), hsl(var(--${cert.color}) / 0.7)); border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-xl);">
          <div style="color: white; font-size: 1.5rem;">
            ${cert.icon}
          </div>
        </div>
        <span class="badge" style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(0, 0, 0, 0.7); color: white; backdrop-filter: blur(4px); border: 1px solid rgba(255, 255, 255, 0.2);">
          <i class="fas fa-calendar" style="margin-right: 0.5rem;"></i>
          <span style="font-weight: 500;">${cert.year}</span>
        </span>
      </div>
      
      <div style="margin-bottom: 1rem;">
        <h4 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--${cert.color})); margin-bottom: 0.5rem;">
          ${cert.issuer}
        </h4>
        <p style="color: hsl(var(--muted-foreground)); line-height: 1.6;">
          ${cert.description}
        </p>
      </div>
      
      <div style="margin-bottom: 1rem;">
        <h5 style="font-weight: 500; color: hsl(var(--muted-foreground)); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.75rem; margin-bottom: 0.75rem;">
          Skills & Expertise
        </h5>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${cert.skills.map(skill => `
            <span class="badge badge-outline" style="background: hsl(var(--${cert.color}) / 0.1); border-color: hsl(var(--${cert.color}) / 0.3); font-size: 0.75rem;">
              ${skill}
            </span>
          `).join('')}
        </div>
      </div>
      
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid hsl(var(--border) / 0.5);">
        <div>
          <div style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
            Credential ID
          </div>
          <div style="font-size: 0.875rem; font-family: monospace; color: hsl(var(--primary));">
            ${cert.credentialId}
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  modal.classList.remove('active');
  
  // Unlock body scroll - restore scroll position
  const scrollY = modal.dataset.scrollY || 0;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  document.body.style.height = '';
  
  // Restore modal overflow
  modal.style.overflow = '';
  
  // Restore scroll position
  window.scrollTo(0, parseInt(scrollY) || 0);
}

// Add click handlers to certificate cards
document.querySelectorAll('.certificate-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const certId = card.getAttribute('data-certificate');
    if (certId) {
      openCertificateModal(certId);
    }
  });
});

// Close modal when clicking outside
const modal = document.getElementById('certificate-modal');
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCertificateModal();
    }
  });
  
  // Prevent modal overlay from scrolling
  modal.addEventListener('wheel', (e) => {
    if (e.target === modal) {
      e.preventDefault();
    }
  }, { passive: false });
  
  modal.addEventListener('touchmove', (e) => {
    if (e.target === modal) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Prevent modal content click from closing modal
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertificateModal();
  }
});

// Education card click handlers
document.querySelectorAll('.education-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't navigate if clicking on a link inside the card
    if (e.target.closest('a')) {
      return;
    }
    
    const url = card.getAttribute('data-education-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});

// Removed duplicate forceDownloadResume function - it's already defined at the top of the file (lines 1-145)

// Force download for resume links
(function() {
  'use strict';
  
  function downloadFile(url, filename) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = filename || 'SIBIN_Resume.pdf';
    
    // Ensure download attribute is set
    link.setAttribute('download', filename || 'SIBIN_Resume.pdf');
    
    // Add to document
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    
    // Clean up
    setTimeout(() => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }, 100);
  }
  
  function forceDownloadViaBlob(url, filename) {
    // Check if we're on file:// protocol (local file)
    const isLocalFile = window.location.protocol === 'file:';
    
    if (isLocalFile) {
      // For local files, use XMLHttpRequest instead of fetch
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      
      xhr.onload = function() {
        if (this.status === 200 || this.status === 0) {
          const blob = this.response;
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = filename || 'SIBIN_Resume.pdf';
          link.style.display = 'none';
          link.setAttribute('download', filename || 'SIBIN_Resume.pdf');
          document.body.appendChild(link);
          link.click();
          
          setTimeout(() => {
            if (link.parentNode) {
              link.parentNode.removeChild(link);
            }
            window.URL.revokeObjectURL(blobUrl);
          }, 200);
        } else {
          downloadFile(url, filename);
        }
      };
      
      xhr.onerror = function() {
        downloadFile(url, filename);
      };
      
      xhr.send();
      return;
    }
    
    // For web servers, use fetch
    fetch(url, {
      cache: 'no-cache',
      mode: 'cors'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename || 'SIBIN_Resume.pdf';
        link.style.display = 'none';
        link.setAttribute('download', filename || 'SIBIN_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        setTimeout(() => {
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
          window.URL.revokeObjectURL(blobUrl);
        }, 200);
      })
      .catch(error => {
        console.error('Blob download failed:', error);
        // Fallback to direct download
        downloadFile(url, filename);
      });
  }
  
  // Handle all resume download links
  function setupResumeDownloads() {
    const resumeLinks = document.querySelectorAll('a[href*="SIBIN_Resume.pdf"]');
    
    resumeLinks.forEach((link) => {
      // Store original href
      const originalHref = link.getAttribute('href');
      
      // Change href to # to prevent navigation
      link.setAttribute('href', '#');
      
      // Ensure download attribute is present
      link.setAttribute('download', 'SIBIN_Resume.pdf');
      
      // Add click handler that prevents all default behavior
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.cancelBubble = true;
        
        // Call the global function with original URL
        if (window.forceDownloadResume) {
          window.forceDownloadResume(originalHref, e);
        }
        
        return false;
      }, true);
      
      // Also handle onmousedown to catch it earlier
      link.addEventListener('mousedown', function(e) {
        if (e.button === 0) { // Left click only
          e.preventDefault();
        }
      }, true);
    });
  }
  
  // Setup when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupResumeDownloads);
  } else {
    setupResumeDownloads();
  }
  
  // Also setup after a short delay to catch dynamically added elements
  setTimeout(setupResumeDownloads, 500);
})();

// Footer links
document.querySelectorAll('.footer-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.getAttribute('data-section');
    if (section) {
      scrollToSection(`#${section}`);
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section-card, .experience-card, .project-card, .certificate-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add smooth animations on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-bg');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set initial active section
  updateActiveSection();
  
  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
  
  console.log('Portfolio loaded successfully!');
});

