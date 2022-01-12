import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import MainButton from '../components/mainButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getList} from '../service/order.api';
export default function ProfileScreen({navigation}) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('curUser');
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
    navigation.navigate('LoginScreen');
  };
  useEffect(() => {
    getUserData(user);
  }, [user]);

  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        flex: 1,
        width: '100%',
        paddingTop: StatusBar.currentHeight + 30,
        paddingHorizontal: 12,
      }}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{
            uri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/269804499_3197696757125672_5339279476620175549_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=af2BroKJ6HIAX9TOCdA&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-PP4iUUgFkW-4X6pQhlVZsfY-RxiobSzI5q-yJSpsAug&oe=61D70ED9',
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {user && user.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}>
          {user && user.email}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Tiện ích
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: 80,
            justifyContent: 'space-around',
          }}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Lịch sử đơn hàng
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 180,
              backgroundColor: 'white',
              borderRadius: 10,
              height: 80,
              justifyContent: 'space-around',
            }}>
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
          <TouchableOpacity
            style={{
              width: 180,
              backgroundColor: 'white',
              borderRadius: 10,
              height: 80,
              justifyContent: 'space-around',
            }}>
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
      </View>
      <MainButton
        onPress={logOut}
        style={{backgroundColor: 'red', marginBottom: 100}}
        title={'Đăng Xuất'}
      />
    </View>
  );
}
