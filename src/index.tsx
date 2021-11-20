/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens';
import {HomeNav} from './navigation/Home';
import {MyTabs} from './navigation/AppTabs';
import {localize} from './translations';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    localize().then(res => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Home /> */}
      {/* <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
          height: '100%',
          width: '100%',
        }}> */}
      {isLoaded && <MyTabs />}

      {/* </View> */}

      {/* <Text></Text> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
