import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, Brain, ExternalLink, Calendar, Award, Eye } from 'lucide-react';
import CCSA from '@/assets/ccsa.jpg';
import AI from '@/assets/AI.jpg';

const certificates = [
  {
    title: 'Certified Cyber Security Analyst (CCSA)',
    issuer: 'RedTeam Hacker Academy',
    year: '2023',
    image: CCSA,
    description: 'Training in cybersecurity covering pentesting, SOC, SIEM, and network security.',
    icon: <Shield className="w-6 h-6" />,
    skills: ['Penetration Testing', 'SOC Analysis', 'SIEM', 'Network Security', 'Incident Response'],
    color: 'primary',
    credentialId: 'CCSA-2023-001',
    // verificationUrl: 'https://www.redteamhackeracademy.com/verify/CCSA-2023-001'
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'UL Research & OSPF',
    year: '2025',
    image: AI,
    description: 'Completed a certified training in AI fundamentals, machine learning concepts, and practical applications.',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Machine Learning', 'AI Fundamentals', 'Data Analysis', 'Neural Networks', 'Python'],
    color: 'secondary',
    credentialId: 'AI-2025-001',
    // verificationUrl: 'https://www.ulresearch.com/verify/AI-2025-001'
  }
];

const handleVerifyCertificate = (verificationUrl: string, credentialId: string) => {
  // Open verification URL in new tab
  window.open(verificationUrl, '_blank', 'noopener,noreferrer');
  
  // Optional: Add analytics tracking
  console.log(`Certificate verification requested: ${credentialId}`);
};

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 pattern-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <Award className="w-8 h-8 inline-block mr-3 text-primary" />
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certified expertise in cybersecurity and artificial intelligence technologies
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto place-items-center">
          {certificates.map((cert, index) => (
            <div 
              key={cert.title}
              className="professional-card p-6 group animate-slide-up hover:scale-105 transition-all duration-300 w-full h-full flex flex-col justify-between"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Compact Certificate Display */}
              <div className="relative mb-4 h-32 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute top-3 right-3 skill-hexagon bg-gradient-to-br from-${cert.color}/90 to-${cert.color}/70 border-0 shadow-lg scale-75`}>
                  <div className="text-white">
                    {cert.icon}
                  </div>
                </div>
                
                {/* Year Badge */}
                <Badge className="absolute bottom-3 left-3 bg-black/70 text-white backdrop-blur-sm border border-white/20 text-xs">
                  {cert.year}
                </Badge>
              </div>

              {/* Compact Content */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className={`text-${cert.color} font-medium text-sm`}>
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {cert.description}
                </p>
                
                {/* View Details Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      className="w-full mt-4"
                      variant="outline"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        {cert.icon}
                        {cert.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-4">
                      {/* Full Certificate Image */}
                      <div className="relative h-64 overflow-hidden rounded-lg">
                        <img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-contain bg-muted/50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        {/* Enhanced Icon */}
                        <div className={`absolute top-4 right-4 skill-hexagon bg-gradient-to-br from-${cert.color}/90 to-${cert.color}/70 border-0 shadow-xl`}>
                          <div className="text-white">
                            {cert.icon}
                          </div>
                        </div>
                        
                        {/* Year Badge */}
                        <Badge className="absolute bottom-4 left-4 bg-black/70 text-white backdrop-blur-sm border border-white/20">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span className="font-medium">{cert.year}</span>
                          </div>
                        </Badge>
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className={`text-xl font-bold text-${cert.color} mb-2`}>
                            {cert.issuer}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {cert.description}
                          </p>
                        </div>

                        {/* Skills */}
                        <div>
                          <h5 className="font-medium text-muted-foreground uppercase tracking-wide text-xs mb-3">
                            Skills & Expertise
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge 
                                key={skill}
                                variant="outline"
                                className={`bg-${cert.color}/10 border-${cert.color}/30 hover:border-${cert.color}/50 hover:bg-${cert.color}/20 text-xs`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Credential Information */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide">Credential ID</div>
                            <div className="text-sm font-mono text-primary mt-1">{cert.credentialId}</div>
                          </div>
                          
                          {/* <Button 
                            size="sm"
                            variant="outline"
                            className={`border-${cert.color}/30 hover:bg-${cert.color}/10 hover:border-${cert.color} group/btn`}
                            onClick={() => handleVerifyCertificate(cert.verificationUrl, cert.credentialId)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:scale-110" />
                            Verify Certificate
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies and industry best practices. 
              These certifications represent my commitment to professional growth and expertise validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};