import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { languages, useI18n } from '@/shared/i18n';
import { Icon, Logo } from '@/shared/ui';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const { t, lang, setLang } = useI18n();
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/team', label: t.nav.team },
    { to: '/contacts', label: t.nav.contacts },
  ];

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__row">
        <Logo />
        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="header__right">
          <div className="lang" role="group" aria-label="Language">
            {languages.map((l) => (
              <button key={l} className={l === lang ? 'is-active' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <button className="header__burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <Icon name={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
