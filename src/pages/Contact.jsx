import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Check } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { personal } from '../data/content';
import './Contact.css';

export default function Contact() {
  const { lang, t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo davranışı - mailto açar
    const subject = encodeURIComponent(`Portfolio contact - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <PageTransition>
      <section className="contact-hero">
        <div className="container">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1>{t.contact.title}</h1>
          <p className="contact-sub">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>{t.contact.directContact}</h2>
            <ul className="contact-list">
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <span className="contact-label">{lang === 'en' ? 'Phone' : 'Telefon'}</span>
                  <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a>
                </div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="contact-label">{lang === 'en' ? 'Location' : 'Konum'}</span>
                  <span>{personal.location}</span>
                </div>
              </li>
            </ul>

            <div className="contact-social">
              <a href={personal.social.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={personal.social.instagram} aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <form className="contact-form l-frame" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">{t.contact.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn" disabled={sent}>
              {sent ? (
                <>
                  <Check size={18} aria-hidden="true" />
                  {t.contact.sent}
                </>
              ) : (
                <>
                  <Send size={18} aria-hidden="true" />
                  {t.contact.submit}
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
