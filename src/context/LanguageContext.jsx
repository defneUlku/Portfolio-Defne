import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ui } from '../data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage?.getItem('lang');
    if (stored === 'en' || stored === 'tr') return stored;
    // browser dilinden otomatik
    const nav = navigator.language?.toLowerCase() || '';
    return nav.startsWith('tr') ? 'tr' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage?.setItem('lang', lang);
    } catch (e) {
      // sessionStorage / localStorage erişilemiyor olabilir
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === 'en' ? 'tr' : 'en'));
  }, []);

  const t = ui[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

// Yardımcı: { en: '...', tr: '...' } objesinden veya tek string'ten metin al
export function tr(obj, lang) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] ?? obj.en ?? '';
}
