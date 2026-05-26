import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { personal, education, experience, skills } from '../data/content';
import './About.css';

export default function About() {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="about-name">{personal.name}</h1>
          <p className="about-role serif">Industrial Designer · İzmir, Türkiye</p>
          <p className="about-bio">{t.about.bio}</p>

          <ul className="about-quick-contact" aria-label="Contact information">
            <li><a href={`mailto:${personal.email}`}><Mail size={16} aria-hidden="true" /> {personal.email}</a></li>
            <li><a href={`tel:${personal.phone.replace(/\s/g, '')}`}><Phone size={16} aria-hidden="true" /> {personal.phone}</a></li>
            <li><span><MapPin size={16} aria-hidden="true" /> {personal.location}</span></li>
          </ul>
        </div>
      </section>

      <section className="section about-grid-section">
        <div className="container about-grid">
          {/* Eğitim */}
          <div className="about-block">
            <h2>{t.about.educationTitle}</h2>
            <ol className="timeline" aria-label={t.about.educationTitle}>
              {education.map((e, i) => (
                <motion.li
                  key={i}
                  className={e.current ? 'is-current' : ''}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-years">{e.years}</span>
                    <h3>{tr(e.institution, lang)}</h3>
                    <p>{tr(e.degree, lang)}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Deneyim */}
          <div className="about-block">
            <h2>{t.about.experienceTitle}</h2>
            <ol className="timeline" aria-label={t.about.experienceTitle}>
              {experience.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-years">{e.years}</span>
                    <h3>{e.company}</h3>
                    <p>{tr(e.role, lang)}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Yetenekler */}
      <section className="section skills-section">
        <div className="container skills-grid">
          <div className="skills-block">
            <h2>{t.about.digitalSkillsTitle}</h2>
            <ul className="skill-list">
              {skills.digital.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="skills-block">
            <h2>{t.about.analogueSkillsTitle}</h2>
            <ul className="skill-list">
              {skills.analogue[lang].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container about-cta-inner l-frame">
          <h2>{lang === 'en' ? "Let's work together." : 'Birlikte çalışalım.'}</h2>
          <p>{lang === 'en' ? 'Available for internships, collaborations and design conversations.' : 'Staj, iş birliği ve tasarım sohbetleri için açığım.'}</p>
          <Link to="/contact" className="btn btn-primary">
            {t.common.getInTouch}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
