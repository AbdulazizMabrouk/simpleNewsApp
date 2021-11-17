import {StyleSheet} from 'react-native';
import {calcWidth} from '../utils';
import {COLORS} from './Colors';

export const STYLES = StyleSheet.create({
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 32,

    elevation: 3,
    backgroundColor: COLORS.white,
  },

  headerHorizontal: {
    paddingHorizontal: calcWidth(20),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
