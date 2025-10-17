import React from 'react';

const About = ({ language }) => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: language === 'fr' ? "Professionnels Licenciés et Assurés" : "Licensed & Insured Professionals",
      description: language === 'fr' ? "Entrepreneurs entièrement licenciés avec une couverture d'assurance complète pour votre tranquillité d'esprit." : "Fully licensed contractors with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      title: language === 'fr' ? "Tarification Transparente" : "Transparent Pricing",
      description: language === 'fr' ? "Aucuns frais cachés ou coûts surprises. Nous fournissons des devis détaillés et respectons nos prix cités." : "No hidden fees or surprise costs. We provide detailed estimates and stick to our quoted prices."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: language === 'fr' ? "Designs Modernes Construits pour Durer" : "Modern Designs Built to Last",
      description: language === 'fr' ? "Esthétique contemporaine combinée à des matériaux durables et un savoir-faire expert." : "Contemporary aesthetics combined with durable materials and expert craftsmanship."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: language === 'fr' ? "Délais Rapides et Garantie de Satisfaction 100%" : "Fast Turnaround & 100% Satisfaction Guarantee",
      description: language === 'fr' ? "Gestion de projet efficace avec satisfaction garantie ou nous le corrigerons." : "Efficient project management with guaranteed satisfaction or we'll make it right."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Us */}
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-prime-charcoal dark:text-white mb-6">
              {language === 'fr' 
                ? <>Entreprise de Rénovation de <span className="text-prime-orange">Confiance à Montréal</span></>
                : <>Montreal's Trusted <span className="text-prime-orange">Renovation Company</span></>
              }
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {language === 'fr' 
                  ? "Depuis plus d'une décennie, Prime Renovations est la principale entreprise de rénovation de Montréal, spécialisée dans la rénovation de cuisine Montréal, la rénovation de salle de bain Montréal, et les rénovations commerciales Montréal. Nos entrepreneurs RBQ licenciés servent Laval, l'Ouest-de-l'Île, la Rive-Sud, et les Laurentides avec un savoir-faire inégalé."
                  : "For over a decade, Prime Renovations has been Montreal's premier renovation company, specializing in kitchen renovation Montreal, bathroom renovation Montreal, and commercial renovations Montreal. Our licensed RBQ contractors serve Laval, West Island, South Shore, and the Laurentians with unmatched craftsmanship."
                }
              </p>
              
              <p>
                {language === 'fr' 
                  ? "Nous livrons des projets de rénovation résidentielle Montréal d'une qualité exceptionnelle avec des designs innovants et une tarification transparente. Chaque rénovation est abordée avec une attention méticuleuse aux détails, garantissant que votre espace dépasse les attentes tout en respectant le budget et les délais."
                  : "We deliver exceptional quality home renovation Montreal projects with innovative designs and transparent pricing. Every renovation is approached with meticulous attention to detail, ensuring your space exceeds expectations while staying within budget and timeline."
                }
              </p>
              
              <p>
                {language === 'fr' 
                  ? "Du concept à la réalisation, notre équipe gère tous les aspects de votre rénovation avec professionnalisme et fiabilité. Nous sommes le choix de confiance pour les propriétaires et les entreprises du Grand Montréal, soutenus par une assurance complète et notre licence RBQ #34JV4."
                  : "From concept to completion, our team handles every aspect of your renovation with professionalism and reliability. We're the trusted choice for homeowners and businesses across Greater Montreal, backed by comprehensive insurance and our RBQ license #34JV4."
                }
              </p>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl lg:text-4xl font-bold text-prime-charcoal dark:text-white mb-8">
              {language === 'fr' 
                ? <>Pourquoi Nous <span className="text-prime-orange">Choisir</span></>
                : <>Why <span className="text-prime-orange">Choose Us</span></>
              }
            </h3>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-prime-orange/10 dark:bg-prime-orange/20 rounded-lg flex items-center justify-center text-prime-orange">
                    {feature.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-prime-charcoal dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-prime-orange/5 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-prime-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default About;
