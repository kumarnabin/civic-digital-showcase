import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Code, 
  Database, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  PlayCircle,
  Calendar,
  GraduationCap,
  Trophy,
  Star,
  Camera,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Palette
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TechAnimation from "@/components/TechAnimation";

const Index = () => {
  const { language, t } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);

  const carouselSlides = [
    {
      id: 'introduction',
      title: 'Welcome to NayaCode',
      subtitle: 'Your Trusted Technology Partner',
      description: 'Transforming businesses with innovative IT solutions for over 15 years. We specialize in government and private sector digital transformation.',
      icon: Sparkles,
      gradient: 'from-naya-blue-500 to-naya-blue-600',
      bgImage: 'photo-1649972904349-6e44c42644a7',
      action: { text: 'Learn More', link: '/about' }
    },
    {
      id: 'success-gallery',
      title: 'Success Stories',
      subtitle: '500+ Projects Delivered',
      description: 'From government e-governance systems to enterprise solutions, our portfolio showcases successful digital transformations across various sectors.',
      icon: Camera,
      gradient: 'from-emerald-500 to-emerald-600',
      bgImage: 'photo-1488590528505-98d2b5aba04b',
      action: { text: 'View Projects', link: '/projects' }
    },
    {
      id: 'awards',
      title: 'Industry Recognition',
      subtitle: 'Excellence in Technology',
      description: 'Recognized for outstanding contributions to digital transformation with multiple awards for innovation, quality, and customer satisfaction.',
      icon: Trophy,
      gradient: 'from-naya-orange-500 to-naya-orange-600',
      bgImage: 'photo-1581091226825-a6a2a5aee158',
      action: { text: 'Our Achievements', link: '/about' }
    },
    {
      id: 'training',
      title: 'Professional Training',
      subtitle: 'Empower Your Team',
      description: 'Comprehensive training programs on modern technologies, system administration, and digital literacy for government and corporate teams.',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-purple-600',
      bgImage: 'photo-1486312338219-ce68d2c6f44d',
      action: { text: 'Training Programs', link: '/services' }
    },
    {
      id: 'demo',
      title: 'Live Demonstrations',
      subtitle: 'See Solutions in Action',
      description: 'Experience our solutions through interactive demos. See how our systems can streamline your operations and improve efficiency.',
      icon: PlayCircle,
      gradient: 'from-cyan-500 to-cyan-600',
      bgImage: 'photo-1605810230434-7631ac76ec81',
      action: { text: 'Book Demo', link: '/contact' }
    },
    {
      id: 'meeting',
      title: 'Schedule Consultation',
      subtitle: 'Let\'s Discuss Your Needs',
      description: 'Free consultation to understand your requirements and propose the best technology solutions for your organization.',
      icon: Calendar,
      gradient: 'from-pink-500 to-pink-600',
      bgImage: 'photo-1649972904349-6e44c42644a7',
      action: { text: 'Book Meeting', link: '/contact' }
    }
  ];

  const projects = [
    {
      id: 'darta-chalani',
      title: 'Darta Chalani',
      description: 'Official document registration and correspondence tracking system.',
      category: 'Government',
      technologies: ['Java Spring Boot', 'PostgreSQL', 'React'],
      gradient: 'from-naya-blue-500 to-naya-blue-600',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Government', 'Document Management', 'Web Application']
    },
    {
      id: 'vendor-enlisting',
      title: 'Vendor Enlisting',
      description: 'Supplier registration and approval system for procurement processes.',
      category: 'Government',
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js'],
      gradient: 'from-naya-orange-500 to-naya-orange-600',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      tags: ['Government', 'Procurement', 'Vendor Management']
    },
    {
      id: 'loan-management',
      title: 'Loan Management',
      description: 'Full loan application, approval, and repayment tracking system.',
      category: 'Private',
      technologies: ['Python Django', 'PostgreSQL', 'Angular'],
      gradient: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Finance', 'Banking', 'Loan Processing']
    },
    {
      id: 'erp-system',
      title: 'ERP System',
      description: 'Full enterprise resource planning solution for businesses and local governments.',
      category: 'Both',
      technologies: ['Java Spring Boot', 'SQL Server', 'React'],
      gradient: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      tags: ['ERP', 'Enterprise', 'Management']
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Online product management, order processing, and payment solution.',
      category: 'Private',
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js'],
      gradient: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      tags: ['E-commerce', 'Online Shopping', 'Payment Gateway']
    },
    {
      id: 'school-management',
      title: 'School Management',
      description: 'Comprehensive school administration, finance, and academic system.',
      category: 'Private',
      technologies: ['Java Spring Boot', 'MySQL', 'React'],
      gradient: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Education', 'School Management', 'Academic System']
    }
  ];

  const features = [
    {
      icon: Building2,
      title: 'Government Solutions',
      description: 'Specialized e-governance and public service solutions',
      gradient: 'from-naya-blue-500 to-naya-blue-600'
    },
    {
      icon: Users,
      title: 'Private Sector',
      description: 'Enterprise solutions for businesses of all sizes',
      gradient: 'from-naya-orange-500 to-naya-orange-600'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built to your exact requirements',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Robust data management and analytics solutions',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Success Rate', icon: TrendingUp }
  ];

  const techStack = [
    {
      icon: Code,
      name: 'Programming Languages',
      description: 'Java, Python, PHP, JavaScript, SQL'
    },
    {
      icon: Database,
      name: 'Database Management',
      description: 'PostgreSQL, MySQL, SQL Server, MongoDB'
    },
    {
      icon: Globe,
      name: 'Frontend Frameworks',
      description: 'React, Vue.js, Angular, Next.js'
    },
    {
      icon: Shield,
      name: 'Design Tools',
      description: 'Adobe XD, Figma, Sketch'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <TechAnimation />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="glass-effect border border-white/20 text-white mb-6 px-4 py-2">
              {language === 'ne' ? '🚀 नेपालको अग्रणी टेक कम्पनी' : '🚀 Nepal\'s Leading Tech Company'}
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {language === 'ne' ? (
              <>
                <span className="text-gradient">नयाँ कोड</span> मार्फत<br />
                भविष्य निर्माण गर्दै
              </>
            ) : (
              <>
                Building the Future with<br />
                <span className="text-gradient">NayaCode</span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {language === 'ne' 
              ? 'आधुनिक प्रविधि र रचनात्मक समाधानको साथ तपाईंको डिजिटल सपनालाई साकार पार्दै।'
              : 'Transforming your digital dreams into reality with cutting-edge technology and creative solutions.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0">
              {language === 'ne' ? 'हाम्रो सेवा हेर्नुहोस्' : 'Explore Our Services'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/20">
              {language === 'ne' ? 'प्रोजेक्ट हेर्नुहोस्' : 'View Projects'}
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ne' ? 'हाम्रा विशेषताहरू' : 'Our Expertise'}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {language === 'ne' 
                ? 'आधुनिक प्रविधि र रचनात्मक समाधानको साथ तपाईंको व्यवसायलाई अगाडि बढाउने सेवाहरू।'
                : 'Comprehensive solutions to elevate your business with modern technology and creative innovation.'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-hover group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ne' ? 'हाम्रा प्रोजेक्टहरू' : 'Our Projects'}
            </h2>
            <p className="text-xl text-white/70">
              {language === 'ne' 
                ? 'हामीले सफलतापूर्वक सम्पन्न गरेका केही उत्कृष्ट प्रोजेक्टहरू।'
                : 'Showcasing some of our most successful and innovative projects.'
              }
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="glass-effect border border-white/20 overflow-hidden">
                      <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="bg-white/10 text-white">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-white/70 text-lg">{project.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect border-white/30 text-white hover:bg-white/20"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect border-white/30 text-white hover:bg-white/20"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ne' ? 'हाम्रो प्रविधि स्ट्याक' : 'Our Tech Stack'}
            </h2>
            <p className="text-xl text-white/70">
              {language === 'ne' 
                ? 'अत्याधुनिक प्रविधिहरू जसको प्रयोग गरेर हामी उत्कृष्ट समाधान प्रदान गर्छौं।'
                : 'Cutting-edge technologies we use to deliver exceptional solutions.'
              }
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="glass-effect border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 text-white">
                      <IconComponent className="w-10 h-10 mx-auto" />
                    </div>
                    <div className="text-white font-semibold">{tech.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="glass-effect border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ne' ? 'तपाईंको प्रोजेक्ट सुरु गरौं' : 'Let\'s Start Your Project'}
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              {language === 'ne' 
                ? 'तपाईंको डिजिटल सपनालाई साकार पार्न आज नै हामीसँग सम्पर्क गर्नुहोस्।'
                : 'Ready to transform your digital dreams into reality? Let\'s discuss your project today.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0">
                {language === 'ne' ? 'सेवाहरू अन्वेषण गर्नुहोस्' : 'Explore Services'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="glass-effect border-white/30 text-white hover:bg-white/20">
                {language === 'ne' ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
