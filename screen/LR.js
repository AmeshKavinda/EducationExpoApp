import { StyleSheet, Text, View,TouchableOpacity,Button,Image } from 'react-native';
import * as React from 'react';

const navigatL = props =>{
  props.navigation.navigate('Log')
};

const navigatR = props =>{
  props.navigation.navigate('Register')
};

 const Main = props => {
  return (
  <View style={styles.container}>
    <View style={{flexDirection:'row',marginBottom:60}}>
      <Text style={{ fontSize: 70,fontWeight: 'bold',color:'red',fontStyle:'italic'}}>X </Text>
      <Text style={{ fontSize: 60,fontWeight: 'bold',color:'navy', fontStyle:'italic'}}>code</Text>
    </View>
    <View>
    <Image style={{height:300, width: 330,marginBottom:80}} source={require('./img/LR.jpeg')}/>
    </View>

      <View style={{ width: '80%', borderRadius: 50, marginBottom: 20 }}>
        <Button title="Login Now" onPress={() => navigatL(props)}/>
      </View>
      <View style={{ width: '80%', borderRadius: 50 }}>
        <Button title="Register Now" onPress={() => navigatR(props)} />
      </View>
  </View>

  );
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },

});
