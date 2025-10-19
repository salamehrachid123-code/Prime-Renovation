import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LightingDesignElectricalUpgradesMontreal = ({ language }) => {
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
            {language === 'fr' ? 'Design d\'Éclairage & Mises à Niveau Électriques Montréal' : 'Lighting Design & Electrical Upgrades Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Illuminate your Montreal home with expert lighting design and electrical upgrade services. From modern 
            LED installations to complete electrical system upgrades, we create beautiful, functional lighting 
            solutions that enhance your living space while ensuring safety and energy efficiency.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Licensed Montreal Electricians</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our certified electricians are fully licensed and experienced in Montreal's electrical codes and 
                regulations. We ensure every lighting and electrical project meets local safety standards while 
                delivering beautiful, functional results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure 
                every electrical project meets local building codes and safety standards. Your investment 
                is protected with comprehensive insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Energy Efficiency Focus</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We specialize in energy-efficient lighting solutions that reduce your Montreal home's energy 
                consumption while providing beautiful, functional illumination for every space.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Custom Lighting Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our design team creates custom lighting solutions that enhance your Montreal home's architecture 
                while providing the perfect ambiance for every room and activity.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Design d\'Éclairage & Mises à Niveau Électriques Montréal' : 'Lighting Design & Electrical Upgrades Montreal'} Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Lighting Design</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Custom lighting layouts</li>
                <li>• LED lighting installation</li>
                <li>• Dimmer switch installation</li>
                <li>• Smart lighting systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Electrical Upgrades</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Electrical panel upgrades</li>
                <li>• Outlet and switch installation</li>
                <li>• GFCI outlet installation</li>
                <li>• Electrical safety inspections</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Specialty Lighting</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Under-cabinet lighting</li>
                <li>• Recessed lighting</li>
                <li>• Chandelier installation</li>
                <li>• Outdoor lighting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Lighting Design & Electrical Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Free in-home consultation to assess your Montreal lighting and electrical needs, 
                discuss your vision, and provide a detailed project estimate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Custom lighting design and electrical planning for your Montreal home, 
                including energy-efficient solutions and smart home integration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Installation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Professional electrical and lighting installation by our skilled Montreal team 
                with daily progress updates and quality control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete testing and final inspection to ensure your Montreal lighting and electrical 
                systems meet our high standards of quality and safety.
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
            Prime Renovations provides expert lighting design and electrical upgrade services throughout the Greater Montreal area. 
            Whether you're in downtown Montreal, the family neighborhoods of Laval, the scenic West Island, 
            or the vibrant South Shore, we bring the same commitment to quality and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From heritage homes in Old Montreal to modern condos downtown, we specialize in lighting 
                and electrical solutions that respect Montreal's architectural character while providing contemporary functionality.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Lighting or Electrical Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal homeowners trust Prime Renovations for their lighting and electrical needs.
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
              to="/bathroom-renovation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Rénovation de Salle de Bain Montréal' : 'Bathroom Renovation Montreal'
            </Link>
            <Link 
              to="/kitchen-renovation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → language === 'fr' ? 'Rénovation de Cuisine Montréal' : 'Kitchen Renovation Montreal'
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
                Montreal's trusted renovation company specializing in lighting design and electrical upgrades, kitchen renovations, 
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

export default LightingDesignElectricalUpgradesMontreal;
