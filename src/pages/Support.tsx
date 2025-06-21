
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Headphones,
  Bug,
  Settings,
  BookOpen,
  AlertTriangle,
  Calendar
} from 'lucide-react';

const Support = () => {
  const { language } = useLanguage();

  const supportTypes = [
    {
      id: 'emergency',
      title: language === 'ne' ? 'आपतकालीन सहायता' : 'Emergency Support',
      description: language === 'ne' 
        ? 'गम्भीर सिस्टम समस्याहरूको लागि 24/7 उपलब्ध'
        : 'Available 24/7 for critical system issues',
      icon: AlertTriangle,
      color: 'bg-red-500',
      responseTime: language === 'ne' ? '30 मिनेट भित्र' : 'Within 30 minutes',
      availability: '24/7',
      contact: '+977-1234567890'
    },
    {
      id: 'technical',
      title: language === 'ne' ? 'प्राविधिक सहायता' : 'Technical Support',
      description: language === 'ne'
        ? 'बग फिक्स, सिस्टम अपडेट, र प्राविधिक समस्याहरू'
        : 'Bug fixes, system updates, and technical issues',
      icon: Settings,
      color: 'bg-blue-500',
      responseTime: language === 'ne' ? '2-4 घण्टा भित्र' : 'Within 2-4 hours',
      availability: language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM',
      contact: 'tech@nayacode.com'
    },
    {
      id: 'general',
      title: language === 'ne' ? 'सामान्य सहायता' : 'General Support',
      description: language === 'ne'
        ? 'सामान्य प्रश्न, उपयोग गाइड, र सामान्य सहायता'
        : 'General questions, usage guides, and general assistance',
      icon: Headphones,
      color: 'bg-green-500',
      responseTime: language === 'ne' ? '4-8 घण्टा भित्र' : 'Within 4-8 hours',
      availability: language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM',
      contact: 'support@nayacode.com'
    },
    {
      id: 'training',
      title: language === 'ne' ? 'तालिम सहायता' : 'Training Support',
      description: language === 'ne'
        ? 'प्रयोगकर्ता तालिम, डकुमेन्टेसन, र सिकाइ सामग्री'
        : 'User training, documentation, and learning materials',
      icon: BookOpen,
      color: 'bg-purple-500',
      responseTime: language === 'ne' ? '1-2 दिन भित्र' : 'Within 1-2 days',
      availability: language === 'ne' ? 'नियुक्ति अनुसार' : 'By appointment',
      contact: 'training@nayacode.com'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: language === 'ne' ? 'वरिष्ठ प्राविधिक सहयोग प्रबन्धक' : 'Senior Technical Support Manager',
      expertise: ['Java Spring Boot', 'PostgreSQL', 'System Architecture'],
      availability: language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM',
      languages: ['English', 'नेपाली'],
      experience: '8+ years',
      contact: 'rajesh@nayacode.com'
    },
    {
      name: 'Priya Thapa',
      role: language === 'ne' ? 'फ्रन्टएन्ड सहयोग विशेषज्ञ' : 'Frontend Support Specialist',
      expertise: ['React', 'Angular', 'UI/UX Issues'],
      availability: language === 'ne' ? 'आइत-शुक्र 10 AM - 7 PM' : 'Sun-Fri 10 AM - 7 PM',
      languages: ['English', 'नेपाली'],
      experience: '5+ years',
      contact: 'priya@nayacode.com'
    },
    {
      name: 'Amit Gurung',
      role: language === 'ne' ? 'डाटाबेस सहयोग विशेषज्ञ' : 'Database Support Specialist',
      expertise: ['MySQL', 'PostgreSQL', 'Data Migration'],
      availability: language === 'ne' ? 'सोम-शनि 8 AM - 5 PM' : 'Mon-Sat 8 AM - 5 PM',
      languages: ['English', 'नेपाली'],
      experience: '6+ years',
      contact: 'amit@nayacode.com'
    },
    {
      name: 'Sita Rai',
      role: language === 'ne' ? 'ग्राहक सहयोग प्रतिनिधि' : 'Customer Support Representative',
      expertise: ['User Training', 'Documentation', 'General Support'],
      availability: language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM',
      languages: ['English', 'नेपाली', 'हिन्दी'],
      experience: '4+ years',
      contact: 'sita@nayacode.com'
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: language === 'ne' ? 'छिटो प्रतिक्रिया समय' : 'Fast Response Time',
      description: language === 'ne' 
        ? 'आपतकालीन मुद्दाहरूको लागि 30 मिनेट भित्र प्रतिक्रिया'
        : '30-minute response for emergency issues'
    },
    {
      icon: Shield,
      title: language === 'ne' ? '24/7 निगरानी' : '24/7 Monitoring',
      description: language === 'ne'
        ? 'निरन्तर सिस्टम निगरानी र proactive support'
        : 'Continuous system monitoring and proactive support'
    },
    {
      icon: Users,
      title: language === 'ne' ? 'विशेषज्ञ टोली' : 'Expert Team',
      description: language === 'ne'
        ? 'अनुभवी डेभलपरहरू र सहयोग विशेषज्ञहरू'
        : 'Experienced developers and support specialists'
    },
    {
      icon: Zap,
      title: language === 'ne' ? 'त्वरित समाधान' : 'Quick Resolution',
      description: language === 'ne'
        ? 'प्रभावकारी समस्या समाधान र समाधान'
        : 'Efficient problem diagnosis and resolution'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ne' ? 'सहायता सेवा' : 'Support Services'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ne' 
              ? 'हामी तपाईंको सफ्टवेयर समाधानहरूलाई सधैं सक्रिय र प्रभावकारी राख्न प्रतिबद्ध छौं'
              : 'We are committed to keeping your software solutions always active and efficient'
            }
          </p>
        </div>

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Support Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'ne' ? 'सहायताका प्रकारहरू' : 'Types of Support'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTypes.map((support) => (
              <Card key={support.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${support.color} text-white`}>
                      <support.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{support.title}</CardTitle>
                      <CardDescription>{support.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <strong>{language === 'ne' ? 'प्रतिक्रिया समय:' : 'Response Time:'}</strong> {support.responseTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <strong>{language === 'ne' ? 'उपलब्धता:' : 'Availability:'}</strong> {support.availability}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      <strong>{language === 'ne' ? 'सम्पर्क:' : 'Contact:'}</strong> {support.contact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'ne' ? 'हाम्रो सहायता टोली' : 'Our Support Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      {language === 'ne' ? 'विशेषज्ञता:' : 'Expertise:'}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{member.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      <span>{member.contact}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      {language === 'ne' ? 'भाषाहरू:' : 'Languages:'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {member.languages.join(', ')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              {language === 'ne' ? 'सम्पर्क जानकारी' : 'Contact Information'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'ne' ? 'आपतकालीन हटलाइन' : 'Emergency Hotline'}
                </h4>
                <p className="text-muted-foreground">+977-1234567890</p>
                <p className="text-sm text-muted-foreground">24/7 Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'ne' ? 'इमेल सहायता' : 'Email Support'}
                </h4>
                <p className="text-muted-foreground">support@nayacode.com</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">
                  {language === 'ne' ? 'तत्काल च्याट' : 'Live Chat'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'ne' ? 'वेबसाइटमा उपलब्ध' : 'Available on website'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
