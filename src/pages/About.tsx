
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'राज कुमार शर्मा',
      role: 'Project Director',
      expertise: 'Government IT Solutions, System Architecture',
      experience: '15+ years'
    },
    {
      name: 'सीता देवी पौडेल',
      role: 'Technical Lead',
      expertise: 'Full Stack Development, Database Design',
      experience: '12+ years'
    },
    {
      name: 'अमित थापा',
      role: 'Project Manager',
      expertise: 'Agile Methodology, Client Relations',
      experience: '10+ years'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('about.description')}
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle>50+</CardTitle>
              <CardDescription>Team Members</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle>200+</CardTitle>
              <CardDescription>Projects Completed</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle>98%</CardTitle>
              <CardDescription>Client Satisfaction</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Lightbulb className="h-8 w-8 mx-auto mb-2 text-primary" />
              <CardTitle>15+</CardTitle>
              <CardDescription>Years Experience</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>
              We use cutting-edge technologies to deliver robust solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Backend Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java Spring Boot</Badge>
                  <Badge variant="secondary">Python Django</Badge>
                  <Badge variant="secondary">Python FastAPI</Badge>
                  <Badge variant="secondary">PHP Laravel</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">SQL Server</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle>Our Success Moments</CardTitle>
            <CardDescription>
              Celebrating achievements with our clients and teams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Digital Nepal Initiative</h4>
                <p className="text-muted-foreground">
                  Successfully implemented e-governance solutions for 50+ government offices,
                  improving service delivery by 300%.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Banking Sector Transformation</h4>
                <p className="text-muted-foreground">
                  Delivered core banking solutions for 15+ financial institutions,
                  processing over 1M transactions daily.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Educational Revolution</h4>
                <p className="text-muted-foreground">
                  Implemented school management systems in 200+ educational institutions
                  across Nepal, benefiting 100,000+ students.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
