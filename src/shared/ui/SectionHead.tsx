import { Reveal } from './Reveal';

export function SectionHead({ title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <Reveal className="section__head">
      <span className="section__bar" />
      <h2 className="section__title">{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </Reveal>
  );
}
