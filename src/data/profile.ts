export const profile = {
  name: "Mohamed Elsawy",
  title: "Software Engineer | Frappe & ERPNext Specialist | AI Integration Developer",
  location: "Haram, Giza, Egypt",
  email: "mohamed.elsawy739@gmail.com",
  phone: "+20 109 000 3178",
  social: {
    github: "https://github.com", // TODO: replace with actual profile
    linkedin: "https://www.linkedin.com/in/mohamed-elsawy-58a33b148/"
  },
  // Ensure correct path on GitHub Pages subpath
  resumeUrl: `${import.meta.env.BASE_URL}MohamedElsawyCV.pdf`,
  about: [
    "I'm a passionate software engineer with over 2 years of experience crafting intelligent ERP solutions that bridge the gap between complex data systems and intuitive user experiences. My journey combines the precision of full-stack development with the art of teaching and mentorship at Cairo University.",
    "My expertise lies in building with Frappe and ERPNext, where I've architected everything from AI-powered natural language interfaces to mobile-first sales automation apps. I believe in the power of automation and intelligent systems to transform how businesses operate—making technology accessible even to non-technical users.",
    "Whether I'm developing enterprise-grade applications with Python, JavaScript, and SQL, or teaching the next generation of programmers, I'm driven by one goal: empowering people through innovative, scalable software solutions."
  ],
  skills: [
    { title: "Programming Languages", icon: "Code2", skills: ["Python", "JavaScript", "SQL"] },
    { title: "Frameworks & Platforms", icon: "Database", skills: ["Frappe", "ERPNext", "React"] },
    { title: "Tools & DevOps", icon: "Wrench", skills: ["Git", "Linux", "REST APIs"] },
    { title: "Specialized Skills", icon: "Sparkles", skills: ["AI/NLP", "Data Visualization", "Security (RBAC)", "Report Generation", "Automation"] }
  ],
  experiences: [
    {
      company: "Golive-Solutions",
      location: "Cairo, Egypt",
      role: "Software Engineer",
      period: "2023 - Present",
      icon: "Briefcase",
      highlights: [
        "Developed AI-powered natural language interface enabling non-technical users to query ERPNext data intuitively",
        "Architected and deployed multiple Frappe apps for sales automation, production cost management, and shipment tracking",
        "Implemented enterprise-grade security with role-based access control and comprehensive audit logging",
        "Created automated workflows and scheduled jobs that improved operational efficiency across multiple client implementations",
        "Built responsive frontend solutions ensuring seamless cross-device compatibility"
      ],
      // Optional impact metrics shown prominently on the site (fill from CV)
      // metrics: [
      //   { label: "Reporting time reduced", value: "60%" },
      //   { label: "Automation savings", value: "15+ hrs/month" }
      // ]
    },
    {
      company: "Cairo University Faculty of Science",
      location: "Cairo, Egypt",
      role: "Teaching Assistant",
      period: "2024 - Present",
      icon: "GraduationCap",
      highlights: [
        "Teaching programming fundamentals and software engineering concepts to undergraduate students",
        "Mentoring students in modern development practices and problem-solving methodologies",
        "Developing course materials and hands-on coding exercises",
        "Fostering a collaborative learning environment that emphasizes practical application",
        "Supporting students' growth in computer science and preparing them for industry careers"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Cairo University",
      faculty: "Faculty of Science",
      period: "2017 - 2021",
      icon: "GraduationCap",
      summary:
        "Comprehensive computer science education covering algorithms, data structures, software engineering, databases, and artificial intelligence. Built a strong foundation in problem-solving and computational thinking that drives my approach to developing innovative software solutions."
    }
  ],
  projects: [
    {
      title: "Ask AI – Natural Language Interface for ERPNext",
      description:
        "An AI-powered application that revolutionizes how users interact with ERP data, enabling natural language queries like 'Show top customers this quarter' without technical knowledge.",
      icon: "Brain",
      features: [
        "Integrated with Frappe backend for secure, real-time data access",
        "Dynamic chart and table generation based on query context",
        "Context-aware conversations supporting seamless follow-up questions",
        "Responsive JavaScript and Frappe UI frontend",
        "One-click export to PDF and Excel for comprehensive reporting",
        "Enterprise-grade security with RBAC and audit logging"
      ],
      technologies: ["Python", "JavaScript", "Frappe", "AI/NLP", "Data Visualization"],
      // Optional impact metrics (fill from CV)
      // metrics: [
      //   { label: "Report prep time", value: "-60%" },
      //   { label: "Active users", value: "25+" },
      //   { label: "Follow-up queries", value: "Context-aware" }
      // ]
    },
    {
      title: "SFA-Mobix – Sales Force Automation",
      description:
        "A mobile-first Frappe application designed to streamline salesperson field activities, from journey planning to on-device transaction processing.",
      icon: "Smartphone",
      features: [
        "Daily journey planning and customer visit management",
        "Direct creation of sales orders, invoices, and payments on mobile devices",
        "Custom SFA-GL doctype for transaction tracking and accounting reconciliation",
        "Multiple custom reports for performance tracking and operational oversight",
        "Offline-capable architecture for field operations"
      ],
      technologies: ["Frappe", "JavaScript", "Mobile Development", "Custom Doctypes"],
      // metrics: [
      //   { label: "Time to transact", value: "-30%" },
      //   { label: "Offline sync accuracy", value: "99.9%" }
      // ]
    },
    {
      title: "Production Cost Recalculation",
      description:
        "Automated system for monthly re-evaluation and updating of production costs, ensuring accurate financial reporting and inventory valuation.",
      icon: "DollarSign",
      features: [
        "Automated monthly cost recalculation for manufacturing entries",
        "Integration of additional overhead costs into production calculations",
        "Improved accuracy in financial reporting and inventory valuation",
        "Scheduled background processing to minimize system impact",
        "Comprehensive audit trail for cost adjustments"
      ],
      technologies: ["Python", "Frappe", "SQL", "Automation"],
      // metrics: [
      //   { label: "Manual effort saved", value: "15+ hrs/month" },
      //   { label: "Revaluation coverage", value: "100% monthly" }
      // ]
    },
    {
      title: "Purchase Shipment Tracking",
      description:
        "Comprehensive shipment monitoring system that tracks supplier reliability, delivery variances, and multi-route logistics.",
      icon: "Package",
      features: [
        "Real-time shipment status monitoring and supplier performance tracking",
        "Automated tracking of partial deliveries and quantity variances",
        "Validation of arrival completeness against purchase orders",
        "Support for multiple delivery routes (airport, warehouse, etc.)",
        "Alert system for delivery delays and discrepancies"
      ],
      technologies: ["Frappe", "Python", "Real-time Tracking"],
      // metrics: [
      //   { label: "On-time delivery improvement", value: "+25%" },
      //   { label: "Delay alerts", value: "Automated" }
      // ]
    },
    {
      title: "Customizations & Automation Suite",
      description:
        "A collection of bespoke solutions developed across multiple client implementations to optimize business workflows and operational efficiency.",
      icon: "Zap",
      features: [
        "Custom doctypes tailored to specific business requirements",
        "Scheduled background jobs for routine process automation",
        "Business-specific reports and dashboards",
        "Workflow optimization and approval systems",
        "Integration with third-party services and APIs"
      ],
      technologies: ["Python", "JavaScript", "Frappe", "SQL", "API Integration"],
      // metrics: [
      //   { label: "Process time reduction", value: "-40%" },
      //   { label: "Automated jobs", value: "10+" }
      // ]
    }
  ]
} as const;
