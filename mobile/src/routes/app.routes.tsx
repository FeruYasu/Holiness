/* eslint-disable react/display-name */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../hooks/auth';

import Ministries from '../pages/Ministries';
import Ministry from '../pages/Ministry';
import MinistryMembers from '../pages/MinistryMembers';
import Profile from '../pages/Profile';
import Events from '../pages/Events';
import SingleEvent from '../pages/SingleEvent';
import EventParticipants from '../pages/EventParticipants';
import Announcements from '../pages/Announcements';
import Home from '../pages/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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

const AppRoutes: React.FC = () => {
  const { theme } = useAuth();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 50,
          backgroundColor: theme.colors.headerBackground,
          borderTopWidth: 1,
          borderTopColor: theme.colors.tabBorder,
          paddingBottom: 4,
        },
        tabSyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          widht: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 11,
          marginTop: 4,
        },
        inactiveTintColor: theme.colors.tabButtonText,
        TintColor: theme.colors.accent,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Pregações',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="caret-forward-circle"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="Announcements"
        component={Announcements}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Compartilhar',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="chatbubbles"
                size={size}
                color={
                  focused ? theme.colors.accent : theme.colors.tabButtonText
                }
              />
            );
          },
        }}
        name="caret-forward-circle"
        component={Ministries}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
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
        component={StackRoutes}
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
        component={Events}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
