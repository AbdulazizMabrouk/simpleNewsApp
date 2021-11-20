import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, NewsDetails} from '../screens';
import {common_nav_options} from './styles';
// import {Button} from 'react-native';
import {Button, AppText} from '../components/Atoms';
import {Image} from 'react-native';
import {IMAGES} from '../assets';
const Stack = createNativeStackNavigator();

export const HomeNav = () => {
  return (
    <Stack.Navigator screenOptions={{...common_nav_options}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};
