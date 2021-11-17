import {StyleSheet} from 'react-native';
import {calcWidth, calcFont} from '../utils';
import {COLORS, FONTS, STYLES} from '../common';

const styles = StyleSheet.create({
  headerTitleStyle: {},
  headerStyle: {},
  orderHeaderStyle: {
    elevation: 0,
    borderBottomWidth: 0,
  },
  cardStyle: {
    backgroundColor: COLORS.paleGrey,
  },
  headerSidesContainerStyle: {
    paddingHorizontal: calcWidth('20'),
  },
  backTitleFontStyle: {
    marginStart: calcWidth(14),
    ...FONTS.bold,
    fontSize: calcFont(16.7),
    color: COLORS.brownishGrey,
  },
  rightHeaderFonts: {
    fontSize: calcFont(16.7),
  },
});

export const common_nav_options = {
  headerTintColor: COLORS.brownishGreyTwo,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  cardStyle: styles.cardStyle,
  headerStyle: styles.headerStyle,
  headerBackTitleVisible: false,
  headerRightContainerStyle: STYLES.headerHorizontal,
  headerLeftContainerStyle: STYLES.headerHorizontal,
};

export default styles;
