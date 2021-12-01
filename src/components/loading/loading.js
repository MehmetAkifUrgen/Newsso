import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = ({params}) => {
  return (
    <LottieView
      source={require('../../../assets/loading.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
