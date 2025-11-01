import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Smartphone, DollarSign, Package, Zap } from "lucide-react";

const projects = [
  {
    title: "Ask AI – Natural Language Interface for ERPNext",
    description: "An AI-powered application that revolutionizes how users interact with ERP data, enabling natural language queries like 'Show top customers this quarter' without technical knowledge.",
    icon: Brain,
    features: [
      "Integrated with Frappe backend for secure, real-time data access",
      "Dynamic chart and table generation based on query context",
      "Context-aware conversations supporting seamless follow-up questions",
      "Responsive JavaScript and Frappe UI frontend",
      "One-click export to PDF and Excel for comprehensive reporting",
      "Enterprise-grade security with RBAC and audit logging"
    ],
    technologies: ["Python", "JavaScript", "Frappe", "AI/NLP", "Data Visualization"]
  },
  {
    title: "SFA-Mobix – Sales Force Automation",
    description: "A mobile-first Frappe application designed to streamline salesperson field activities, from journey planning to on-device transaction processing.",
    icon: Smartphone,
    features: [
      "Daily journey planning and customer visit management",
      "Direct creation of sales orders, invoices, and payments on mobile devices",
      "Custom SFA-GL doctype for transaction tracking and accounting reconciliation",
      "Multiple custom reports for performance tracking and operational oversight",
      "Offline-capable architecture for field operations"
    ],
    technologies: ["Frappe", "JavaScript", "Mobile Development", "Custom Doctypes"]
  },
  {
    title: "Production Cost Recalculation",
    description: "Automated system for monthly re-evaluation and updating of production costs, ensuring accurate financial reporting and inventory valuation.",
    icon: DollarSign,
    features: [
      "Automated monthly cost recalculation for manufacturing entries",
      "Integration of additional overhead costs into production calculations",
      "Improved accuracy in financial reporting and inventory valuation",
      "Scheduled background processing to minimize system impact",
      "Comprehensive audit trail for cost adjustments"
    ],
    technologies: ["Python", "Frappe", "SQL", "Automation"]
  },
  {
    title: "Purchase Shipment Tracking",
    description: "Comprehensive shipment monitoring system that tracks supplier reliability, delivery variances, and multi-route logistics.",
    icon: Package,
    features: [
      "Real-time shipment status monitoring and supplier performance tracking",
      "Automated tracking of partial deliveries and quantity variances",
      "Validation of arrival completeness against purchase orders",
      "Support for multiple delivery routes (airport, warehouse, etc.)",
      "Alert system for delivery delays and discrepancies"
    ],
    technologies: ["Frappe", "Python", "Real-time Tracking"]
  },
  {
    title: "Customizations & Automation Suite",
    description: "A collection of bespoke solutions developed across multiple client implementations to optimize business workflows and operational efficiency.",
    icon: Zap,
    features: [
      "Custom doctypes tailored to specific business requirements",
      "Scheduled background jobs for routine process automation",
      "Business-specific reports and dashboards",
      "Workflow optimization and approval systems",
      "Integration with third-party services and APIs"
    ],
    technologies: ["Python", "JavaScript", "Frappe", "SQL", "API Integration"]
  }
];

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
          {projects.map((project, index) => {
            const Icon = project.icon;
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
