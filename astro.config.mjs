// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // FÜR CUSTOM DOMAIN:
  // site: 'https://volt-fraktion-leichlingen.de',
  site: 'https://zukunft-leichlingen.de',
  base: '/',

  // FÜR STANDARD GITHUB PAGES SUBPATH (z.B. https://username.github.io/repo/):
  // site: 'https://<username>.github.io',
  // base: '/<repo-name>/',

  integrations: [sitemap()],
});
