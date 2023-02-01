import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';

const DemoApp = () => {

  return (
    <View style={St.box}>
      <Text style={{ color: 'red', fontSize: 30 }} >Họ tên: NVA</Text>

      <TextInput style={St.inputName} placeholder='Nhập họ tên' />

      <View style={St.btn}>
        <Button title='Chuyển chữ hoa' style={{borderRadius:20}} />
      </View>

      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="pink"
        style={St.btn} onPress={() => alert('Bấm nút')}>
        <Text  > Nút bấm </Text>

      </TouchableHighlight>



    </View>
  )
}


const St = StyleSheet.create({
  btn: {
    margin: 20,
    fontSize: 20,
    color: "blue",
    backgroundColor:"#ccc",

    borderRadius: 20
  },
  box: {
    flex: 1,  // tự căn chỉnh phân chia tỉ lệ kích thước so với màn hình
    justifyContent: "center", // dóng nội dung trong thẻ
    alignItems: "center"  // dóng cái khung so với phần tử cha
  },
  title: {
    color: "red",
    fontSize: 30
  },
  inputName: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    width: '100%'

  }
});





export default DemoApp;