import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image,TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native';
import * as React from 'react';
import { MaterialCommunityIcons,AntDesign,MaterialIcons,EvilIcons,Feather } from '@expo/vector-icons';



const navigatLog = props =>{
  props.navigation.navigate('Log')
};


const Profile = props=> {
  return (
<View style={styles.root}>
   
      <View style={{alignItems:'center',width:'100%',height:300,}}>
        <Image style={{marginTop:60}} source={require('./img/man.png')}/>
      </View>
    

    
      <View style={{backgroundColor:'rgb(255, 243, 35)',height:363,borderTopRightRadius:40,borderTopLeftRadius:40}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <View style={{flexDirection:'row',left:20}}>
            <MaterialCommunityIcons name="face-man-profile" size={29} color="rgb(37, 49, 109)" />
            <Text style={{left:10,fontWeight:'bold',fontSize:22,color:'rgb(37, 49, 109)'}}>My Profile</Text>
          </View>
            <AntDesign style={{right:10}} name="right" size={24} color="rgb(37, 49, 109)" />

        </View>

  
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <View style={{flexDirection:'row',left:20}}>
            <AntDesign name="message1" size={24} color="rgb(37, 49, 109)" />
            <Text style={{left:10,fontWeight:'bold',fontSize:22,color:'rgb(37, 49, 109)'}}>Messages</Text>
          </View>
            <AntDesign style={{right:10}} name="right" size={24} color="rgb(37, 49, 109)" />

        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <View style={{flexDirection:'row',left:20}}>
            <MaterialIcons name="favorite-border" size={27} color="rgb(37, 49, 109)" />
            <Text style={{left:10,fontWeight:'bold',fontSize:22,color:'rgb(37, 49, 109)'}}>Favourite</Text>
          </View>

            <AntDesign style={{right:10}} name="right" size={24} color="rgb(37, 49, 109)" />

        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <View style={{flexDirection:'row',left:20}}>
            <EvilIcons name="location" size={30} color="rgb(37, 49, 109)" />
            <Text style={{left:10,fontWeight:'bold',fontSize:22,color:'rgb(37, 49, 109)'}}>Location</Text>
          </View>
            <AntDesign style={{right:10}} name="right" size={24} color="rgb(37, 49, 109)" />

        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>

          <View style={{flexDirection:'row',left:20}}>
            <Feather name="settings" size={24} color="rgb(37, 49, 109)"/>
            <Text style={{left:10,fontWeight:'bold',fontSize:22,color:'rgb(37, 49, 109)'}}>Setting</Text>
          </View>
            <AntDesign style={{right:10}} name="right" size={24} color="rgb(37, 49, 109)" />

        </View>

      <TouchableOpacity onPress={() => navigatLog(props)}>
        <View style={styles.Logout}>
          <MaterialCommunityIcons name="logout" size={30} color="black" />
          <Text style={{fontWeight:'bold',fontSize:25}}>Logout</Text>
        </View>
      </TouchableOpacity>
      </View>  
    
</View>
  );

}

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"rgb(37, 49, 109)"
    
  },

  Logout:{
    flexDirection:'row',
    justifyContent:'center',
    borderWidth:3,
    borderColor:'rgb(37, 49, 109)',
    marginTop:10,
    padding:3,
    width:120,
    left:145,
    borderRadius:10
    

  }
});