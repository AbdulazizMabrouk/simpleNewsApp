import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetails} from '../screens';
import {common_nav_options} from './styles';

const Stack = createNativeStackNavigator();

export const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{...common_nav_options, headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
