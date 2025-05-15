import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamPage: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = `Tiptap Media | ${t('team.title')}`;
    
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

  const teamMembers = t('team.members');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            {t('team.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            {t('team.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member: any, index: number) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={`https://images.pexels.com/photos/2${1048860 + index}/pexels-photo-2${1048860 + index}.jpeg?auto=compress&cs=tinysrgb&w=1600`} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300">
                          <Linkedin size={20} className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300">
                          <Twitter size={20} className="text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300">
                          <Mail size={20} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Tiptap Media, we believe in fostering a culture of creativity, collaboration, and continuous growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section opacity-0">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="fade-in-section opacity-0 animation-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Sets Us Apart
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Passion for Excellence</h4>
                  <p className="text-gray-600">
                    We are driven by a commitment to delivering exceptional work that exceeds expectations and makes a real impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Approach</h4>
                  <p className="text-gray-600">
                    We work closely as a team and with our clients, fostering open communication and shared ownership of projects.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                  <p className="text-gray-600">
                    We invest in our team's growth through ongoing education, skill development, and exposure to new technologies.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h4>
                  <p className="text-gray-600">
                    We believe in maintaining a healthy balance between professional commitments and personal well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in-section opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We're always looking for talented individuals who are passionate about digital innovation and want to make an impact.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6">Current Openings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Senior React Developer', location: 'Remote', type: 'Full-time' },
                  { title: 'UX/UI Designer', location: 'New York', type: 'Full-time' },
                  { title: 'Digital Marketing Specialist', location: 'London', type: 'Full-time' },
                  { title: 'Project Manager', location: 'Remote', type: 'Contract' },
                ].map((job, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                    <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                    <div className="flex space-x-4 mb-4">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{job.location}</span>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                    <a href="#" className="inline-block text-white underline hover:text-blue-200 transition-colors duration-200">
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="/careers" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors duration-300 inline-block"
                >
                  View All Openings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;