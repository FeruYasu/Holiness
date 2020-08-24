import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Ministries from '../pages/Ministries';
import Ministry from '../pages/Ministry';
import Participants from '../pages/Participants';
import Profile from '../pages/Profile';
import Events from '../pages/Events';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#DADADA' },
      }}
    >
      <Auth.Screen name="Events" component={Events} />
      <Auth.Screen name="Ministries" component={Ministries} />
      <Auth.Screen name="Ministry" component={Ministry} />
      <Auth.Screen name="Participants" component={Participants} />
      <Auth.Screen name="Profile" component={Profile} />
    </Auth.Navigator>
  );
};

export default AppRoutes;
