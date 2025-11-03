import { defineConfig } from '@chakra-ui/react';

export const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      colors: {
        blue: { value: 'hsl(180, 66%, 49%)' },
        purple: { value: 'hsl(257, 27%, 26%)' },
        appRed: { value: 'hsl(0, 87%, 67%)' },
        gray: {
          400: { value: 'hsl(0, 0%, 75%)' },
          500: { value: 'hsl(257, 7%, 63%)' },
          900: { value: 'hsl(255, 11%, 22%)' },
          950: { value: 'hsl(260, 8%, 14%)' },
        },
      },
    },
  },
});
