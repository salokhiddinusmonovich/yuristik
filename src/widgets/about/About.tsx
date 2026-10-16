import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/shared/i18n';
import './About.css';

export function About() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const words = t.about.text.split(' ');

  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.15))));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);

  return (
    <section className="about section">
      <div className="container about__grid">
        <span className="about__label">{t.about.label}</span>
        <p ref={ref as never} className="about__text">
          {words.map((w, i) => (
            <span key={i} className={i / words.length < p ? 'on' : ''}>{w} </span>
          ))}
        </p>
      </div>
    </section>
  );
}
