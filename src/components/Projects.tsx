import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import portfolio from '@/assets/profile-avatar.jpg';
import aquaFlowPdf from '@/assets/aqua flow.pdf';

const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'Personal portfolio to showcase skills & projects. Fully responsive design with modern UI/UX principles.',
    image: portfolio,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui'],
    features: [
      'Modern glassmorphism design',
      'Responsive across all devices',
      'SEO optimized',
      'Fast loading performance'
    ],
    links: {
      live: './',
      github: null
    },
    icon: <Globe className="w-5 h-5" />,
    color: 'primary'
  },
  {
    title: 'AQUAFLOW App & Website',
    category: 'Full Stack Development',
    description: 'Final year project: A comprehensive water supply management system with Flutter mobile app and React web dashboard.',
    image: logo,
    technologies:['Flutter', 'Html', 'JavaScript', 'CSS', 'Dart','Python-Django'],
    features: [
      'Water scheduling system',
      'Complaint management',
      'Real-time notifications',
      'Admin dashboard',
      'Mobile & web platforms'
    ],
    links: {
      live: null,
      github: null,
      demo: aquaFlowPdf
    },
    icon: <Smartphone className="w-5 h-5" />,
    color: 'secondary'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 hexagon-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions across web development, mobile apps, and full-stack systems
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="professional-card overflow-hidden group animate-slide-up flex flex-col h-full"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                
                {/* Category Badge */}
                <Badge 
                  className={`absolute top-6 left-6 bg-gradient-to-r from-${project.color}/90 to-${project.color}/70 text-white backdrop-blur-sm border-0 shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <span className="font-medium">{project.category}</span>
                  </div>
                </Badge>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-primary animate-float opacity-60"></div>
                <div className="absolute bottom-6 right-8 w-2 h-2 rounded-full bg-gradient-accent animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title and Description - Fixed Height */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 min-h-[2rem]">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed min-h-[3rem]">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Features - Fixed Height */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 min-h-[8rem]">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground interactive-hover">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-${project.color} to-${project.color}/70 mt-2 flex-shrink-0 shadow-glow`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies - Fixed Height */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 min-h-[3rem] content-start">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-card/30 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-xs interactive-hover h-fit"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Actions - Push to Bottom */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50 mt-auto">
                  {project.links.live && (
                    <Button 
                      size="sm"
                      className={`bg-gradient-to-r from-${project.color}/80 to-${project.color}/60 text-white hover:from-${project.color} hover:to-${project.color}/80 border-0 shadow-lg interactive-hover group/btn`}
                      onClick={() => window.open(project.links.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                      Live Demo
                    </Button>
                  )}
                  
                  {project.links.demo && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary interactive-hover group/btn"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                      View Details
                    </Button>
                  )}
                  
                  {/* {project.links.github && (
                    <Button 
                      size="sm"
                      variant="ghost"
                      className="hover:bg-accent/10 interactive-hover group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                      Code
                    </Button>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced More Projects CTA */}
        {/* <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="professional-card p-8 max-w-md mx-auto group">
            <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Visit my GitHub to see more of my work and contributions
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary interactive-hover group/btn"
            >
              <Github className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
              View GitHub Portfolio
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};