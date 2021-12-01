import React from 'react';
import {Text, View} from 'react-native';
import styles from './detailCard.style';

const DetailCard = ({item}) => (
  <View style={styles.container}>
    <Text style={styles.bigText}>{item.title} </Text>
    <Text style={styles.text}>{item.content}</Text>
  </View>
);

export default DetailCard;
