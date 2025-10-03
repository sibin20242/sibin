import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Copy,
  ExternalLink,
  Facebook
} from 'lucide-react';

const contactInfo = {
  email: 'sibinks46@gmail.com',
  phone: '+91 85906 37451',
  location: 'Kerala, India',
  availability: 'Available for freelance'
};

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sibin-ks-b84b83384',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'primary'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/_sibin_k_s_',
    icon: <Instagram className="w-5 h-5" />,
    color: 'secondary'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/sibin26',
    icon: <Facebook className="w-5 h-5" />,
    color: 'blue-600'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918590637451',
    icon: <i className="fa-brands fa-whatsapp" />,
    color: 'success'
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const buildMessage = () => {
    return `Hello Sibin 👋

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;
  };

  const sendViaWhatsApp = () => {
    const encodedMessage = encodeURIComponent(buildMessage());
    const whatsappUrl = `https://wa.me/918590637451?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    resetForm();
  };

  const sendViaTelegram = () => {
    const encodedMessage = encodeURIComponent(buildMessage());
    // Replace "sibin_ks" with your actual Telegram username (without @)
    const telegramUrl = `https://t.me/sibin_k_s?text=${encodedMessage}`;
    window.open(telegramUrl, "_blank");
    resetForm();
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const copyToClipboard = async (text: string, label: string) => {
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
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Top Row - Contact Info and Contact Form (Equal Height & Width) */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="whatsapp-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(contactInfo.email, 'Email')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-secondary/10">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(contactInfo.phone, 'Phone')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 bg-card/30 rounded-lg border border-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="text-center pt-4">
                  <Badge 
                    className="bg-primary/10 text-primary border-primary/20 px-4 py-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    {contactInfo.availability}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="whatsapp-card p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                  className="bg-input/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  required
                  className="bg-input/50 border-border/50 focus:border-primary min-h-[120px] resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  type="button"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
                  onClick={sendViaWhatsApp}
                >
                  <i className="fa-brands fa-whatsapp w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
                <Button 
                  type="button"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/80 transition-all duration-300"
                  onClick={sendViaTelegram}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send via Telegram
                </Button>
              </div>
            </form>
            </div>
          </div>

          {/* Bottom Row - Social Links (Redesigned) */}
          <div className="whatsapp-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-3">Connect With Me</h3>
              <p className="text-muted-foreground">Follow me on social media and let's stay connected</p>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                >
                  <div className="whatsapp-card p-6 text-center hover:scale-105 transform transition-all duration-300 glow-effect">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.name}
                    </h4>
                    
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



