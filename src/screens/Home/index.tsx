import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  AppState,
  I18nManager,
} from 'react-native';
import {News} from '../../components/molecules';
import NewsList from '../../components/templates/NewsList';
import {SearchBar} from 'react-native-elements';
import I18n from 'i18n-js';
import {AppText} from '../../components/Atoms';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const isDark = useColorScheme() === 'dark';
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
    // backgroundColor: 'green',
  },
});
