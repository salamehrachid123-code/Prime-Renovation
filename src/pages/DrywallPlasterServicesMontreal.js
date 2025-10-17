import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DrywallPlasterServicesMontreal = ({ language }) => {
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
            {language === 'fr' ? 'Services de Gypse & Plâtre Montréal' : 'Drywall & Plaster Services Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Achieve smooth, professional walls and ceilings with our expert drywall and plaster services in Montreal. 
            From new construction to renovation projects, our skilled team delivers flawless drywall installation, 
            taping, and finishing that creates the perfect foundation for your Montreal home's interior.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Expert Montreal Drywall Specialists</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our experienced drywall team understands the unique challenges of Montreal homes, from heritage 
                buildings with plaster walls to modern condos requiring precise drywall installation. We deliver 
                professional results that meet local building standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure 
                every drywall and plaster project meets local building codes and safety standards. Your 
                investment is protected with comprehensive insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Quality Materials & Techniques</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use only premium drywall materials and employ proven finishing techniques that ensure 
                smooth, durable walls and ceilings that stand up to Montreal's climate challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Complete Drywall Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From installation to finishing, we provide complete drywall services including taping, 
                sanding, and priming to prepare your walls for painting or other finishes.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Services de Gypse & Plâtre Montréal' : 'Drywall & Plaster Services Montreal'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Drywall Installation</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• New drywall installation</li>
                <li>• Drywall repair and patching</li>
                <li>• Soundproofing installation</li>
                <li>• Fire-resistant drywall</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Taping & Finishing</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Professional taping</li>
                <li>• Joint compound application</li>
                <li>• Sanding and smoothing</li>
                <li>• Texture application</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Plaster Work</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Plaster repair and restoration</li>
                <li>• Heritage plaster work</li>
                <li>• Decorative plaster finishes</li>
                <li>• Plaster ceiling repair</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Drywall & Plaster Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Thorough assessment of your Montreal drywall or plaster needs, 
                including measurements and material requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Professional drywall installation or plaster repair using quality materials 
                and proven techniques for optimal results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Finishing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert taping, sanding, and finishing to create smooth, professional 
                walls and ceilings ready for painting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete cleanup and final inspection to ensure your Montreal drywall 
                or plaster work meets our high standards of quality.
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
            Prime Renovations provides expert drywall and plaster services throughout the Greater Montreal area. 
            Whether you're in downtown Montreal, the family neighborhoods of Laval, the scenic West Island, 
            or the vibrant South Shore, we bring the same commitment to quality and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From heritage homes in Old Montreal to modern condos downtown, we specialize in drywall 
                and plaster work that respects Montreal's architectural character while providing contemporary functionality.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Drywall or Plaster Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal homeowners trust Prime Renovations for their drywall and plaster needs.
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
              to="/basement-renovation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → {language === 'fr' ? 'Rénovation de Sous-sol Montréal' : 'Basement Renovation Montreal'}
            </Link>
            <Link 
              to="/painting-services-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → {language === 'fr' ? 'Services de Peinture Montréal' : 'Painting Services Montreal'}
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
                Montreal's trusted renovation company specializing in drywall and plaster services, kitchen renovations, 
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

export default DrywallPlasterServicesMontreal;
