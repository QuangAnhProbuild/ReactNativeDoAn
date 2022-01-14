import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Card from '../../components/card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './css';
import {getList} from '../../service/order.api';
export default function TichDiem({setChangeScreen, navigation}) {
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
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => setChangeScreen('DoiUuDai')}>
          <MaterialCommunityIcons
            name="crop-landscape"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Đổi ưu đãi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Phiếu ưu đãi của bạn
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => navigation.navigate('LichSuDonHang')}>
          <MaterialCommunityIcons
            name="equal"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Lịch sử giao dịch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="account-box-outline"
            size={30}
            color="purple"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Quyền lợi của bạn
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
