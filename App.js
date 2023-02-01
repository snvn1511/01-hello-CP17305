import * as React from 'react'; 
import { Button,  View } from 'react-native';
 
// demo load danh sach
var api_url = "https://63d9fac319fffcd620be9aa2.mockapi.io/demo-api/sanpham"

const getListSp = ()=>{
    alert("bắt đầu load");

     fetch (api_url)
     .then (  (res) => {   return res.json();       }  )  // chuyển dữ liệu server trả về thành json
     .then (  (res_json)=>{   
      alert("Load thành công, hãy xem log");
        // ghi log kết quả
        console.log (res_json); // nếu gán lại dữ liệu vào state thì viết ở đây
        alert(JSON.stringify(res_json));
     } )
     .catch( (err)=>{
       console.log(err);
     });

}

const DemoApp = () => {
  return (
    <View> 
        <View style={{margin:20}} />
        <Button title='Get list ' onPress={getListSp} />
    </View>
  )
}
export default DemoApp;

