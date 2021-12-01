import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Error from '../../components/error';
import styles from './home.style';
import Loading from '../../components/loading';
import Config from 'react-native-config';
import useGetNews from '../../customHooks/useGetNews';
import Card from '../../components/card';

const Home = ({navigation}) => {
  const {loading, data, error} = useGetNews(
    'https://newsapi.org/v2/top-headlines?country=tr&apiKey=23b292968bec448ba6a6b84605417509',
  );
  function onPress(item) {
    navigation.navigate('DetailScreen', {data: item});
  }
  const renderItem = ({item}) => {
    return <Card onPress={() => onPress(item)} item={item} />;
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
