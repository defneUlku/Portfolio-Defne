import { lazy, Suspense } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Box } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { projects, projectTypes } from '../data/content';
import './ProjectDetail.css';

// 3D viewer'i lazy-load: sadece model olan projelerde indir
const ModelViewer = lazy(() => import('../components/ModelViewer.jsx'));

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLang();

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const typeLabel = projectTypes[project.type]?.[lang] ?? '';

  return (
    <PageTransition>
      <section className="project-hero">
        <div className="project-hero-bg" aria-hidden="true">
          <img src={project.cover} alt="" />
          <div className="project-hero-overlay" />
        </div>
        <div className="container project-hero-content">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>{t.common.backToProjects}</span>
          </Link>
          <p className="eyebrow">{typeLabel} · {project.year}</p>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-tagline serif">{tr(project.tagline, lang)}</p>
        </div>
      </section>

      <section className="section project-description">
        <div className="container-narrow">
          <motion.div
            className="l-frame project-description-inner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">
              {lang === 'en' ? `What is ${project.title}?` : `${project.title} nedir?`}
            </p>
            <p className="project-description-body">{tr(project.description, lang)}</p>
          </motion.div>
        </div>
      </section>

      {project.model && (
        <section className="section project-3d-section" aria-labelledby="model-heading">
          <div className="container">
            <motion.header
              className="project-section-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <Box className="project-section-icon" size={24} aria-hidden="true" />
              <h2 id="model-heading">
                {lang === 'en' ? 'Interactive 3D Model' : 'Interaktif 3D Model'}
              </h2>
            </motion.header>
            <p className="project-section-body">
              {lang === 'en'
                ? 'Explore the design from every angle. Drag to rotate, scroll to zoom, and switch materials to see how the form responds to different finishes.'
                : 'Tasarimi her acidan inceleyin. Dondurmek icin surukleyin, yakinlastirmak icin kaydirin ve formun farkli yuzeylere nasil tepki verdigini gormek icin malzemeleri degistirin.'}
            </p>
            <Suspense fallback={<div className="model-viewer model-viewer-loading" />}>
              <ModelViewer url={project.model} title={project.title} />
            </Suspense>
          </div>
        </section>
      )}

      {project.sections?.map((sec, i) => (
        <section className="section project-section" key={i}>
          <div className="container">
            <motion.header
              className="project-section-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="project-section-num">0{i + 1}</span>
              <h2>{tr(sec.title, lang)}</h2>
            </motion.header>

            {sec.body && (
              <p className="project-section-body">{tr(sec.body, lang)}</p>
            )}

            {sec.image && (
              <motion.figure
                className="project-figure"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
              >
                <img src={sec.image} alt={`${project.title} - ${tr(sec.title, lang)}`} loading="lazy" />
              </motion.figure>
            )}

            {sec.images && (
              <div className="project-image-grid">
                {sec.images.map((img, j) => (
                  <motion.figure
                    key={j}
                    className="project-figure"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: j * 0.08 }}
                  >
                    <img src={img} alt={`${project.title} - view ${j + 1}`} loading="lazy" />
                    {sec.captions?.[lang]?.[j] && (
                      <figcaption>{sec.captions[lang][j]}</figcaption>
                    )}
                  </motion.figure>
                ))}
              </div>
            )}

            {sec.steps && (
              <ol className="project-steps">
                {sec.steps.map((step, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.06 }}
                  >
                    <span className="step-num">{String(j + 1).padStart(2, '0')}</span>
                    <span>{tr(step, lang)}</span>
                  </motion.li>
                ))}
              </ol>
            )}

            {sec.image && sec.captions?.[lang] && (
              <ul className="project-captions">
                {sec.captions[lang].map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="section project-pagination-section">
        <div className="container project-pagination">
          <Link to={`/projects/${prev.slug}`} className="pagination-link prev">
            <ArrowLeft size={18} aria-hidden="true" />
            <div>
              <span className="pagination-eyebrow">{t.common.previousProject}</span>
              <span className="pagination-name">{prev.title}</span>
            </div>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pagination-link next">
            <div>
              <span className="pagination-eyebrow">{t.common.nextProject}</span>
              <span className="pagination-name">{next.title}</span>
            </div>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
