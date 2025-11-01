import { Code2, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              I'm a passionate software engineer with over 2 years of experience crafting intelligent ERP solutions 
              that bridge the gap between complex data systems and intuitive user experiences. My journey combines 
              the precision of full-stack development with the art of teaching and mentorship at Cairo University.
            </p>
            
            <p>
              My expertise lies in building with <span className="text-primary font-semibold">Frappe and ERPNext</span>, 
              where I've architected everything from AI-powered natural language interfaces to mobile-first sales 
              automation apps. I believe in the power of automation and intelligent systems to transform how businesses 
              operate—making technology accessible even to non-technical users.
            </p>
            
            <p>
              Whether I'm developing enterprise-grade applications with <span className="text-primary font-semibold">Python</span>, 
              <span className="text-primary font-semibold"> JavaScript</span>, and <span className="text-primary font-semibold">SQL</span>, 
              or teaching the next generation of programmers, I'm driven by one goal: empowering people through innovative, 
              scalable software solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-secondary/50 rounded-xl">
              <Code2 className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Full-Stack Developer</h3>
              <p className="text-sm text-muted-foreground">Python, JavaScript, SQL</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-secondary/50 rounded-xl">
              <Sparkles className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">AI Integration</h3>
              <p className="text-sm text-muted-foreground">NLP, Data Visualization</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-secondary/50 rounded-xl">
              <GraduationCap className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-lg">Educator</h3>
              <p className="text-sm text-muted-foreground">Cairo University TA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
