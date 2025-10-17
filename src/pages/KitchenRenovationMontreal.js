import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const KitchenRenovationMontreal = ({ language }) => {
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
            {language === 'fr' ? 'Rénovation de Cuisine Montréal' : 'Kitchen Renovation Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Transform your Montreal kitchen into a modern, functional space that reflects your style and enhances your daily life. 
            Our expert kitchen renovation Montreal services combine innovative design with expert craftsmanship to create the perfect 
            cooking and entertaining space for your home.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure every kitchen 
                renovation meets the highest standards of quality and safety. Our comprehensive insurance coverage protects 
                your investment throughout the project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Local Montreal Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over a decade of experience in Montreal kitchen renovations, we understand the unique challenges of 
                local homes, from heritage buildings to modern condos. Our team knows Montreal's building codes and 
                permit requirements inside and out.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Custom Design Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Every Montreal kitchen is unique, and our design team creates custom solutions that maximize your space 
                while reflecting your personal style. From galley kitchens to open-concept designs, we bring your vision to life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Quality Materials & Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use only premium materials and work with trusted suppliers throughout Montreal and the surrounding areas. 
                Our skilled craftsmen deliver exceptional results that stand the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Rénovation de Cuisine Montréal' : 'Kitchen Renovation Montreal'} Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Design & Planning</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 3D kitchen design and visualization</li>
                <li>• Space planning and layout optimization</li>
                <li>• Material selection and color coordination</li>
                <li>• Lighting design and electrical planning</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Construction & Installation</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Custom cabinetry and millwork</li>
                <li>• Countertop installation (quartz, granite, marble)</li>
                <li>• Backsplash and tile work</li>
                <li>• Plumbing and electrical upgrades</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Finishing & Details</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Painting and wall treatments</li>
                <li>• Flooring installation</li>
                <li>• Hardware and fixture installation</li>
                <li>• Final cleaning and inspection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Kitchen Renovation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Free in-home consultation to discuss your vision, budget, and timeline for your Montreal kitchen renovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Custom 3D design and detailed planning to bring your Montreal kitchen renovation vision to life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Build</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert construction and installation by our skilled Montreal renovation team with daily progress updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Walkthrough</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete inspection and handover of your beautiful new Montreal kitchen with warranty coverage.
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
            Prime Renovations proudly serves the Greater Montreal area with expert kitchen renovation services. 
            Whether you're in the heart of Montreal, the family-friendly neighborhoods of Laval, the scenic West Island, 
            or the vibrant South Shore communities, we bring the same commitment to quality and customer service.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From Old Montreal heritage homes to modern downtown condos, we specialize in kitchen renovations 
                that respect Montreal's architectural diversity while incorporating contemporary functionality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Greater Montreal Area</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Serving Laval, West Island, South Shore, and the Laurentians with the same high standards of 
                craftsmanship and customer service that have made us Montreal's trusted renovation company.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-prime-orange to-orange-600 rounded-2xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Kitchen Renovation?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal homeowners trust Prime Renovations for their kitchen renovation projects.
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
              → {language === 'fr' ? 'Rénovation de Salle de Bain Montréal' : 'Bathroom Renovation Montreal'}
            </Link>
            <Link 
              to="/basement-renovation-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → {language === 'fr' ? 'Rénovation de Sous-sol Montréal' : 'Basement Renovation Montreal'}
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
                Montreal's trusted renovation company specializing in kitchen renovations, bathroom renovations, 
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

export default KitchenRenovationMontreal;
