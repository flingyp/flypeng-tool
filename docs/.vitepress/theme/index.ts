import { App } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { NaiveUIContainer } from '@vitepress-demo-preview/component';

import './styles/OverwriteVar.css';
import './styles/OverwriteStyle.css';
import '@vitepress-demo-preview/component/dist/style.css';

import { defineClientComponentConfig } from '@vitepress-demo-preview/core';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', NaiveUIContainer);

    defineClientComponentConfig({
      copySuccessText: '已复制成功到剪贴板中!',
      vueApp: app,
    });
  },
};
