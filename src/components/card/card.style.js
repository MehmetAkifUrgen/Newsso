import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  image: {
    height: 100,
    minWidth: 100,
    resizeMode: 'stretch',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  body: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  seeMore: {
    marginLeft: 5,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
  imageView: {
    borderRadius: 10,
  },
});
