
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Calendar, CheckCircle, Users, Globe, Shield, Database, Code, Zap, Target, Award } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    // New Projects
    {
      id: 24,
      title: "Darta Chalani",
      description: "Official document registration and correspondence tracking system.",
      category: "government",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular"],
      year: "2024",
      client: "Government Office",
      status: "Completed",
      image: "photo-1454165804606-c3d57bc86b40",
      overview: "A comprehensive document management system designed to streamline government correspondence and official document registration processes.",
      features: [
        "Document registration and tracking",
        "Automated workflow management",
        "Digital signature integration",
        "Real-time status updates",
        "Multi-level approval system",
        "Audit trail and reporting"
      ],
      challenges: [
        "Integration with legacy systems",
        "High security requirements",
        "Multi-language support"
      ],
      results: [
        "90% reduction in processing time",
        "100% digital transformation",
        "Enhanced transparency and accountability"
      ]
    },
    {
      id: 25,
      title: "Vendor Enlisting",
      description: "Supplier registration and approval system for procurement processes.",
      category: "government",
      technologies: ["C#", ".NET Core", "SQL Server", "React"],
      year: "2024",
      client: "Procurement Department",
      status: "Completed",
      image: "photo-1507003211169-0a1dd7228f2d",
      overview: "A robust vendor management platform that automates supplier registration, verification, and approval workflows for government procurement.",
      features: [
        "Online vendor registration",
        "Document verification system",
        "Performance evaluation tracking",
        "Blacklist management",
        "Financial assessment tools",
        "Compliance monitoring"
      ],
      challenges: [
        "Complex approval workflows",
        "Integration with procurement systems",
        "Data validation requirements"
      ],
      results: [
        "70% faster vendor onboarding",
        "Enhanced vendor quality control",
        "Improved procurement efficiency"
      ]
    },
    {
      id: 26,
      title: "Valuator Enlisting",
      description: "Valuator profile management and verification for financial institutions.",
      category: "government",
      technologies: ["Python", "Django", "PostgreSQL", "Vue.js"],
      year: "2024",
      client: "Financial Regulatory Authority",
      status: "Completed",
      image: "photo-1554224155-6726b3ff858f",
      overview: "A specialized platform for managing and verifying professional valuators for financial and real estate sectors.",
      features: [
        "Valuator profile management",
        "Certification tracking",
        "Performance analytics",
        "Assignment management",
        "Quality assurance system",
        "Regulatory compliance"
      ],
      challenges: [
        "Professional certification validation",
        "Multi-sector requirements",
        "Regulatory compliance"
      ],
      results: [
        "Improved valuator quality standards",
        "Streamlined assignment process",
        "Enhanced regulatory oversight"
      ]
    },
    {
      id: 27,
      title: "CMS System",
      description: "Dynamic website and content management system for organizations.",
      category: "government",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      year: "2023",
      client: "Municipal Corporation",
      status: "Completed",
      image: "photo-1460925895917-afdab827c52f",
      overview: "A flexible content management system enabling government organizations to maintain dynamic websites and manage digital content effectively.",
      features: [
        "Drag-and-drop page builder",
        "Multi-user content management",
        "SEO optimization tools",
        "Media library management",
        "Template customization",
        "Analytics integration"
      ],
      challenges: [
        "User-friendly interface design",
        "Performance optimization",
        "Security implementation"
      ],
      results: [
        "80% improvement in content update speed",
        "Enhanced web presence",
        "Reduced maintenance costs"
      ]
    },
    {
      id: 28,
      title: "Local Survey & Profile",
      description: "Municipality profiling and digital survey system with data reporting.",
      category: "government",
      technologies: ["React", "Node.js", "MongoDB", "GIS"],
      year: "2023",
      client: "Local Government",
      status: "Completed",
      image: "photo-1551288049-bebda4e38f71",
      overview: "A comprehensive digital survey platform for municipal data collection, citizen profiling, and geographic information management.",
      features: [
        "Digital survey forms",
        "GIS mapping integration",
        "Citizen profile database",
        "Real-time data collection",
        "Analytics dashboard",
        "Report generation"
      ],
      challenges: [
        "Offline data collection capability",
        "GIS integration complexity",
        "Large-scale data management"
      ],
      results: [
        "Complete digitization of surveys",
        "Improved data accuracy by 95%",
        "Real-time decision making capability"
      ]
    },
    {
      id: 29,
      title: "Attendance System",
      description: "Digital attendance tracking with reporting for organizations.",
      category: "government",
      technologies: ["Java", "Spring", "Oracle", "Angular"],
      year: "2023",
      client: "Government Department",
      status: "Completed",
      image: "photo-1434030216411-0b793f4b4173",
      overview: "An advanced biometric and digital attendance management system designed for government organizations with comprehensive reporting capabilities.",
      features: [
        "Biometric integration",
        "Mobile attendance app",
        "Leave management",
        "Payroll integration",
        "Real-time reporting",
        "Overtime tracking"
      ],
      challenges: [
        "Biometric device integration",
        "Network connectivity issues",
        "Large user base management"
      ],
      results: [
        "99.5% attendance accuracy",
        "Eliminated manual processes",
        "Reduced administrative overhead"
      ]
    },
    {
      id: 30,
      title: "Loan Management",
      description: "Full loan application, approval, and repayment tracking system.",
      category: "private",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      year: "2024",
      client: "FinanceFirst Bank",
      status: "Completed",
      image: "photo-1554224154-26032ffc0d07",
      overview: "A comprehensive loan management platform that automates the entire loan lifecycle from application to repayment with integrated risk assessment.",
      features: [
        "Online loan application",
        "Credit scoring integration",
        "Document management",
        "Approval workflow",
        "Repayment tracking",
        "Risk assessment tools"
      ],
      challenges: [
        "Complex risk calculations",
        "Regulatory compliance",
        "Integration with banking systems"
      ],
      results: [
        "60% faster loan processing",
        "Reduced default rates by 25%",
        "Improved customer satisfaction"
      ]
    },
    {
      id: 31,
      title: "Lease Management",
      description: "Tracks lease agreements, payments, and expiry management.",
      category: "private",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      year: "2024",
      client: "PropertyPro Ltd.",
      status: "Completed",
      image: "photo-1560518883-ce09059eeffa",
      overview: "A sophisticated lease management platform for property management companies to track agreements, payments, and maintenance requests.",
      features: [
        "Lease agreement management",
        "Automated payment processing",
        "Renewal notifications",
        "Maintenance request tracking",
        "Tenant communication portal",
        "Financial reporting"
      ],
      challenges: [
        "Multiple property types support",
        "Payment gateway integration",
        "Automated notification system"
      ],
      results: [
        "50% reduction in manual tasks",
        "Improved rent collection rate",
        "Enhanced tenant satisfaction"
      ]
    },
    {
      id: 32,
      title: "Maintenance Ticketing",
      description: "Ticket-based system to handle and resolve maintenance issues.",
      category: "private",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      year: "2024",
      client: "FacilityTech Solutions",
      status: "Completed",
      image: "photo-1581091226825-a6a2a5aee158",
      overview: "A real-time maintenance ticketing system that streamlines facility management with automated assignment and tracking capabilities.",
      features: [
        "Ticket creation and tracking",
        "Automated assignment system",
        "Real-time notifications",
        "Mobile app for technicians",
        "Asset management",
        "Performance analytics"
      ],
      challenges: [
        "Real-time communication",
        "Mobile optimization",
        "Priority-based assignment"
      ],
      results: [
        "40% faster issue resolution",
        "Improved technician productivity",
        "Enhanced facility uptime"
      ]
    },
    {
      id: 33,
      title: "Project Tracking",
      description: "Project request, verification, approval, and monitoring system.",
      category: "private",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
      year: "2023",
      client: "ProjectFlow Inc.",
      status: "Completed",
      image: "photo-1611224923853-80b023f02d71",
      overview: "An enterprise project management platform that provides end-to-end project lifecycle management with advanced analytics and reporting.",
      features: [
        "Project planning and scheduling",
        "Resource allocation",
        "Progress tracking",
        "Budget management",
        "Risk assessment",
        "Stakeholder communication"
      ],
      challenges: [
        "Complex project dependencies",
        "Multi-user collaboration",
        "Real-time synchronization"
      ],
      results: [
        "30% improvement in project delivery",
        "Better resource utilization",
        "Enhanced project visibility"
      ]
    },
    {
      id: 34,
      title: "Appointment Management",
      description: "Online appointment scheduling system for offices and institutions.",
      category: "private",
      technologies: ["React", "Node.js", "MySQL", "Calendar API"],
      year: "2023",
      client: "HealthCare Plus",
      status: "Completed",
      image: "photo-1576091160399-112ba8d25d1f",
      overview: "A comprehensive appointment scheduling platform with automated reminders and calendar integration for healthcare and professional services.",
      features: [
        "Online booking system",
        "Calendar synchronization",
        "Automated reminders",
        "Patient/client management",
        "Payment integration",
        "Analytics and reporting"
      ],
      challenges: [
        "Calendar integration complexity",
        "No-show management",
        "Multiple service provider support"
      ],
      results: [
        "Reduced no-shows by 35%",
        "Improved scheduling efficiency",
        "Enhanced patient satisfaction"
      ]
    },
    {
      id: 35,
      title: "E-commerce Platform",
      description: "Online product management, order processing, and payment solution.",
      category: "private",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2023",
      client: "ShopMart Online",
      status: "Completed",
      image: "photo-1556742049-0cfed4f6a45d",
      overview: "A full-featured e-commerce platform with advanced product management, secure payment processing, and comprehensive order fulfillment.",
      features: [
        "Product catalog management",
        "Shopping cart and checkout",
        "Payment gateway integration",
        "Order tracking",
        "Inventory management",
        "Customer reviews and ratings"
      ],
      challenges: [
        "Scalable architecture design",
        "Payment security",
        "Inventory synchronization"
      ],
      results: [
        "200% increase in online sales",
        "Improved customer experience",
        "Reduced operational costs"
      ]
    },
    {
      id: 36,
      title: "ERP System",
      description: "Full enterprise resource planning solution for businesses and local governments.",
      category: "private",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular"],
      year: "2022",
      client: "Enterprise Solutions Ltd.",
      status: "Completed",
      image: "photo-1460925895917-afdab827c52f",
      overview: "A comprehensive ERP solution integrating all business processes including finance, HR, inventory, and customer management in a unified platform.",
      features: [
        "Financial management",
        "Human resources module",
        "Inventory control",
        "Customer relationship management",
        "Supply chain management",
        "Business intelligence"
      ],
      challenges: [
        "Complex business process integration",
        "Data migration from legacy systems",
        "User training and adoption"
      ],
      results: [
        "50% improvement in operational efficiency",
        "Unified business processes",
        "Better decision-making capabilities"
      ]
    },
    {
      id: 37,
      title: "Training Institute Management",
      description: "Course, student, and financial management system for training centers.",
      category: "private",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
      year: "2022",
      client: "SkillUp Training Center",
      status: "Completed",
      image: "photo-1522202176988-66273c2fd55f",
      overview: "A comprehensive management system for training institutes covering course management, student enrollment, and financial operations.",
      features: [
        "Course catalog management",
        "Student enrollment system",
        "Attendance tracking",
        "Certificate generation",
        "Fee management",
        "Instructor portal"
      ],
      challenges: [
        "Multi-course scheduling",
        "Certificate authenticity",
        "Payment processing"
      ],
      results: [
        "Automated administrative processes",
        "Improved student engagement",
        "Enhanced operational efficiency"
      ]
    },
    {
      id: 38,
      title: "School Management",
      description: "Comprehensive school administration, finance, and academic system.",
      category: "private",
      technologies: ["C#", ".NET", "SQL Server", "Bootstrap"],
      year: "2022",
      client: "Bright Future School",
      status: "Completed",
      image: "photo-1503676260728-1c00da094a0b",
      overview: "An all-in-one school management platform covering academics, administration, finance, and communication for educational institutions.",
      features: [
        "Student information system",
        "Grade management",
        "Fee collection",
        "Parent-teacher communication",
        "Library management",
        "Transportation tracking"
      ],
      challenges: [
        "Multi-stakeholder requirements",
        "Academic workflow complexity",
        "Parent engagement features"
      ],
      results: [
        "Streamlined school operations",
        "Improved parent satisfaction",
        "Enhanced academic tracking"
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/">
            <Button variant="ghost" className="text-gray-300 hover:text-blue-400">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${project.image}?w=1200&h=400&fit=crop`}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <Badge className={`mb-4 ${project.category === "government" ? "bg-blue-600" : "bg-purple-600"}`}>
                {project.category === "government" ? "Government Project" : "Private Sector"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                {project.description}
              </p>
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  {project.client}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {project.year}
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {project.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-400" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-blue-400" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Target className="h-6 w-6 mr-3 text-blue-400" />
                  Challenges Addressed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <Shield className="h-4 w-4 mr-3 text-orange-400 flex-shrink-0" />
                      {challenge}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Award className="h-6 w-6 mr-3 text-blue-400" />
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-3 text-green-400 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Client</h4>
                  <p className="text-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Year</h4>
                  <p className="text-white">{project.year}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Status</h4>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {project.status}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Category</h4>
                  <Badge className={project.category === "government" ? "bg-blue-600" : "bg-purple-600"}>
                    {project.category === "government" ? "Government" : "Private Sector"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Let's discuss how we can help transform your organization.
                </p>
                <Button variant="secondary" className="w-full">
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
