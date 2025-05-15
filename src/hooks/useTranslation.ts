import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales';
import { get } from 'lodash';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (path: string) => {
    const translation = get(translations[language], path);
    
    if (!translation) {
      console.warn(`Translation not found for path: ${path} in language: ${language}`);
      return path;
    }
    
    return translation;
  };
  
  return { t };
};