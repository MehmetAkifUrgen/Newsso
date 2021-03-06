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
    'https://newsdata.io/api/1/news?apikey=pub_2514c5cc7288c82b360ed2e46e1118bfed3f&country=tr&language=tr',
  );
  function onPress(item) {
    navigation.navigate('DetailScreen', {data: item});
  }
  const renderItem = ({item}) => {
    return <Card item={item} />;
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
