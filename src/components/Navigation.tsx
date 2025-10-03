import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';
import resumePdf from '@/assets/SIBIN_Resume.pdf';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <img
              src={profileAvatar}
              alt="Sibin K S"
              className="w-10 h-10 rounded-lg object-cover border border-primary/20"
            />
            <div>
              <h1 className="font-bold text-lg gradient-text">Sibin K S</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href={resumePdf} download="SIBIN_Resume.pdf" aria-label="Download Resume PDF">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            
            <Button 
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="flex gap-3 mt-4 pt-4 border-t border-border/20">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href={resumePdf} download="SIBIN_Resume.pdf" aria-label="Download Resume PDF">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
                
                <Button 
                  size="sm"
                  onClick={() => scrollToSection('#contact')}
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};