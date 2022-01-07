import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
  },
  MainContainer: {
    backgroundColor: '#abe3a8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollContainer: {
    backgroundColor: '#cdf1ec',
    flexGrow: 1,
    marginTop: 0,
    width: Dimensions.get('window').width,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 580,
  },
  ScrollTextContainer: {
    fontSize: 20,
    padding: 15,
    color: '#000',
    textAlign: 'center',
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  ButtonContainer: {
    padding: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchable: {
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
    alignItems:'center'
  },
  borderButton: {
    // backgroundColor: '#F2F5A9',
    width: 60,
    height: 60,
    marginLeft: 5,
    borderRadius: 50,
  },
});
export default styles;
