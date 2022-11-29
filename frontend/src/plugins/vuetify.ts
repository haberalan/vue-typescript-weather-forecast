// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

import { ThemeDefinition } from 'vuetify/lib/framework.mjs';

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#e7ecef',
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#003459',
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
