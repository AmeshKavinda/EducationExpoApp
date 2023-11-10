import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image,TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

const navigatLog = props =>{
  props.navigation.navigate('Log')
};

const navigatMain = props =>{
  props.navigation.navigate('Main')
};
const Register = props=> {
  return (
<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-400}>
  <ScrollView>
<SafeAreaView style={styles.root}>
      <View>
      <TouchableOpacity onPress={() => navigatMain(props)} >
      <AntDesign name="leftcircleo" size={24} color="blue" />
      </TouchableOpacity>
      </View>
<View style={{malignItems:'center',padding:10}}>
    <Image style={{ height:300, width: 330 }} source={require('./img/reg.png')}/>
    <Text style={{flex:1,justifyContent: 'center',fontSize:40,color:"blue",fontWeight:"bold",fontStyle:'italic',}}>
    Create An Account </Text>
</View> 
  
<View style={styles.inputcontainer}>
  <View style={styles.username}>
    <TextInput placeholder="Full name" />
  </View>
  <View style={styles.username}>
    <TextInput placeholder="E-mail" />
  </View>
  <View style={styles.username}>
    <TextInput placeholder="password" secureTextEntry={true} />
  </View>
  <View style={styles.username}>
    <TextInput placeholder="repeat password" secureTextEntry={true} />
  </View>

</View>


  <View style={{ borderRadius: 50 , padding:10,marginBottom:10}}>
      <Button title="Register Now" onPress={() => navigatLog(props)}  />
  </View>

</SafeAreaView>
</ScrollView>
</KeyboardAvoidingView>
  );
}

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding:20,
    backgroundColor:"#f7f7f7"
  },


inputcontainer:{
    flex:2
},
login:{
    fontSize:40,
    color:"blue",
    textAlign:"center",
    fontWeight:"bold",
    fontStyle:'italic',
    fontSize:35,
    marginBottom: 10,
},
username:{
padding:10,
fontSize:22,
marginBottom: 20,
borderWidth: 2,
borderColor: 'gray',
borderRadius: 50

},











});
