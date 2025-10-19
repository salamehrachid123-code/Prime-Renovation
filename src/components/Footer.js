import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = ({ language }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (href) => {
    // Navigate to the service page
    navigate(href);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Kitchen Renovation Montreal', href: '/kitchen-renovation-montreal' },
    { name: 'Bathroom Renovation Montreal', href: '/bathroom-renovation-montreal' },
    { name: 'Basement Renovation Montreal', href: '/basement-renovation-montreal' },
    { name: 'Painting Services Montreal', href: '/painting-services-montreal' },
    { name: 'Flooring Installation Montreal', href: '/flooring-installation-montreal' },
    { name: 'Deck & Patio Construction Montreal', href: '/deck-patio-construction-montreal' },
    { name: 'Roofing Repair & Replacement Montreal', href: '/roofing-repair-replacement-montreal' },
    { name: 'Siding Installation Montreal', href: '/siding-installation-montreal' },
    { name: 'Drywall & Plaster Services Montreal', href: '/drywall-plaster-services-montreal' },
    { name: 'Lighting Design & Electrical Upgrades Montreal', href: '/lighting-design-electrical-upgrades-montreal' },
    { name: 'Custom Millwork & Built-ins Montreal', href: '/custom-millwork-builtins-montreal' },
    { name: 'Office & Retail Renovation Montreal', href: '/office-retail-renovation-montreal' }
  ];

  return (
    <footer className="bg-prime-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={process.env.PUBLIC_URL + "/pr logo transparent.png"} 
                  alt="Prime Renovations" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">
                  Prime Renovations
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {language === 'fr' 
                  ? "Transformer les espaces avec un savoir-faire de qualité et un design innovant. Votre partenaire de confiance pour les rénovations résidentielles et commerciales."
                  : "Transforming spaces with quality craftsmanship and innovative design. Your trusted partner for residential and commercial renovations."
                }
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-prime-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-prime-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">(514) 512-6001</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-prime-orange/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-prime-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">rachid@prime-renovation.ca</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {language === 'fr' 
                  ? <>Liens <span className="text-prime-orange">Rapides</span></>
                  : <>Quick <span className="text-prime-orange">Links</span></>
                }
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-prime-orange transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {language === 'fr' 
                  ? <>Plus de <span className="text-prime-orange">Services</span></>
                  : <>More <span className="text-prime-orange">Services</span></>
                }
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleServiceClick(service.href)}
                      className="text-gray-300 hover:text-prime-orange transition-colors duration-300 text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                {language === 'fr' 
                  ? <>Suivez-<span className="text-prime-orange">Nous</span></>
                  : <>Follow <span className="text-prime-orange">Us</span></>
                }
              </h3>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-prime-orange rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-2">
                  {language === 'fr' ? 'RBQ Licencié' : 'RBQ Licensed'}
                </h4>
                <p className="text-sm text-gray-300">License #34JV4</p>
                <p className="text-sm text-gray-400 mt-1">
                  {language === 'fr' 
                    ? "Entièrement licencié et assuré pour votre tranquillité d'esprit"
                    : "Fully licensed and insured for your peace of mind"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Prime Renovations. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-prime-orange transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-prime-orange transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-prime-orange/5 rounded-full animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-prime-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </footer>
  );
};

export default Footer;
