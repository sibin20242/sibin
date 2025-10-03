import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Palette,
  Terminal,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    color: 'primary',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX', 'Flutter']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    color: 'secondary',
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'C Programming']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    color: 'accent',
    skills: ['MongoDB', 'SQL', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools & Others',
    icon: <Terminal className="w-6 h-6" />,
    color: 'success',
    skills: ['Git', 'VS Code', 'Postman', 'REST APIs', 'Responsive Design', 'SEO']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 circuit-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and cutting-edge frameworks
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="professional-card p-6 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`skill-hexagon mx-auto mb-6 bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 border border-${category.color}/30 group-hover:border-${category.color}/50`}>
                <div className={`text-${category.color} transition-all duration-300 group-hover:scale-110`}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-card/50 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-xs interactive-hover transform hover:scale-105"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Tech Stack Visualization */}
        <div className="mt-16 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="professional-card p-8 group">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Preferred <span className="gradient-text">Tech Stack</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4 group/item">
                <div className="skill-hexagon mx-auto bg-primary/10 border border-primary/30 group-hover/item:border-primary/60 group-hover/item:shadow-glow">
                  <Smartphone className="w-8 h-8 text-primary transition-all duration-300 group-hover/item:scale-110" />
                </div>
                <h4 className="font-semibold text-lg group-hover/item:text-primary transition-colors duration-300">Frontend</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">React • Flutter • HTML/CSS • JavaScript</p>
                <div className="w-full h-0.5 bg-gradient-primary rounded-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              <div className="space-y-4 group/item">
                <div className="skill-hexagon mx-auto bg-secondary/10 border border-secondary/30 group-hover/item:border-secondary/60 group-hover/item:shadow-glow">
                  <Server className="w-8 h-8 text-secondary transition-all duration-300 group-hover/item:scale-110" />
                </div>
                <h4 className="font-semibold text-lg group-hover/item:text-secondary transition-colors duration-300">Backend</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Node.js • Express.js • Python • Django</p>
                <div className="w-full h-0.5 bg-gradient-accent rounded-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              <div className="space-y-4 group/item">
                <div className="skill-hexagon mx-auto bg-accent/10 border border-accent/30 group-hover/item:border-accent/60 group-hover/item:shadow-glow">
                  <Database className="w-8 h-8 text-accent transition-all duration-300 group-hover/item:scale-110" />
                </div>
                <h4 className="font-semibold text-lg group-hover/item:text-accent transition-colors duration-300">Database</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">MongoDB • MySQL • SQL</p>
                <div className="w-full h-0.5 bg-gradient-primary rounded-full transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};