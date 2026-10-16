import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { ru } from './ru';
import { uz } from './uz';

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];
const dictionaries: Record<Lang, Dictionary> = { en, ru, uz };

function detect(): Lang {
  try {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && languages.includes(saved)) return saved;
  } catch { /* storage unavailable */ }
  const nav = navigator.language.slice(0, 2) as Lang;
  return languages.includes(nav) ? nav : 'en';
}

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: Dictionary }
const I18nContext = createContext<Ctx>(null!);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detect);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* ignore */ }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
