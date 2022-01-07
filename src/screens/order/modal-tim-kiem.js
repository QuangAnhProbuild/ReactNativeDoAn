import React from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function ModalTimKiem({
  visible,
  setVisible,
  ds,
  setDs,
  setSearch,
  renderItem,
}) {
  return (
    <Modal
      onRequestClose={() => setVisible(false)}
      visible={visible}
      animationType="slide">
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Tìm kiếm..."
            style={{
              backgroundColor: '#E5E5E5',
              width: Dimensions.get('window').width - 90,
              borderRadius: 10,
            }}
            onChangeText={setSearch}
          />
          <TouchableOpacity
            style={{width: 80}}
            onPress={() => setVisible(false)}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
              Đóng
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>{ds.map(renderItem)}</ScrollView>
      </View>
    </Modal>
  );
}
