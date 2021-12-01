import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: window.width,
    height: window.height / 4,
  },
});
