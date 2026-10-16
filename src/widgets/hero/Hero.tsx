import { site } from '@/shared/config/site';
import { useI18n } from '@/shared/i18n';
import { ButtonLink, Icon } from '@/shared/ui';
import './Hero.css';

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <div className="hero__decor" aria-hidden="true">
        <span className="ring ring--1" />
        <span className="ring ring--2" />
        <span className="ring ring--3" />
        <span className="hero__scale"><Icon name="scale" size={120} /></span>
      </div>
      <div className="container hero__grid">
        <div>
          <p className="hero__kicker a1">{t.hero.kicker}</p>
          <h1 className="a2">{t.hero.title}</h1>
          <p className="hero__text a3">{t.hero.text}</p>
          <div className="hero__actions a4">
            <ButtonLink to="/contacts">{t.hero.cta1}</ButtonLink>
            <ButtonLink to="/services" variant="outline">{t.hero.cta2}</ButtonLink>
          </div>
        </div>
        <aside className="hero__panel a5">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Icon name="phone" size={20} /> {site.phone}</a>
          <span>{site.email}</span>
        </aside>
      </div>
    </section>
  );
}
