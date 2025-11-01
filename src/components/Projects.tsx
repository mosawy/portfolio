import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Smartphone, DollarSign, Package, Zap } from "lucide-react";
import { profile } from "@/data/profile";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Building enterprise solutions that drive business transformation
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((project, index) => {
            const Icon =
              project.icon === "Brain"
                ? Brain
                : project.icon === "Smartphone"
                ? Smartphone
                : project.icon === "DollarSign"
                ? DollarSign
                : project.icon === "Package"
                ? Package
                : Zap;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary/20 group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {Array.isArray((project as any).metrics) && (project as any).metrics.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Impact:</h4>
                      <div className="flex flex-wrap gap-2">
                        {((project as any).metrics as Array<{label: string; value: string}>).map((m, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/80">
                            {m.label}: <span className="font-semibold ml-1">{m.value}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
