import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  text: {
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
  },
  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
