import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OfficeRetailRenovationMontreal = ({ language }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Rénovation de Bureaux & Commerce de Détail Montréal' : 'Office & Retail Renovation Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Transform your Montreal business space with expert office and retail renovation services. From modern 
            office environments to customer-focused retail spaces, we create functional, inspiring commercial 
            environments that drive success and enhance your business operations in Montreal's competitive market.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Commercial Renovation Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our experienced team understands the unique requirements of Montreal's commercial spaces, from 
                downtown office towers to retail storefronts. We deliver renovations that meet business needs 
                while complying with local commercial building codes and regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure 
                every commercial renovation meets local building codes and safety standards. Your business 
                investment is protected with comprehensive insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Minimal Business Disruption</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We understand that time is money in business. Our team works efficiently to minimize disruption 
                to your Montreal business operations while delivering high-quality results on schedule.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Custom Business Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Every Montreal business is unique, and our design team creates custom renovation solutions that 
                enhance productivity, customer experience, and brand identity while meeting your specific operational needs.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Rénovation de Bureaux & Commerce de Détail Montréal' : 'Office & Retail Renovation Montreal'} Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Office Renovations</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Open-concept office design</li>
                <li>• Private office spaces</li>
                <li>• Meeting room construction</li>
                <li>• Reception area design</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Retail Buildouts</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Store layout optimization</li>
                <li>• Display case installation</li>
                <li>• Checkout counter design</li>
                <li>• Customer flow planning</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Commercial Features</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Commercial flooring</li>
                <li>• Lighting and electrical</li>
                <li>• HVAC and plumbing</li>
                <li>• Security system integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Office & Retail Renovation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Free business consultation to assess your Montreal commercial renovation needs, 
                discuss your vision, and provide a detailed project estimate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Custom commercial design and detailed planning for your Montreal business space, 
                including permit applications and timeline coordination.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Construction</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert construction and installation by our skilled Montreal team with minimal 
                business disruption and daily progress updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete cleanup and final inspection to ensure your Montreal commercial renovation 
                meets our high standards of quality and functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Servir Montréal & Régions Avoisinantes' : 'Serving Montreal & Surrounding Areas'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Prime Renovations provides expert office and retail renovation services throughout the Greater Montreal area. 
            Whether you're in downtown Montreal, the business districts of Laval, the commercial areas of West Island, 
            or the vibrant South Shore, we bring the same commitment to quality and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From heritage buildings in Old Montreal to modern office towers downtown, we specialize in commercial 
                renovations that respect Montreal's architectural character while providing contemporary functionality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Greater Montreal Area</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Serving Laval, West Island, South Shore, and the Laurentians with the same high standards 
                of craftsmanship and customer service that have made us Montreal's trusted renovation company.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-prime-orange to-orange-600 rounded-2xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Office or Retail Renovation?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal businesses trust Prime Renovations for their commercial renovation needs.
          </p>
          <Link 
            to="/" 
            className="bg-white text-prime-orange font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
{language === 'fr' ? 'Obtenir un Devis Gratuit' : 'Get a Free Quote'}
          </Link>
        </section>

        {/* Related Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              to="/kitchen-renovation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Rénovation de Cuisine Montréal' : 'Kitchen Renovation Montreal'
            </Link>
            <Link 
              to="/lighting-design-electrical-upgrades-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Design d'Éclairage & Mises à Niveau Électriques Montréal' : 'Lighting Design & Electrical Upgrades Montreal'
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-prime-orange mb-4">Prime Renovations</h3>
              <p className="text-gray-300 mb-4">
                Montreal's trusted renovation company specializing in office and retail renovations, kitchen renovations, 
                and commercial renovations across the Greater Montreal area.
              </p>
              <p className="text-gray-300">
                RBQ Licensed | Phone: (514) 512-6001 | Email: rachid@prime-renovation.ca
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <p className="text-gray-300">
                Montreal, Laval, West Island, South Shore, Laurentians
              </p>
              <Link 
                to="/" 
                className="text-prime-orange hover:text-orange-600 transition-colors mt-4 inline-block"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OfficeRetailRenovationMontreal;
