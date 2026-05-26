import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ArrowMotif from '../components/ArrowMotif.jsx';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { projects, personal } from '../data/content';
import './Home.css';

export default function Home() {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-frame">
            <div className="hero-illustration" aria-hidden="true">
              <HandSketchSVG />
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

      {/* ============ FEATURED PROJECTS ============ */}
      <section id="featured" className="section featured">
        <div className="container">
          <header className="section-header">
            <ArrowMotif />
            <p className="eyebrow">{t.home.featuredEyebrow}</p>
            <h2>{t.home.featuredTitle}</h2>
          </header>

          <div className="featured-list">
            {projects.map((p, i) => (
              <Link
                to={`/projects/${p.slug}`}
                key={p.slug}
                className="featured-row"
                aria-label={`${p.number} — ${p.title}`}
              >
                <motion.div
                  className="featured-row-inner"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <span className="featured-num">{p.number}</span>
                  <span className="featured-dots" aria-hidden="true" />
                  <span className="featured-name">{p.title}</span>
                  <span className="featured-arrow" aria-hidden="true">
                    <ArrowRight size={20} />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="featured-grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="see-all">
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
                ? '“Designing sustainable, human-centered products that bridge form, function and feeling.”'
                : '“Form, işlev ve duygu arasında köprü kuran, sürdürülebilir ve insan odaklı ürünler.”'}
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// PORTFOLIO sayfasındaki line-art el çizimi (PDF'ten esinli)
function HandSketchSVG() {
  return (
    <svg
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hand drawing"
      className="hand-sketch"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Pencil */}
        <line x1="280" y1="40" x2="180" y2="140" />
        <line x1="290" y1="50" x2="190" y2="150" />
        <polygon points="180,140 190,150 175,155" fill="currentColor" fillOpacity="0.1" />
        {/* Hand */}
        <path d="M 130 160 Q 145 150 165 145 Q 180 142 195 148 L 210 158 Q 215 165 210 175 L 195 195 Q 175 205 155 200 Q 140 195 130 185 Z" />
        <path d="M 130 185 Q 125 205 135 220 Q 145 230 165 228 L 195 220 Q 215 215 225 200" />
        <path d="M 165 145 Q 168 130 175 125" />
        <path d="M 180 143 Q 183 128 190 124" />
        {/* Scribble */}
        <path d="M 170 200 Q 165 215 175 220 Q 185 215 180 200 Q 175 195 168 205" />
      </g>
    </svg>
  );
}
