
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Code, Database, Shield, Globe } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const governmentServices = [
    {
      title: 'E-Governance Solutions',
      description: 'Digital transformation of government services',
      icon: Building2,
      technologies: ['Java Spring Boot', 'PostgreSQL', 'React']
    },
    {
      title: 'Citizen Service Portals',
      description: 'Online portals for public service delivery',
      icon: Users,
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js']
    },
    {
      title: 'Document Management Systems',
      description: 'Secure document handling and workflow management',
      icon: Shield,
      technologies: ['Python Django', 'PostgreSQL', 'Angular']
    }
  ];

  const privateServices = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Complete business management solutions',
      icon: Database,
      technologies: ['Java Spring Boot', 'SQL Server', 'React']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Online business and marketplace solutions',
      icon: Globe,
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js']
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions for specific business needs',
      icon: Code,
      technologies: ['Multiple Stacks', 'Cloud Native', 'API First']
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="h-full">
      <CardHeader>
        <service.icon className="h-8 w-8 text-primary mb-2" />
        <CardTitle className="text-lg">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT solutions for both government and private sector
          </p>
        </div>

        {/* Government Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('services.government')}</h2>
            <p className="text-muted-foreground">
              Modernizing public services through digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Private Sector Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t('services.private')}</h2>
            <p className="text-muted-foreground">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Our Collaboration Process</CardTitle>
            <CardDescription>
              How we work with clients from requirement gathering to project completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Discovery</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding your requirements and challenges
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Designing the solution architecture and timeline
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building and testing the solution iteratively
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Deployment, training, and ongoing support
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
