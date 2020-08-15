import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312E38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
