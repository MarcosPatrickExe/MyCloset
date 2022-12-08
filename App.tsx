import 'react-native-gesture-handler';

import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/global/styles/theme';
import { AuthProvider } from './src/contexts/auth';

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};