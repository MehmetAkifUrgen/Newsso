import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './card.style';

const Card = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.image} source={{uri: item.urlToImage}} />
    <View style={styles.body}>
      <Text style={styles.text}> {item.title} </Text>
    </View>
  </TouchableOpacity>
);

export default Card;
