import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Card from '../../components/card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './css';
import {getList} from '../../service/order.api';
export default function TichDiem() {
  const [dsVoucher, setDsVoucher] = useState();
  const dsList = async () => {
    try {
      const res = await getList();
      setDsVoucher(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dsList();
  }, []);
  return (
    <View style={{marginLeft: 10, marginRight: 10}}>
      <Card />
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.touchStyle}>
          <MaterialCommunityIcons
            name="music-box-outline"
            size={30}
            color="green"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Nhạc đang phát
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="file-edit-outline"
            size={30}
            color="purple"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Điều khoản sử dụng
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.touchStyle}>
          <MaterialCommunityIcons
            name="music-box-outline"
            size={30}
            color="green"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Nhạc đang phát
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="file-edit-outline"
            size={30}
            color="purple"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Điều khoản sử dụng
          </Text>
        </TouchableOpacity>
      </View>
      {dsVoucher?.map(e => (
        <TouchableOpacity>
          <Text>{e?.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
