import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {getAllNews} from '../../../services/getAllNews';
import {News} from '../../molecules';
import {useNavigation} from '@react-navigation/core';
import {SearchBar} from 'react-native-elements';
import {newsDataTypes} from '../../../utils';

interface NewsListProps {
  id?: string;
}

const NewsList = ({id}: NewsListProps) => {
  const [data, setData] = useState<Array<newsDataTypes>>([]);
  const [filterd, setFilterd] = useState([]);
  const [refreshing, setRefreshing] = useState<boolean>();

  const [isLoaded, setLoaded] = useState<boolean>(false);
  const navigation = useNavigation();
  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
    console.log('itemitemitemitem', data);
    setLoaded(true);
  }, [data]);
  const getData = async () => {
    await getAllNews().then(res => {
      console.log('res7', res.data);
      setRefreshing(false);
      setData(res.data.articles);
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getData();
  };
  const renderNewsList = (item: any) => {
    // console.log('itemitemList', item);

    return (
      <News
        allNews={item.item}
        key={item.index}
        onPress={() => {
          navigation.navigate('NewsDetails', {item});
        }}
      />
    );
  };
  const [searchValue, setSearchValue] = useState<string>('');
  const updateSearch = (text: string) => {
    setSearchValue(text);

    let matched: Array<newsDataTypes> = data.filter((item: any) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilterd(matched);
    console.log('matched', matched);
  };

  return (
    <View style={styles.container}>
      {isLoaded && (
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={searchValue}
        />
      )}
      {isLoaded && (
        <FlatList
          data={!!searchValue ? filterd : data}
          renderItem={renderNewsList}
          style={{paddingBottom: 16}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {flex: 1, paddingBottom: 16},
});
