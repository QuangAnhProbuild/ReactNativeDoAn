import React from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import styles from './css';
export default function ModalDanhMuc({
  showModalDanhMuc,
  setShowModalDanhMuc,
  imagesButton,
  setClick,
  scrollRef,
}) {
  return (
    <Modal visible={showModalDanhMuc} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: '#00000055',
        }}>
        <View
          style={{
            height: 650,
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            flexWrap: 'wrap',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View style={styles.ButtonContainer}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 200,
                marginTop: 30,
              }}>
              {imagesButton.map(e => (
                <TouchableOpacity
                  key={e.key}
                  style={{
                    marginLeft: 20,
                    justifyContent: 'space-around',
                    height: 60,
                    width: 60,
                    backgroundColor: 'orange',
                    borderRadius: 50,
                  }}
                  onPress={() => {
                    scrollRef.current?.scrollTo({
                      x: e.screenWidth,
                      y: 0,
                      animated: true,
                    }),
                      setShowModalDanhMuc(false),
                      setClick(e.click);
                  }}>
                  <Image
                    style={{
                      height: 50,
                      marginTop: 10,
                      width: 50,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}
                    source={e.image}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
