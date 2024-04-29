import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewStatusBar from '../src/components/NewStatusBar'

import Theme from './styles/themes/theme';
import themes from './styles/themes';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer theme={themes.light}>
      <AppProvider>
        <Theme>
          <NewStatusBar >
            <StatusBar barStyle="dark-content" translucent />
          </NewStatusBar>
          <View style={{ flex: 1, backgroundColor: '#312E38' }}>
            <Routes />
          </View>
        </Theme>
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
