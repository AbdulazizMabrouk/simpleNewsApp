import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppText} from '../../components/Atoms';
import {SelectLanguage} from '../../components/molecules';
//
interface SettingsProps {}

export const Settings = (props: SettingsProps) => {
  return <SelectLanguage />;
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
