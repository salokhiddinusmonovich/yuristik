import { useI18n } from '@/shared/i18n';
import { Reveal } from '@/shared/ui';
import './TeamList.css';

export function TeamList() {
  const { t } = useI18n();
  return (
    <div className="grid team">
      {t.team.members.map((m, i) => (
        <Reveal key={i} delay={i * 130} className="team__card">
          <div className="team__avatar">{m.name.replace(/[^A-Za-zА-Яа-я]/g, '')[0]}</div>
          <h3>{m.name}</h3>
          <p className="team__role">{m.role}</p>
          <p className="team__bio">{m.bio}</p>
        </Reveal>
      ))}
    </div>
  );
}
