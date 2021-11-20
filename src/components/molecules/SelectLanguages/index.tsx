import * as React from 'react';
import I18n from 'i18n-js';
import {View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Button} from '../../Atoms';
import {COLORS} from '../../../common';
import {languageChange} from '../../../translations';

interface SelectLanguageProps {}

const SelectLanguage = (props: SelectLanguageProps) => {
  const [checked, setChecked] = React.useState<number>(-1);
  const [language, setLanguage] = React.useState<string>('');

  const changeLanguage = () => {
    languageChange(language);
  };
  const selectLanguage = (lang: number) => {
    setChecked(lang);
    setLanguage(lang === 1 ? 'en' : 'ar');
  };

  return (
    <View style={styles.container}>
      <CheckBox
        center
        key={1}
        title={I18n.t('english')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked == 1}
        onPress={() => {
          selectLanguage(1);
        }}
        containerStyle={{backgroundColor: undefined}}
      />
      <CheckBox
        center
        title={I18n.t('arabic')}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={checked == 2}
        containerStyle={{backgroundColor: undefined}}
        onPress={() => {
          selectLanguage(2);
        }}
      />
      <Button
        title={I18n.t('changeLang')}
        style={{
          backgroundColor: COLORS.orangeYellow,
          width: '50%',
        }}
        onPress={() => changeLanguage()}
      />
    </View>
  );
};

export {SelectLanguage};

const styles = StyleSheet.create({
  container: {alignItems: 'flex-start'},
});
