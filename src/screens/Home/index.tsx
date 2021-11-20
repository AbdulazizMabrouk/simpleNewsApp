import * as React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import NewsList from '../../components/templates/NewsList';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <NewsList />
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
