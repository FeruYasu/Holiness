import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Ministries from '../pages/Ministries';
import Ministry from '../pages/Ministry';
import MinistryMembers from '../pages/MinistryMembers';
import Profile from '../pages/Profile';
import Events from '../pages/Events';
import SingleEvent from '../pages/SingleEvent';
import EventParticipants from '../pages/EventParticipants';
import Announcements from '../pages/Announcements';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#DADADA' },
      }}
    >
      <Auth.Screen name="Announcements" component={Announcements} />
      <Auth.Screen name="Events" component={Events} />
      <Auth.Screen name="SingleEvent" component={SingleEvent} />
      <Auth.Screen name="EventParticipants" component={EventParticipants} />

      <Auth.Screen name="Ministries" component={Ministries} />
      <Auth.Screen name="Ministry" component={Ministry} />
      <Auth.Screen name="MinistryMembers" component={MinistryMembers} />
      <Auth.Screen name="Profile" component={Profile} />
    </Auth.Navigator>
  );
};

export default AppRoutes;
