import { useState, type FormEvent } from 'react';
import { useI18n } from '@/shared/i18n';
import { Button } from '@/shared/ui';
import './ContactForm.css';

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: send to backend (POST /api/requests)
    setSent(true);
  }

  if (sent) return <p className="form__ok">{t.contact.ok}</p>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <input required placeholder={t.contact.name} />
      <input required placeholder={t.contact.phone} />
      <textarea required rows={5} placeholder={t.contact.message} />
      <Button type="submit">{t.contact.send}</Button>
    </form>
  );
}
