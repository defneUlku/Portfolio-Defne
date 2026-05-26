import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import './NotFound.css';

export default function NotFound() {
  const { t } = useLang();
  return (
    <PageTransition>
      <section className="notfound">
        <div className="container notfound-inner">
          <h1 className="notfound-code display">{t.notFound.title}</h1>
          <p className="notfound-message">{t.notFound.message}</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={18} aria-hidden="true" />
            {t.notFound.back}
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
