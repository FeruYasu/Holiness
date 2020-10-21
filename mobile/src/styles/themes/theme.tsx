import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { useAuth } from '../../hooks/auth';

const Theme: React.FC = ({ children }) => {
  const { theme } = useAuth();

  useEffect(() => {
    theme.title == 'light' ?  StatusBar.setBarStyle('dark-content') : StatusBar.setBarStyle('light-content');
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
