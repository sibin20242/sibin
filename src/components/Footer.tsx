import { Button } from '@/components/ui/button';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Heart,
  Code,
  Facebook
} from 'lucide-react';

// For now, we'll create a custom WhatsApp icon component using SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

const footerLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sibin-ks-b84b83384',
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/_sibin_k_s_',
    icon: <Instagram className="w-5 h-5" />
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/sibin26',
    icon: <Facebook className="w-5 h-5" />
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918590637451',
    icon: <WhatsAppIcon className="w-5 h-5" />
  }
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border-t border-primary/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Navigation */}
        <div className="text-center mb-12">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Middle Content - Equal Spacing */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Sibin K S
              </h3>
              <p className="text-lg font-medium text-primary mb-4">
                Full Stack Developer
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Crafting innovative digital solutions with modern web technologies. 
                Building reliable, scalable, and user-focused applications.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-6">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:sibinks46@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sibinks46@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <a 
                  href="tel:+918590637451"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +91 85906 37451
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Social Links & Availability */}
          <div className="text-center space-y-6">
            <h4 className="font-semibold text-lg">Let's Connect</h4>
            
            <div className="flex justify-center gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">Available for Work</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to freelance projects and full-time opportunities
              </p>
              

              
            </div>
            <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Start a Project
              </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-border/20">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; 2025 Sibin K S. All rights reserved.</span>
         
            
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};