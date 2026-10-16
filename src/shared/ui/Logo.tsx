import { Link } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';
import './Logo.css';

export function Logo({ dark = false }: { dark?: boolean }) {
  const { t } = useI18n();
  return (
    <Link to="/" className={`logo ${dark ? 'logo--dark' : ''}`}>
      <span className="logo__name">Gulyamov <em>&amp;</em> Partners</span>
      <span className="logo__sub">{t.tagline}</span>
    </Link>
  );
}
