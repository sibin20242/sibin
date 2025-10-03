import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import resumePdf from '@/assets/SIBIN_Resume.pdf';
import sibin from '@/assets/sibin.jpeg';
import { scrollToSection } from '@/lib/utils';    

export const About = () => {
  return (
    <section id="about" className="py-20 relative hexagon-bg">
      <div className="container mx-auto px-6">
        <div className="professional-card p-8 lg:p-12 max-w-5xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Passionate full-stack developer with expertise in modern web technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:col-span-1">
              <div className="relative group">
                <div className="w-72 h-72 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-glow interactive-hover">
                  <LazyImage
                    src={sibin}
                    alt="Sibin K S Profile"
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-secondary/20 transition-opacity duration-500 group-hover:opacity-75"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-primary animate-float shadow-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-accent animate-float shadow-glow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I'm <strong className="text-foreground">Sibin K S</strong>, a dedicated and enthusiastic Computer Science graduate with a strong interest in full-stack web development. I develop projects that reflect my understanding of both frontend and backend technologies.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in creating innovative digital solutions that solve real-world problems. I enjoy the challenge of learning new technologies and implementing them in practical projects that make a difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 py-6">
                {/* <div className="glass-card text-center p-6 border border-primary/20 interactive-hover group">
                  <div className="text-3xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">3+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                  <div className="w-full h-1 bg-gradient-primary rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div> */}
                <div className="glass-card text-center p-6 border border-secondary/20 interactive-hover group">
                  <div className="text-3xl font-bold text-secondary mb-2 transition-transform duration-300 group-hover:scale-110">2+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                  <div className="w-full h-1 bg-gradient-accent rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary interactive-hover group relative overflow-hidden"
                >
                  <a href={resumePdf} download="SIBIN_Resume.pdf" aria-label="Download Resume PDF">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                
                <Button 
                  className="bg-gradient-accent hover:opacity-90 transition-all duration-300 interactive-hover group relative overflow-hidden"
                  onClick={() => scrollToSection('#projects')}

                >
                  <span className="relative z-10 flex items-center">
                    See Projects
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};