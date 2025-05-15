import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Clock, Tag, ChevronRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    document.title = `Tiptap Media | Blog`;
    
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

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.',
      category: 'webDevelopment',
      date: 'April 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'UI/UX Design Principles Every Business Should Follow',
      excerpt: 'Learn the fundamental design principles that can elevate your digital presence and enhance user experience.',
      category: 'uiDesign',
      date: 'April 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8636622/pexels-photo-8636622.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'How AI is Transforming Digital Marketing Strategies',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses approach digital marketing and customer engagement.',
      category: 'digitalMarketing',
      date: 'April 5, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Mobile-First Development: Why It Matters More Than Ever',
      excerpt: 'With mobile usage continuing to rise, we explore why prioritizing mobile experiences is crucial for business success.',
      category: 'mobileDevelopment',
      date: 'March 30, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Building a Strong Brand Identity in the Digital Age',
      excerpt: 'Learn strategies for creating and maintaining a consistent and compelling brand identity across digital touchpoints.',
      category: 'branding',
      date: 'March 25, 2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/5582861/pexels-photo-5582861.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      title: 'Content Marketing Strategies That Drive Engagement',
      excerpt: 'Explore effective content marketing approaches that can help your business connect with audiences and drive meaningful engagement.',
      category: 'contentCreation',
      date: 'March 20, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in-section opacity-0">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in-section opacity-0 animation-delay-300">
            Insights, tips, and trends from our experts
          </p>
        </div>
      </section>
      
      {/* Blog Categories and Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-section opacity-0">
            <button
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {Object.entries(t('portfolio.categories')).slice(1).map(([key, value]) => (
              <button
                key={key}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {value as string}
              </button>
            ))}
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16 fade-in-section opacity-0">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {t(`portfolio.categories.${filteredPosts[0].category}`)}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        {filteredPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="mt-auto">
                      <a 
                        href={`/blog/${filteredPosts[0].id}`} 
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      >
                        Read Article
                        <ChevronRight size={18} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a href={`/blog/${post.id}`} className="block">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {t(`portfolio.categories.${post.category}`)}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12 fade-in-section opacity-0">
              <h3 className="text-xl font-medium text-gray-700">
                No posts found in this category.
              </h3>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setActiveCategory('all')}
              >
                View All Posts
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center fade-in-section opacity-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with our latest insights, industry trends, and tips for digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;