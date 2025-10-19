import React from 'react';

const Hero = ({ language }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-prime-cream to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/200.png')`,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Blueprint Pattern Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient">Prime Renovations</span> — 
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-prime-orange transform -rotate-2 rounded-lg" />
              <span className="relative text-black text-5xl sm:text-6xl lg:text-7xl font-bold px-3 py-2">
                {language === 'fr' ? 'Montréal' : 'Montreal\'s'}
              </span>
            </span>
            <span className="text-white">
              {language === 'fr' ? ' Experts en Rénovation de Confiance' : ' Trusted Renovation Experts'}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'fr' 
              ? 'Rénovation Résidentielle Expert Montréal & Rénovations Commerciales — Entrepreneurs RBQ Licenciés Servant Laval, Ouest-de-l\'Île & Rive-Sud.'
              : 'Expert Home Renovation Montreal & Commercial Renovations — Licensed RBQ Contractors Serving Laval, West Island & South Shore.'
            }
          </p>
          
          {/* Phone Number */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-prime-orange/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-prime-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a 
              href="tel:+15145126001" 
              className="text-2xl font-bold text-white hover:text-prime-orange transition-colors duration-300"
            >
              (514) 512-6001
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-4 animate-float"
            >
              {language === 'fr' ? 'Obtenir un Devis Gratuit' : 'Get a Free Quote'}
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-10 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-prime-charcoal"
            >
              {language === 'fr' ? 'Voir Nos Réalisations' : 'View Our Work'}
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-prime-orange/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-prime-orange/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

    </section>
  );
};

export default Hero;
