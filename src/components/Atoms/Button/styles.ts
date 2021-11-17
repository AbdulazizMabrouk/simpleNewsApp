import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../utils/responsive';

const styles = StyleSheet.create({
  button: {
    // backgroundColor: '',
    height: calcHeight(50),
    width: '100%',
    paddingHorizontal: calcWidth(10),
    borderRadius: calcHeight(5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    // color: COLORS.white,
    // ...FONTS.bold,
    fontSize: calcFont(16.7),
  },

  bottomButton: {
    position: 'absolute',
    borderRadius: undefined,
    width: undefined,
    bottom: 0,
    right: 0,
    left: 0,
  },

  horizontalButton: {
    flexDirection: 'row',
  },
});

export default styles;
