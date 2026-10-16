import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const ServicesPage = lazy(() => import('@/pages/services/ServicesPage'));
const TeamPage = lazy(() => import('@/pages/team/TeamPage'));
const ContactsPage = lazy(() => import('@/pages/contacts/ContactsPage'));

export function AppRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
