import * as React from 'react'; 
import { Button, ScrollView, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
 

 
let duLieu = [
  {name:'dien thoai', price: 30},
  {name:'tivi', price: 30},
  {name:'maytinh', price: 30}
 
]
const ItemDulieu = (props)=>{
  // console.log(props);
  return (
    <View style={{ margin:10, backgroundColor:"cyan", padding:10}}>
      <Text>Name: {props.name} -- price: {props.price}</Text>
    </View>
  );
}
const DemoApp = () => {
 
  return (
    <View> 
        <View style={{margin:20}} />
        <ScrollView style={{height:'100%', backgroundColor:"yellow"}}>
         
        {
            duLieu.map( (item, index, arr)=>{
              // console.log(item);
              return <ItemDulieu key={index} name={item.name} price={item.price} />
            })
        }
        </ScrollView>
    </View>
  )
}


export default DemoApp;

