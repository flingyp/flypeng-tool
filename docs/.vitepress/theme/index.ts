import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer } from '@vitepress-demo-preview/component';

import './styles/OverwriteVar.css';
import './styles/OverwriteStyle.css';
import '@vitepress-demo-preview/component/dist/style.css';

import { App } from 'vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', AntDesignContainer);
  },
};
