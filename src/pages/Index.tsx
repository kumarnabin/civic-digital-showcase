import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Shield, Database, Cloud, Code, Server, Globe, Phone, Mail, MapPin, ExternalLink, Github, Calendar, CheckCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    // New Government Projects
    {
      id: 24,
      title: "Darta Chalani",
      description: "Official document registration and correspondence tracking system.",
      category: "government",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular"],
      year: "2024",
      client: "Government Office",
      status: "Completed",
      image: "photo-1454165804606-c3d57bc86b40"
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
      image: "photo-1507003211169-0a1dd7228f2d"
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
      image: "photo-1554224155-6726b3ff858f"
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
      image: "photo-1460925895917-afdab827c52f"
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
      image: "photo-1551288049-bebda4e38f71"
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
      image: "photo-1434030216411-0b793f4b4173"
    },
    // New Private Projects
    {
      id: 30,
      title: "Loan Management",
      description: "Full loan application, approval, and repayment tracking system.",
      category: "private",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      year: "2024",
      client: "FinanceFirst Bank",
      status: "Completed",
      image: "photo-1554224154-26032ffc0d07"
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
      image: "photo-1560518883-ce09059eeffa"
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
      image: "photo-1581091226825-a6a2a5aee158"
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
      image: "photo-1611224923853-80b023f02d71"
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
      image: "photo-1576091160399-112ba8d25d1f"
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
      image: "photo-1556742049-0cfed4f6a45d"
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
      image: "photo-1460925895917-afdab827c52f"
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
      image: "photo-1522202176988-66273c2fd55f"
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
      image: "photo-1503676260728-1c00da094a0b"
    },
    // ... keep existing code (all previous 23 projects)
    {
      id: 1,
      title: "National Tax Management System",
      description: "Comprehensive tax collection and management platform for the Department of Revenue",
      category: "government",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular"],
      year: "2024",
      client: "Department of Revenue",
      status: "Completed",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 2,
      title: "Digital Identity Verification Portal",
      description: "Secure citizen identity verification system for multiple government agencies",
      category: "government",
      technologies: ["Node.js", "React", "PostgreSQL", "Blockchain"],
      year: "2024",
      client: "Ministry of Digital Affairs",
      status: "Completed",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "E-Governance Document Management",
      description: "Centralized document management system for government offices",
      category: "government",
      technologies: ["Python", "Django", "MongoDB", "Redis"],
      year: "2023",
      client: "Cabinet Secretariat",
      status: "Completed",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 4,
      title: "Public Healthcare Information System",
      description: "Integrated healthcare management platform for public hospitals",
      category: "government",
      technologies: ["C#", ".NET Core", "SQL Server", "Vue.js"],
      year: "2023",
      client: "Ministry of Health",
      status: "Completed",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: 5,
      title: "Smart City Traffic Management",
      description: "AI-powered traffic monitoring and control system for urban areas",
      category: "government",
      technologies: ["Python", "TensorFlow", "IoT", "React"],
      year: "2023",
      client: "Urban Development Authority",
      status: "Completed",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 6,
      title: "Education Management Portal",
      description: "Comprehensive school management system for public education sector",
      category: "government",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      year: "2022",
      client: "Ministry of Education",
      status: "Completed",
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      id: 7,
      title: "Agricultural Data Analytics Platform",
      description: "Data-driven insights platform for agricultural policy making",
      category: "government",
      technologies: ["R", "Shiny", "PostgreSQL", "Tableau"],
      year: "2022",
      client: "Department of Agriculture",
      status: "Completed",
      image: "photo-1473091534298-04dcbce3278c"
    },
    {
      id: 8,
      title: "Public Transportation Tracking",
      description: "Real-time bus and metro tracking system for citizens",
      category: "government",
      technologies: ["Java", "Spring", "MySQL", "Android"],
      year: "2022",
      client: "Transportation Authority",
      status: "Completed",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      id: 9,
      title: "Environmental Monitoring System",
      description: "IoT-based air quality and environmental data collection platform",
      category: "government",
      technologies: ["Node.js", "InfluxDB", "Grafana", "IoT"],
      year: "2021",
      client: "Environmental Protection Agency",
      status: "Completed",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      id: 10,
      title: "Digital Courts Management",
      description: "Case management and scheduling system for judicial courts",
      category: "government",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular"],
      year: "2021",
      client: "Supreme Court",
      status: "Completed",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 11,
      title: "Social Welfare Distribution System",
      description: "Automated welfare scheme distribution and tracking platform",
      category: "government",
      technologies: ["Python", "Flask", "PostgreSQL", "React"],
      year: "2021",
      client: "Social Welfare Department",
      status: "Completed",
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      id: 12,
      title: "Banking Core System Modernization",
      description: "Legacy system migration to cloud-native architecture for major bank",
      category: "private",
      technologies: ["Java", "Microservices", "AWS", "Docker"],
      year: "2024",
      client: "National Bank Ltd.",
      status: "Completed",
      image: "photo-1487958449943-2429e8be8625"
    },
    {
      id: 13,
      title: "E-commerce Platform Development",
      description: "Full-stack e-commerce solution with advanced analytics",
      category: "private",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      client: "RetailCorp",
      status: "Completed",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 14,
      title: "Insurance Claims Processing System",
      description: "Automated claims processing with AI-powered fraud detection",
      category: "private",
      technologies: ["Python", "Machine Learning", "PostgreSQL", "React"],
      year: "2024",
      client: "SecureLife Insurance",
      status: "Completed",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 15,
      title: "Manufacturing ERP Solution",
      description: "Enterprise resource planning system for manufacturing company",
      category: "private",
      technologies: ["C#", ".NET", "SQL Server", "Angular"],
      year: "2023",
      client: "TechManufacturing Inc.",
      status: "Completed",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 16,
      title: "Healthcare Management System",
      description: "Patient management and telemedicine platform for private hospitals",
      category: "private",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      year: "2023",
      client: "HealthCare Plus",
      status: "Completed",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      id: 17,
      title: "Real Estate CRM Platform",
      description: "Customer relationship management system for real estate agencies",
      category: "private",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      year: "2023",
      client: "Premier Properties",
      status: "Completed",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 18,
      title: "Restaurant Chain Management",
      description: "Multi-location restaurant management and POS system",
      category: "private",
      technologies: ["Flutter", "Firebase", "Node.js", "Stripe"],
      year: "2022",
      client: "FoodChain Ltd.",
      status: "Completed",
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      id: 19,
      title: "Logistics Tracking System",
      description: "Real-time package tracking and fleet management solution",
      category: "private",
      technologies: ["Java", "Spring Boot", "Redis", "React Native"],
      year: "2022",
      client: "SwiftLogistics",
      status: "Completed",
      image: "photo-1473091534298-04dcbce3278c"
    },
    {
      id: 20,
      title: "EdTech Learning Platform",
      description: "Online learning management system with video streaming",
      category: "private",
      technologies: ["React", "Node.js", "AWS", "WebRTC"],
      year: "2022",
      client: "EduTech Solutions",
      status: "Completed",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      id: 21,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and reporting platform",
      category: "private",
      technologies: ["Python", "Pandas", "D3.js", "PostgreSQL"],
      year: "2021",
      client: "InvestPro Ltd.",
      status: "Completed",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      id: 22,
      title: "Hotel Booking Management",
      description: "Comprehensive hotel reservation and management system",
      category: "private",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
      year: "2021",
      client: "Hospitality Group",
      status: "Completed",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 23,
      title: "Energy Management System",
      description: "Smart grid monitoring and energy consumption optimization",
      category: "private",
      technologies: ["Python", "IoT", "InfluxDB", "Grafana"],
      year: "2021",
      client: "GreenEnergy Corp",
      status: "Completed",
      image: "photo-1483058712412-4245e9b90334"
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Migration & Solutions",
      description: "Seamless transition to cloud infrastructure"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Robust data solutions and optimization"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security frameworks and compliance"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "System Integration",
      description: "Connecting disparate systems for unified operations"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web & Mobile Development",
      description: "Modern, responsive applications across all platforms"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">TechOffice Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              IT Solutions for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Government</span>
              <br />
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Private Sector</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Delivering cutting-edge technology solutions with over 38+ successful projects 
              across government agencies and private enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View Our Projects
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">38+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">21+</div>
              <div className="text-gray-400">Government Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">17+</div>
              <div className="text-gray-400">Private Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet the unique needs of government and private organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing our expertise across diverse sectors and technologies
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => setSelectedCategory("all")}
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={selectedCategory === "all" ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-gray-300 hover:bg-slate-700"}
              >
                All Projects
              </Button>
              <Button
                onClick={() => setSelectedCategory("government")}
                variant={selectedCategory === "government" ? "default" : "outline"}
                className={selectedCategory === "government" ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-gray-300 hover:bg-slate-700"}
              >
                Government
              </Button>
              <Button
                onClick={() => setSelectedCategory("private")}
                variant={selectedCategory === "private" ? "default" : "outline"}
                className={selectedCategory === "private" ? "bg-blue-600 hover:bg-blue-700" : "border-slate-600 text-gray-300 hover:bg-slate-700"}
              >
                Private Sector
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={project.category === "government" ? "bg-blue-600" : "bg-purple-600"}>
                      {project.category === "government" ? "Government" : "Private"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.status}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-400">
                      <Building2 className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/project/${project.id}`}>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About TechOffice Solutions</h2>
              <p className="text-gray-300 mb-6 text-lg">
                We are a leading IT consultancy specializing in digital transformation for government agencies 
                and private enterprises. With over 5 years of experience and 38+ successful projects, we deliver 
                innovative solutions that drive efficiency and growth.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Our team of expert developers, system architects, and project managers work closely with clients 
                to understand their unique challenges and deliver tailored solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">Secure Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">Modern Tech Stack</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300">Proven Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Project Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready to transform your organization with cutting-edge IT solutions? Contact us today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">info@techofficesolutions.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">123 Tech Boulevard<br />Digital City, DC 12345</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold text-white">TechOffice Solutions</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming businesses through innovative IT solutions
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-gray-500 text-sm">
              © 2024 TechOffice Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
