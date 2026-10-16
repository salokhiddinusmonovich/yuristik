import { useI18n } from '@/shared/i18n';
import { Icon, Reveal } from '@/shared/ui';
import './PracticeAreas.css';

export function PracticeAreas() {
  const { t } = useI18n();
  return (
    <div className="bento">
      {t.areas.map((a, i) => (
        <Reveal key={a.title} delay={i * 80} className={`bento__card bento__card--${i + 1}`}>
          <span className="bento__mark"><Icon name={a.icon} size={150} /></span>
          <span className="bento__n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </div>
          <span className="bento__go"><Icon name="arrow" size={20} /></span>
        </Reveal>
      ))}
    </div>
  );
}
