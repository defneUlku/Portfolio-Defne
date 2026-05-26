import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { personal } from '../data/content';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{personal.name}</span>
          <span className="footer-tagline">{t.footer.tagline}</span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            <li><Link to="/">{t.nav.home}</Link></li>
            <li><Link to="/about">{t.nav.about}</Link></li>
            <li><Link to="/projects">{t.nav.projects}</Link></li>
            <li><Link to="/contact">{t.nav.contact}</Link></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${personal.email}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{personal.email}</span>
          </a>
          <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>
            <Phone size={16} aria-hidden="true" />
            <span>{personal.phone}</span>
          </a>
        </div>

        <div className="footer-social" aria-label="Social media">
          <a href={personal.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={personal.social.instagram} aria-label="Instagram"><Instagram size={18} /></a>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>© {year} Ülkü Defne Akın. {t.footer.copyright.replace(/^© \d+ Ülkü Defne Akın\.\s*/, '')}</small>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
          aria-label={t.footer.backToTop}
        >
          <ArrowUp size={16} aria-hidden="true" />
          <span>{t.footer.backToTop}</span>
        </button>
      </div>
    </footer>
  );
}
