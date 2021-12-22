import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {dataKhamPha} from './data';
export default function UuDaiDacBiet({scrollY, navigation}) {
  const data = dataKhamPha.news?.[0].posts;
  const moveToDetail = item => () =>
    navigation.navigate('newsDetail', {data: item});

  const renderItem = ({item}) => (
    <TouchableOpacity style={{width: 170}} onPress={moveToDetail(item)}>
      <Image source={{uri: item.thumbnail}} style={styles.imgStyle} />
      <View style={styles.rowPrice}>
        <Text style={{width: 170}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  // const dataChan = data.filter((e, index) => index % 2 === 0);
  // const dataLe = data.filter((e, index) => index % 2 !== 0);

  return (
    <View style={{width: 335}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
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
    height: 160,
    width: 160,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 5,
  },
});
