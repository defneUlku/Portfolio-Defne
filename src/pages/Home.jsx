import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import ArrowMotif from '../components/ArrowMotif.jsx';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { projects, projectTypes, personal } from '../data/content';
import './Home.css';

export default function Home() {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-frame">
            <div className="hero-illustration">
              <img src="/images/general/hand-sketch.png" alt="Hand drawing with a pencil" className="hand-sketch" />
            </div>

            <p className="eyebrow hero-eyebrow">{t.home.eyebrow}</p>

            <h1 className="display hero-title">
              <span className="hero-title-line">{t.home.titleA}</span>
            </h1>
            <p className="hero-sub serif">{t.home.titleB}</p>

            <p className="hero-tagline">{t.home.tagline}</p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                {t.home.ctaPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn">{t.home.ctaSecondary}</Link>
            </div>
          </div>

          <a href="#featured" className="scroll-indicator" aria-label={t.common.scrollDown}>
            <span>{t.common.scrollDown}</span>
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ============ EDITORIAL PROJECTS ============ */}
      <section id="featured" className="section editorial-section">
        <div className="container">
          <header className="section-header editorial-header">
            <ArrowMotif />
            <p className="eyebrow">{t.home.featuredEyebrow}</p>
            <h2>{t.home.featuredTitle}</h2>
          </header>

          <div className="editorial-list">
            {projects.map((p, i) => {
              const reverse = i % 2 === 1;
              const typeLabel = projectTypes[p.type]?.[lang] ?? '';
              return (
                <motion.article
                  key={p.slug}
                  className={`editorial-row ${reverse ? 'is-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/projects/${p.slug}`} className="editorial-media">
                    <img src={p.cover} alt="" loading="lazy" />
                    <span className="editorial-overlay" aria-hidden="true" />
                  </Link>

                  <div className="editorial-text">
                    <span className="editorial-num">{p.number}</span>
                    <span className="editorial-meta">
                      <span>{typeLabel}</span>
                      <span className="editorial-meta-dot" aria-hidden="true" />
                      <span>{p.year}</span>
                    </span>
                    <h3 className="editorial-title">{p.title}</h3>
                    <p className="editorial-tagline serif">{tr(p.tagline, lang)}</p>
                    <Link to={`/projects/${p.slug}`} className="editorial-cta">
                      <span>{t.common.viewProject}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="editorial-end">
            <Link to="/projects" className="btn">
              {t.nav.projects}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="section about-preview">
        <div className="container about-preview-inner">
          <div className="about-preview-text">
            <p className="eyebrow">{t.home.aboutPreviewEyebrow}</p>
            <h2>{personal.name}</h2>
            <p>{t.about.bio.split('.')[0]}.</p>
            <Link to="/about" className="link-arrow">
              {t.home.aboutPreviewCta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-preview-aside l-frame">
            <p className="serif quote">
              {lang === 'en'
                ? '"Designing sustainable, human-centered products that bridge form, function and feeling."'
                : '"Form, islev ve duygu arasinda kopru kuran, surdurulebilir ve insan odakli urunler."'}
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

