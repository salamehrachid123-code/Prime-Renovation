import React, { useState } from 'react';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use different endpoints for development vs production
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/contact' 
        : 'http://localhost:3001/api/contact';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Website",
      value: "prime-renovations.ca",
      link: "https://prime-renovations.ca"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "(514) 512-6001",
      link: "tel:+15145126001"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "rachid@prime-renovation.ca",
      link: "mailto:rachid@prime-renovation.ca"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "RBQ Licensed",
      value: "Licensed",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-prime-charcoal dark:text-white mb-6">
            {language === 'fr' 
              ? <>Entrer en <span className="text-prime-orange">Contact</span></>
              : <>Get In <span className="text-prime-orange">Touch</span></>
            }
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'fr' 
              ? "Prêt à transformer votre espace? Contactez-nous aujourd'hui pour une consultation gratuite et donnons vie à votre vision de rénovation."
              : "Ready to transform your space? Contact us today for a free consultation and let's bring your renovation vision to life."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-prime-charcoal dark:text-white mb-6">
                {language === 'fr' ? 'Envoyez-nous un Message' : 'Send us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'fr' ? 'Nom Complet *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-prime-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'fr' ? 'Adresse Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-prime-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'fr' ? 'Numéro de Téléphone' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-prime-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="(514) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'fr' ? 'Service d\'Intérêt' : 'Service of Interest'}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-prime-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    <option value="">
                      {language === 'fr' ? 'Sélectionnez un service' : 'Select a service'}
                    </option>
                    <option value="kitchen-renovation">
                      {language === 'fr' ? 'Rénovation de Cuisine' : 'Kitchen Renovation'}
                    </option>
                    <option value="bathroom-renovation">
                      {language === 'fr' ? 'Rénovation de Salle de Bain' : 'Bathroom Renovation'}
                    </option>
                    <option value="basement-renovation">
                      {language === 'fr' ? 'Rénovation de Sous-sol' : 'Basement Renovation'}
                    </option>
                    <option value="painting">
                      {language === 'fr' ? 'Services de Peinture' : 'Painting Services'}
                    </option>
                    <option value="flooring">
                      {language === 'fr' ? 'Installation de Planchers' : 'Flooring Installation'}
                    </option>
                    <option value="other">
                      {language === 'fr' ? 'Autre' : 'Other'}
                    </option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'fr' ? 'Détails du Projet *' : 'Project Details *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-prime-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                    placeholder={language === 'fr' 
                      ? "Parlez-nous de votre projet de rénovation, échéancier et exigences spécifiques..."
                      : "Tell us about your renovation project, timeline, and any specific requirements..."
                    }
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">
                      {language === 'fr' 
                        ? '✅ Message envoyé avec succès! Nous vous répondrons bientôt.' 
                        : '✅ Message sent successfully! We\'ll get back to you soon.'
                      }
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200">
                      {language === 'fr' 
                        ? '❌ Erreur lors de l\'envoi. Veuillez réessayer.' 
                        : '❌ Error sending message. Please try again.'
                      }
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting 
                    ? (language === 'fr' ? 'Envoi en cours...' : 'Sending...') 
                    : (language === 'fr' ? 'Envoyer le Message' : 'Send Message')
                  }
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-prime-charcoal dark:text-white mb-6">
                  {language === 'fr' 
                    ? <>Informations de <span className="text-prime-orange">Contact</span></>
                    : <>Contact <span className="text-prime-orange">Information</span></>
                  }
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === 'fr' 
                    ? "Nous sommes là pour vous aider à chaque étape. Contactez-nous en utilisant l'une des méthodes ci-dessous, et nous vous répondrons dans les 24 heures."
                    : "We're here to help you every step of the way. Reach out to us using any of the methods below, and we'll get back to you within 24 hours."
                  }
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-prime-orange/10 dark:bg-prime-orange/20 rounded-lg flex items-center justify-center text-prime-orange">
                      {info.icon}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-prime-charcoal dark:text-white">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-prime-orange hover:text-orange-600 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-prime-orange/5 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-prime-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Contact;
