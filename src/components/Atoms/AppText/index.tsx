import React from 'react';
import {Text, TextProps, TextStyle, useColorScheme} from 'react-native';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  style?: TextStyle | Array<TextStyle | undefined | boolean>;
  onPress?: () => void;
  children: React.ReactNode;
}

let AppText: React.FC<Props & TextProps> = ({
  children,
  style,
  onPress,
  ...rest
}: Props & TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={[
        styles.text,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },

        style,
      ]}
      onPress={onPress}
      {...rest}>
      {children}
    </Text>
  );
};

AppText = React.memo(AppText);
export {AppText};
