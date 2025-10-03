import { Badge } from '@/components/ui/badge';
import { 
  Laptop, 
  Code, 
  Droplets, 
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Bairuha Tech',
    companyUrl: 'https://bairuhatech.com/',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    icon: <Laptop className="w-6 h-6" />,
    description: 'Hands-on experience in full-stack development using MongoDB, Express.js, React & Node.js.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
    color: 'primary'
  },
  {
    title: 'Portfolio Developer',
    company: 'Self–initiated Project',
    companyUrl: null,
    period: '2024',
    location: 'Personal Project',
    type: 'Project',
    icon: <Code className="w-6 h-6" />,
    description: 'Designed and developed this personal portfolio with a modern UI, accessibility best practices, and responsive layout. Deployed and optimized for performance and SEO.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'shadcn/ui'],
    color: 'secondary'
  },
  {
    title: 'Academic Project — AQUAFLOW',
    company: 'LISSAH College',
    companyUrl: null,
    period: '2024-2025',
    location: 'College Project',
    type: 'Academic',
    icon: <Droplets className="w-6 h-6" />,
    description: 'Built a water supply management system with scheduling and complaint handling, delivering both a mobile app and web dashboard.',
    skills: ['Flutter', 'Html', 'JavaScript', 'CSS', 'Dart','Python-Django'],
    color: 'accent'}
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development and innovative projects that shaped my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="professional-card p-8 lg:p-10 group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Enhanced Icon & Type */}
                <div className="flex-shrink-0">
                  <div className={`skill-hexagon bg-gradient-to-br from-${exp.color}/20 to-${exp.color}/10 border border-${exp.color}/30 group-hover:border-${exp.color}/60 group-hover:shadow-glow`}>
                    <div className={`text-${exp.color} transition-all duration-300 group-hover:scale-110`}>
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-medium text-${exp.color} hover:underline flex items-center gap-1 interactive-hover`}
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3 transition-transform duration-300 hover:scale-110" />
                          </a>
                        ) : (
                          <span className="font-medium text-foreground">{exp.company}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center gap-2 interactive-hover">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 interactive-hover">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Type Badge */}
                  <Badge 
                    variant="secondary" 
                    className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/30 hover:border-${exp.color}/50 hover:bg-${exp.color}/20 transition-all duration-300 interactive-hover`}
                  >
                    {exp.type}
                  </Badge>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {exp.description}
                  </p>

                  {/* Enhanced Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge 
                          key={skill}
                          variant="outline"
                          className="bg-card/30 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-xs interactive-hover"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};