import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    minWidth: 120,
    resizeMode: 'stretch',
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
});
