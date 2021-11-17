import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {STYLES, COLORS} from '../../../common';

interface NewsProps {
  allNews: object;
  onPress: Function;
}

const News = ({allNews, onPress}: NewsProps) => {
  return (
    <ImageBackground
      source={{
        uri: allNews.urlToImage,
      }}
      imageStyle={{
        borderRadius: 32,
      }}
      style={{
        marginHorizontal: 16,
        flex: 0.5,
        minHeight: 300,
        marginTop: 16,
        justifyContent: 'flex-end',
        ...STYLES.shaddow,
        borderRadius: 32,
      }}>
      <View
        style={{
          padding: 16,
          borderBottomStartRadius: 32,
          borderBottomEndRadius: 32,
          backgroundColor: 'rgba(23,44,200,0.3)',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, color: COLORS.white}} onPress={onPress}>
          {allNews.title}
        </Text>
      </View>
    </ImageBackground>
    // </View>
  );
};

export {News};
