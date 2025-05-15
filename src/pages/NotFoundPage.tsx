import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = 'Tiptap Media | Page Not Found';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
        >
          {t('navigation.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;