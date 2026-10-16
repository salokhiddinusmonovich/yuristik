import { useI18n } from '@/shared/i18n';
import './Marquee.css';

export function Marquee() {
  const { t } = useI18n();
  const items = [...t.areas, ...t.areas];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((a, i) => (
          <span key={i}>{a.title}<i>✦</i></span>
        ))}
      </div>
    </div>
  );
}
