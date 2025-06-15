
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Shield,
  Lightbulb,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Mission = () => {
  const { t, language } = useLanguage();

  const missionData = {
    vision: {
      title: language === 'ne' ? 'हाम्रो दृष्टिकोण' : 'Our Vision',
      description: language === 'ne' 
        ? 'नेपालमा IT क्षेत्रको अग्रणी कम्पनी बनेर सरकारी र निजी क्षेत्रलाई आधुनिक प्रविधिको माध्यमबाट सशक्त बनाउने।'
        : 'To be the leading IT company in Nepal, empowering government and private sectors through modern technology solutions.',
      icon: Eye
    },
    mission: {
      title: language === 'ne' ? 'हाम्रो मिसन' : 'Our Mission',
      description: language === 'ne'
        ? 'गुणस्तरीय, भरपर्दो र नवाचारयुक्त IT समाधानहरू प्रदान गरेर ग्राहकहरूको व्यापारिक लक्ष्य हासिल गर्न सहयोग गर्ने।'
        : 'To provide quality, reliable, and innovative IT solutions that help our clients achieve their business objectives.',
      icon: Target
    },
    values: [
      {
        title: language === 'ne' ? 'गुणस्तर' : 'Quality',
        description: language === 'ne' 
          ? 'हामी सधैं उच्च गुणस्तरका समाधान प्रदान गर्छौं।'
          : 'We always deliver high-quality solutions.',
        icon: Award
      },
      {
        title: language === 'ne' ? 'भरपर्दोता' : 'Reliability',
        description: language === 'ne'
          ? 'हाम्रा ग्राहकहरूले हामीमाथि भर पर्न सक्छन्।'
          : 'Our clients can always rely on us.',
        icon: Shield
      },
      {
        title: language === 'ne' ? 'नवाचार' : 'Innovation',
        description: language === 'ne'
          ? 'हामी नयाँ प्रविधि र समाधानमा लगानी गर्छौं।'
          : 'We invest in new technologies and solutions.',
        icon: Lightbulb
      },
      {
        title: language === 'ne' ? 'ग्राहक सेवा' : 'Customer Service',
        description: language === 'ne'
          ? 'ग्राहकको सन्तुष्टि हाम्रो प्राथमिकता हो।'
          : 'Customer satisfaction is our priority.',
        icon: Heart
      }
    ],
    objectives: [
      {
        title: language === 'ne' ? 'डिजिटल नेपाल निर्माण' : 'Building Digital Nepal',
        description: language === 'ne'
          ? 'सरकारी सेवाहरूलाई डिजिटल बनाएर नागरिकहरूको जीवन सहज बनाउने।'
          : 'Making citizens\' lives easier by digitalizing government services.',
        achievements: [
          language === 'ne' ? '५० भन्दा बढी सरकारी परियोजना सम्पन्न' : '50+ government projects completed',
          language === 'ne' ? '१०० भन्दा बढी सरकारी कार्यालयमा सेवा' : 'Services in 100+ government offices',
          language === 'ne' ? '५ लाख भन्दा बढी प्रयोगकर्ता' : '500,000+ users served'
        ]
      },
      {
        title: language === 'ne' ? 'निजी क्षेत्रको सशक्तिकरण' : 'Private Sector Empowerment',
        description: language === 'ne'
          ? 'व्यापारिक संस्थानहरूलाई आधुनिक प्रविधिको माध्यमबाट प्रतिस्पर्धी बनाउने।'
          : 'Making businesses competitive through modern technology.',
        achievements: [
          language === 'ne' ? '२०० भन्दा बढी निजी कम्पनीलाई सेवा' : '200+ private companies served',
          language === 'ne' ? '९०% ग्राहक सन्तुष्टि दर' : '90% customer satisfaction rate',
          language === 'ne' ? '२४/७ तकनिकी सहयोग' : '24/7 technical support'
        ]
      },
      {
        title: language === 'ne' ? 'तकनिकी उत्कृष्टता' : 'Technical Excellence',
        description: language === 'ne'
          ? 'अत्याधुनिक प्रविधि र उत्कृष्ट टिमको साथ समाधान प्रदान गर्ने।'
          : 'Providing solutions with cutting-edge technology and excellent teams.',
        achievements: [
          language === 'ne' ? '५० भन्दा बढी दक्ष इन्जिनियर' : '50+ skilled engineers',
          language === 'ne' ? '१५+ वर्षको अनुभव' : '15+ years of experience',
          language === 'ne' ? '१०+ आधुनिक प्रविधिमा विशेषज्ञता' : 'Expertise in 10+ modern technologies'
        ]
      }
    ],
    socialImpact: {
      title: language === 'ne' ? 'सामाजिक प्रभाव' : 'Social Impact',
      description: language === 'ne'
        ? 'हाम्रो काम समाजमा सकारात्मक प्रभाव पार्छ।'
        : 'Our work creates positive impact in society.',
      impacts: [
        {
          metric: language === 'ne' ? '१० लाख+' : '1M+',
          description: language === 'ne' ? 'नागरिकहरूको जीवनमा सुधार' : 'Citizens\' lives improved'
        },
        {
          metric: language === 'ne' ? '७५%' : '75%',
          description: language === 'ne' ? 'कागजी कामको कमी' : 'Reduction in paperwork'
        },
        {
          metric: language === 'ne' ? '९०%' : '90%',
          description: language === 'ne' ? 'समय बचत' : 'Time savings'
        },
        {
          metric: language === 'ne' ? '१००%' : '100%',
          description: language === 'ne' ? 'पारदर्शिता वृद्धि' : 'Transparency increase'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ne' ? 'हाम्रो मिसन र दृष्टिकोण' : 'Our Mission & Vision'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ne' 
              ? 'नेपालको IT क्षेत्रमा नयाँ आयाम थप्दै डिजिटल नेपाल निर्माणमा योगदान'
              : 'Contributing to Digital Nepal by adding new dimensions to Nepal\'s IT sector'
            }
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="text-center">
              <missionData.vision.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">{missionData.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                {missionData.vision.description}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader className="text-center">
              <missionData.mission.icon className="h-16 w-16 mx-auto mb-4 text-secondary" />
              <CardTitle className="text-2xl">{missionData.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                {missionData.mission.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'ne' ? 'हाम्रा मूल्यहरू' : 'Our Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionData.values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'ne' ? 'हाम्रा उद्देश्यहरू' : 'Our Objectives'}
          </h2>
          <div className="space-y-8">
            {missionData.objectives.map((objective, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <ArrowRight className="h-6 w-6 mr-3 text-primary" />
                    {objective.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {objective.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {objective.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center p-4 bg-muted/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <CardHeader className="text-center">
            <Globe className="h-16 w-16 mx-auto mb-4 text-green-600" />
            <CardTitle className="text-3xl">{missionData.socialImpact.title}</CardTitle>
            <CardDescription className="text-lg">
              {missionData.socialImpact.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {missionData.socialImpact.impacts.map((impact, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {impact.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mission;
