
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Search, 
  Code, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Zap,
  HelpCircle,
  Database,
  Globe
} from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'general',
      title: language === 'ne' ? 'सामान्य प्रश्नहरू' : 'General Questions',
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800',
      faqs: [
        {
          question: language === 'ne' ? 'NayaCode कस्तो कम्पनी हो?' : 'What kind of company is NayaCode?',
          answer: language === 'ne' 
            ? 'NayaCode एक IT समाधान कम्पनी हो जसले सरकारी र निजी क्षेत्रका लागि कस्टम सफ्टवेयर समाधानहरू प्रदान गर्छ। हामी Java Spring Boot, Python Django, PHP Laravel, र आधुनिक frontend प्रविधिहरूमा विशेषज्ञता राख्छौं।'
            : 'NayaCode is an IT solutions company that provides custom software solutions for government and private sectors. We specialize in Java Spring Boot, Python Django, PHP Laravel, and modern frontend technologies.'
        },
        {
          question: language === 'ne' ? 'तपाईंहरूको मुख्य सेवाहरू के के हुन्?' : 'What are your main services?',
          answer: language === 'ne'
            ? 'हाम्रा मुख्य सेवाहरूमा सरकारी सिस्टम डेभलपमेन्ट, निजी व्यापारिक समाधानहरू, डाटाबेस डिजाइन, सिस्टम एकीकरण, र कस्टम वेब एप्लिकेसन विकास समावेश छ।'
            : 'Our main services include government system development, private business solutions, database design, system integration, and custom web application development.'
        },
        {
          question: language === 'ne' ? 'के तपाईंहरू दूरदराजका ग्राहकहरूसँग काम गर्छौं?' : 'Do you work with remote clients?',
          answer: language === 'ne'
            ? 'हो, हामी नेपाल भित्र र बाहिर दुबै ठाउँका ग्राहकहरूसँग काम गर्छौं। हाम्रो टोलीसँग रिमोट प्रोजेक्ट व्यवस्थापन र सहयोगको राम्रो अनुभव छ।'
            : 'Yes, we work with clients both within and outside Nepal. Our team has extensive experience in remote project management and collaboration.'
        }
      ]
    },
    {
      id: 'technical',
      title: language === 'ne' ? 'प्राविधिक प्रश्नहरू' : 'Technical Questions',
      icon: Code,
      color: 'bg-green-100 text-green-800',
      faqs: [
        {
          question: language === 'ne' ? 'तपाईंहरू कुन प्रविधिहरू प्रयोग गर्छौं?' : 'What technologies do you use?',
          answer: language === 'ne'
            ? 'Backend: Java Spring Boot, Python Django, PHP Laravel, Node.js; Frontend: React, Angular, Vue.js; Database: PostgreSQL, MySQL, Oracle; अन्य: Docker, AWS, Git, REST APIs'
            : 'Backend: Java Spring Boot, Python Django, PHP Laravel, Node.js; Frontend: React, Angular, Vue.js; Database: PostgreSQL, MySQL, Oracle; Others: Docker, AWS, Git, REST APIs'
        },
        {
          question: language === 'ne' ? 'के तपाईंहरूले मोबाइल एप विकास गर्छौं?' : 'Do you develop mobile applications?',
          answer: language === 'ne'
            ? 'हामी मुख्यतः वेब एप्लिकेसनमा केन्द्रित छौं तर Progressive Web Apps (PWA) र responsive डिजाइनको माध्यमबाट मोबाइल-फ्रेन्डली समाधानहरू प्रदान गर्छौं।'
            : 'We primarily focus on web applications but provide mobile-friendly solutions through Progressive Web Apps (PWA) and responsive design approaches.'
        },
        {
          question: language === 'ne' ? 'डाटाबेस माइग्रेसन सेवा छ?' : 'Do you provide database migration services?',
          answer: language === 'ne'
            ? 'हो, हामी legacy सिस्टमबाट आधुनिक डाटाबेसमा डाटा माइग्रेसन सेवा प्रदान गर्छौं। यसमा डाटा सफाई, रूपान्तरण, र integrity जाँच समावेश छ।'
            : 'Yes, we provide data migration services from legacy systems to modern databases. This includes data cleaning, transformation, and integrity checking.'
        }
      ]
    },
    {
      id: 'project',
      title: language === 'ne' ? 'प्रोजेक्ट सम्बन्धी' : 'Project Related',
      icon: Clock,
      color: 'bg-purple-100 text-purple-800',
      faqs: [
        {
          question: language === 'ne' ? 'एक सामान्य प्रोजेक्ट कति समयमा सकिन्छ?' : 'How long does a typical project take?',
          answer: language === 'ne'
            ? 'प्रोजेक्टको जटिलतामा निर्भर गर्दै: साधारण वेबसाइट (2-4 हप्ता), व्यापारिक सिस्टम (2-4 महिना), सरकारी सिस्टम (3-8 महिना)। हामी विस्तृत timeline प्लानिङ गर्छौं।'
            : 'Depending on project complexity: Simple websites (2-4 weeks), Business systems (2-4 months), Government systems (3-8 months). We provide detailed timeline planning.'
        },
        {
          question: language === 'ne' ? 'प्रोजेक्ट सुरु गर्न के के चाहिन्छ?' : 'What is required to start a project?',
          answer: language === 'ne'
            ? 'आवश्यकताहरूको स्पष्ट विवरण, लक्षित उपयोगकर्ताहरूको जानकारी, budget range, र timeline expectations। हामी निःशुल्क परामर्श र प्रारम्भिक विश्लेषण प्रदान गर्छौं।'
            : 'Clear requirements description, target user information, budget range, and timeline expectations. We provide free consultation and initial analysis.'
        },
        {
          question: language === 'ne' ? 'के agile methodology प्रयोग गर्छौं?' : 'Do you use agile methodology?',
          answer: language === 'ne'
            ? 'हो, हामी agile/scrum methodology प्रयोग गर्छौं जसमा नियमित स्प्रिन्ट, daily standups, र ग्राहकसँग निरन्तर सञ्चार समावेश छ।'
            : 'Yes, we use agile/scrum methodology with regular sprints, daily standups, and continuous client communication.'
        }
      ]
    },
    {
      id: 'pricing',
      title: language === 'ne' ? 'मूल्य निर्धारण' : 'Pricing',
      icon: DollarSign,
      color: 'bg-yellow-100 text-yellow-800',
      faqs: [
        {
          question: language === 'ne' ? 'तपाईंहरूको pricing model कस्तो छ?' : 'What is your pricing model?',
          answer: language === 'ne'
            ? 'हाम्रो pricing project scope, complexity, र timeline मा आधारित छ। हामी fixed-price र time-based दुबै मोडेल प्रदान गर्छौं। निःशुल्क estimate दिन्छौं।'
            : 'Our pricing is based on project scope, complexity, and timeline. We offer both fixed-price and time-based models. Free estimates provided.'
        },
        {
          question: language === 'ne' ? 'भुक्तानी कसरी गर्ने?' : 'How do payments work?',
          answer: language === 'ne'
            ? 'सामान्यतः 30% advance, 40% development milestone मा, र 30% delivery पछि। बैंक ट्रान्सफर, चेक, र अनलाइन भुक्तानी स्वीकार गर्छौं।'
            : 'Typically 30% advance, 40% at development milestone, and 30% after delivery. We accept bank transfer, checks, and online payments.'
        },
        {
          question: language === 'ne' ? 'के maintenance support समावेश छ?' : 'Is maintenance support included?',
          answer: language === 'ne'
            ? '3 महिनाको निःशुल्क warranty support समावेश छ। त्यसपछि Annual Maintenance Contract (AMC) उपलब्ध छ जसमा bug fixes र minor updates समावेश छ।'
            : '3 months free warranty support included. After that, Annual Maintenance Contract (AMC) available covering bug fixes and minor updates.'
        }
      ]
    },
    {
      id: 'support',
      title: language === 'ne' ? 'सहयोग सेवा' : 'Support Services',
      icon: Users,
      color: 'bg-red-100 text-red-800',
      faqs: [
        {
          question: language === 'ne' ? 'तपाईंहरूको support team कहिले उपलब्ध छ?' : 'When is your support team available?',
          answer: language === 'ne'
            ? 'नियमित समय: आइतबार-शुक्रबार 9 AM - 6 PM (NPT), Emergency support: 24/7 फोन/इमेल मार्फत, Response time: 2-4 घण्टा भित्र'
            : 'Regular hours: Sunday-Friday 9 AM - 6 PM (NPT), Emergency support: 24/7 via phone/email, Response time: Within 2-4 hours'
        },
        {
          question: language === 'ne' ? 'के training प्रदान गर्छौं?' : 'Do you provide training?',
          answer: language === 'ne'
            ? 'हो, हामी end-user training, admin training, र technical documentation प्रदान गर्छौं। On-site र online दुबै तरिकाले training उपलब्ध छ।'
            : 'Yes, we provide end-user training, admin training, and technical documentation. Both on-site and online training available.'
        },
        {
          question: language === 'ne' ? 'System down भएको खण्डमा के गर्ने?' : 'What to do if the system goes down?',
          answer: language === 'ne'
            ? 'तुरुन्त हाम्रो emergency hotline मा सम्पर्क गर्नुहोस्। हामी 30 मिनेट भित्र response गर्छौं र critical issues लाई तुरुन्त समाधान गर्छौं।'
            : 'Contact our emergency hotline immediately. We respond within 30 minutes and resolve critical issues urgently.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ne' ? 'बारम्बार सोधिने प्रश्नहरू' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ne' 
              ? 'हाम्रो सेवा र समाधानहरूको बारेमा सामान्य प्रश्नहरूको जवाफ'
              : 'Find answers to common questions about our services and solutions'
            }
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={language === 'ne' ? 'प्रश्न खोज्नुहोस्...' : 'Search questions...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category) => (
            <Card key={category.id} className="w-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>
                      {category.faqs.length} {language === 'ne' ? 'प्रश्नहरू' : 'questions'}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              {language === 'ne' ? 'कुनै प्रश्न फेला परेन।' : 'No questions found.'}
            </p>
          </div>
        )}

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ne' ? 'तपाईंको प्रश्नको जवाफ फेला परेन?' : "Didn't find your answer?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ne' 
                ? 'हाम्रो support team सँग सम्पर्क गर्नुहोस्। हामी तपाईंलाई सहयोग गर्न खुसी छौं।'
                : 'Contact our support team. We are happy to help you.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>support@nayacode.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{language === 'ne' ? 'आइत-शुक्र 9 AM - 6 PM' : 'Sun-Fri 9 AM - 6 PM'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
