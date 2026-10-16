import { site } from '@/shared/config/site';
import { useI18n } from '@/shared/i18n';
import { Icon, SectionHead } from '@/shared/ui';
import { ContactForm } from '@/widgets/contact-form';

export default function ContactsPage() {
  const { t } = useI18n();
  const rows = [
    { icon: 'pin', text: t.contact.address },
    { icon: 'phone', text: site.phone },
    { icon: 'mail', text: site.email },
    { icon: 'clock', text: t.contact.hours },
  ];
  return (
    <section className="section section--soft">
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
        <div>
          <SectionHead eyebrow="Contact" title={t.contact.title} lead={t.contact.lead} />
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 18 }}>
            {rows.map((r) => (
              <li key={r.icon} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <span style={{ width: 44, height: 44, background: 'var(--blue-soft)', color: 'var(--blue)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={r.icon} />
                </span>
                {r.text}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
