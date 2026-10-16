import { useI18n } from '@/shared/i18n';
import { SectionHead } from '@/shared/ui';
import { TeamList } from '@/widgets/team-list';
import { CtaBanner } from '@/widgets/cta-banner';

export default function TeamPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="section section--soft">
        <div className="container">
          <SectionHead eyebrow="People" title={t.team.title} lead={t.team.lead} />
          <TeamList />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
