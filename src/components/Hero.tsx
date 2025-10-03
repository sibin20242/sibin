import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import profileAvatar from '@/assets/profile-avatar.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import resumePdf from '@/assets/SIBIN_Resume.pdf';
import { scrollToSection } from '@/lib/utils';

const typewriterRoles = [
  'Full Stack Developer',
  'Frontend Specialist',
  'Backend Enthusiast',
  'UI/UX Explorer',
  'Tech Innovator'
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Hello, I am
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text leading-tight">
                Sibin K S
              </h1>
              <div className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold text-muted-foreground min-h-[3rem]">
                <span>{displayText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Passionate about creating innovative digital solutions and turning ideas into reality through code.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Kerala, India
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                sibinks46@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91 85906 37451
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary"
              >
                <a href={resumePdf} download="SIBIN_Resume.pdf" aria-label="Download Resume PDF">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              
              <Button 
                asChild
                variant="ghost" 
                size="lg"
                className="hover:bg-accent/10 hover:text-accent"
              >
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" aria-label="View Resume PDF">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['MERN Stack', 'Python', 'Flutter', 'React', 'Node.js'].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="glass-card p-8 text-center max-w-sm">
              <div className="relative mb-6">
                <LazyImage
                  src={profileAvatar}
                  alt="Sibin K S"
                  className="w-48 h-48 rounded-2xl mx-auto border-2 border-primary/20 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-success text-success-foreground w-6 h-6 rounded-full border-2 border-background animate-pulse-glow"></div>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">Web Developer</h3>
              <p className="text-muted-foreground text-sm">
                Specializing in modern web technologies and creating exceptional user experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};