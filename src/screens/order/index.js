import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
import {getProduct} from '../../service/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './css';
export default function Order({navigation}) {
  const [order, setOrder] = useState([]);

  const getListProduct = async () => {
    try {
      const result = await getProduct();
      setOrder(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const filterSearch1 = order.filter(
    e => e.categ_id?.[0] === 9 && e.categ_id?.[1] === 20,
  );
  const filterSearch2 = order.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 72,
  );
  const filterSearch3 = order.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 10,
  );
  const filterSearch4 = order.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 2,
  );
  const filterSearch5 = order.filter(
    e => e.categ_id?.[0] === 5 && e.categ_id?.[1] === 72,
  );
  const filterSearch6 = order.filter(
    e => e.categ_id?.[0] === 18 && e.categ_id?.[1] === 22,
  );
  const filterSearch7 = order.filter(e => e.categ_id?.[0] === 1);
  const filterSearch8 = order.filter(e => e.categ_id?.[0] === 2);
  const filterSearch9 = order.filter(e => e.categ_id?.[0] === 5);
  const filterSearch10 = order.filter(e => e.categ_id?.[0] === 12);
  const filterSearch11 = order.filter(e => e.categ_id?.[0] === 18);

  useEffect(() => {
    getListProduct();
  }, []);

  const moveToDetail = item => () =>
    navigation.navigate('Detail', {data: item});

  const renderItem = item => (
    <TouchableOpacity style={styles.touchable} onPress={moveToDetail(item)} key={item._id}>
      <View style={styles.flexRow}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: item.image}} style={styles.imgStyle} />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', width: 200}}>
              {item.product_name}
            </Text>
            <Text>
              Giá: {`${item.base_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
            </Text>
          </View>
        </View>
        <Ionicons
          style={{alignSelf: 'flex-end', justifyContent: 'flex-end'}}
          name="add-circle"
          size={25}
          color="orange"
        />
      </View>
    </TouchableOpacity>
  );

  const imagesButton = [
    {key: 1,image: require('../../assets/images/capheda.png')},
    {key: 2,image: require('../../assets/images/traTraiCay.png')},
    {key: 3,image: require('../../assets/images/anvat.png')},
    {key: 4,image: require('../../assets/images/iconCafe.png')},
    {key: 5,image: require('../../assets/images/caphedaxay.jpg')},
    {key: 6,image: require('../../assets/images/iconGiaoHang.png')},
  ];

  return (
    <LinearGradient colors={['white', '#F2F5A9', '#FACC2E']}>
      <View style={{flexDirection: 'row'}}>
        {imagesButton.map(e => (
          <TouchableOpacity style={styles.borderButton} key={e.key}>
            <Image
              style={{
                height: 40,
                marginTop: 10,
                width: 28,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
              source={e.image}
            />
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <View>
          <Text>Các loại ly</Text>
          {filterSearch1.map(renderItem)}
        </View>
        <View>
          <Text>Latte</Text>
          {filterSearch2.map(renderItem)}
        </View>
        <View>
          <Text>Mocha & Cappuccino</Text>
          {filterSearch3.map(renderItem)}
        </View>
        <View>
          <Text>Cà phê đá xay</Text>
          {filterSearch4.map(renderItem)}
        </View>
        <View>
          <Text>Trà sữa</Text>
          {filterSearch5.map(renderItem)}
        </View>
        <View>
          <Text>Các loại combo</Text>
          {filterSearch6.map(renderItem)}
        </View>
        <View>
          <Text>Cà phê</Text>
          {filterSearch7.map(renderItem)}
        </View>
        <View>
          <Text>Đá xay - Choco - Matcha</Text>
          {filterSearch8.map(renderItem)}
        </View>
        <View>
          <Text>Trà trái cây - Trà sữa</Text>
          {filterSearch9.map(renderItem)}
        </View>
        <View>
          <Text>Đồ ăn vặt</Text>
          {filterSearch10.map(renderItem)}
        </View>
        <View>
          <Text>Thưởng thức tại nhà</Text>
          {filterSearch11.map(renderItem)}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
