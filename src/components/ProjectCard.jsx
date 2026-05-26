import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang, tr } from '../context/LanguageContext.jsx';
import { projectTypes } from '../data/content';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 0, featured = false }) {
  const { lang, t } = useLang();
  const typeLabel = projectTypes[project.type]?.[lang] ?? '';

  return (
    <motion.article
      className={`project-card ${featured ? 'is-featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="project-card-link" aria-label={`${project.title} — ${t.common.viewProject}`}>
        <div className="project-card-media">
          <img src={project.cover} alt="" loading="lazy" />
          <span className="project-hover-cta">
            <span>{t.common.viewProject}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
        <div className="project-card-body">
          <div className="project-card-meta">
            <span className="eyebrow">{typeLabel}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-tagline">{tr(project.tagline, lang)}</p>
        </div>
      </Link>
    </motion.article>
  );
}
