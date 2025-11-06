import React, { useState, useEffect } from 'react';

const Services = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: "🏠",
      title: language === 'fr' ? "Rénovation de Cuisine" : "Kitchen Renovation",
      description: language === 'fr' 
        ? "Transformez votre maison avec nos services experts de rénovation de cuisine. De la conception à la réalisation, nous créons des cuisines fonctionnelles et belles qui améliorent votre quotidien."
        : "Transform your home with expert kitchen renovation services. From design to completion, we create functional, beautiful kitchens that enhance your daily life.",
      subtitle: language === 'fr' ? "Services Suggérés:" : "Suggested Services:",
      features: language === 'fr' ? [
        "Rénovation de cuisine & installation d'armoires",
        "Rénovations de salle de bain (carrelage, plomberie, vanités)",
        "Finition de sous-sol & insonorisation",
        "Installation de planchers (bois franc, vinyle, céramique, époxy)",
        "Gypse, plâtre et peinture",
        "Menuiserie sur mesure & encastrés",
        "Design d'éclairage & mises à niveau électriques",
        "Démolition intérieure & charpente"
      ] : [
        "Kitchen remodeling & cabinetry installation",
        "Bathroom renovations (tiling, plumbing, vanities)",
        "Basement finishing & soundproofing",
        "Flooring installation (hardwood, vinyl, ceramic, epoxy)",
        "Drywall, plaster, and painting",
        "Custom millwork & built-ins",
        "Lighting design & electrical upgrades",
        "Interior demolition & framing"
      ]
    },
    {
      icon: "🏡", 
      title: language === 'fr' ? "Rénovation Résidentielle" : "Home Renovation",
      description: language === 'fr' 
        ? "Améliorez l'attrait de votre propriété avec des rénovations extérieures. Nous servons Laval, l'Ouest-de-l'Île et la Rive-Sud avec une protection toute l'année."
        : "Boost your property's curb appeal with exterior renovations. We serve Laval, West Island, and South Shore with year-round protection.",
      subtitle: language === 'fr' ? "Services Suggérés:" : "Suggested Services:",
      features: language === 'fr' ? [
        "Terrasses, patios & pergolas",
        "Réparation & remplacement de toiture (asphalte, métal, toits plats)",
        "Installation de revêtement (vinyle, aluminium, bois, fibre-ciment)",
        "Installation de fenêtres & portes",
        "Maçonnerie, pierre & réparation de brique",
        "Clôtures & portails",
        "Peinture extérieure & étanchéité",
        "Aménagement paysager & éclairage extérieur"
      ] : [
        "Decks, patios & pergolas",
        "Roofing repair & replacement (asphalt, metal, flat roofs)",
        "Siding installation (vinyl, aluminum, wood, fiber cement)",
        "Window & door installation",
        "Brickwork, stonework & masonry repair",
        "Fencing & gates",
        "Exterior painting & waterproofing",
        "Landscaping & outdoor lighting"
      ]
    },
    {
      icon: "🏢",
      title: language === 'fr' ? "Rénovations Commerciales" : "Commercial Renovations",
      description: language === 'fr' 
        ? "Entrepreneur professionnel en rénovation commerciale. Nous créons des environnements d'affaires fonctionnels qui favorisent le succès."
        : "Professional commercial renovation contractor. We create functional business environments that drive success.",
      subtitle: language === 'fr' ? "Services Suggérés:" : "Suggested Services:",
      features: language === 'fr' ? [
        "Rénovations de bureaux & redesign",
        "Aménagements de détail & présentoirs",
        "Construction de cuisines de restaurant & salles à manger",
        "Rénovations de cliniques médicales & dentaires (fini hygiénique)",
        "Planchers & plafonds commerciaux",
        "Comptoirs de réception sur mesure & cloisons",
        "Mises à niveau électriques, CVC & plomberie",
        "Entretien & améliorations locatives"
      ] : [
        "Office renovations & redesign",
        "Retail buildouts & displays",
        "Restaurant kitchen & dining area construction",
        "Medical & dental clinic renovations (hygienic-grade finishes)",
        "Commercial flooring & ceilings",
        "Custom reception desks & partitions",
        "Electrical, HVAC & plumbing upgrades",
        "Maintenance & tenant improvements"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden" id="services-section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' 
              ? <>Rénovation Résidentielle <span className="text-prime-orange">& Services Commerciaux</span></>
              : <>Home Renovation <span className="text-prime-orange">& Commercial Services</span></>
            }
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === 'fr' 
              ? "Entrepreneur RBQ licencié offrant rénovations de cuisine, salle de bain et commerciales"
              : "Licensed RBQ renovation contractor offering kitchen, bathroom, and commercial renovations"
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={scrollToContact}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-prime-orange/20 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-prime-orange transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-prime-orange rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Learn More Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                className="w-full bg-transparent text-prime-orange font-semibold py-3 px-6 rounded-xl hover:bg-prime-orange hover:text-white transition-all duration-300 group-hover:scale-105"
              >
                {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
              </button>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-prime-orange/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-prime-orange to-orange-600 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {language === 'fr' ? 'Prêt à Transformer Votre Espace?' : 'Ready to Transform Your Space?'}
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {language === 'fr' 
                  ? "Discutons de votre projet et donnons vie à votre vision avec notre équipe d'experts"
                  : "Let's discuss your project and bring your vision to life with our expert team"
                }
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-white text-prime-orange font-bold text-lg px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {language === 'fr' ? 'Obtenir un Devis Gratuit' : 'Get Free Quote'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;