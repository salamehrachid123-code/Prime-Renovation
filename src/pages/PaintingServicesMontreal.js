import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PaintingServicesMontreal = ({ language }) => {
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
            {language === 'fr' ? 'Services de Peinture Montréal' : 'Painting Services Montreal'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Transform your Montreal home with professional painting services that enhance your living space 
            and protect your investment. Our expert painting team delivers flawless results for interior and 
            exterior painting projects across Montreal, Laval, West Island, and South Shore.
          </p>
        </section>

        {/* language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Pourquoi Choisir Prime Renovations' : 'Why Choose Prime Renovations'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Expert Montreal Painters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our skilled painting team understands Montreal's unique climate challenges and architectural styles. 
                From heritage homes in Old Montreal to modern condos downtown, we deliver professional results 
                that stand up to local weather conditions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">RBQ Licensed & Insured</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                As licensed RBQ contractors serving Montreal, Laval, West Island, and South Shore, we ensure 
                every painting project meets local standards and regulations. Your property is protected with 
                comprehensive insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Premium Materials & Techniques</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use only high-quality paints and materials from trusted suppliers, combined with proven 
                techniques that ensure long-lasting, beautiful results for your Montreal home.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Color Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our design team provides expert color consultation to help you choose the perfect palette 
                that complements your Montreal home's architecture and your personal style.
              </p>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Ce qui est Inclus' : 'What's Included' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'fr' ? 'Ce qui est Inclus' : 'What\'s Included'} in Our {language === 'fr' ? 'Services de Peinture Montréal' : 'Painting Services Montreal'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Interior Painting</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Walls, ceilings, and trim painting</li>
                <li>• Color consultation and selection</li>
                <li>• Surface preparation and priming</li>
                <li>• Cleanup and protection of furniture</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Exterior Painting</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• House siding and trim painting</li>
                <li>• Deck and fence staining</li>
                <li>• Weather-resistant coatings</li>
                <li>• Pressure washing and preparation</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-prime-orange mb-3">Specialty Finishes</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Faux painting and decorative finishes</li>
                <li>• Cabinet and furniture refinishing</li>
                <li>• Commercial and retail painting</li>
                <li>• Touch-ups and maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* language === 'fr' ? 'Notre Processus' : 'Our Process' */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Painting Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Free in-home consultation to assess your Montreal painting project, 
                discuss colors and finishes, and provide a detailed estimate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preparation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Thorough surface preparation including cleaning, sanding, and priming 
                to ensure optimal paint adhesion and long-lasting results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Painting</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Professional painting application using quality materials and proven 
                techniques for flawless, durable results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-prime-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Final Inspection</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete cleanup and final inspection to ensure your Montreal painting 
                project meets our high standards of quality.
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
            Prime Renovations provides expert painting services throughout the Greater Montreal area. 
            Whether you're in downtown Montreal, the family neighborhoods of Laval, the scenic West Island, 
            or the vibrant South Shore, we bring the same commitment to quality and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-prime-orange mb-4">Montreal Island</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From heritage homes in Old Montreal to modern condos downtown, we specialize in painting 
                projects that respect Montreal's architectural character while adding contemporary appeal.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Painting Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get your free quote today and discover why Montreal homeowners trust Prime Renovations for their painting projects.
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
              → {language === 'fr' ? 'Rénovation de Cuisine Montréal' : 'Kitchen Renovation Montreal'}
            </Link>
            <Link 
              to="/drywall-plaster-services-montreal" 
              className="text-prime-orange hover:text-orange-600 transition-colors"
            >
              → {language === 'fr' ? 'Services de Gypse & Plâtre Montréal' : 'Drywall & Plaster Services Montreal'}
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
                Montreal's trusted renovation company specializing in painting services, kitchen renovations, 
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

export default PaintingServicesMontreal;
