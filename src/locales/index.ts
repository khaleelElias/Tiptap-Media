import en from './en';
import ar from './ar';
import sv from './sv';
import { Language } from '../contexts/LanguageContext';

const translations: Record<Language, typeof en> = {
  en,
  ar,
  sv,
};

export default translations;