import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Code, Palette, TrendingUp, Smartphone, 
  Briefcase, FileText, ChevronRight, ArrowRight
} from 'lucide-react';

// Components
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCounter from '../components/StatsCounter';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { direction } = useLanguage();

  useEffect(() => {
    // Change page title on component mount
    document.title = 'Tiptap Media | Digital Excellence';
    
    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-section').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const serviceIcons = {
    webDevelopment: <Code size={32} />,
    uiDesign: <Palette size={32} />,
    digitalMarketing: <TrendingUp size={32} />,
    mobileDevelopment: <Smartphone size={32} />,
    branding: <Briefcase size={32} />,
    contentCreation: <FileText size={32} />,
  };

  const stats = [
    { value: 200, label: t('home.stats.clients') },
    { value: 350, label: t('home.stats.projects') },
    { value: 40, label: t('home.stats.awards') },
    { value: 15, label: t('home.stats.years') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in-section opacity-0">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-section opacity-0 animation-delay-600">
            <Link to="/portfolio" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center">
              {t('home.hero.cta')}
              <ChevronRight className={`ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} size={18} />
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
              {t('general.contactUs')}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce bg-white/30 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('home.intro.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t('home.intro.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <StatsCounter 
                  key={index} 
                  value={stat.value} 
                  label={stat.label} 
                  delay={index * 200} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['webDevelopment', 'uiDesign', 'digitalMarketing', 'mobileDevelopment', 'branding', 'contentCreation'].map((service, index) => (
              <ServiceCard
                key={service}
                title={t(`services.${service}.title`)}
                description={t(`services.${service}.description`)}
                icon={serviceIcons[service as keyof typeof serviceIcons]}
                features={t(`services.${service}.features`)}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-section opacity-0">
            <Link to="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              {t('general.learnMore')}
              <ArrowRight className={`ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('portfolio.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t('portfolio.projects').slice(0, 3).map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg fade-in-section opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={`https://images.pexels.com/photos/39284${index + 1}/pexels-photo-39284${index + 1}.jpeg?auto=compress&cs=tinysrgb&w=1600`} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {t(`portfolio.categories.${project.category}`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-section opacity-0">
            <Link to="/portfolio" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              {t('general.viewPortfolio')}
              <ArrowRight className={`ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('testimonials.items').map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                company={testimonial.company}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden fade-in-section opacity-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t('contact.subtitle')}
                </p>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
                >
                  {t('general.contactUs')}
                  <ChevronRight className={`ml-2 ${direction === 'rtl' ? 'rotate-180' : ''}`} size={18} />
                </Link>
              </div>
              <div className="md:w-1/2 bg-gray-900 relative min-h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Team collaboration" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;