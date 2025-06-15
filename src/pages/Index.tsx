
import React from 'react';
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
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'darta-chalani',
      title: 'Darta Chalani',
      description: 'Official document registration and correspondence tracking system.',
      category: 'Government',
      technologies: ['Java Spring Boot', 'PostgreSQL', 'React'],
      gradient: 'from-naya-blue-500 to-naya-blue-600'
    },
    {
      id: 'vendor-enlisting',
      title: 'Vendor Enlisting',
      description: 'Supplier registration and approval system for procurement processes.',
      category: 'Government',
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js'],
      gradient: 'from-naya-orange-500 to-naya-orange-600'
    },
    {
      id: 'loan-management',
      title: 'Loan Management',
      description: 'Full loan application, approval, and repayment tracking system.',
      category: 'Private',
      technologies: ['Python Django', 'PostgreSQL', 'Angular'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'erp-system',
      title: 'ERP System',
      description: 'Full enterprise resource planning solution for businesses and local governments.',
      category: 'Both',
      technologies: ['Java Spring Boot', 'SQL Server', 'React'],
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Online product management, order processing, and payment solution.',
      category: 'Private',
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js'],
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      id: 'school-management',
      title: 'School Management',
      description: 'Comprehensive school administration, finance, and academic system.',
      category: 'Private',
      technologies: ['Java Spring Boot', 'MySQL', 'React'],
      gradient: 'from-indigo-500 to-indigo-600'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-naya-blue-50 via-white to-naya-orange-50 py-20">
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-naya-blue-200 mb-6">
              <Sparkles className="h-4 w-4 text-naya-orange-500 mr-2" />
              <span className="text-sm font-medium text-naya-blue-700">Leading IT Solutions Provider</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">{t('home.title')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-primary hover:shadow-hover transition-all duration-300">
                <Link to="/contact">{t('home.cta')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 border-naya-blue-300 hover:bg-naya-blue-50">
                <Link to="/about">{t('home.learn_more')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${features[index % features.length].gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive IT solutions with cutting-edge technology and expert teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full border-0 shadow-card hover:shadow-hover transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
              <Card key={project.id} className="h-full group hover:shadow-naya transition-all duration-300 border-0 shadow-card overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant={project.category === 'Government' ? 'default' : 'secondary'}
                      className={project.category === 'Government' ? 'bg-naya-blue-100 text-naya-blue-700' : 'bg-naya-orange-100 text-naya-orange-700'}
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
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-200 text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-naya-blue-50 group-hover:text-naya-blue-700 transition-colors">
                    <Link to={`/project/${project.id}`} className="flex items-center justify-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-hover transition-all duration-300">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-naya-blue-50 to-naya-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-naya-blue-700">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Java Spring Boot', 'Python Django', 'Python FastAPI', 'PHP Laravel'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-naya-orange-500 mr-3" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-naya-blue-700">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-naya-orange-500 mr-3" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-naya-blue-700">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['React', 'Vue.js', 'Angular', 'Next.js'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-naya-orange-500 mr-3" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 bg-white text-naya-blue-700 hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
