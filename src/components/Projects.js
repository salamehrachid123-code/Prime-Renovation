import React, { useRef, useState, useEffect } from 'react';

const Projects = ({ language }) => {
  const projects = [
    {
      id: 1,
      title: language === 'fr' ? "Salon" : "Living Room",
      description: language === 'fr' ? "Designs modernes et fonctionnels adaptés à votre maison." : "Modern and functional designs tailored to your home.",
      image: "40.jpg"
    },
    {
      id: 2,
      title: language === 'fr' ? "Salle de Bain" : "Bathroom",
      description: language === 'fr' ? "Retraites élégantes style spa conçues pour la relaxation." : "Elegant spa-like retreats designed for relaxation.",
      image: "41.jpg"
    },
    {
      id: 3,
      title: language === 'fr' ? "Cuisine" : "Kitchen",
      description: language === 'fr' ? "Transformez l'espace inutilisé en zones de vie fonctionnelles." : "Transform unused space into functional living areas.",
      image: "42.jpg"
    },
    {
      id: 4,
      title: language === 'fr' ? "Terrasse Extérieure" : "Outside Deck",
      description: language === 'fr' ? "Espaces utilitaires efficaces et magnifiquement conçus." : "Efficient and beautifully designed utility spaces.",
      image: "43.jpg"
    },
    {
      id: 5,
      title: language === 'fr' ? "Intérieur Complet" : "Full Interior",
      description: language === 'fr' ? "Solutions de rangement sur mesure pour une organisation maximale." : "Custom storage solutions for maximum organization.",
      image: "44.jpg"
    },
    {
      id: 6,
      title: language === 'fr' ? "Salle à Manger" : "Dining Room",
      description: language === 'fr' ? "Espaces de vie extérieurs pour le plaisir toute l'année." : "Outdoor living spaces for year-round enjoyment.",
      image: "45.jpg"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Calculate current index based on scroll position
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 32; // 2rem gap
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          if (scrollLeft < scrollWidth - clientWidth - 1) {
            scrollRight();
          } else {
            // Reset to beginning
            setCurrentIndex(0);
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-prime-charcoal dark:text-white mb-4">
            {language === 'fr' 
              ? <>Nos <span className="text-prime-orange">Derniers Projets</span></>
              : <>Our <span className="text-prime-orange">Latest Projects</span></>
            }
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {language === 'fr' 
              ? "Explorez nos transformations résidentielles et commerciales les plus récentes."
              : "Explore our most recent residential and commercial transformations."
            }
          </p>
        </div>

        {/* Dilamco-style Horizontal Slider */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows - Always visible */}
          <button
            onClick={scrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-prime-orange hover:text-white transition-all duration-300 flex items-center justify-center ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-prime-orange hover:text-white transition-all duration-300 flex items-center justify-center ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={!canScrollRight}
            aria-label="Next projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Slider Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto scrollbar-hide scroll-snap-x scroll-snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' },
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'auto',
              willChange: 'scroll-position'
            }}
          >
            <div className="flex gap-8 py-8" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group/card relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex-shrink-0 scroll-snap-start"
                  style={{ 
                    width: 'clamp(280px, 32vw, 400px)',
                    height: 'clamp(350px, 40vw, 500px)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-105"
                      style={{ 
                        imageRendering: 'optimizeSpeed',
                        willChange: 'transform'
                      }}
                    />
                  </div>

                  {/* Number with Orange Fill Animation */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-5xl font-bold text-white/30 drop-shadow-lg transition-all duration-1000 ease-out group-hover/card:text-prime-orange">
                      {project.id}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                  {/* Content Overlay - Slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed drop-shadow-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>

                  {/* Subtle shadow on hover */}
                  <div className="absolute inset-0 shadow-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" 
                       style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* Scroll Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-prime-orange scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-prime-orange/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
