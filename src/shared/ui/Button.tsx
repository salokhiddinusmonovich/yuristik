import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import './Button.css';

type Variant = 'primary' | 'outline' | 'light';

export function Button({ variant = 'primary', ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`btn btn--${variant}`} {...rest} />;
}

export function ButtonLink({ to, variant = 'primary', children }: { to: string; variant?: Variant; children: ReactNode }) {
  return (
    <Link to={to} className={`btn btn--${variant}`}>
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  );
}
