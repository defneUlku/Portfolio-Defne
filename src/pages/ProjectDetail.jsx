import { lazy, Suspense } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Box } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { projects, projectTypes } from '../data/content';
import './ProjectDetail.css';

const ModelViewer = lazy(() => import('../components/ModelViewer.jsx'));
const GallerySlider = lazy(() => import('../components/GallerySlider.jsx'));

// =====================================================
// CalloutImage: seffaf urun PNG + uzerine pozisyonlu
// callout dot + leader line + label (HTML/CSS)
// =====================================================
function CalloutImage({ src, alt, callouts = [], lang }) {
  return (
    <div className="callout-image">
      <img src={src} alt={alt} loading="lazy" />
      {callouts.map((c, i) => {
        const label = typeof c.label === 'string'
          ? c.label
          : (c.label?.[lang] ?? c.label?.en ?? '');
        const side = c.side || 'right';
        return (
          <div
            key={i}
            className={`callout-marker callout-side-${side}`}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            <span className="callout-dot-ring" aria-hidden="true" />
            <span className="callout-dot-inner" aria-hidden="true" />
            <span className="callout-line" aria-hidden="true" />
            <span className="callout-label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLang();

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const typeLabel = projectTypes[project.type]?.[lang] ?? '';

  // Modern layout aktif mi?
  const isModern = !!project.modernLayout;

  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      {isModern && project.heroImage ? (
        // Modern split hero: transparent product image + text
        <section className="project-hero project-hero-modern">
          <div className="container project-hero-modern-grid">
            <div className="project-hero-modern-text">
              <Link to="/projects" className="back-link">
                <ArrowLeft size={16} aria-hidden="true" />
                <span>{t.common.backToProjects}</span>
              </Link>
              <p className="eyebrow">{typeLabel} · {project.year}</p>
              <h1 className="project-title project-title-modern">{project.title}</h1>
              <p className="project-tagline serif">{tr(project.tagline, lang)}</p>
            </div>
            <motion.div
              className="project-hero-modern-product"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={project.heroImage} alt={project.title} />
            </motion.div>
          </div>
        </section>
      ) : (
        // Eski full-bg hero (diger projeler)
        <section className="project-hero">
          <div className="project-hero-bg" aria-hidden="true">
            <img
              src={project.cover}
              alt=""
              style={{ objectPosition: `center ${project.coverPosition || 'top'}` }}
            />
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
      )}

      {/* ============ DESCRIPTION ============ */}
      <section className={`section project-description ${project.descriptionIcon ? 'has-icon' : ''}`}>
        <div className="container">
          <div className="project-description-grid">
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
            {project.descriptionIcon && (
              <motion.div
                className="project-description-icon"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img src={project.descriptionIcon} alt={`${project.title} icon`} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============ 3D MODEL (varsa) ============ */}
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
                {lang === 'en' ? 'Interactive 3D Model' : 'İnteraktif 3D Model'}
              </h2>
            </motion.header>
            <p className="project-section-body">
              {lang === 'en'
                ? 'Explore the design from every angle. Drag to rotate, scroll to zoom, and switch materials to see how the form responds to different finishes.'
                : 'Tasarımı her açıdan inceleyin. Döndürmek için sürükleyin, yakınlaştırmak için kaydırın ve formun farklı yüzeylere nasıl tepki verdiğini görmek için malzemeleri değiştirin.'}
            </p>
            <Suspense fallback={<div className="model-viewer model-viewer-loading" />}>
              <ModelViewer
                url={project.model}
                title={project.title}
                modelRotation={project.modelRotation}
                initialCamera={project.initialCamera}
                disableColorPalette={project.disableColorPalette}
              />
            </Suspense>
          </div>
        </section>
      )}

      {/* ============ SECTIONS ============ */}
      {project.sections?.map((sec, i) => {
        const layout = sec.layout || 'default';
        const isSplit = layout === 'split' || layout === 'split-reverse';
        const isCenter = layout === 'center';
        const isTransparent = sec.transparent;

        // DIAGRAM layout - basliksiz, image sol + dikey ince text sag
        if (layout === 'diagram') {
          return (
            <section className="section project-diagram" key={i}>
              <div className="container">
                <motion.figure
                  className="project-diagram-figure"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                >
                  <img src={sec.image} alt={tr(sec.title, lang) || ''} loading="lazy" />
                </motion.figure>
                {sec.body && (
                  <motion.p
                    className="project-diagram-caption"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {tr(sec.body, lang)}
                  </motion.p>
                )}
              </div>
            </section>
          );
        }

        // GALLERY layout - ana resim + thumbnails + ok + hover callouts
        if (layout === 'gallery') {
          return (
            <section className="section project-gallery" key={i}>
              <div className="container">
                <motion.header
                  className="project-section-header"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>{tr(sec.title, lang)}</h2>
                </motion.header>
                {sec.body && (
                  <p className="project-section-body">{tr(sec.body, lang)}</p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                >
                  <Suspense fallback={<div className="gallery-loading" />}>
                    <GallerySlider
                      slides={sec.slides || []}
                      lang={lang}
                      alt={tr(sec.title, lang)}
                    />
                  </Suspense>
                </motion.div>
              </div>
            </section>
          );
        }

        // CALLOUT layout - seffaf urun + manuel pozisyonlu etiketler
        if (layout === 'callout') {
          const reverse = !!sec.reverse;
          const isFirst = i === 0;
          return (
            <section className={`section project-callout ${reverse ? 'is-reverse' : ''} ${isFirst ? 'is-first-callout' : ''}`} key={i}>
              <div className="container project-callout-grid">
                <motion.div
                  className="project-callout-media"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CalloutImage
                    src={sec.image}
                    alt={tr(sec.title, lang)}
                    callouts={sec.callouts}
                    lang={lang}
                  />
                </motion.div>
                <motion.div
                  className="project-callout-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >                  <h2 className="project-feature-title">{tr(sec.title, lang)}</h2>
                  {sec.body && <p className="project-feature-body">{tr(sec.body, lang)}</p>}
                </motion.div>
              </div>
            </section>
          );
        }

        if (isSplit) {
          // Modern split: image + text, alternating sides
          const reverse = layout === 'split-reverse';
          return (
            <section
              className={`section project-feature ${reverse ? 'is-reverse' : ''} ${isTransparent ? 'is-transparent' : ''}`}
              key={i}
            >
              <div className="container project-feature-grid">
                <motion.div
                  className="project-feature-media"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={sec.image} alt={tr(sec.title, lang)} loading="lazy" />
                </motion.div>
                <motion.div
                  className="project-feature-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >                  <h2 className="project-feature-title">{tr(sec.title, lang)}</h2>
                  {sec.body && <p className="project-feature-body">{tr(sec.body, lang)}</p>}
                  {sec.callouts && (
                    <ul className="project-feature-callouts">
                      {sec.callouts.map((c, j) => (
                        <li key={j}>
                          <span className="callout-dot" aria-hidden="true" />
                          <span>{tr(c, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </section>
          );
        }

        // IN-ACTION layout - sol buyuk baslik (steam bg) + sag urun
        if (layout === 'in-action') {
          return (
            <section className="section in-action-section" key={i}>
              <div className="in-action-steam" aria-hidden="true">
                <span className="steam-puff steam-puff-1" />
                <span className="steam-puff steam-puff-2" />
                <span className="steam-puff steam-puff-3" />
                <span className="steam-puff steam-puff-4" />
                <span className="steam-puff steam-puff-5" />
              </div>
              <div className="container in-action-grid">
                <motion.div
                  className="in-action-text"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >                  <h2 className="in-action-title">{tr(sec.title, lang)}</h2>
                  {sec.body && <p className="in-action-body">{tr(sec.body, lang)}</p>}
                </motion.div>
                <motion.div
                  className="in-action-product"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="in-action-product-steam" aria-hidden="true">
                    <span className="product-steam-jet product-steam-jet-1" />
                    <span className="product-steam-jet product-steam-jet-2" />
                    <span className="product-steam-jet product-steam-jet-3" />
                  </div>
                  <img src={sec.image} alt={tr(sec.title, lang)} loading="lazy" />
                </motion.div>
              </div>
            </section>
          );
        }

        if (isCenter) {
          // Center: large product with text above/below
          return (
            <section className={`section project-feature-center ${isTransparent ? 'is-transparent' : ''}`} key={i}>
              <div className="container project-feature-center-inner">
                <motion.div
                  className="project-feature-center-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >                  <h2 className="project-feature-title">{tr(sec.title, lang)}</h2>
                  {sec.body && <p className="project-feature-body">{tr(sec.body, lang)}</p>}
                </motion.div>
                <motion.div
                  className="project-feature-center-media"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={sec.image} alt={tr(sec.title, lang)} loading="lazy" />
                </motion.div>
              </div>
            </section>
          );
        }

        // Default eski layout (legacy sections)
        return (
          <section className="section project-section" key={i}>
            <div className="container">
              <motion.header
                className="project-section-header"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >                <h2>{tr(sec.title, lang)}</h2>
              </motion.header>

              {sec.body && <p className="project-section-body">{tr(sec.body, lang)}</p>}

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
                      {sec.captions?.[lang]?.[j] && <figcaption>{sec.captions[lang][j]}</figcaption>}
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
        );
      })}

      {/* ============ PAGINATION ============ */}
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
