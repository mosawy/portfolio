import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, FileText, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborative projects, 
          or just having a conversation about technology and innovation.
        </p>
        
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:mohamed.elsawy739@gmail.com"
              className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
            >
              <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">mohamed.elsawy739@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+201090003178"
              className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
            >
              <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+20 109 000 3178</p>
              </div>
            </a>
            
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-transparent">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Haram, Giza, Egypt</p>
              </div>
            </div>
            
            <a 
              href="#"
              className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 border border-transparent transition-all group"
            >
              <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Resume</p>
                <p className="font-medium">Download CV</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p>© 2025 Mohamed Elsawy. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
