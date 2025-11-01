import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {profile.skills.map((category, index) => {
            const Icon =
              category.icon === "Code2"
                ? Code2
                : category.icon === "Database"
                ? Database
                : category.icon === "Wrench"
                ? Wrench
                : Sparkles;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-secondary text-base py-1.5 px-4 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
