
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, Code, Database, Shield, Globe, Star, Award, CheckCircle, Quote, TrendingUp, Clock, Users2 } from 'lucide-react';

const Services = () => {
  const { t, language } = useLanguage();

  const governmentServices = [
    {
      title: language === 'ne' ? 'ई-गभर्नेन्स समाधान' : 'E-Governance Solutions',
      description: language === 'ne' ? 'सरकारी सेवाहरूको डिजिटल रूपान्तरण' : 'Digital transformation of government services',
      icon: Building2,
      technologies: ['Java Spring Boot', 'PostgreSQL', 'React'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: language === 'ne' ? 'नागरिक सेवा पोर्टल' : 'Citizen Service Portals',
      description: language === 'ne' ? 'सार्वजनिक सेवा प्रदानका लागि अनलाइन पोर्टल' : 'Online portals for public service delivery',
      icon: Users,
      technologies: ['PHP Laravel', 'MySQL', 'Vue.js'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: language === 'ne' ? 'कागजात व्यवस्थापन प्रणाली' : 'Document Management Systems',
      description: language === 'ne' ? 'सुरक्षित कागजात ह्यान्डलिङ र वर्कफ्लो व्यवस्थापन' : 'Secure document handling and workflow management',
      icon: Shield,
      technologies: ['Python Django', 'PostgreSQL', 'Angular'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const privateServices = [
    {
      title: language === 'ne' ? 'एन्टरप्राइज रिसोर्स प्लानिङ' : 'Enterprise Resource Planning',
      description: language === 'ne' ? 'पूर्ण व्यापारिक व्यवस्थापन समाधान' : 'Complete business management solutions',
      icon: Database,
      technologies: ['Java Spring Boot', 'SQL Server', 'React'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: language === 'ne' ? 'ई-कमर्स प्लेटफर्म' : 'E-commerce Platforms',
      description: language === 'ne' ? 'अनलाइन व्यापार र बजार समाधान' : 'Online business and marketplace solutions',
      icon: Globe,
      technologies: ['Python FastAPI', 'PostgreSQL', 'Next.js'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: language === 'ne' ? 'कस्टम सफ्टवेयर विकास' : 'Custom Software Development',
      description: language === 'ne' ? 'विशिष्ट व्यापारिक आवश्यकताका लागि समाधान' : 'Tailored solutions for specific business needs',
      icon: Code,
      technologies: ['Multiple Stacks', 'Cloud Native', 'API First'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const successStats = [
    {
      number: '500+',
      label: language === 'ne' ? 'सफल परियोजनाहरू' : 'Successful Projects',
      icon: TrendingUp
    },
    {
      number: '15+',
      label: language === 'ne' ? 'वर्षको अनुभव' : 'Years Experience',
      icon: Clock
    },
    {
      number: '200+',
      label: language === 'ne' ? 'खुसी ग्राहकहरू' : 'Happy Clients',
      icon: Users2
    },
    {
      number: '99%',
      label: language === 'ne' ? 'ग्राहक सन्तुष्टि' : 'Client Satisfaction',
      icon: Star
    }
  ];

  const testimonials = [
    {
      name: language === 'ne' ? 'राम कुमार श्रेष्ठ' : 'Ram Kumar Shrestha',
      position: language === 'ne' ? 'IT प्रमुख, स्थानीय सरकार' : 'IT Head, Local Government',
      content: language === 'ne' 
        ? 'हाम्रो कार्यालयको सम्पूर्ण कामकाज डिजिटल बनाउन मद्दत गर्नुभयो। अब नागरिकहरूले घरबाटै सेवा लिन सक्छन्।'
        : 'They helped digitize our entire office workflow. Now citizens can access services from home.',
      rating: 5
    },
    {
      name: language === 'ne' ? 'सुनिता गुरुङ' : 'Sunita Gurung',
      position: language === 'ne' ? 'व्यापार मालिक' : 'Business Owner',
      content: language === 'ne'
        ? 'हाम्रो व्यापारका लागि बनाएको ERP सिस्टमले सबै कुरा सजिलो बनायो। अब सबै काम एकै ठाउँमा गर्न सकिन्छ।'
        : 'The ERP system built for our business simplified everything. Now we can manage all operations in one place.',
      rating: 5
    },
    {
      name: language === 'ne' ? 'डा. प्रमोद खनाल' : 'Dr. Pramod Khanal',
      position: language === 'ne' ? 'अस्पताल प्रशासक' : 'Hospital Administrator',
      content: language === 'ne'
        ? 'हास्पिटल म्यानेजमेन्ट सिस्टमले बिरामीहरूको रेकर्ड राख्न र अपोइन्टमेन्ट बुकिङ गर्न धेरै सहज भयो।'
        : 'The hospital management system made patient records and appointment booking very convenient.',
      rating: 5
    }
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: language === 'ne' ? 'गुणस्तर व्यवस्थापन प्रणाली' : 'Quality Management System',
      icon: Award
    },
    {
      title: 'ISO 27001',
      description: language === 'ne' ? 'सूचना सुरक्षा व्यवस्थापन' : 'Information Security Management',
      icon: Shield
    },
    {
      title: 'CMMI Level 3',
      description: language === 'ne' ? 'सफ्टवेयर विकास परिपक्वता' : 'Software Development Maturity',
      icon: Star
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
      <CardHeader className="pb-4">
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.technologies.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="bg-muted/50">{tech}</Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full">
          {language === 'ne' ? 'थप जान्नुहोस्' : 'Learn More'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'ne' ? 'हाम्रा सेवाहरू' : 'Our Services'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'ne' 
                ? 'सरकारी र निजी दुवै क्षेत्रका लागि व्यापक IT समाधानहरू'
                : 'Comprehensive IT solutions for both government and private sector'
              }
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {successStats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Government Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">
                {language === 'ne' ? 'सरकारी सेवाहरू' : 'Government Services'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ne' 
                  ? 'डिजिटल रूपान्तरणको माध्यमबाट सार्वजनिक सेवाहरूको आधुनिकीकरण'
                  : 'Modernizing public services through digital transformation'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governmentServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Private Sector Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-green-900 dark:text-green-100">
                {language === 'ne' ? 'निजी क्षेत्रका सेवाहरू' : 'Private Sector Services'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ne'
                  ? 'अत्याधुनिक प्रविधि समाधानहरूको साथ व्यापारहरूलाई सशक्त बनाउने'
                  : 'Empowering businesses with cutting-edge technology solutions'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privateServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'ne' ? 'ग्राहकहरूको मत' : 'Client Testimonials'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ne' ? 'हाम्रा ग्राहकहरूले के भन्छन्' : 'What our clients say about us'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-yellow-500 mb-4" />
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'ne' ? 'प्रमाणपत्रहरू' : 'Certifications'}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === 'ne' ? 'हाम्रो गुणस्तर र मापदण्डको प्रमाण' : 'Proof of our quality and standards'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-8">
                    <cert.icon className="h-16 w-16 mx-auto mb-4 text-green-600" />
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">
                {language === 'ne' ? 'हाम्रो सहयोग प्रक्रिया' : 'Our Collaboration Process'}
              </CardTitle>
              <CardDescription className="text-lg">
                {language === 'ne' 
                  ? 'आवश्यकता संकलनदेखि परियोजना सम्पन्न सम्म हामी कसरी ग्राहकहरूसँग काम गर्छौं'
                  : 'How we work with clients from requirement gathering to project completion'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '1',
                    title: language === 'ne' ? 'खोज' : 'Discovery',
                    description: language === 'ne' ? 'तपाईंको आवश्यकता र चुनौतीहरू बुझ्ने' : 'Understanding your requirements and challenges'
                  },
                  {
                    step: '2', 
                    title: language === 'ne' ? 'योजना' : 'Planning',
                    description: language === 'ne' ? 'समाधान संरचना र समयतालिका डिजाइन गर्ने' : 'Designing the solution architecture and timeline'
                  },
                  {
                    step: '3',
                    title: language === 'ne' ? 'विकास' : 'Development', 
                    description: language === 'ne' ? 'समाधान निर्माण र परीक्षण गर्ने' : 'Building and testing the solution iteratively'
                  },
                  {
                    step: '4',
                    title: language === 'ne' ? 'डेलिभरी' : 'Delivery',
                    description: language === 'ne' ? 'डिप्लोयमेन्ट, तालिम र निरन्तर सहयोग' : 'Deployment, training, and ongoing support'
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                      {process.step}
                    </div>
                    <h4 className="font-semibold mb-2 text-lg">{process.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
