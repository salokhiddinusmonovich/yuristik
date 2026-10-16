import { useI18n } from '@/shared/i18n';
import { Reveal } from '@/shared/ui';
import { Stats } from '@/widgets/stats';
import './WhyUs.css';

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="why">
      <div className="why__glow" aria-hidden="true" />
      <div className="container">
        <Reveal className="why__head">
          <h2>{t.why.title}</h2>
          <p>{t.why.lead}</p>
        </Reveal>
        <Stats />
        <dl className="why__list">
          {t.why.items.map((i, n) => (
            <Reveal key={i.title} delay={n * 120} className="why__item">
              <span className="why__n">{n + 1}</span>
              <div>
                <dt>{i.title}</dt>
                <dd>{i.text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
