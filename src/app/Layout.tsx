import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Header />
      <main key={pathname} className="page"><Outlet /></main>
      <Footer />
    </>
  );
}
