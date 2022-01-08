import React from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDanhMuc from './clickButtonDanhMuc';

export default function HeaderOrder({
  setIsShowModalTimKiem,
  imagesButton,
  setClick,
  scrollRef,
  navigation,
}) {
  const [showModalDanhMuc, setShowModalDanhMuc] = useState(false);
  return (
    <View style={{borderBottomColor: '#D8D8D8', borderBottomWidth: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => setShowModalDanhMuc(true)}
          style={{
            flexDirection: 'row',
            width: 250,
            height: 60,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/logocoffeehouse.jpg')}
            style={{height: 25, width: 25, borderRadius: 50}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 5,
              marginRight: 5,
            }}>
            Danh mục
          </Text>
          <Ionicons name="chevron-down" size={20} color={'black'} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => setIsShowModalTimKiem(true)}>
            <Ionicons name="search" size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Ionicons name="heart-outline" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <ModalDanhMuc
        imagesButton={imagesButton}
        setShowModalDanhMuc={setShowModalDanhMuc}
        showModalDanhMuc={showModalDanhMuc}
        setClick={setClick}
        scrollRef={scrollRef}
      />
    </View>
  );
}
