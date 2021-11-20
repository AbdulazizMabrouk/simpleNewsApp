import React from 'react';
import I18n from 'i18n-js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNav} from './Home';
import {Settings} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      options={{headerShown: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === I18n.t('news')) {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === I18n.t('settings')) {
            iconName = focused ? 'ios-list' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={I18n.t('news')}
        component={HomeNav}
        options={{showHeader: 'none'}}
      />
      <Tab.Screen name={I18n.t('settings')} component={Settings} />
    </Tab.Navigator>
  );
}
