import { useI18n } from '@/shared/i18n';
import { SectionHead } from '@/shared/ui';
import { Hero } from '@/widgets/hero';
import { Marquee } from '@/widgets/marquee';
import { About } from '@/widgets/about';
import { PracticeAreas } from '@/widgets/practice-areas';
import { WhyUs } from '@/widgets/why-us';
import { Process } from '@/widgets/process';
import { CtaBanner } from '@/widgets/cta-banner';

export default function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Expertise" title={t.practice.title} lead={t.practice.lead} />
          <PracticeAreas />
        </div>
      </section>
      <WhyUs />
      <Process />
      <CtaBanner />
    </>
  );
}
