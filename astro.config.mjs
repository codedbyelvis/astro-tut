// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://elvis-astro-tut.netlify.app/",
  integrations: [preact(), react(), markdoc(), keystatic()]
});