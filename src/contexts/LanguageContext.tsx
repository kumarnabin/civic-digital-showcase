
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Home page
    'home.title': 'Professional IT Solutions',
    'home.subtitle': 'Delivering Excellence in Government & Private Sector Projects',
    'home.cta': 'Get Started',
    'home.learn_more': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.government': 'Government Solutions',
    'services.private': 'Private Sector',
    
    // About
    'about.title': 'About Us',
    'about.description': 'We are a leading IT solutions provider with expertise in government and private sector projects.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Blog
    'blog.title': 'Blog',
    'blog.categories.it': 'IT & Technology',
    'blog.categories.nepali': 'Nepali Tech',
    'blog.categories.international': 'International',
    'blog.categories.government': 'Government Projects',
    
    // Footer
    'footer.copyright': '© 2024 IT Solutions. All rights reserved.',
    
    // Chat
    'chat.title': 'Chat with us',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send'
  },
  ne: {
    // Navigation
    'nav.home': 'गृहपृष्ठ',
    'nav.about': 'हाम्रो बारेमा',
    'nav.services': 'सेवाहरू',
    'nav.projects': 'परियोजनाहरू',
    'nav.blog': 'ब्लग',
    'nav.contact': 'सम्पर्क',
    
    // Home page
    'home.title': 'व्यावसायिक आईटी समाधान',
    'home.subtitle': 'सरकारी र निजी क्षेत्रका परियोजनाहरूमा उत्कृष्टता प्रदान गर्दै',
    'home.cta': 'सुरु गर्नुहोस्',
    'home.learn_more': 'थप जान्नुहोस्',
    
    // Services
    'services.title': 'हाम्रा सेवाहरू',
    'services.government': 'सरकारी समाधान',
    'services.private': 'निजी क्षेत्र',
    
    // About
    'about.title': 'हाम्रो बारेमा',
    'about.description': 'हामी सरकारी र निजी क्षेत्रका परियोजनाहरूमा विशेषज्ञता भएको अग्रणी आईटी समाधान प्रदायक हौं।',
    
    // Contact
    'contact.title': 'सम्पर्क गर्नुहोस्',
    'contact.name': 'नाम',
    'contact.email': 'इमेल',
    'contact.message': 'सन्देश',
    'contact.send': 'सन्देश पठाउनुहोस्',
    
    // Blog
    'blog.title': 'ब्लग',
    'blog.categories.it': 'आईटी र प्रविधि',
    'blog.categories.nepali': 'नेपाली प्रविधि',
    'blog.categories.international': 'अन्तर्राष्ट्रिय',
    'blog.categories.government': 'सरकारी परियोजनाहरू',
    
    // Footer
    'footer.copyright': '© २०२४ आईटी समाधान। सबै अधिकार सुरक्षित।',
    
    // Chat
    'chat.title': 'हामीसँग कुराकानी गर्नुहोस्',
    'chat.placeholder': 'आफ्नो सन्देश टाइप गर्नुहोस्...',
    'chat.send': 'पठाउनुहोस्'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ne')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
