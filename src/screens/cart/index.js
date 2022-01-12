import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDiemGiao from './modal-chon-diem-giao';
import ListProductCart from './list-product-cart';
import ModalVoucher from './modal-voucher';

function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 60,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={25} color={'black'} />
      </TouchableOpacity>
      <Text
        style={{
          width: Dimensions.get('window').width - 40,
          textAlign: 'center',
          fontSize:20, fontWeight:'bold'
        }}>
        THE COFFEE HOUSE
      </Text>
    </View>
  );
}

export default function Cart({navigation}) {
  const [diaChiGiao, setDiaChiGiao] = useState();
  const [showModalDiaChiGiao, setShowModalDiaChiGiao] = useState(false);
  const [diaDiemNhan, setDiaDiemNhan] = useState();
  const [showModalVoucher, setShowModalVoucher] = useState(false);
  const [voucher, setVoucher] = useState();
  const listItem = useSelector(store => store.cartReducer.cart);

  const arrTongTien = listItem?.map(e => ({
    ...e,
    sumPrice: e?.quantity * e?.price,
  }));
  const tienTungDonHang = arrTongTien?.map(e => e?.sumPrice);
  // console.log(voucher);
  // console.log(
  //   tienTungDonHang.length > 0
  //     ? voucher
  //       ? `${
  //           tienTungDonHang?.reduce((pre, cur) => pre + cur) - voucher?.discount
  //         }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  //       : `${tienTungDonHang?.reduce((pre, cur) => pre + cur)}`.replace(
  //           /\B(?=(\d{3})+(?!\d))/g,
  //           ',',
  //         )
  //     : 0,
  // );
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 80}}>
        <Header navigation={navigation}/>
        <View style={{height: 7, backgroundColor: '#D8D8D8'}} />
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Giao tới</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              width: Dimensions.get('window').width,
            }}>
            <Image
              source={require('../../assets/images/iconViTri.png')}
              style={{height: 30, width: 40}}
            />
            <TouchableOpacity
              onPress={() => setShowModalDiaChiGiao(true)}
              style={{
                height: 50,
                width: Dimensions.get('window').width - 40,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                {diaDiemNhan ? diaDiemNhan : 'Chọn điểm nhận'}
              </Text>
              <Ionicons name="chevron-forward" color={'black'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 7, backgroundColor: '#D8D8D8'}} />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tóm tắt đơn hàng</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Thêm món</Text>
            </TouchableOpacity>
          </View>
          <ListProductCart listItem={listItem} />
        </View>
        <View style={{height: 7, backgroundColor: '#D8D8D8', marginTop: 10}} />
        <View>
          <Text>Thông tin hóa đơn</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/iconTienMat.jpg')}
                style={{height: 30, width: 30}}
              />
              <Text>Tiền mặt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowModalVoucher(true)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/iconUuDai.jpg')}
                style={{height: 30, width: 30}}
              />
              <Text>Ưu đãi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{height: 80, elevation: 10, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Tổng cộng</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {tienTungDonHang.length > 0
              ? voucher
                ? voucher?.discount > 101
                  ? `${
                      tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                      voucher?.discount
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : `${
                      tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                      (tienTungDonHang?.reduce((pre, cur) => pre + cur) *
                        voucher?.discount) /
                        100
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : `${tienTungDonHang?.reduce((pre, cur) => pre + cur)}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                  )
              : 0}
          </Text>
        </View>
        <TouchableOpacity
        // onPress={() => }
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            height: 40,
            width: Dimensions.get('window').width - 30,
          }}>
          <Text>Đặt đơn</Text>
        </TouchableOpacity>
      </View>
      <ModalDiemGiao
        setShowModalDiaChiGiao={setShowModalDiaChiGiao}
        showModalDiaChiGiao={showModalDiaChiGiao}
        diaChiGiao={diaChiGiao}
        setDiaChiGiao={setDiaChiGiao}
        setDiaDiemNhan={setDiaDiemNhan}
      />
      <ModalVoucher
        setShowModalVoucher={setShowModalVoucher}
        showModalVoucher={showModalVoucher}
        setVoucher={setVoucher}
      />
    </View>
  );
}
