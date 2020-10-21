/* eslint-disable react/display-name */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';


import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../hooks/auth';

import Ministry from '../pages/Ministry';
import MinistryMembers from '../pages/MinistryMembers';
import Profile from '../pages/Profile';
import Events from '../pages/Events';
import SingleEvent from '../pages/SingleEvent';
import EventParticipants from '../pages/EventParticipants';
import Announcements from '../pages/Announcements';
import Testimonials from '../pages/Testimonials';
import Sermons from '../pages/Sermons';
import SingleSermon from '../pages/SingleSermon';
import Menu from '../pages/Menu';
import NewTestimonial from '../pages/NewTestimonial';
import TestimonialsComments from '../pages/TestimonialsComments';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeRoutes: React.FC = () => {
  const { theme } = useAuth();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: getBottomSpace() + 40,
          backgroundColor: theme.colors.headerBackground,
          borderTopWidth: 1,
          borderTopColor: theme.colors.tabBorder,
          paddingBottom: getBottomSpace() - 10 ,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 24,
        },
        labelStyle: {
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 11,
          marginTop: 4,
        },
        inactiveTintColor: theme.colors.tabButtonText,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Pregações',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="tv"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="SermonsRoutes"
        component={Sermons}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Compartilhar',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="message-circle"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="caret-forward-circle"
        component={Testimonials}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Avisos',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="Home"
        component={Announcements}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Eventos',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="calendar"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="Events"
        component={Events}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="menu"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="Opções"
        component={Menu}
      />
    </Tab.Navigator>
  );
};

// const SermonsRoutes: React.FC = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Sermons" component={Sermons} />
//       <Stack.Screen name="SingleSermon" component={SingleSermon} />
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// };

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      <Stack.Screen name="SingleEvent" component={SingleEvent} />
      <Stack.Screen name="EventParticipants" component={EventParticipants} />
      <Stack.Screen name="Ministry" component={Ministry} />
      <Stack.Screen name="MinistryMembers" component={MinistryMembers} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Testimonials" component={Testimonials} />
      <Stack.Screen name="Sermons" component={Sermons} />
      <Stack.Screen name="SingleSermon" component={SingleSermon} />
      <Stack.Screen name="NewTestimonial" component={NewTestimonial} />
      <Stack.Screen
        name="TestimonialsComments"
        component={TestimonialsComments}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
