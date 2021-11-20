import I18n from 'i18n-js';
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';
import {getLang, setLang} from '../utils/languages';

export async function localize() {
  // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
  I18n.fallbacks = true;
  await getLang().then(async (res: any) => {
    console.log('getLang', res);

    if (res) I18n.locale = res;
    else {
      await setLang('en');
    }
  });
  // I18n.locale = getLang();

  // English language is the main language for fall back:
  I18n.translations = {
    en: require('./en.json'),
    ar: require('./ar.json'),
  };

  // I18nManager.swapLeftAndRightInRTL(false)
}

export async function languageChange(language: string) {
  try {
    await setLang(language);
    // I18nManager.swapLeftAndRightInRTL(false)
    I18nManager.forceRTL(language === 'ar');
    RNRestart.Restart();
  } catch (error) {
    console.log('something went wrong with changing the language: ', error);
  }
}
