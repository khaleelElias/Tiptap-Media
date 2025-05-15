import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Code, Palette, TrendingUp, Smartphone, 
  Briefcase, FileText, CheckCircle 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('webDevelopment');

  useEffect(() => {
    document.title = `Tiptap Media | ${t('services.title')}`;
    
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

  const serviceIcons = {
    webDevelopment: <Code size={40} />,
    uiDesign: <Palette size={40} />,
    digitalMarketing: <TrendingUp size={40} />,
    mobileDevelopment: <Smartphone size={40} />,
    branding: <Briefcase size={40} />,
    contentCreation: <FileText size={40} />,
  };

  const services = [
    'webDevelopment',
    'uiDesign',
    'digitalMarketing',
    'mobileDevelopment',
    'branding',
    'contentCreation',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex mb-12 border-b border-gray-200 fade-in-section opacity-0">
              {services.map((service, index) => (
                <button
                  key={service}
                  className={`text-gray-700 py-4 px-6 text-center hover:text-blue-600 whitespace-nowrap ${
                    activeTab === service
                      ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                      : ''
                  }`}
                  onClick={() => setActiveTab(service)}
                >
                  {t(`services.${service}.title`)}
                </button>
              ))}
            </div>
          </div>
          
          {services.map((service) => (
            <div
              key={service}
              className={`${
                activeTab === service ? 'block' : 'hidden'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-section opacity-0">
                <div>
                  <div className="text-blue-600 mb-6">
                    {serviceIcons[service as keyof typeof serviceIcons]}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t(`services.${service}.title`)}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t(`services.${service}.description`)}
                  </p>
                  
                  <ul className="space-y-4">
                    {t(`services.${service}.features`).map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    src={`https://images.pexels.com/photos/39284${services.indexOf(service) + 1}/pexels-photo-39284${services.indexOf(service) + 1}.jpeg?auto=compress&cs=tinysrgb&w=1600`}
                    alt={t(`services.${service}.title`)}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we approach your projects to ensure exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'We start by understanding your business, goals, and target audience through in-depth discussions.' },
              { title: 'Strategy', description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.' },
              { title: 'Implementation', description: 'Our team of experts brings the strategy to life with cutting-edge technologies and best practices.' },
              { title: 'Optimization', description: 'We continuously monitor, analyze, and optimize to ensure long-term success and maximum ROI.' },
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center fade-in-section opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and technologies to deliver exceptional digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 fade-in-section opacity-0">
            {[
              'React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'Python',
              'WordPress', 'Shopify', 'Magento', 'Laravel', 'Express', 'Django',
            ].map((tech, index) => (
              <div 
                key={tech} 
                className="p-6 bg-gray-50 rounded-lg flex items-center justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How long does a typical project take?',
                answer: "Project timelines vary depending on scope and complexity. A basic website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: 'What is your pricing structure ? ',
                answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer arrangements. Each project is unique, so we provide custom quotes based on your specific requirements and objectives.',
              },
              {
                question: 'Do you provide ongoing support after launch?',
                answer: 'Yes, we offer various maintenance and support packages to ensure your digital solution continues to perform optimally. These can include regular updates, security patches, content updates, and technical support.',
              },
              {
                question: 'How do you handle revisions and feedback?',
                answer: 'We include multiple revision rounds in our process and value your feedback at every stage. Our collaborative approach ensures that we address your concerns and implement changes efficiently to meet your expectations.',
              },
              {
                question: 'Do you work with clients internationally?',
                answer: 'Yes, we work with clients worldwide. Our digital workflow and communication tools allow us to collaborate effectively regardless of geographic location or time zones.',
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-6 fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="list-none flex justify-between items-center cursor-pointer p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform duration-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;