import { useI18n } from '@/shared/i18n';
import { ButtonLink, Reveal } from '@/shared/ui';
import './CtaBanner.css';

export function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <span className="cta__orb cta__orb--1" /><span className="cta__orb cta__orb--2" />
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <ButtonLink to="/contacts" variant="light">{t.cta.button}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
