import * as React from 'react';
import { Button, View } from 'react-native';

// demo post 
var api_url = "https://63d9fac319fffcd620be9aa2.mockapi.io/demo-api/sanpham"

const getListSp = () => {
  alert("bắt đầu load");

  fetch(api_url)
    .then((res) => { return res.json(); })  // chuyển dữ liệu server trả về thành json
    .then((res_json) => {
      alert("Load thành công, hãy xem log");
      // ghi log kết quả
      console.log(res_json); // nếu gán lại dữ liệu vào state thì viết ở đây
      alert(JSON.stringify(res_json));
    })
    .catch((err) => {
      console.log(err);
    });

}

const postAddSP = () => {
  //1. Tạo đối tượng dữ liệu
  let objSP = {
    name: "Xe máy jupiter", // dữ liệu có thể gán từ state của TextInput
    price: 333333333
  }

  //2. Post lên API
  fetch(api_url, {
    method: 'POST', //Thêm mới: POST, Sửa: PUT, xóa: DELETE, lấy dữ liệu: GET
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objSP)
  })
    .then((res) => {
      console.log(res);
      if (res.status == 201)
        alert("Thêm thành công");
    })
    .catch((err) => {
      console.log(err);
    })
    ;
}




const DemoApp = () => {
  return (
    <View>
      <View style={{ margin: 20 }} />
      <Button title='Get list ' onPress={getListSp} />
      <View style={{ margin: 20 }} />
      <Button title='Add new ' onPress={postAddSP} />
    </View>
  )
}
export default DemoApp;

