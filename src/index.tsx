import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {MyTabs} from './navigation/AppTabs';
import {localize} from './translations';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    localize().then(res => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoaded && <MyTabs />}
    </NavigationContainer>
  );
};
export default App;
