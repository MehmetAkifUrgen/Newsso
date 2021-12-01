import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Error = ({params}) => {
  return (
    <LottieView source={require('../../../assets/error.json')} autoPlay loop />
  );
};

export default Error;
