import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Lightbulb, Award, Users, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Tiptap Media | ${t('about.title')}`;
    
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
  
  const values = [
    { 
      id: 'innovation', 
      icon: <Lightbulb size={40} />, 
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      id: 'quality', 
      icon: <Award size={40} />, 
      color: 'bg-green-100 text-green-600' 
    },
    { 
      id: 'collaboration', 
      icon: <Users size={40} />, 
      color: 'bg-amber-100 text-amber-600' 
    },
    { 
      id: 'integrity', 
      icon: <Shield size={40} />, 
      color: 'bg-purple-100 text-purple-600' 
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('about.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 fade-in-section opacity-0">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Our team" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 fade-in-section opacity-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('home.intro.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.intro.description')}
              </p>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-md fade-in-section opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-lg text-gray-600">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-md fade-in-section opacity-0 animation-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-lg text-gray-600">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.id} 
                className="text-center p-6 rounded-lg fade-in-section opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`mx-auto w-20 h-20 flex items-center justify-center rounded-full ${value.color} mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`about.values.${value.id}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`about.values.${value.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to where we are today
            </p>
          </div>
          
          <div className="relative border-l-4 border-blue-600 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-6 space-y-12">
            {[
              { year: '2010', title: 'Founded', description: 'Started as a small team of passionate designers and developers.' },
              { year: '2013', title: 'First Major Client', description: 'Secured our first enterprise client and expanded our team.' },
              { year: '2016', title: 'International Expansion', description: 'Opened our first international office and started serving global clients.' },
              { year: '2019', title: 'Industry Recognition', description: 'Won multiple industry awards for our innovative digital solutions.' },
              { year: '2022', title: 'Digital Transformation', description: 'Launched specialized services in AI and machine learning integration.' },
              { year: '2025', title: 'Today', description: 'Leading the industry with cutting-edge digital solutions and a global presence.' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative fade-in-section opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;