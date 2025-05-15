import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, direction } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.services'), path: '/services' },
    { name: t('navigation.portfolio'), path: '/portfolio' },
    { name: t('navigation.team'), path: '/team' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.contact'), path: '/contact' },
  ];

  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'sv', name: 'Svenska' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Tiptap Media
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-10">
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
              >
                <Globe size={20} />
                <span>{languageOptions.find(lang => lang.code === language)?.name}</span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => changeLanguage(option.code as Language)}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        language === option.code ? 'bg-gray-100' : ''
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('general.contactUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguageMenu}
              className={`ml-4 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-expanded={isLanguageMenuOpen}
              aria-haspopup="true"
            >
              <Globe size={20} />
            </button>

            <button
              onClick={toggleMenu}
              className={`ml-4 focus:outline-none ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('general.contactUs')}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => changeLanguage(option.code as Language)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  language === option.code
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;