import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  Building2, 
  Users, 
  Globe, 
  CreditCard, 
  FileSpreadsheet,
  Wrench,
  BarChart3,
  Calendar,
  ShoppingCart,
  MapPin,
  Package,
  Clock,
  GraduationCap,
  School,
  Search,
  ArrowRight,
  Receipt,
  DollarSign,
  HandHeart
} from 'lucide-react';

const Projects = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const projects = [
    {
      id: 24,
      title: language === 'ne' ? 'दर्ता चलानी' : 'Darta Chalani',
      description: language === 'ne' 
        ? 'आधिकारिक कागजात दर्ता र पत्राचार ट्र्याकिङ सिस्टम'
        : 'Document Registration & Tracking System',
      category: 'government',
      icon: FileText,
      screenshot: 'photo-1454165804606-c3d57bc86b40',
      technologies: ['Java Spring Boot', 'PostgreSQL', 'Angular'],
      features: [
        language === 'ne' ? 'कागजात दर्ता (आगमन/बहिर्गमन)' : 'Document registration (incoming/outgoing)',
        language === 'ne' ? 'पत्र ट्र्याकिङ र फरवार्डिङ' : 'Letter tracking and forwarding',
        language === 'ne' ? 'बहु-विभागीय पहुँच' : 'Multi-department access'
      ],
      workflow: language === 'ne' 
        ? 'दर्ता → फरवार्ड → कार्य → संग्रह'
        : 'Register → Forward → Action → Archive'
    },
    {
      id: 25,
      title: language === 'ne' ? 'भेन्डर इन्लिष्टिङ' : 'Vendor Enlisting',
      description: language === 'ne'
        ? 'आपूर्तिकर्ता दर्ता र अनुमोदन प्रणाली'
        : 'Supplier registration and approval system',
      category: 'government',
      icon: Building2,
      screenshot: 'photo-1507003211169-0a1dd7228f2d',
      technologies: ['C# .NET Core', 'SQL Server', 'React'],
      features: [
        language === 'ne' ? 'आपूर्तिकर्ता दर्ता, मूल्याङ्कन र अनुमोदन' : 'Supplier registration, evaluation, and approval',
        language === 'ne' ? 'कागजात प्रमाणीकरण प्रणाली' : 'Document verification system',
        language === 'ne' ? 'स्वचालित म्याद अलर्ट' : 'Automated expiry alerts'
      ],
      workflow: language === 'ne'
        ? 'आवेदन → कागजात पेश → मूल्याङ्कन → अनुमोदन'
        : 'Application → Document Submission → Evaluation → Approval'
    },
    {
      id: 26,
      title: language === 'ne' ? 'मूल्याङ्कनकर्ता इन्लिष्टिङ' : 'Valuator Enlisting',
      description: language === 'ne'
        ? 'मूल्याङ्कनकर्ता प्रोफाइल व्यवस्थापन'
        : 'Valuator profile management and verification',
      category: 'government',
      icon: Users,
      technologies: ['Python Django', 'PostgreSQL', 'Vue.js'],
      features: [
        language === 'ne' ? 'मूल्याङ्कनकर्ता प्रोफाइल व्यवस्थापन' : 'Valuator profile management',
        language === 'ne' ? 'योग्यता र लाइसेन्स ट्र्याकिङ' : 'Qualification and license tracking',
        language === 'ne' ? 'योग्यता कागजात व्यवस्थापन' : 'Qualification document management'
      ],
      workflow: language === 'ne'
        ? 'प्रोफाइल पेश → समीक्षा → अनुमोदन → नवीकरण'
        : 'Profile Submission → Review → Approval → Renewal'
    },
    {
      id: 27,
      title: language === 'ne' ? 'सीएमएस सिस्टम' : 'CMS System',
      description: language === 'ne'
        ? 'गतिशील वेबसाइट र सामग्री व्यवस्थापन'
        : 'Dynamic website and content management',
      category: 'government',
      icon: Globe,
      technologies: ['PHP Laravel', 'MySQL', 'Bootstrap'],
      features: [
        language === 'ne' ? 'गतिशील सामग्री व्यवस्थापन' : 'Dynamic content management',
        language === 'ne' ? 'पृष्ठ, मेनु र ग्यालेरी व्यवस्थापन' : 'Page, menu, and gallery management',
        language === 'ne' ? 'बहुभाषिक समर्थन' : 'Multi-language support'
      ],
      workflow: language === 'ne'
        ? 'सामग्री सिर्जना → समीक्षा → प्रकाशन → संग्रह'
        : 'Content Creation → Review → Publish → Archive'
    },
    {
      id: 30,
      title: language === 'ne' ? 'ऋण व्यवस्थापन' : 'Loan Management',
      description: language === 'ne'
        ? 'पूर्ण ऋण आवेदन र भुक्तानी ट्र्याकिङ'
        : 'Full loan application and repayment tracking',
      category: 'private',
      icon: CreditCard,
      screenshot: 'photo-1554224154-26032ffc0d07',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      features: [
        language === 'ne' ? 'ऋण आवेदन, अनुमोदन, वितरण' : 'Loan application, approval, disbursement',
        language === 'ne' ? 'EMI ट्र्याकिङ, बक्यौता अलर्ट' : 'EMI tracking, overdue alerts',
        language === 'ne' ? 'स्वचालित SMS/इमेल अलर्ट' : 'Auto SMS/email alerts'
      ],
      workflow: language === 'ne'
        ? 'आवेदन → कागजात अपलोड → अनुमोदन → वितरण → EMI ट्र्याकिङ'
        : 'Application → Document Upload → Approval → Disbursement → EMI Tracking'
    },
    {
      id: 31,
      title: language === 'ne' ? 'लीज व्यवस्थापन' : 'Lease Management',
      description: language === 'ne'
        ? 'लीज सम्झौता र भुक्तानी ट्र्याकिङ'
        : 'Lease agreement and payment tracking',
      category: 'private',
      icon: FileSpreadsheet,
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
      features: [
        language === 'ne' ? 'लीज सम्झौता ट्र्याकिङ' : 'Lease agreement tracking',
        language === 'ne' ? 'भुक्तानी र म्याद रिमाइन्डर' : 'Payment and expiry reminders',
        language === 'ne' ? 'बहु-स्थान लीज व्यवस्थापन' : 'Multi-location lease management'
      ],
      workflow: language === 'ne'
        ? 'लीज सिर्जना → भुक्तानी तालिका → नवीकरण → समाप्ति'
        : 'Lease Creation → Payment Schedule → Renewal → Termination'
    },
    {
      id: 32,
      title: language === 'ne' ? 'मर्मत टिकटिङ' : 'Maintenance Ticketing',
      description: language === 'ne'
        ? 'टिकट आधारित मर्मत समस्या समाधान'
        : 'Ticket-based maintenance issue resolution',
      category: 'private',
      icon: Wrench,
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      features: [
        language === 'ne' ? 'टिकट सिर्जना, असाइनमेन्ट, स्थिति ट्र्याकिङ' : 'Ticket creation, assignment, status tracking',
        language === 'ne' ? 'प्राथमिकता र SLA व्यवस्थापन' : 'Priority and SLA management',
        language === 'ne' ? 'मोबाइल टिकटिङ समर्थन' : 'Mobile ticketing support'
      ],
      workflow: language === 'ne'
        ? 'टिकट सिर्जना → असाइनमेन्ट → कार्य कार्यान्वयन → समाधान'
        : 'Ticket Creation → Assignment → Work Execution → Resolution'
    },
    {
      id: 33,
      title: language === 'ne' ? 'परियोजना ट्र्याकिङ' : 'Project Tracking',
      description: language === 'ne'
        ? 'परियोजना अनुरोध र प्रगति निगरानी'
        : 'Project request and progress monitoring',
      category: 'private',
      icon: BarChart3,
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      features: [
        language === 'ne' ? 'परियोजना अनुरोध, प्रमाणीकरण, अनुमोदन' : 'Project request, verification, approval',
        language === 'ne' ? 'प्रगति ट्र्याकिङ' : 'Progress tracking',
        language === 'ne' ? 'बहु-परियोजना Gantt चार्ट' : 'Multi-project Gantt charts'
      ],
      workflow: language === 'ne'
        ? 'अनुरोध → अनुमोदन → असाइनमेन्ट → प्रगति अपडेट → पूर्णता'
        : 'Request → Approval → Assignment → Progress Updates → Completion'
    },
    {
      id: 34,
      title: language === 'ne' ? 'अपोइन्टमेन्ट व्यवस्थापन' : 'Appointment Management',
      description: language === 'ne'
        ? 'अनलाइन अपोइन्टमेन्ट बुकिङ सिस्टम'
        : 'Online appointment booking system',
      category: 'private',
      icon: Calendar,
      technologies: ['React', 'Node.js', 'MySQL', 'Calendar API'],
      features: [
        language === 'ne' ? 'अनलाइन अपोइन्टमेन्ट बुकिङ' : 'Online appointment booking',
        language === 'ne' ? 'क्यालेन्डर एकीकरण' : 'Calendar integration',
        language === 'ne' ? 'SMS/इमेल रिमाइन्डर' : 'SMS/email reminders'
      ],
      workflow: language === 'ne'
        ? 'स्लट बुकिङ → पुष्टिकरण → भेट → प्रतिक्रिया'
        : 'Slot Booking → Confirmation → Visit → Feedback'
    },
    {
      id: 35,
      title: language === 'ne' ? 'ई-कमर्स प्लेटफर्म' : 'E-commerce Platform',
      description: language === 'ne'
        ? 'अनलाइन उत्पादन र भुक्तानी समाधान'
        : 'Online product and payment solution',
      category: 'private',
      icon: ShoppingCart,
      screenshot: 'photo-1556742049-0cfed4f6a45d',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        language === 'ne' ? 'उत्पादन सूची, कार्त, चेकआउट' : 'Product listing, cart, checkout',
        language === 'ne' ? 'भुक्तानी गेटवे' : 'Payment gateway',
        language === 'ne' ? 'बहु-विक्रेता समर्थन' : 'Multi-vendor support'
      ],
      workflow: language === 'ne'
        ? 'उत्पादन अपलोड → अर्डर प्लेसमेन्ट → भुक्तानी → डेलिभरी'
        : 'Product Upload → Order Placement → Payment → Delivery'
    },
    {
      id: 28,
      title: language === 'ne' ? 'स्थानीय सर्वेक्षण र प्रोफाइल' : 'Local Survey & Profile',
      description: language === 'ne'
        ? 'नगरपालिका प्रोफाइलिङ र डिजिटल सर्वेक्षण'
        : 'Municipality profiling and digital survey',
      category: 'government',
      icon: MapPin,
      technologies: ['React', 'Node.js', 'MongoDB', 'GIS'],
      features: [
        language === 'ne' ? 'डिजिटल सर्वेक्षण फार्म, GIS डाटा' : 'Digital survey form, GIS data',
        language === 'ne' ? 'वास्तविक समय विश्लेषण' : 'Real-time analytics',
        language === 'ne' ? 'मोबाइल सर्वेक्षण एप' : 'Mobile survey app'
      ],
      workflow: language === 'ne'
        ? 'सर्वेक्षण सिर्जना → फिल्ड डाटा सङ्कलन → समीक्षा → रिपोर्टिङ'
        : 'Survey Creation → Field Data Collection → Review → Reporting'
    },
    {
      id: 36,
      title: language === 'ne' ? 'ERP सिस्टम' : 'ERP System',
      description: language === 'ne'
        ? 'पूर्ण उद्यम संसाधन योजना समाधान'
        : 'Full enterprise resource planning solution',
      category: 'both',
      icon: Package,
      technologies: ['Java Spring Boot', 'Oracle', 'Angular'],
      features: [
        language === 'ne' ? 'वित्त, HR, सूची, खरिद' : 'Finance, HR, inventory, procurement',
        language === 'ne' ? 'परियोजना व्यवस्थापन' : 'Project management',
        language === 'ne' ? 'भूमिका आधारित ड्यासबोर्ड' : 'Role-based dashboards'
      ],
      workflow: language === 'ne'
        ? 'डाटा प्रविष्टि → प्रक्रिया स्वचालन → अनुमोदन → रिपोर्टिङ'
        : 'Data Entry → Process Automation → Approval → Reporting'
    },
    {
      id: 29,
      title: language === 'ne' ? 'उपस्थिति प्रणाली' : 'Attendance System',
      description: language === 'ne'
        ? 'डिजिटल उपस्थिति ट्र्याकिङ'
        : 'Digital attendance tracking',
      category: 'government',
      icon: Clock,
      technologies: ['Java Spring', 'Oracle', 'Angular'],
      features: [
        language === 'ne' ? 'बायोमेट्रिक वा वेब चेक-इन/आउट' : 'Biometric or web check-in/out',
        language === 'ne' ? 'बिदा र ओभरटाइम व्यवस्थापन' : 'Leave and overtime management',
        language === 'ne' ? 'मोबाइल जियो-उपस्थिति' : 'Mobile geo-attendance'
      ],
      workflow: language === 'ne'
        ? 'उपस्थिति चिन्ह → अनुमोदन → रिपोर्टिङ'
        : 'Attendance Marking → Approval → Reporting'
    },
    {
      id: 37,
      title: language === 'ne' ? 'तालिम संस्थान व्यवस्थापन' : 'Training Institute Management',
      description: language === 'ne'
        ? 'पाठ्यक्रम र विद्यार्थी व्यवस्थापन'
        : 'Course and student management',
      category: 'private',
      icon: GraduationCap,
      technologies: ['PHP CodeIgniter', 'MySQL', 'jQuery'],
      features: [
        language === 'ne' ? 'पाठ्यक्रम, ब्याच, विद्यार्थी व्यवस्थापन' : 'Course, batch, student management',
        language === 'ne' ? 'शुल्क व्यवस्थापन' : 'Fee management',
        language === 'ne' ? 'अनलाइन परीक्षा' : 'Online exams'
      ],
      workflow: language === 'ne'
        ? 'भर्ना → पाठ्यक्रम असाइनमेन्ट → उपस्थिति → प्रमाणपत्र'
        : 'Admission → Course Assignment → Attendance → Certification'
    },
    {
      id: 38,
      title: language === 'ne' ? 'विद्यालय व्यवस्थापन' : 'School Management',
      description: language === 'ne'
        ? 'व्यापक विद्यालय प्रशासन प्रणाली'
        : 'Comprehensive school administration system',
      category: 'private',
      icon: School,
      technologies: ['C# .NET', 'SQL Server', 'Bootstrap'],
      features: [
        language === 'ne' ? 'विद्यार्थी भर्ना, परीक्षा, शुल्क' : 'Student admission, exams, fee',
        language === 'ne' ? 'उपस्थिति, पुस्तकालय' : 'Attendance, library',
        language === 'ne' ? 'अभिभावक पोर्टल' : 'Parent portal'
      ],
      workflow: language === 'ne'
        ? 'नामांकन → कक्षा असाइनमेन्ट → उपस्थिति → परीक्षा → पदोन्नति'
        : 'Enrollment → Class Assignment → Attendance → Exams → Promotion'
    },
    {
      id: 39,
      title: language === 'ne' ? 'रिमोट अकाउन्टिङ' : 'Remote Accounting',
      description: language === 'ne'
        ? 'दूरदराजका ठाउँबाट खर्च र बिक्री बिलहरू सङ्कलन'
        : 'Collect expense and sales bills from remote locations',
      category: 'private',
      icon: Receipt,
      technologies: ['React', 'Python FastAPI', 'PostgreSQL', 'AWS S3'],
      features: [
        language === 'ne' ? 'मोबाइल बिल स्क्यानिङ र अपलोड' : 'Mobile bill scanning and upload',
        language === 'ne' ? 'OCR डाटा निकासी र प्रमाणीकरण' : 'OCR data extraction and verification',
        language === 'ne' ? 'स्वचालित अकाउन्टिङ एन्ट्री' : 'Automated accounting entries'
      ],
      workflow: language === 'ne'
        ? 'बिल स्क्यान → डाटा निकासी → प्रमाणीकरण → अकाउन्टिङ एन्ट्री'
        : 'Bill Scan → Data Extraction → Verification → Accounting Entry'
    },
    {
      id: 40,
      title: language === 'ne' ? 'पेरोल प्रणाली' : 'Payroll System',
      description: language === 'ne'
        ? 'कर्मचारी तलब र भत्ता व्यवस्थापन'
        : 'Employee salary and allowance management',
      category: 'both',
      icon: DollarSign,
      technologies: ['Java Spring Boot', 'MySQL', 'Angular', 'Jasper Reports'],
      features: [
        language === 'ne' ? 'तलब संरचना र गणना' : 'Salary structure and calculation',
        language === 'ne' ? 'कर र भत्ता व्यवस्थापन' : 'Tax and allowance management',
        language === 'ne' ? 'पेस्लिप र वार्षिक कर रिपोर्ट' : 'Payslips and annual tax reports'
      ],
      workflow: language === 'ne'
        ? 'उपस्थिति डाटा → तलब गणना → अनुमोदन → भुक्तानी'
        : 'Attendance Data → Salary Calculation → Approval → Payment'
    },
    {
      id: 41,
      title: language === 'ne' ? 'परियोजना बिल सेटलमेन्ट' : 'Project Bill Settlement',
      description: language === 'ne'
        ? 'NGO/INGO परियोजनाको बिल र भुक्तानी व्यवस्थापन'
        : 'NGO/INGO project billing and payment management',
      category: 'both',
      icon: HandHeart,
      technologies: ['Python Django', 'PostgreSQL', 'React', 'Celery'],
      features: [
        language === 'ne' ? 'परियोजना बजेट र खर्च ट्र्याकिङ' : 'Project budget and expense tracking',
        language === 'ne' ? 'दाता रिपोर्टिङ र अनुपालन' : 'Donor reporting and compliance',
        language === 'ne' ? 'मल्टि-करेन्सी र बहु-फन्डर समर्थन' : 'Multi-currency and multi-funder support'
      ],
      workflow: language === 'ne'
        ? 'बजेट अनुमोदन → खर्च रेकर्ड → बिल तयारी → भुक्तानी → रिपोर्टिङ'
        : 'Budget Approval → Expense Recording → Bill Preparation → Payment → Reporting'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ne' ? 'हाम्रा परियोजनाहरू' : 'Our Projects'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ne' 
              ? 'सरकारी र निजी क्षेत्रका लागि व्यापक IT समाधानहरू'
              : 'Comprehensive IT solutions for government and private sectors'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={language === 'ne' ? 'परियोजना खोज्नुहोस्...' : 'Search projects...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/70 backdrop-blur-md border border-white/30 shadow-xl"
              />
            </div>
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px] bg-white/70 backdrop-blur-md border border-white/30 shadow-xl">
              <SelectValue placeholder={language === 'ne' ? 'श्रेणी छान्नुहोस्' : 'Select category'} />
            </SelectTrigger>
            <SelectContent className="bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl">
              <SelectItem value="all">
                {language === 'ne' ? 'सबै श्रेणी' : 'All Categories'}
              </SelectItem>
              <SelectItem value="government">
                {language === 'ne' ? 'सरकारी' : 'Government'}
              </SelectItem>
              <SelectItem value="private">
                {language === 'ne' ? 'निजी' : 'Private'}
              </SelectItem>
              <SelectItem value="both">
                {language === 'ne' ? 'दुवै' : 'Both'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 bg-white/70 backdrop-blur-md shadow-2xl hover:bg-white/80 hover:border-white/40 transform hover:scale-105 hover:-translate-y-2">
              {/* Project Screenshot */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.screenshot}?w=400&h=200&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <Badge 
                  className={`absolute top-4 left-4 ${project.category === "government" ? "bg-blue-600/80" : project.category === "private" ? "bg-purple-600/80" : "bg-emerald-600/80"} backdrop-blur-sm border border-white/30 shadow-lg`}
                >
                  {project.category === "government" 
                    ? (language === 'ne' ? 'सरकारी' : 'Government')
                    : project.category === "private"
                    ? (language === 'ne' ? 'निजी' : 'Private') 
                    : (language === 'ne' ? 'दुवै' : 'Both')
                  }
                </Badge>
              </div>

              <CardHeader className="bg-white/80 backdrop-blur-sm border-t border-white/30">
                <div className="flex items-center justify-between mb-2">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white/90 backdrop-blur-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">
                      {language === 'ne' ? 'मुख्य सुविधाहरू:' : 'Key Features:'}
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-white/60 backdrop-blur-sm border-white/40">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline" className="text-xs bg-white/60 backdrop-blur-sm border-white/40">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-white/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl">
                    <Link to={`/project/${project.id}`} className="flex items-center justify-center">
                      {language === 'ne' ? 'विवरण हेर्नुहोस्' : 'View Details'} 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === 'ne' ? 'कुनै परियोजना फेला परेन।' : 'No projects found.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
