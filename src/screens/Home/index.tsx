import * as React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {News} from '../../components/molecules';
import NewsList from '../../components/templates/NewsList';
import {SearchBar} from 'react-native-elements';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {/* <Text style={{backgroundColor: 'red'}}>Home</Text> */}

      <NewsList />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
  },
});
