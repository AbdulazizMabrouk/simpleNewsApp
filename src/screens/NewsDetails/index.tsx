import * as React from 'react';
import {StyleSheet} from 'react-native';
import NewsDetail from '../../components/organisms/NewsDetail';

interface NewsDetailsProps {
  route?: any;
  navigation?: any;
}

const NewsDetails = ({route, navigation}: NewsDetailsProps) => {
  return <NewsDetail route={route} navigation={navigation} />;
};

export {NewsDetails};

const styles = StyleSheet.create({
  container: {},
});
