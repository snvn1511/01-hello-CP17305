import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DemoComp from './components/DemoComp';
 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Xin chào lớp</Text>
      <StatusBar style="auto" />
      <DemoComp />
      <DemoComp />
      <DemoComp />
      <DemoComp />
      <DemoComp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:40
  },
});
