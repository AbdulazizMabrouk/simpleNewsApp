import * as React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
} from 'react-native';
import {AppText} from '../../Atoms';
import {FONTS, COLORS} from '../../../common';

interface NewsDetailProps {
  route?: any;
}

const NewsDetail = ({route}: NewsDetailProps) => {
  let {item} = route.params.item;
  console.log(item);

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.author}>{item.author}</AppText>
        <AppText style={styles.publishedAt}>{item.publishedAt}</AppText>
        <Image
          style={{
            width: '100%',
            aspectRatio: 1.9,
            borderRadius: 8,
            marginVertical: 8,
          }}
          source={{uri: item.urlToImage}}
        />

        <AppText style={styles.description}>{item.description}</AppText>
      </View>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 16},
  title: {...FONTS.bold, marginTop: 8},
  author: {color: COLORS.greyishBrown, marginTop: 8},
  publishedAt: {...FONTS.regular, color: COLORS.greyishBrown, marginTop: 8},

  description: {...FONTS.medium, color: COLORS.darkGreyTwo},
});
