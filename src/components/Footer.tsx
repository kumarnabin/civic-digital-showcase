
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/nayacode', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/nayacode', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/nayacode', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/nayacode', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/nayacode', label: 'GitHub' },
  ];

  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://nayacode.com/images/Image-2025033006063823.Naya1.png" 
                alt="NayaCode Logo" 
                className="h-8 w-auto"
              />
              <h3 className="font-bold text-lg text-gradient">NayaCode</h3>
            </div>
            <p className="text-muted-foreground">
              Professional IT solutions for government and private sector projects with modern technology stack.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Government Solutions</li>
              <li>Private Sector Projects</li>
              <li>System Integration</li>
              <li>Custom Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Java Spring Boot</li>
              <li>Python Django</li>
              <li>PHP Laravel</li>
              <li>PostgreSQL, MySQL</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 NayaCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
