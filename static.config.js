import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document from './src/Document';

export default {
  siteRoot: process.env.SITE_ROOT || 'http://localhost:3000',
  getSiteData: () => ({
    title: 'React Static Base',
    siteRoot: process.env.SITE_ROOT || 'http://localhost:3000',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS || null,
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document,
}
