import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button,Image,TouchableOpacity,KeyboardAvoidingView,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

const navigathome = props =>{
  props.navigation.navigate('Home')
};
const navigatMain = props =>{
  props.navigation.navigate('Main')
};
const Log = props=> {
  return (
<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-400}>
  <ScrollView>               
    <View style={styles.root}>
      <View style={{marginBottom:35}}>
      <TouchableOpacity onPress={() => navigatMain(props)} >
      <AntDesign name="leftcircleo" size={24} color="blue" />
      </TouchableOpacity>
      </View>
      
        <View style={styles.titelcontainer}>
          <Image style={{height:190, width: 350,}} source={require('./img/login.png')}/>
            <Text style={styles.login}>Let's sign you in </Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.username}>
            <TextInput placeholder="Username" />
          </View>
          <View style={styles.username}>
            <TextInput placeholder="password" secureTextEntry={true}/>
          </View>
          <View>
            <Text style={styles.for}>Forget password</Text>
          </View>
          <View>
            <Text style={styles.with}>Or Sign in With</Text>
          </View>
          <View style={{flexDirection:'row',display:'flex', justifyContent: 'space-around'  }}>
            <View style={{  width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius:10}}>
            <Image style={{ width: 40, height: 40 }} source={require('./img/search.png')}/>
            </View>
            <View style={{  width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius:30}}>
            <Image style={{ width: 40, height: 40 }} source={require('./img/facebook.png')}/>
            </View>
            <View style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius:30}}>
            <Image style={{ width: 40, height: 40 }} source={require('./img/apple-logo.png')}/>
            </View>
          </View>
          <View style={{ borderRadius: 50,padding:10, marginTop:30}}>
              <Button title="Login Now" onPress={() => navigathome(props)} />
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10}}>
            <Text style={{color:"black",fontWeight:'bold'}}>Create an Account? </Text>
            <Text style={{color:"blue",fontWeight:'bold'}}>Register</Text>
        </View>
    </View>
  </ScrollView>
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding:15,
    backgroundColor:"#f2f2f2",
    display:"flex",
    paddingTop:60,
    backgroundColor:"#ffffff",
    
  },

titelcontainer:{
    flex: 1,
    justifyContent: 'center',
    padding:10,
  },
inputcontainer:{
    flex:2,
    marginTop:30,
    padding:10
},
login:{
    fontSize:40,
    color:"blue",
    textAlign:"center",
    fontWeight:"bold",
    fontStyle:'italic',
    
},
username:{
padding:10,
fontSize:22,
marginBottom: 10,
borderWidth: 2,
borderColor: 'gray',
borderRadius: 50,
marginTop:2
},
for:{
  textAlign:'right',
  color:"blue",
  fontStyle:'italic',
},

with:{
  color:'gray',
  textAlign:'center',
}
});
export default Log;
