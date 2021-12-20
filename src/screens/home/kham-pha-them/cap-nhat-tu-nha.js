import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {getNewsfeed} from '../../../service/Api';
import {dataKhamPha} from './data';

export default function CapNhatTuNha() {
  // const [newFeed, setNewfeed] = useState([]);
  // const getApiNewsfeed = async () => {
  //   try {
  //     const result = await getNewsfeed();
  //     console.log(result);
  //     setNewfeed(result.data.news[1].posts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getApiNewsfeed();
  // }, []);
  const data = dataKhamPha.news?.[1].posts;
  console.log(data);
  const renderItem = ({item}) => (
    <TouchableOpacity style={{width: '50%'}}>
      <Image source={{uri: item.thumbnail}} style={styles.imgStyle} />
      <View style={styles.rowPrice}>
        <Text style={{width: 180}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgStyle: {
    marginLeft: 5,
    height: 180,
    width: 180,
    borderRadius: 8,
    marginTop: 10,
  },
});
