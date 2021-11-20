import AsyncStorage from '@react-native-async-storage/async-storage';

export const ASYNC_KEYS = {
  lang: '@LANG',
};

export const getLang = async () => {
  const lang = await AsyncStorage.getItem(ASYNC_KEYS.lang);
  return lang;
};

export const setLang = async (lang: string) => {
  await AsyncStorage.setItem(ASYNC_KEYS.lang, lang);
};
