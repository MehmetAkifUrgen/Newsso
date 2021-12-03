import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './card.style';
import ReadMore from '@fawazahmed/react-native-read-more';

const Card = ({item, onPress}) => (
  <View onPress={onPress} style={styles.container}>
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={{
          uri:
            item.image_url == null
              ? 'https://saglikguncelhaber.com/wp-content/uploads/2020/11/news.jpg'
              : item.image_url,
        }}
      />
    </View>
    <View style={styles.body}>
      <Text style={styles.title}> {item.title} </Text>
      <ReadMore
        seeMoreStyle={styles.seeMore}
        numberOfLines={2}
        seeMoreText="Devamını gör"
        seeLessText="Daha az göster"
        style={styles.text}>
        {item.description}
      </ReadMore>
    </View>
  </View>
);

export default Card;
