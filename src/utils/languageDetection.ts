import { Language } from '../contexts/LanguageContext';

// Function to get user's language from IP
export const getLanguageFromIP = async (): Promise<Language | null> => {
  try {
    // Using ipapi.co for IP-based geolocation
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Map country codes to supported languages
    const countryToLang: Record<string, Language> = {
      // Arabic-speaking countries
      'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'JO': 'ar', 
      'KW': 'ar', 'LB': 'ar', 'OM': 'ar', 'QA': 'ar', 'SY': 'ar',
      
      // Swedish-speaking countries
      'SE': 'sv', 'FI': 'sv',
      
      // Default for other countries is English
    };
    
    return countryToLang[data.country_code] || 'en';
  } catch (error) {
    console.error('Error detecting language from IP:', error);
    return null;
  }
};

// Function to store language preference in localStorage
export const saveLanguagePreference = (lang: Language): void => {
  localStorage.setItem('preferredLanguage', lang);
};

// Function to get language preference from localStorage
export const getLanguagePreference = (): Language | null => {
  const saved = localStorage.getItem('preferredLanguage') as Language | null;
  return saved && ['en', 'ar', 'sv'].includes(saved) ? saved : null;
};