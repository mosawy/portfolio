import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Golive-Solutions",
    location: "Cairo, Egypt",
    role: "Software Engineer",
    period: "2023 - Present",
    icon: Briefcase,
    highlights: [
      "Developed AI-powered natural language interface enabling non-technical users to query ERPNext data intuitively",
      "Architected and deployed multiple Frappe apps for sales automation, production cost management, and shipment tracking",
      "Implemented enterprise-grade security with role-based access control and comprehensive audit logging",
      "Created automated workflows and scheduled jobs that improved operational efficiency across multiple client implementations",
      "Built responsive frontend solutions ensuring seamless cross-device compatibility"
    ]
  },
  {
    company: "Cairo University Faculty of Science",
    location: "Cairo, Egypt",
    role: "Teaching Assistant",
    period: "2024 - Present",
    icon: GraduationCap,
    highlights: [
      "Teaching programming fundamentals and software engineering concepts to undergraduate students",
      "Mentoring students in modern development practices and problem-solving methodologies",
      "Developing course materials and hands-on coding exercises",
      "Fostering a collaborative learning environment that emphasizes practical application",
      "Supporting students' growth in computer science and preparing them for industry careers"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
