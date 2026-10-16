import { site } from '@/shared/config/site';
import { useI18n } from '@/shared/i18n';
import { Icon, Logo } from '@/shared/ui';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="container footer__row">
        <Logo dark />
        <ul>
          <li><Icon name="pin" size={16} />{t.contact.address}</li>
          <li><Icon name="phone" size={16} />{site.phone}</li>
          <li><Icon name="mail" size={16} />{site.email}</li>
        </ul>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</span>
        <span>{t.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
