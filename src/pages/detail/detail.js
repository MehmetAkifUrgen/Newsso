import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './detail.style';
import DetailCard from '../../components/detailCard';

const Detail = ({route}) => {
  const {data} = route.params;
  console.log(data.title);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.urlToImage}} />
      <DetailCard item={data} />
    </View>
  );
};

export default Detail;
