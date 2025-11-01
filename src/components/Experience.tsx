import { Briefcase, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";

type Metric = { label: string; value: string };
type ExperienceItem = (typeof profile.experiences)[number] & { metrics?: Metric[] };

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {profile.experiences.map((exp: ExperienceItem, index) => {
            const Icon = exp.icon === "Briefcase" ? Briefcase : GraduationCap;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location} • {exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground/90">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {Array.isArray(exp.metrics) && exp.metrics.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2 text-primary">Impact:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics!.map((m, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/80">
                          {m.label}: <span className="font-semibold ml-1">{m.value}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
