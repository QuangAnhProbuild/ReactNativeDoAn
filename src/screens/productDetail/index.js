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
import styles from './css';

export default function ProductDetail({navigation, route}) {
  const {data} = route.params;
  const [checked, setChecked] = useState('Nho');
  const [iconHeart, setIconHeart] = useState('gray');
  return (
    <View>
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
            {`${data?.base_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
          </Text>
          <Text style={{marginTop: 20}}>{data?.description}</Text>
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={() => setChecked('Nho')}
              status={checked === 'Nho' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>Nhỏ</Text>
              <Text style={styles.styleText}>+ 0đ</Text>
            </View>
          </View>
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={() => setChecked('Vua')}
              status={checked === 'Vua' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>Vừa</Text>
              <Text style={styles.styleText}>+ 6.000đ</Text>
            </View>
          </View>
          <View style={styles.flexRadio}>
            <RadioButton
              value={checked}
              onPress={() => setChecked('Lon')}
              status={checked === 'Lon' ? 'checked' : 'unchecked'}
            />
            <View style={styles.flexText}>
              <Text style={styles.styleText}>Lớn</Text>
              <Text style={styles.styleText}>+ 10.000đ</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Yêu cầu khác</Text>
            <Text>Những tùy chọn khác</Text>
            <TextInput
              style={{borderWidth: 0.5, borderRadius: 10}}
              placeholder="Thêm ghi chú"
            />
          </View>
        </View>
      </ScrollView>
      <View style={{backgroundColor: 'white', height: 80}}>
        <Text>abcasgfasdfdg</Text>
      </View>
    </View>
  );
}
