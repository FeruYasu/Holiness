import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Ministries from '../pages/Ministries';
import Ministry from '../pages/Ministry';

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
      <Auth.Screen name="Ministry" component={Ministry} />
    </Auth.Navigator>
  );
};

export default AppRoutes;
