import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';


const StackDemo = createNativeStackNavigator();

 // Bước 4: Định nghĩa component các màn hình ------------------------------------------------
const TrangChu = ( {navigation, route} ) => {
 // const navigation = useNavigation();
 
  return (
    <View style={{ backgroundColor: "yellow" }}>
      <Text style={{ fontSize: 30 }}>Đây là màn Home </Text>
      <Text>
        Tên ứng dụng: {route.params.tenUD} -- {route.params.add}
      </Text>
 
      <TouchableHighlight  activeOpacity={0.6}  underlayColor="pink"
        onPress={() => { navigation.navigate('About', {hoTen:'NV ABC'}) }}>
        <Text> Sang màn hình Giới thiệu</Text>
      </TouchableHighlight>
 
    </View>
  );
}



 
const GioiThieu = ( {navigation, route} ) => {
  //const navigation = useNavigation();
 
  return (
    <View style={{ backgroundColor: "cyan" }}>
      <Text style={{ fontSize: 30 }}>Màn hình giới thiệu {"\n"} 
        Ho ten: { route.params.hoTen}
      </Text>
 
      <Text onPress={() => { navigation.navigate('Home') }}>Về trang chủ</Text>
 
    </View>
  );
}






const DemoApp = ()=>{

  return (
    // Bước 3: Định nghĩa Navigation
  //Tình huống 1: App chính chỉ có Nav
    <NavigationContainer>
        <StackDemo.Navigator  initialRouteName='Home'>
          <StackDemo.Screen name='Home' component={TrangChu} options={ {title:'Trang chủ'}} 
          initialParams={ {tenUD: "Ứng dụng DEMO",add: 'Hà Nội'}}
          />
          <StackDemo.Screen name='About' component={GioiThieu} options={ {title:'Giới thiệu'}} />
  {/* viết tiếp các màn hình khác vào đây */}
        </StackDemo.Navigator>
    </NavigationContainer>

)

}

export default DemoApp;

