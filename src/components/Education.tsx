import { GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>
        
        {profile.education.map((edu, idx) => (
          <div key={idx} className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-xl text-primary font-medium mb-1">{edu.school}</p>
                <p className="text-muted-foreground mb-4">{edu.faculty} • {edu.period}</p>
                <p className="text-foreground/90 leading-relaxed">{edu.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
