import { Badge } from '@/components/ui/badge';
import { GraduationCap, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor Of Computer Science',
    institution: 'LISSAH College, Calicut University',
    period: '2022 – 2025',
    location: 'Kerala, India',
    description: 'Completed Bachelor\'s degree in Computer Science with focus on modern programming, algorithms, data structures, and software development.',
    url: 'https://lissah.ac.in/',
    status: 'Completed',
    grade: null
  },
  {
    degree: 'HSS | Biology Science',
    institution: 'Govt HSS Puduppadi',
    period: '2020 – 2022',
    location: 'Kerala, India',
    description: 'Completed Higher Secondary with Biology Science stream. Built strong foundation in scientific principles and analytical thinking that supports computer science studies.',
    url: 'https://schools.org.in/kozhikode/32040300502/ghss-puduppadi.html',
    status: 'Completed',
    grade: null
  },
  {
    degree: 'SSLC',
    institution: 'St. Antony\'s High School, Kannoth',
    period: '2017 – 2020',
    location: 'Kerala, India',
    description: 'Successfully completed Secondary School Leaving Certificate (SSLC) with focus on core academic subjects. Developed a strong foundation in mathematics, science, and languages.',
    url: 'https://schools.org.in/kozhikode/32040301001/st-antony-s-h-s-kannoth.html#google_vignette',
    status: 'Completed',
    grade: null
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 circuit-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <GraduationCap className="w-8 h-8 inline-block mr-3 text-primary" />
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic excellence that built the foundation for my technical expertise and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-glow"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative flex gap-8 animate-slide-up group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="timeline-dot w-12 h-12 rounded-full border-4 border-background shadow-2xl z-10 relative">
                      <div className="w-full h-full rounded-full bg-gradient-primary"></div>
                    </div>
                    
                    {/* Connecting elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-accent animate-float opacity-60" style={{ animationDelay: `${index * 500}ms` }}></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-1 pb-8">
                    <div className="professional-card p-8 lg:p-10 group-hover:scale-[1.02] transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 interactive-hover">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                          
                          <div className="flex items-center gap-2 mb-3">
                            {edu.url ? (
                              <a 
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-primary hover:underline flex items-center gap-1 interactive-hover"
                              >
                                {edu.institution}
                                <ExternalLink className="w-3 h-3 transition-transform duration-300 hover:scale-110" />
                              </a>
                            ) : (
                              <span className="font-medium text-foreground">{edu.institution}</span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground interactive-hover">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          <Badge className="bg-success/10 text-success border border-success/30 hover:border-success/50 hover:bg-success/20 transition-all duration-300 interactive-hover">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                              {edu.status}
                            </div>
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-base">
                        {edu.description}
                      </p>
                      
                      {/* Achievement indicator */}
                      {/* <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <Award className="w-4 h-4" />
                          Academic Achievement
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};