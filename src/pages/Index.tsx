
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
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'darta-chalani',
      title: 'Darta Chalani',
      description: 'Official document registration and correspondence tracking system.',
      category: 'Government',
      technologies: ['Java Spring Boot', 'PostgreSQL', 'React']
    },
    {
      id: 'vendor-enlisting',
      title: 'Vendor Enlisting',
      description: 'Supplier registration and approval system for procurement processes.',
      category: 'Government',
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js']
    },
    {
      id: 'loan-management',
      title: 'Loan Management',
      description: 'Full loan application, approval, and repayment tracking system.',
      category: 'Private',
      technologies: ['Python Django', 'PostgreSQL', 'Angular']
    },
    {
      id: 'erp-system',
      title: 'ERP System',
      description: 'Full enterprise resource planning solution for businesses and local governments.',
      category: 'Both',
      technologies: ['Java Spring Boot', 'SQL Server', 'React']
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Online product management, order processing, and payment solution.',
      category: 'Private',
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js']
    },
    {
      id: 'school-management',
      title: 'School Management',
      description: 'Comprehensive school administration, finance, and academic system.',
      category: 'Private',
      technologies: ['Java Spring Boot', 'MySQL', 'React']
    }
  ];

  const features = [
    {
      icon: Building2,
      title: 'Government Solutions',
      description: 'Specialized e-governance and public service solutions'
    },
    {
      icon: Users,
      title: 'Private Sector',
      description: 'Enterprise solutions for businesses of all sizes'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built to your exact requirements'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Robust data management and analytics solutions'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: Globe,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t('home.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">{t('home.cta')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/about">{t('home.learn_more')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive IT solutions with cutting-edge technology and expert teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our successful implementations across government and private sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.category === 'Government' ? 'default' : 'secondary'}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={`/project/${project.id}`} className="flex items-center justify-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use modern, proven technologies to build scalable and maintainable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Java Spring Boot', 'Python Django', 'Python FastAPI', 'PHP Laravel'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['React', 'Vue.js', 'Angular', 'Next.js'].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
