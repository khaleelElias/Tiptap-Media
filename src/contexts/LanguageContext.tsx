import React, { createContext, useState, useEffect, useContext } from 'react';
import { getLanguageFromIP } from '../utils/languageDetection';

// Define supported languages
export type Language = 'en' | 'ar' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  // Set direction based on language
  useEffect(() => {
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Auto-detect language on initial load
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Try to get language from browser
        const browserLang = navigator.language.split('-')[0] as Language;
        
        // If browser language is supported, use it
        if (['en', 'ar', 'sv'].includes(browserLang)) {
          setLanguage(browserLang);
          return;
        }
        
        // Otherwise try to detect from IP
        const detectedLang = await getLanguageFromIP();
        if (detectedLang) {
          setLanguage(detectedLang);
        }
      } catch (error) {
        console.error('Failed to detect language:', error);
        // Default to English if detection fails
        setLanguage('en');
      }
    };

    detectLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};