import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Agency Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 inline-block">
              Tiptap Media
            </Link>
            <p className="text-gray-400 mt-4">{t('footer.description')}</p>
            <div className="mt-6 flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={direction === 'rtl' ? 'mr-8' : 'ml-8'}>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.terms')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.careers')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('general.ourServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-development" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.webDevelopment.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#ui-design" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.uiDesign.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.digitalMarketing.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#mobile-development" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.mobileDevelopment.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">{t('footer.newsletter.description')}</p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200 flex items-center justify-center"
                  aria-label={t('footer.newsletter.submit')}
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          <div className="mt-4 md:mt-0">
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              {t('general.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;