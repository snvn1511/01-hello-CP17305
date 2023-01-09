import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
 

const CompCon1 = (props)=>{

  // gửi sang cha:
  props.goiHamCha("Dữ liệu của con");

    return (
      <View>
        <Text style={{fontSize:20}}>
            Ho ten: {props.hoTen}  {"\n"}
            Tuoi: {props.tuoi}
        </Text>
      </View>
    );
}

export default function App() {
  const [duLieuCon1, setduLieuCon1] = useState("");
  
  const callback_ComCon1 = (data_con)=>{
        setduLieuCon1( data_con );
  }

  return (
    <View  style={  {paddingTop:50, paddingLeft:20} }>
       
       <Text style={DinhDang.nodung} > Dữ liệu con:  { duLieuCon1 }</Text>
      <CompCon1 hoTen = "Nguyen A" tuoi = "20"
                goiHamCha={callback_ComCon1} />
    </View>
  );
}
 
const DinhDang = StyleSheet.create({
      nodung:{
        fontSize:20, color:'red'
      }
});