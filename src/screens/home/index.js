import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UuDaiDacBiet from './kham-pha-them/uu-dai-dac-biet';
import CapNhatTuNha from './kham-pha-them/cap-nhat-tu-nha';
import CoffeeLove from './kham-pha-them/coffee-love';
import styles from './css';
import SlideShow from './slide';
function Header() {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    console.log(curUser);
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  var date = dayjs(new Date());
  console.log(date);
  return (
    <View style={styles.styleHeader}>
      <Text>
        {date?.$H < 13 ? (
          <View style={styles.header}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('../../assets/images/iconBuoiSang.png')}
            />
            <Text style={styles.textFont}>Chào buổi sáng , {user?.name}</Text>
          </View>
        ) : (
          <View style={styles.header}>
            <Image
              style={{
                height: 30,
                width: 50,
              }}
              source={require('../../assets/images/iconBuoiToi.png')}
            />
            <Text style={styles.textFont}>Chào buổi tối , {user?.name}</Text>
          </View>
        )}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Image
          style={{
            height: 30,
            width: 50,
            alignSelf: 'center',
            marginTop: 3,
          }}
          source={require('../../assets/images/iconUuDai.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Image
          style={{
            height: 30,
            width: 30,
            alignSelf: 'center',
            marginTop: 3,
          }}
          source={require('../../assets/images/iconChuong.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
export default function TrangChuPage() {
  const [screen, setScreen] = useState('UuDaiDacBiet');
  console.log(screen);
  const ToggleScreen = () => {
    if (screen) {
      if (screen == 'UuDaiDacBiet') {
        return <UuDaiDacBiet />;
      }
      if (screen == 'CapNhatTuNha') {
        return <CapNhatTuNha />;
      }
      if (screen == 'CoffeeLove') {
        return <CoffeeLove />;
      }
    }
  };
  useEffect(() => {
    ToggleScreen();
  }, []);
  return (
    <View
      style={{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
      }}>
      <Header />
      <SlideShow />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 5,
            marginTop: 5,
          }}>
          Khám phá thêm
        </Text>
        <Image
          style={{
            marginTop: 7,
            height: 20,
            width: 20,
          }}
          source={require('../../assets/images/iconNgoiSao.png')}
        />
      </View>
      <View style={styles.Tab}>
        <TouchableOpacity
          onPress={() => setScreen('UuDaiDacBiet')}
          style={[
            styles.Stack,
            {
              borderColor: screen == 'UuDaiDacBiet',
              borderWidth: 1,
              borderRadius: 15,
              borderColor: screen == 'UuDaiDacBiet' ? '#fe8f01' : 'white',
            },
          ]}>
          <Text
            style={[
              styles.TitTab,
              {color: screen == 'UuDaiDacBiet' ? '#fe8f01' : 'grey'},
            ]}>
            Ưu đãi đặc biệt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen('CapNhatTuNha')}
          style={[
            styles.Stack,
            {
              borderColor: screen == 'CapNhatTuNha',
              borderWidth: 1,
              borderRadius: 15,
              borderColor: screen == 'CapNhatTuNha' ? '#fe8f01' : 'white',
            },
          ]}>
          <Text
            style={[
              styles.TitTab,
              {color: screen == 'CapNhatTuNha' ? '#fe8f01' : 'grey'},
            ]}>
            Cập nhật từ nhà
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen('CoffeeLove')}
          style={[
            styles.Stack,
            {
              borderColor: screen == 'CoffeeLove',
              borderWidth: 1,
              borderRadius: 15,
              borderColor: screen == 'CoffeeLove' ? '#fe8f01' : 'white',
            },
          ]}>
          <Text
            style={[
              styles.TitTab,
              {color: screen == 'CoffeeLove' ? '#fe8f01' : 'grey'},
            ]}>
            #CoffeeLove
          </Text>
        </TouchableOpacity>
      </View>
      <ToggleScreen />
    </View>
  );
}
