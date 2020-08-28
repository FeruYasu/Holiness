import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Ministries from '../pages/Ministries';
import Ministry from '../pages/Ministry';
import MinistryMembers from '../pages/MinistryMembers';
import Profile from '../pages/Profile';
import Events from '../pages/Events';
import SingleEvent from '../pages/SingleEvent';
import EventParticipants from '../pages/EventParticipants';
import Announcements from '../pages/Announcements';
import Home from '../pages/Home';
import { useAuth } from '../hooks/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#DADADA' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SingleEvent" component={SingleEvent} />
      <Stack.Screen name="EventParticipants" component={EventParticipants} />
      <Stack.Screen name="Ministry" component={Ministry} />
      <Stack.Screen name="MinistryMembers" component={MinistryMembers} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Oie: React.FC = () => {
  const { theme } = useAuth();

  return (
    <Icon name="ios-information-circle" color={theme.colors.accent} size={24} />
  );
};

const AppRoutes: React.FC = () => {
  const { theme } = useAuth();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: theme.colors.headerBackground,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: Oie,
        }}
        name="StackRoutes"
        component={StackRoutes}
      />
      <Tab.Screen name="Announcements" component={Announcements} />
      <Tab.Screen name="Ministries" component={Ministries} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
