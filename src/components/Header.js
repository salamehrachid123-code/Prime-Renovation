import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on a service page
  const isServicePage = location.pathname !== '/' && location.pathname.includes('-');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isServicePage 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-0 hover:opacity-80 transition-opacity duration-300">
            <img 
              src={process.env.PUBLIC_URL + "/123.png"} 
              alt="Prime Renovations" 
              className="h-14 w-auto"
            />
            <span className="text-xl font-bold">
              <span className="text-prime-orange">Prime</span>
              <span className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'}`}> Renovations</span>
            </span>
          </Link>

          {/* Spacer to push navigation to center */}
          <div className="flex-1"></div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'} hover:text-prime-orange transition-colors duration-300 font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'} hover:text-prime-orange transition-colors duration-300 font-medium`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'} hover:text-prime-orange transition-colors duration-300 font-medium`}
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'} hover:text-prime-orange transition-colors duration-300 font-medium`}
            >
              Projects
            </button>
          </nav>

          {/* Spacer to push buttons to the right */}
          <div className="flex-1"></div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-prime-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg bg-transparent hover:bg-white/10 dark:hover:bg-gray-800/50 transition-colors duration-300 font-medium"
              aria-label="Toggle language"
            >
              <span className={`${isServicePage ? 'text-prime-charcoal dark:text-white' : isScrolled ? 'text-prime-charcoal dark:text-white' : 'text-white drop-shadow-lg'}`}>
                {language === 'en' ? 'FR' : 'EN'}
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-transparent hover:bg-white/10 dark:hover:bg-gray-800/50 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
