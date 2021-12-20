import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getProduct} from '../../service/Api';

export default function ProductDetail({navigation, route}) {
  const [order, setOrder] = useState([]);
  const {data} = route.params;
  console.log(data);
  return (
    <View>
      <Text>abcd</Text>
    </View>
  );
}
