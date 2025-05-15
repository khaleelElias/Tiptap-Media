import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    document.title = `Tiptap Media | ${t('portfolio.title')}`;
    
    // Animation observer
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
  }, [t]);

  const projects = t('portfolio.projects');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((project: any) => project.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Portfolio Filter and Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-section opacity-0">
            {Object.entries(t('portfolio.categories') as Record<string, string>).map(([key, value]) => (
              <button
                key={key}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeFilter === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(key)}
              >
                {value}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any, index: number) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.pexels.com/photos/39284${index + 1}/pexels-photo-39284${index + 1}.jpeg?auto=compress&cs=tinysrgb&w=1600`} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      {t(`portfolio.categories.${project.category}`)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed insights into our most challenging and successful projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'E-commerce Platform Redesign',
                client: 'Fashion Retailer',
                challenge: 'Overhaul an outdated e-commerce platform to improve user experience and increase conversions.',
                solution: 'Implemented a modern, responsive design with streamlined checkout process and personalized recommendations.',
                results: '40% increase in conversions, 25% reduction in cart abandonment, and 50% increase in mobile purchases.',
                image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600'
              },
              {
                title: 'Financial Services Mobile App',
                client: 'Banking Institution',
                challenge: 'Create a secure, user-friendly mobile banking application with advanced features.',
                solution: 'Developed a native app with biometric authentication, real-time transactions, and personalized financial insights.',
                results: '30% increase in mobile banking users, 4.8/5 app store rating, and 80% reduction in support calls.',
                image: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1600'
              }
            ].map((caseStudy, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden fade-in-section opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-600 mb-4">Client: {caseStudy.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-1">Results:</h4>
                      <p className="text-gray-600">{caseStudy.results}</p>
                    </div>
                    
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                      Read Full Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and create exceptional experiences for your users.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            {t('general.contactUs')}
          </a>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;