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
  MessageSquare,
  FileText,
  RefreshCw,
  Zap,
  Eye,
  UserCheck,
  ClipboardCheck,
  BookOpen,
  Handshake,
  ArrowDown
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { t } = useLanguage();

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
      image: 'photo-1554224155-6726b3ff858f',
      tags: ['Government', 'Document Management']
    },
    {
      id: 'vendor-enlisting',
      title: 'Vendor Enlisting',
      description: 'Supplier registration and approval system for procurement processes.',
      category: 'Government',
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js'],
      gradient: 'from-naya-orange-500 to-naya-orange-600',
      image: 'photo-1460925895917-afdab827c52f',
      tags: ['Government', 'Procurement']
    },
    {
      id: 'loan-management',
      title: 'Loan Management',
      description: 'Full loan application, approval, and repayment tracking system.',
      category: 'Private',
      technologies: ['Python Django', 'PostgreSQL', 'Angular'],
      gradient: 'from-purple-500 to-purple-600',
      image: 'photo-1554224154-26032ffc0d30',
      tags: ['Finance', 'Private Sector']
    },
    {
      id: 'erp-system',
      title: 'ERP System',
      description: 'Full enterprise resource planning solution for businesses and local governments.',
      category: 'Both',
      technologies: ['Java Spring Boot', 'SQL Server', 'React'],
      gradient: 'from-emerald-500 to-emerald-600',
      image: 'photo-1551288049-bebda4e38f71',
      tags: ['ERP', 'Enterprise']
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Online product management, order processing, and payment solution.',
      category: 'Private',
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js'],
      gradient: 'from-pink-500 to-pink-600',
      image: 'photo-1556742049-0cfed4f6a45d',
      tags: ['E-commerce', 'Retail']
    },
    {
      id: 'school-management',
      title: 'School Management',
      description: 'Comprehensive school administration, finance, and academic system.',
      category: 'Private',
      technologies: ['Java Spring Boot', 'MySQL', 'React'],
      gradient: 'from-indigo-500 to-indigo-600',
      image: 'photo-1523050854058-8df90110c9f1',
      tags: ['Education', 'Management']
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
      category: 'Backend',
      icon: Globe,
      technologies: ['Java Spring Boot', 'Python Django', 'Python FastAPI', 'PHP Laravel'],
      color: 'text-naya-blue-700'
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
      color: 'text-naya-blue-700'
    },
    {
      category: 'Frontend',
      icon: Shield,
      technologies: ['React', 'Vue.js', 'Angular', 'Next.js'],
      color: 'text-naya-blue-700'
    }
  ];

  const methodology = [
    {
      step: '1',
      title: 'Initial Consultation & Understanding',
      description: 'Multiple sittings to understand the real problem. Build trust and simplify technical terms.',
      icon: MessageSquare,
      gradient: 'from-naya-blue-500 to-naya-blue-600'
    },
    {
      step: '2',
      title: 'Requirement Discovery & Flexible Scoping',
      description: 'Gather requirements in phases. Accept that scope may evolve. Prioritize government compliance and documentation.',
      icon: FileText,
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      step: '3',
      title: 'Iterative Proposal & Approval',
      description: 'Submit step-wise proposals. Get approval on each small milestone. Government clients prefer seeing documents before development.',
      icon: ClipboardCheck,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      step: '4',
      title: 'Module-Based Development (Agile Inspired)',
      description: 'Deliver small, workable modules quickly. Show frequent demos.',
      icon: Zap,
      gradient: 'from-naya-orange-500 to-naya-orange-600'
    },
    {
      step: '5',
      title: 'Client Review & Verbal Feedback',
      description: 'Focus on in-person/virtual meetings. Nepali clients often give feedback verbally instead of written reports.',
      icon: UserCheck,
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      step: '6',
      title: 'Frequent Changes Handling',
      description: 'Prepare for requirement changes even in later stages. Flexibility is key.',
      icon: RefreshCw,
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      step: '7',
      title: 'Progress Reporting & Physical Meetings',
      description: 'Weekly progress reports. Monthly physical meetings if possible.',
      icon: Calendar,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      step: '8',
      title: 'Testing with Client\'s Team',
      description: 'Joint testing with government representatives. Detailed bug fixing sessions.',
      icon: Eye,
      gradient: 'from-red-500 to-red-600'
    },
    {
      step: '9',
      title: 'Training & Capacity Building',
      description: 'Conduct training for government staff. Prepare detailed user manuals in Nepali if needed.',
      icon: BookOpen,
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      step: '10',
      title: 'Approval & Final Handover',
      description: 'Final approval may require multiple handover sessions. Provide long-term support options.',
      icon: Handshake,
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width with Enhanced Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-naya-blue-50 via-white to-naya-orange-50 py-20 w-full">
        <div className="absolute inset-0 bg-hero-pattern opacity-40 animate-pulse"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-naya-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-naya-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-[float_7s_ease-in-out_infinite]"></div>
        </div>

        <div className="w-full px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-naya-blue-600 to-naya-orange-500 animate-fade-in cursor-pointer transition-all duration-500 hover:scale-105 hover:translate-x-2 hover:translate-y-1 hover:from-naya-orange-600 hover:to-naya-blue-500 hover:drop-shadow-2xl">
              Innovative IT Solutions
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700 animate-fade-in animation-delay-200 cursor-pointer transition-all duration-500 hover:scale-105 hover:translate-x-1 hover:translate-y-1 hover:text-naya-blue-600 hover:drop-shadow-lg">
              for Digital Transformation
            </h2>
            
            {/* Full Width Slider with Enhanced Effects and Slide Transitions */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 animate-fade-in animation-delay-400">
              <Carousel className="w-full" opts={{ 
                align: "center", 
                loop: true,
                skipSnaps: false,
                dragFree: false
              }}>
                <CarouselContent className="-ml-1">
                  {carouselSlides.map((slide, index) => (
                    <CarouselItem key={slide.id} className="pl-1 basis-full">
                      <div className="p-1">
                        <div className="relative h-[450px] overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] shadow-2xl">
                          <div 
                            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90 transition-all duration-700 group-hover:opacity-95 group-hover:scale-105`}
                            style={{
                              backgroundImage: `url(https://images.unsplash.com/${slide.bgImage}?auto=format&fit=crop&w=1920&q=80)`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundBlendMode: 'overlay'
                            }}
                          ></div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700"></div>
                          
                          {/* Animated particles with slide effect */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce transition-transform duration-700 group-hover:translate-x-2" style={{animationDelay: '0s'}}></div>
                            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce transition-transform duration-700 group-hover:-translate-x-2" style={{animationDelay: '1s'}}></div>
                            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce transition-transform duration-700 group-hover:translate-y-2" style={{animationDelay: '2s'}}></div>
                          </div>
                          
                          <div className="relative z-10 h-full flex items-center justify-center">
                            <div className="text-center max-w-4xl mx-auto px-8 transform transition-all duration-700 group-hover:scale-105 group-hover:translate-x-2">
                              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-2`}>
                                <slide.icon className="h-10 w-10 text-white transition-all duration-700 group-hover:scale-125" />
                              </div>
                              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white transform transition-all duration-700 group-hover:text-shadow-lg group-hover:translate-x-1">
                                {slide.title}
                              </h1>
                              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90 transform transition-all duration-700 group-hover:translate-x-1">
                                {slide.subtitle}
                              </h2>
                              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 group-hover:translate-y-1">
                                {slide.description}
                              </p>
                              <Button asChild size="lg" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:translate-y-1 border-2 border-white/20">
                                <Link to={slide.action.link} className="flex items-center">
                                  {slide.action.text}
                                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-700 group-hover:translate-x-2" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/40 hover:scale-110 hover:border-white/60 transition-all duration-300 shadow-lg" />
                <CarouselNext className="right-4 bg-white/30 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/40 hover:scale-110 hover:border-white/60 transition-all duration-300 shadow-lg" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Working Methodology Section for Nepali and Government Clients - Updated with Arrow Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Working Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized approach for Nepali and Government clients, built on trust, flexibility, and cultural understanding
            </p>
          </div>
          
          {/* Desktop Flow Layout - Horizontal with Arrows */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {methodology.slice(0, 5).map((step, index) => (
                <React.Fragment key={index}>
                  <div className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <Card className="h-full border border-white/30 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-naya hover:bg-white/80 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                      <CardHeader className="text-center pb-4 bg-white/80 backdrop-blur-sm">
                        <div className="flex flex-col items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border-2 border-white mb-2`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                            {step.step}
                          </div>
                        </div>
                        <CardTitle className="text-sm text-gray-900 group-hover:text-gray-700 transition-colors mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{step.description}</CardDescription>
                      </CardHeader>
                    </Card>
                    {/* Arrow to next step */}
                    {index < 4 && (
                      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-8 w-8 text-naya-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
            
            {/* Center Arrow Down */}
            <div className="flex justify-center mb-8">
              <ArrowDown className="h-12 w-12 text-naya-blue-500 animate-bounce" />
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {methodology.slice(5, 10).map((step, index) => (
                <React.Fragment key={index + 5}>
                  <div className="relative animate-fade-in" style={{animationDelay: `${(index + 5) * 0.1}s`}}>
                    <Card className="h-full border border-white/30 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-naya hover:bg-white/80 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                      <CardHeader className="text-center pb-4 bg-white/80 backdrop-blur-sm">
                        <div className="flex flex-col items-center mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border-2 border-white mb-2`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                            {step.step}
                          </div>
                        </div>
                        <CardTitle className="text-sm text-gray-900 group-hover:text-gray-700 transition-colors mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{step.description}</CardDescription>
                      </CardHeader>
                    </Card>
                    {/* Arrow to next step */}
                    {index < 4 && (
                      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                        <ArrowRight className="h-8 w-8 text-naya-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Flow Layout */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {methodology.map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <Card className="mb-4 border border-white/30 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-naya hover:bg-white/80 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                    <CardHeader className="text-left pb-4 bg-white/80 backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border-2 border-white mr-4`}>
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                          {step.step}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-gray-900 group-hover:text-gray-700 transition-colors mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                {/* Vertical Arrow to next step */}
                {index < methodology.length - 1 && (
                  <div className="flex justify-center mb-4">
                    <ArrowDown className="h-8 w-8 text-naya-blue-500 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Animations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${['from-naya-blue-500 to-naya-blue-600', 'from-naya-orange-500 to-naya-orange-600', 'from-purple-500 to-purple-600', 'from-emerald-500 to-emerald-600'][index]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border-2 border-white`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Glass Effects */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose NayaCode</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive IT solutions with cutting-edge technology and expert teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full border border-white/30 bg-white/60 backdrop-blur-md shadow-2xl hover:shadow-naya hover:bg-white/80 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4 bg-white/80 backdrop-blur-sm">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border-2 border-white`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Glass Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our successful implementations across government and private sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="h-full group hover:shadow-2xl transition-all duration-300 border border-white/30 bg-white/70 backdrop-blur-md hover:bg-white/90 shadow-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={project.category === 'Government' ? 'default' : 'secondary'}
                      className={`${project.category === 'Government' ? 'bg-naya-blue-100 text-naya-blue-700 border-naya-blue-200' : 'bg-naya-orange-100 text-naya-orange-700 border-naya-orange-200'} backdrop-blur-sm`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-naya-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="bg-white/90 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700 bg-white/60 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-naya-blue-50 group-hover:text-naya-blue-700 transition-colors text-gray-900 border border-gray-200 hover:border-naya-blue-200">
                    <Link to={`/project/${project.id}`} className="flex items-center justify-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-hover transition-all duration-300 text-white border-2 border-transparent hover:border-white/20">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack with Glass Effects */}
      <section className="py-20 bg-gradient-to-br from-naya-blue-50 to-naya-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <Card key={index} className="border border-white/30 bg-white/60 backdrop-blur-md shadow-2xl hover:bg-white/80 hover:border-gray-300 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-white/80 backdrop-blur-sm">
                  <CardTitle className="text-center text-naya-blue-700">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white/90 backdrop-blur-sm">
                  <div className="space-y-3">
                    {stack.technologies.map((tech) => (
                      <div key={tech} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-naya-orange-500 mr-3" />
                        <span className="text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project with NayaCode?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 bg-white text-naya-blue-700 hover:bg-gray-100 border-2 border-white hover:border-gray-200 font-semibold">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-naya-blue-700 transition-all duration-300 font-semibold">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
