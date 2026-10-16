import { useI18n } from '@/shared/i18n';
import { Reveal, SectionHead } from '@/shared/ui';
import './Process.css';

export function Process() {
  const { t } = useI18n();
  return (
    <section className="section process-sec">
      <div className="container">
        <SectionHead title={t.process.title} lead={t.process.lead} />
        <ol className="process">
          {t.process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 150}>
              <span className="process__n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
