import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Ministries from '../pages/Ministries';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#DADADA' },
      }}
    >
      <Auth.Screen name="Ministries" component={Ministries} />
    </Auth.Navigator>
  );
};

export default AppRoutes;
