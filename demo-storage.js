import * as React from 'react'; 
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 // hàm ghi dữ liệu
const storeData  = async () => {
  let strKey= 'hoTen';
  let value = 'Nguyen Van A ' + Math.random();
 
  try { 
    await AsyncStorage.setItem(strKey, value);
    alert("Ghi xong dữ liệu")
  } catch (e) {
    // saving error
    console.log(e);
  }
}
 
 

// hàm đọc dữ liệu
const getData = async () => {
  let strKey= 'hoTen';
 
  try {
    const value = await AsyncStorage.getItem(strKey)
    if(value !== null) {
      // lấy được dữ liệu:
       alert(value) ;
    }
  } catch(e) {
    // error reading value
    console.log(e);
  }
   
}


const DemoApp = ()=>{

  return (
    <View>
 
        <Button  title='Save data ' onPress={storeData}/>
        <View style={{margin:20}} />
        <Button title='Read data' onPress={ getData} />
 
    </View>
  )


}

export default DemoApp;

