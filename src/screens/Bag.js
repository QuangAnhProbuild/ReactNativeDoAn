import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function Bag() {
  const dispatch = useDispatch();
  const listItem = useSelector(store => store.cartReducer.cart);
  const onChangeQuantity = (data, type) => () => {
    if (type === 'increase') {
      dispatch({type: 'INCREASE_QUANTITY', data: data});
    } else {
      data?.quantity > 0 && dispatch({type: 'REDUCE_QUANTITY', data});
    }
  };

  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_ALL'});
  };

  return (
    <View style={{padding: 20}}>
      {!listItem?.length && <Text>Nothing</Text>}
      {listItem?.map(e => {
        return (
          <View key={e?._id} style={{flexDirection: 'row', marginTop: 20}}>
            <Text>{e?.name}</Text>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <TouchableOpacity
                onPress={onChangeQuantity(e, 'increase')}
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>+</Text>
              </TouchableOpacity>
              <Text style={{marginHorizontal: 10}}>{e?.quantity || 0}</Text>
              <TouchableOpacity
                onPress={onChangeQuantity(e, 'reduce')}
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      {listItem?.length ? (
        <TouchableOpacity
          onPress={onRemoveAll}
          style={{
            borderWidth: 1,
            height: 50,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'black'}}>Remove All</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
