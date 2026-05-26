import { useState, useMemo } from 'react';
import PageTransition from '../components/PageTransition.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { projects } from '../data/content';
import './Projects.css';

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'individual', label: t.projects.filterIndividual },
    { key: 'group', label: t.projects.filterGroup },
  ];

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    if (filter === 'individual') return projects.filter((p) => p.type === 'individual');
    if (filter === 'group') return projects.filter((p) => p.type.startsWith('group'));
    return projects;
  }, [filter]);

  return (
    <PageTransition>
      <section className="projects-hero">
        <div className="container">
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h1>{t.projects.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                className={`filter-btn ${filter === f.key ? 'is-active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">No projects match this filter.</p>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
