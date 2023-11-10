import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image,TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';


const Notifications = props=> {
  return (
<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-400}>
  <ScrollView>
<SafeAreaView style={styles.root}>
    <View>
      <Image style={{height:200, width: 370,borderRadius:30,marginTop:5}} source={require('./img/noo.jpg')}/>
    </View>

    <View>
      <Text style={{marginTop:20,fontWeight:'bold',fontSize:23,textAlign:'center',}}>No Notifications Right Now!</Text>
    </View>
    <View>
      <Text style={{marginTop:20,fontWeight:'bold',fontSize:15,textAlign:'center',color:'gray'}}>You're up-to-date! would work well</Text>
    </View>
</SafeAreaView>
</ScrollView>
</KeyboardAvoidingView>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding:20,
    backgroundColor:"#f6f6f8"
  },



});