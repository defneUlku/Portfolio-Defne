import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { tr } from '../context/LanguageContext.jsx';
import './GallerySlider.css';

export default function GallerySlider({ slides = [], lang = 'en', alt = '' }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [zoom, setZoom] = useState(1);
  const stageRef = useRef(null);

  const total = slides.length;
  const current = slides[index] || {};

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
    setZoom(1);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
    setZoom(1);
  }, [total]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.25, 3)), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.25, 1)), []);
  const zoomReset = useCallback(() => setZoom(1), []);

  // Klavye kısayolları
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-' || e.key === '_') zoomOut();
      if (e.key === '0') zoomReset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, zoomIn, zoomOut, zoomReset]);

  // Wheel zoom — sadece mouse stage üzerindeyken
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (!hovered) return;
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [hovered, zoomIn, zoomOut]);

  if (total === 0) return null;

  return (
    <div className="gallery-slider">
      <div
        ref={stageRef}
        className={`gallery-stage ${hovered ? 'is-hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover toolbar — üst orta */}
        <div className="gallery-toolbar" role="toolbar" aria-label="Zoom controls">
          <button type="button" className="gallery-tool-btn" onClick={zoomOut} disabled={zoom <= 1} aria-label="Zoom out" title="Zoom out (-)">
            <ZoomOut size={16} />
          </button>
          <span className="gallery-tool-value" aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button type="button" className="gallery-tool-btn" onClick={zoomIn} disabled={zoom >= 3} aria-label="Zoom in" title="Zoom in (+)">
            <ZoomIn size={16} />
          </button>
          <button type="button" className="gallery-tool-btn" onClick={zoomReset} disabled={zoom === 1} aria-label="Reset zoom" title="Reset (0)">
            <RotateCcw size={14} />
          </button>
        </div>

        <button type="button" className="gallery-nav gallery-nav-prev" onClick={goPrev} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>

        <div className="gallery-media">
          <img
            src={current.image}
            alt={alt}
            style={{ transform: `scale(${zoom})` }}
          />

          {current.callouts?.map((c, i) => {
            const label = typeof c.label === 'string' ? c.label : tr(c.label, lang);
            const side = c.side || 'right';
            return (
              <div
                key={i}
                className={`gallery-callout gallery-callout-${side}`}
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              >
                <span className="gc-ring" aria-hidden="true" />
                <span className="gc-dot" aria-hidden="true" />
                <span className="gc-line" aria-hidden="true" />
                <span className="gc-label">{label}</span>
              </div>
            );
          })}
        </div>

        <button type="button" className="gallery-nav gallery-nav-next" onClick={goNext} aria-label="Next">
          <ChevronRight size={24} />
        </button>

        <div className="gallery-counter" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      <div className="gallery-thumbs">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            className={`gallery-thumb ${i === index ? 'is-active' : ''}`}
            onClick={() => { setIndex(i); setZoom(1); }}
            aria-label={`Slide ${i + 1}`}
          >
            <img src={s.image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
