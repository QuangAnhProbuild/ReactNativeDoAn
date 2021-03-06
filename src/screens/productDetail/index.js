import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import styles from './css';

export default function ProductDetail({navigation, route}) {
  const {data} = route.params;
  const dispatch = useDispatch();
  const [checked, setChecked] = useState('Nho');
  const [giaTien, setGiaTien] = useState();
  const [iconHeart, setIconHeart] = useState('gray');

  const checkedNho = () => {
    setChecked('Nho');
    setGiaTien(0);
  };
  const checkedVua = () => {
    setChecked('Vua');
    setGiaTien(6000);
  };
  const checkedLon = () => {
    setChecked('Lon');
    setGiaTien(10000);
  };
  const onAddCard = () => {
    dispatch({
      type: 'ADD_TO_CART',
      data: {
        ...data,
        quantity: 1,
        price: giaTien ? data?.base_price + giaTien : data?.base_price,
      },
    });
    navigation.goBack();
    // gui action toi reducer
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView style={{height: 640}}>
        <Image style={styles.imageStyle} source={{uri: data?.image}} />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24}}>
              {data?.product_name}
            </Text>
            <TouchableOpacity
              onPress={() =>
                iconHeart === 'gray'
                  ? setIconHeart('red')
                  : setIconHeart('gray')
              }>
              <AntDesign
                name={iconHeart === 'gray' ? 'hearto' : 'heart'}
                color={iconHeart === 'gray' ? 'gray' : 'red'}
                size={25}
                style={{alignSelf: 'center', marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
          <Text>
            {`${data?.base_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}??
          </Text>
          <Text style={{marginTop: 20}}>{data?.description}</Text>
        </View>
        <View style={styles.views} />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Size {<Text style={{color: 'red'}}>*</Text>}
          </Text>
          <Text>Ch???n 1 lo???i size</Text>
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={checkedNho}
              status={checked === 'Nho' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>Nh???</Text>
              <Text style={styles.styleText}>+ 0??</Text>
            </View>
          </View>
          <View style={styles.viewsRadio} />
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={checkedVua}
              status={checked === 'Vua' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>V???a</Text>
              <Text style={styles.styleText}>+ 6.000??</Text>
            </View>
          </View>
          <View style={styles.viewsRadio} />
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={checkedLon}
              status={checked === 'Lon' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>L???n</Text>
              <Text style={styles.styleText}>+ 10.000??</Text>
            </View>
          </View>
        </View>
        <View style={styles.views} />
        <View style={{marginLeft: 10, marginRight: 10, marginBottom: 30}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Y??u c???u kh??c</Text>
            <Text>Nh???ng t??y ch???n kh??c</Text>
            <TextInput
              style={{borderWidth: 0.5, borderRadius: 10}}
              placeholder="Th??m ghi ch??"
            />
          </View>
        </View>
      </ScrollView>
      <View
        elevation={30}
        style={{
          backgroundColor: 'white',
          height: 80,
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.styleButton} onPress={onAddCard}>
          <Text style={styles.alignText}>
            {`${
              giaTien ? data?.base_price + giaTien : data?.base_price
            }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            ??
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
