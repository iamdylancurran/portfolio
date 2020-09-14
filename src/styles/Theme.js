import React from 'react';
import { ThemeProvider } from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const greys = {
  50: '#F7FAFC',
  100: '#EDF2F7',
  200: '#E2E8F0',
  300: '#CBD5E0',
  400: '#A0AEC0',
  500: '#718096',
  600: '#4A5568',
  700: '#2D3748',
  800: '#1A202C',
  900: '#171923',
};

const tastyTurquoise = {
  main: '#319795',
  light: '#3CC7BE',
  dark: '#427D7C',
};

const deepChestnut = {
  main: '#BD3D40',
  light: '#CC6164',
};

const theme = {
  spacing: (factor) => `${0.8 * factor}rem`,
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: '3.5rem',
      lineHeight: '4rem',
      fontWeight: '900',
      letterSpacing: 0,
    },
    h2: {
      fontSize: '2.8rem',
      lineHeight: '3.3rem',
      fontWeight: '700',
      letterSpacing: 0,
    },
    body: {
      fontSize: '1.1rem',
      lineHeight: '1.5rem',
    },
  },
  colors: {
    primary: {
      ...tastyTurquoise,
    },
    accent: {
      ...deepChestnut,
    },
    grey: {
      ...greys,
    },
    text: {
      primary: hexToRgba(greys[900], '0.87'),
      secondary: hexToRgba(greys[900], '0.6'),
      whitePrimary: hexToRgba(greys[50], '0.87'),
      whiteSecondary: hexToRgba(greys[50], '0.6'),
    },
    background: {
      default: greys[50],
      secondary: '#fff',
      dark: greys[900],
    },
  },
  fonts: ['Fira Sans', 'sans-serif'],
  fontSizes: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
