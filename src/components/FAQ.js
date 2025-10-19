import React, { useState, useEffect } from 'react';

const FAQ = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: language === 'fr' 
        ? "Combien coûte une rénovation résidentielle typique à Montréal?"
        : "How much does a typical home renovation Montreal cost?",
      answer: language === 'fr' 
        ? "Chaque rénovation est différente — le coût total dépend de la taille du projet, des matériaux et du niveau de personnalisation. Nous commençons par comprendre vos objectifs et votre vision, puis nous fournissons une estimation détaillée et transparente pour que vous sachiez exactement à quoi vous attendre avant que les travaux ne commencent."
        : "Every renovation is different — the total cost depends on the size of the project, materials, and level of customization. We start by understanding your goals and vision, then provide a detailed, transparent estimate so you know exactly what to expect before any work begins."
    },
    {
      question: language === 'fr' 
        ? "Offrez-vous des devis gratuits pour la rénovation de cuisine Montréal?"
        : "Do you provide free estimates for kitchen renovation Montreal?",
      answer: language === 'fr' 
        ? "Oui — nous offrons des devis gratuits et sans engagement pour tous les projets résidentiels et commerciaux. Après une consultation rapide, nous préparerons une proposition claire et détaillée adaptée à votre espace et à vos objectifs."
        : "Yes — we offer free, no-obligation quotes for all residential and commercial projects. After a quick consultation, we'll prepare a clear, itemized proposal tailored to your space and goals."
    },
    {
      question: language === 'fr' 
        ? "Êtes-vous un entrepreneur RBQ licencié en rénovation Montréal?"
        : "Are you a licensed RBQ renovation contractor Montreal?",
      answer: language === 'fr' 
        ? "Absolument. Prime Renovations est entièrement licencié RBQ et détient une assurance responsabilité civile complète, vous donnant une tranquillité d'esprit totale tout au long de votre projet."
        : "Absolutely. Prime Renovations is fully RBQ licensed and carries comprehensive liability insurance, giving you complete peace of mind throughout your project."
    },
    {
      question: language === 'fr' 
        ? "Gérez-vous les permis et inspections pour les rénovations Montréal?"
        : "Do you handle permits and inspections for Montreal renovations?",
      answer: language === 'fr' 
        ? "Oui. Nous nous occupons de tous les permis, dessins et inspections municipales, garantissant que votre rénovation respecte les codes du bâtiment locaux et les normes de sécurité."
        : "Yes. We take care of all permits, drawings, and city inspections, ensuring your renovation complies with local building codes and safety standards."
    },
    {
      question: language === 'fr' 
        ? "Combien de temps prend généralement une rénovation de salle de bain Montréal?"
        : "How long does a bathroom renovation Montreal usually take?",
      answer: language === 'fr' 
        ? "Les délais varient selon la portée du projet. Avant de commencer, nous créons un calendrier clair et des jalons pour que vous sachiez exactement quand vous attendre à chaque phase de votre rénovation."
        : "Timelines vary based on the project scope. Before starting, we create a clear schedule and milestones so you know exactly when to expect each phase of your renovation to be completed."
    },
    {
      question: language === 'fr' 
        ? "Offrez-vous des services de design pour les rénovations commerciales Montréal?"
        : "Do you offer design services for commercial renovations Montreal?",
      answer: language === 'fr' 
        ? "Oui — notre équipe de design interne peut vous aider avec la planification de l'agencement, la sélection des matériaux et la coordination des couleurs, en s'assurant que chaque détail s'aligne avec votre vision et votre budget."
        : "Yes — our in-house design team can help you with layout planning, material selection, and color coordination, making sure every detail aligns with your vision and budget."
    },
    {
      question: language === 'fr' 
        ? "Quelles zones servez-vous pour la rénovation résidentielle Montréal?"
        : "What areas do you serve for home renovation Montreal?",
      answer: language === 'fr' 
        ? "Nous servons fièrement Montréal et les régions environnantes, y compris Laval, l'Ouest-de-l'Île, la Rive-Sud et les Laurentides."
        : "We proudly serve Montreal and surrounding areas, including Laval, the West Island, the South Shore, and the Laurentians."
    },
    {
      question: language === 'fr' 
        ? "Offrez-vous une garantie pour les services d'entrepreneur RBQ en rénovation Montréal?"
        : "Do you offer warranty for RBQ renovation contractor Montreal services?",
      answer: language === 'fr' 
        ? "Oui — tout notre travail est soutenu par une garantie de fabrication complète. Nous nous tenons derrière chaque projet et restons disponibles pour les retouches ou l'entretien même après la completion."
        : "Yes — all our work is backed by a comprehensive workmanship warranty. We stand behind every project and remain available for touch-ups or maintenance even after completion."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden" id="faq-section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' 
              ? <>Rénovation Montréal <span className="text-prime-orange">FAQ</span></>
              : <>Montreal Renovation <span className="text-prime-orange">FAQ</span></>
            }
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'fr' 
              ? "Questions courantes sur la rénovation résidentielle Montréal, la rénovation de cuisine Montréal, et nos services d'entrepreneur RBQ en rénovation"
              : "Common questions about home renovation Montreal, kitchen renovation Montreal, and our RBQ renovation contractor services"
            }
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-6 h-6 text-prime-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-prime-orange to-orange-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === 'fr' ? 'Vous Avez Encore des Questions?' : 'Still Have Questions?'}
            </h3>
            <p className="text-white/90 mb-6">
              {language === 'fr' 
                ? "Notre équipe est là pour vous aider. Contactez-nous pour des réponses personnalisées à vos questions de rénovation."
                : "Our team is here to help. Contact us for personalized answers to your renovation questions."
              }
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-prime-orange font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {language === 'fr' ? 'Contactez-Nous Aujourd\'hui' : 'Contact Us Today'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
