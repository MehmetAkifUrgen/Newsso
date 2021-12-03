import React from 'react';
import {View, FlatList} from 'react-native';
import Error from '../../components/error';
import Loading from '../../components/loading';
import styles from './sport.style';
import Card from '../../components/card';
import useGetNews from '../../customHooks/useGetNews';

const Sport = ({}) => {
  const {loading, data, error} = useGetNews(
    'https://newsdata.io/api/1/news?apikey=pub_2514c5cc7288c82b360ed2e46e1118bfed3f&country=tr&language=tr&category=sports',
  );
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

export default Sport;
