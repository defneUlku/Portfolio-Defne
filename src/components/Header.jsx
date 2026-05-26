import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import './Header.css';

export default function Header() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ESC ile menüyü kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Defne Akın — Home">
          <span className="logo-mark" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="3" width="26" height="26" stroke="currentColor" strokeWidth="2.5" />
              <text x="16" y="16" fontFamily="Outfit, Helvetica, sans-serif" fontSize="14" fontWeight="500" textAnchor="middle" dominantBaseline="central" fill="currentColor">D</text>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-name">DEFNE AKIN</span>
            <span className="logo-sub">Industrial Design</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => isActive ? 'is-active' : ''}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            onClick={toggle}
            className="lang-toggle"
            aria-label={`${t.common.languageLabel}: ${lang.toUpperCase()}. ${t.common.switchTo} ${lang === 'en' ? 'Türkçe' : 'English'}`}
          >
            <Globe size={16} aria-hidden="true" />
            <span>{lang === 'en' ? 'EN' : 'TR'}</span>
          </button>

          <button
            type="button"
            className="menu-trigger"
            onClick={() => setOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menu}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="menu-close"
          onClick={() => setOpen(false)}
          aria-label={t.nav.close}
        >
          <X size={28} />
        </button>
        <nav aria-label="Mobile">
          <ul>
            {links.map((l, i) => (
              <li key={l.to} style={{ animationDelay: `${i * 60}ms` }}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => isActive ? 'is-active' : ''}
                >
                  <span className="num">0{i + 1}</span>
                  <span>{l.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
