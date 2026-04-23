import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  
  integrations: [
    icon({
      include: {
        'ui': ['*'],
        'social': ['*'],
        'illustrations': ['*'],
      },
    }),
  ],
});
