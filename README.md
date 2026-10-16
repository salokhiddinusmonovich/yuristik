# GULYAMOV AND PARTNERS — Адвокатское бюро

Vite + React + TypeScript. Архитектура по слоям (в духе Feature-Sliced Design):

```
src/
  app/       — вход, роутер, Layout
  pages/     — страницы (home, services, team, contacts), lazy-загрузка
  widgets/   — самостоятельные блоки (header, footer, hero, practice-areas, team-list, contact-form)
  shared/    — ui-кит, конфиг сайта (site.ts — тексты/контакты), глобальные стили и токены
```

Правило импортов: `app → pages → widgets → shared` (только вниз).
Цвета — CSS-переменные `--navy-*`, `--blue-*`, `--sky-*` в `shared/styles/global.css`.
Тексты правятся в `shared/i18n/{en,ru,uz}.ts`, контакты — в `shared/config/site.ts`.

```
npm install && npm run dev
```
# yuristik
