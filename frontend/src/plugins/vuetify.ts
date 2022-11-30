// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

import { ThemeDefinition } from 'vuetify/lib/framework.mjs';

const light: ThemeDefinition = {
  dark: false,
  colors: {
    app1: '#d3d3d3',
    background: '#e7ecef',
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    app1: '#d3d3d3',
    background: '#191919',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark,
    },
  },
});
