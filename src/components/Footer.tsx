import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Investment Plans',
    'Portfolio Review',
    'Contact Us',
    'Blog'
  ];

  const services = [
    'SIP Investments',
    'Lump Sum Investment',
    'Goal-Based Planning',
    'Portfolio Management',
    'Tax Planning',
    'Retirement Planning'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Disclaimer',
    'Risk Disclosure',
    'Grievance Policy',
    'SEBI Registration'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">WealthGrow</span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for mutual fund investments in India. 
              We help you grow your wealth through systematic and strategic investing.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">info@wealthgrow.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal & Compliance</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              <p>© 2024 WealthGrow. All rights reserved.</p>
            </div>
            
            <div className="text-xs text-primary-foreground/60 text-center md:text-right">
              <p className="mb-1">
                <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks. 
                Please read all scheme related documents carefully.
              </p>
              <p>
                SEBI Registration No: INH000000001 | AMFI Registration No: ARN-12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;