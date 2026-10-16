import { useI18n } from '@/shared/i18n';
import { SectionHead } from '@/shared/ui';
import { PracticeAreas } from '@/widgets/practice-areas';
import { Process } from '@/widgets/process';
import { CtaBanner } from '@/widgets/cta-banner';

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Expertise" title={t.practice.title} lead={t.practice.lead} />
          <PracticeAreas />
        </div>
      </section>
      <div className="section--soft"><Process /></div>
      <CtaBanner />
    </>
  );
}
