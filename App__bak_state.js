import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
 

export default function App() {
  const [hoTen, sethoTen] = useState("ABC");

  const CapNhat = (dulieu)=>{
        sethoTen( dulieu );
  }
  const ChuyenChuHoa = ()=>{
    sethoTen(  hoTen.toUpperCase()    )
  }

  return (
    <View  style={  {paddingTop:50, paddingLeft:20} }>
      <Text style={{fontSize:30}}>Ho ten:  {hoTen}   </Text>

      <TextInput placeholder='Nhap ho ten' onChangeText={CapNhat} />
      <Button title='Đổi chữ' onPress={ChuyenChuHoa} />
    </View>
  );
}
 
