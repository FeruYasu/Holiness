import React from 'react';
import { ActivityIndicator } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#999" />
      </SafeAreaView>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
