import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeckPatioConstructionMontreal = ({ language }) => {
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
            {language === 'fr' ? 'Construction de Terrasses & Patios Montréal' : 'Deck & Patio Construction Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Create stunning outdoor living spaces with our expert deck and patio construction services in Montreal. 
            From custom wooden decks to elegant stone patios, we design and build outdoor spaces that enhance 
            your home's value and provide year-round enjoyment for Montreal families.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Climate Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our experienced team understands Montreal's unique climate challenges, from harsh winters to 
                humid summers. We design and build decks and patios that withstand local weather conditions 
                while maintaining their beauty and functionality year-round.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure 
                every deck and patio construction meets local building codes and safety standards. Your 
                investment is protected with comprehensive insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Custom Design Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Every Montreal property is unique, and our design team creates custom outdoor spaces that 
                maximize your available space while complementing your home's architecture and your lifestyle needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Premium Materials & Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use only high-quality materials from trusted suppliers and employ skilled craftsmen who 
                deliver exceptional results that stand the test of time in Montreal's challenging climate.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Construction de Terrasses & Patios Montréal' : 'Deck & Patio Construction Montreal'} Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Deck Construction</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Custom wooden deck design</li>
                <li>• Composite decking installation</li>
                <li>• Railings and safety features</li>
                <li>• Staining and weatherproofing</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Patio Construction</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Stone and concrete patios</li>
                <li>• Interlocking pavers</li>
                <li>• Drainage and grading</li>
                <li>• Landscaping integration</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Outdoor Features</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Pergolas and gazebos</li>
                <li>• Outdoor kitchens and bars</li>
                <li>• Fire pits and seating areas</li>
                <li>• Lighting and electrical</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Deck & Patio Construction Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Free in-home consultation to assess your Montreal outdoor space, 
                discuss your vision, and provide a detailed project estimate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Custom 3D design and detailed planning for your Montreal deck or patio, 
                including material selection and permit applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Construction</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert construction and installation by our skilled Montreal team 
                with daily progress updates and quality control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete cleanup and final inspection to ensure your Montreal deck or patio 
                meets our high standards of quality and safety.
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
            Prime Renovations provides expert deck and patio construction services throughout the Greater Montreal area. 
            Whether you're in downtown Montreal, the family neighborhoods of Laval, the scenic West Island, 
            or the vibrant South Shore, we bring the same commitment to quality and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From heritage homes in Old Montreal to modern condos downtown, we specialize in outdoor 
                spaces that respect Montreal's architectural character while adding contemporary functionality.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Deck or Patio Construction?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal homeowners trust Prime Renovations for their outdoor projects.
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
              to="/siding-installation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Installation de Revêtement Montréal' : 'Siding Installation Montreal'
            </Link>
            <Link 
              to="/roofing-repair-replacement-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Réparation & Remplacement de Toiture Montréal' : 'Roofing Repair & Replacement Montreal'
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
                Montreal's trusted renovation company specializing in deck and patio construction, kitchen renovations, 
                and commercial renovations across the Greater Montreal area.
              </p>
              <p className="text-gray-300">
                RBQ License: 34JV4 | Phone: (514) 512-6001 | Email: rachid@prime-renovation.ca
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

export default DeckPatioConstructionMontreal;
