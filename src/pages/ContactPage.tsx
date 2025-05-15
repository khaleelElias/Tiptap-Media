import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    document.title = `Tiptap Media | ${t('contact.title')}`;
    
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    { 
      icon: <MapPin size={24} />, 
      label: t('contact.info.address'),
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      icon: <Mail size={24} />, 
      label: t('contact.info.email'),
      link: 'mailto:info@tiptapmedia.com',
      color: 'bg-green-100 text-green-600'
    },
    { 
      icon: <Phone size={24} />, 
      label: t('contact.info.phone'),
      link: 'tel:+11234567890',
      color: 'bg-amber-100 text-amber-600'
    },
    { 
      icon: <Clock size={24} />, 
      label: t('contact.info.hours'),
      color: 'bg-purple-100 text-purple-600'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center fade-in-section opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                  {info.icon}
                </div>
                {info.link ? (
                  <a href={info.link} className="text-gray-800 hover:text-blue-600 transition-colors">
                    {info.label}
                  </a>
                ) : (
                  <p className="text-gray-800">{info.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 fade-in-section opacity-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('contact.form.name')}
                </h2>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    {t('contact.form.success')}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                    {t('contact.form.error')}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="webDevelopment">{t('services.webDevelopment.title')}</option>
                        <option value="uiDesign">{t('services.uiDesign.title')}</option>
                        <option value="digitalMarketing">{t('services.digitalMarketing.title')}</option>
                        <option value="mobileDevelopment">{t('services.mobileDevelopment.title')}</option>
                        <option value="branding">{t('services.branding.title')}</option>
                        <option value="contentCreation">{t('services.contentCreation.title')}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    {t('contact.form.submit')}
                    <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
              <div className="lg:w-1/2 h-[500px] bg-gray-200 fade-in-section opacity-0 animation-delay-300">
                {/* Replace with an actual map implementation if needed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081434!2d2.2922926156694167!3d48.85837360866264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1651233550606!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section opacity-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you transform your vision into reality. Let's create something amazing together.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            {t('general.getStarted')}
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;