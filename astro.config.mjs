// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a *project* page:
//   https://ShaileshP27.github.io/Portfolio
// If you later move to a custom domain (or a user page repo named
// ShaileshP27.github.io), set `site` to that domain and delete `base`.
export default defineConfig({
  site: 'https://ShaileshP27.github.io',
  base: '/Portfolio',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
