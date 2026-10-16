import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from '@/shared/i18n';
import { AppRouter } from './router';

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </I18nProvider>
  );
}
