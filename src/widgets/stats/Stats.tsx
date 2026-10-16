import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/shared/i18n';
import { Reveal } from '@/shared/ui';
import './Stats.css';

function CountUp({ value }: { value: string }) {
  const m = value.match(/^([\d\s,]+)(\+?)$/);
  const target = m ? parseInt(m[1].replace(/\D/g, ''), 10) : 0;
  const sep = m && /\s/.test(m[1]) ? ' ' : ',';
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!m || !el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1600, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  if (!m) return <strong>{value}</strong>;
  return <strong ref={ref}>{n.toLocaleString('en-US').replace(/,/g, sep)}{m[2]}</strong>;
}

export function Stats() {
  const { t } = useI18n();
  return (
    <div className="stats">
      {t.stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 100} className="stats__item">
          <CountUp value={s.value} />
          <span>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
