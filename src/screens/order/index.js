import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TextInput,
} from 'react-native';
import {getProduct} from '../../service/Api';
import styles from './css';
import LatteMocha from './product/latte-mocha';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TraSua from './product/tra-sua';
import ComboDoAnVat from './product/combo-doanvat';
import ChaiCaPhe from './product/chai-ca-phe';
import CookieChocolate from './product/cookie-chocolate';
import CacLoaiTra from './product/cac-loai-tra';
import DoUongKhac from './product/do-uong-khac';
import ModalTimKiem from './modal-tim-kiem';
import HeaderOrder from './header';

export default function Order({navigation}) {
  const scrollRef = useRef();
  const [order, setOrder] = useState([]);
  const [ds, setDs] = useState([]);
  const [isShowModalTimKiem, setIsShowModalTimKiem] = useState(false);
  const [click, setClick] = useState();
  const getListProduct = async () => {
    try {
      const result = await getProduct();
      setOrder(result.data.data);
      setDs(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListProduct();
  }, []);

  const moveToDetail = item => () =>
    navigation.navigate('Detail', {data: item});

  const renderItem = item => (
    <TouchableOpacity
      style={styles.touchable}
      onPress={moveToDetail(item)}
      key={item._id}>
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
          size={40}
          color="orange"
        />
      </View>
    </TouchableOpacity>
  );
  const filterSearch1 = order?.filter(
    e => e.categ_id?.[0] === 9 && e.categ_id?.[1] === 20,
  );
  const filterSearch2 = order?.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 72,
  );
  const filterSearch3 = order?.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 10,
  );
  const filterSearch4 = order?.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id?.[1] === 2,
  );
  const filterSearch5 = order?.filter(
    e => e.categ_id?.[0] === 5 && e.categ_id?.[1] === 72,
  );
  const filterSearch6 = order?.filter(
    e => e.categ_id?.[0] === 18 && e.categ_id?.[1] === 22,
  );
  const filterSearch7 = order?.filter(
    e => e.categ_id?.[0] === 1 && e.categ_id.length === 1,
  );
  const filterSearch8 = order?.filter(
    e => e.categ_id?.[0] === 2 && e.categ_id.length === 1,
  );
  const filterSearch9 = order?.filter(
    e => e.categ_id?.[0] === 5 && e.categ_id.length === 1,
  );
  const filterSearch10 = order?.filter(
    e => e.categ_id?.[0] === 12 && e.categ_id.length === 1,
  );
  const filterSearch11 = order?.filter(
    e => e.categ_id?.[0] === 18 && e.categ_id.length === 1,
  );
  const screenWidth = Dimensions.get('window').width;
  const imagesButton = [
    {
      key: 1,
      image: require('../../assets/images/capheda.png'),
      data: filterSearch1,
      text: 'Latte Mocha',
      screenWidth: 0,
      click: 'LatteMocha',
    },
    {
      key: 2,
      image: require('../../assets/images/traTraiCay.png'),
      data: filterSearch3?.concat(filterSearch2),
      text: 'Tra Sua',
      screenWidth: screenWidth,
      click: 'TraSua',
    },
    {
      key: 3,
      image: require('../../assets/images/Juice.png'),
      data: filterSearch6,
      text: 'Combo Do An Vat',
      screenWidth: screenWidth * 2,
      click: 'ComboDoAnVat',
    },
    {
      key: 4,
      image: require('../../assets/images/iconCafe.png'),
      data: filterSearch4,
      text: 'Chai Cà phê',
      screenWidth: screenWidth * 3,
      click: 'ChaiCaPhe',
    },
    {
      key: 5,
      image: require('../../assets/images/caphedaxay.jpg'),
      data: filterSearch5,
      text: 'Cookie Chocolate',
      screenWidth: screenWidth * 4,
      click: 'CookieChocolate',
    },
    {
      key: 6,
      image: require('../../assets/images/iconGiaoHang.png'),
      data: filterSearch6,
      text: 'Cac loai tra',
      screenWidth: screenWidth * 5,
      click: 'CacLoaiTra',
    },
    {
      key: 7,
      image: require('../../assets/images/card.jpg'),
      data: filterSearch7,
      text: 'Do uong khac',
      screenWidth: screenWidth * 6,
      click: 'DoUongKhac',
    },
  ];
  const [useScroll, setUseScroll] = useState(0);
  const [search, setSearch] = useState('');
  const handleScroll = event => {
    setUseScroll(event.nativeEvent.contentOffset.x);
  };

  useEffect(() => {
    setClick();
  }, [useScroll]);

  const searchData = (search, data) => {
    let filterData = [];
    for (var i = 0; i < order?.length; i++) {
      search = search.toLowerCase();
      var product_name = order[i].product_name.toLocaleLowerCase();
      if (product_name.includes(search)) {
        filterData.push(data[i]);
      }
    }
    return filterData;
    // setOrder(order)
  };
  useEffect(() => {
    let b = searchData(search, order);
    setDs(b);
  }, [search]);
  return (
    <View>
      {/* <TextInput placeholder="Nhập gì đó" onChangeText={setSearch} /> */}
      <HeaderOrder
        setIsShowModalTimKiem={setIsShowModalTimKiem}
        imagesButton={imagesButton}
        setClick={setClick}
        scrollRef={scrollRef}
        navigation={navigation}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.ButtonContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {imagesButton.map(e => (
              <TouchableOpacity
                key={e.key}
                style={[
                  styles.borderButton,
                  {
                    backgroundColor:
                      click === e.click ||
                      useScroll.toFixed() === e.screenWidth.toFixed()
                        ? '#F3E2A9'
                        : 'white',
                  },
                ]}
                onPress={() => {
                  scrollRef.current?.scrollTo({
                    x: e.screenWidth,
                    y: 0,
                    animated: true,
                  });
                  setClick(e.click);
                }}>
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
          </ScrollView>
        </View>
      </View>
      <ScrollView
        onScroll={handleScroll}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}>
        <View style={styles.ScrollContainer}>
          <LatteMocha
            data={filterSearch2?.concat(filterSearch3)}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.ScrollContainer}>
          <TraSua
            data={filterSearch5?.concat(filterSearch4, filterSearch1)}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.ScrollContainer}>
          <ComboDoAnVat
            data={filterSearch6?.concat(filterSearch10)}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.ScrollContainer}>
          <ChaiCaPhe data={filterSearch7} renderItem={renderItem} />
        </View>
        <View style={styles.ScrollContainer}>
          <CookieChocolate data={filterSearch8} renderItem={renderItem} />
        </View>
        <View style={styles.ScrollContainer}>
          <CacLoaiTra data={filterSearch9} renderItem={renderItem} />
        </View>
        <View style={styles.ScrollContainer}>
          <DoUongKhac data={filterSearch11} renderItem={renderItem} />
        </View>
      </ScrollView>
      <ModalTimKiem
        setVisible={setIsShowModalTimKiem}
        visible={isShowModalTimKiem}
        ds={ds}
        setDs={setDs}
        setSearch={setSearch}
        renderItem={renderItem}
      />
    </View>
  );
}
