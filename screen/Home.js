import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign,Fontisto,Entypo,MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

const navigatLog = props =>{
  props.navigation.navigate('Log')
};

const navigatweb = props =>{
  props.navigation.navigate('Web')
};

const navigatMobile = props =>{
  props.navigation.navigate('Mobile')
};

const navigatStandalone = props =>{
  props.navigation.navigate('Standalone')
};


const Home = props=> {
  return (
    <View style={styles.root}>
      <View style={{alignItems:"flex-start", }}>
      <TouchableOpacity onPress={() => navigatLog(props)} >
      <AntDesign name="leftcircleo" size={24} color="blue" />
      </TouchableOpacity>
      </View>
    <ScrollView>
  <TouchableOpacity>
    <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'rgb(234, 229, 9)',borderRadius:30,padding:10}}>

       <View>
        <Image style={{height:70, width: 70,borderRadius:50,}} source={require('./img/my.jpeg')}/>
       </View>
      <View>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#4e3e93',fontStyle:'italic'}}>Amesh Kavinda De Silva</Text>
        <Text style={{color:'rgb(116, 141, 166)'}}>UI/UX designer          Age22</Text>
      </View>
    </View>
  </TouchableOpacity>
    <View style={styles.text}>
      <Text style={{ fontSize: 30,fontWeight:"bold",color:"gray"}}>Hello,</Text>
      <Text style={{ fontSize: 30,fontWeight:"bold",fontStyle:"italic",color:"#043F8D"}}> Amesh!</Text>
    </View>

    <View style={styles.card}>
      <View style={styles.forcard}>
      <TouchableOpacity onPress={() => navigatweb(props)}>
        <View style={styles.smallcard1}>
          <View style={{left:'80%',}}>
           <Fontisto name="world-o" size={24} color="white" />
           </View>
          <View >
           <Text style={{color:'white',fontWeight:'bold'}}>Web</Text> 
           <Text style={{color:'white',fontWeight:'bold'}}>Application Development</Text>
           </View> 
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigatMobile(props)}>
        <View style={styles.smallcard2}>
          <View style={{left:'80%',}}>
              <Entypo name="mobile" size={24} color="white" />
           </View>
          <View >
           <Text style={{color:'white',fontWeight:'bold'}}>Mobile</Text> 
           <Text  style={{color:'white',fontWeight:'bold'}}>Application Development</Text>
           </View>
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.forcard}>
        <TouchableOpacity onPress={() => navigatStandalone(props)}>
        <View style={styles.smallcard3}>
          <View style={{left:'80%',}}>
           <MaterialCommunityIcons name="application-brackets" size={24} color="white" />
           </View>
          <View>
            <Text style={{color:'white',fontWeight:'bold'}}>Standalone</Text> 
            <Text style={{color:'white',fontWeight:'bold'}}>Application Development</Text>
           </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.smallcard4}>
          <View style={{left:'80%',}}>
            <AntDesign name="customerservice" size={24} color="white" />
          </View>
          <View>
          <Text style={{color:'white',fontWeight:'bold'}}>online</Text>
          <Text style={{color:'white',fontWeight:'bold'}}>customer</Text> 
          <Text style={{color:'white',fontWeight:'bold'}}>service</Text>
          </View>
        </View>
        </TouchableOpacity>
    </View>
  </View>

 <View style={{flexDirection:'row',justifyContent:'space-around'}} >
    <TouchableOpacity>
    <View style={{flexDirection:'row',}}>
    <Octicons name="dot-fill" size={24} color="#3b2987" />
    <Text style={{color:'#3b2987',fontWeight:'bold',fontStyle:'italic',fontSize:20}}> Most populer</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{fontWeight:'bold',fontSize:17,color:'rgb(116, 141, 166)'}}>Latest</Text>
    </TouchableOpacity> 
    <TouchableOpacity>
      <Text style={{fontWeight:'bold',fontSize:17,color:'rgb(116, 141, 166)'}}>Free course</Text>
    </TouchableOpacity>   
</View>



<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

    <TouchableOpacity  onPress={()=>Linking.openURL
    ('https://www.youtube.com/watch?v=4OuKhqbu4vg&list=PL495mke12zYC-ZUbzd1Z0Y6WteuvsMf7Z&ab_channel=CodePROLK')}>
    <View style={{backgroundColor:'rgb(125, 206, 19)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center'}}>
      <View>
        <Image style={{height:100, width: 100,borderRadius:70,}} source={require('./img/python.png')}/>
      </View>
      <View>
        <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>python</Text>
      </View>
    </View>

    </TouchableOpacity>


    <TouchableOpacity onPress={()=>Linking.openURL
    ('https://www.youtube.com/watch?v=aIzgMFQK0ro&list=PLrt6XmRYOYuB5TNaM2Mw8t4WlIOb3s6KR&ab_channel=ShanakaWijerathna')}>
      <View style={{backgroundColor:'rgb(234, 229, 9)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center'}}>
        <View>
        <Image style={{height:100, width: 100,borderRadius:70,}} source={require('./img/java.png')}/>
        </View>

      <View>
        <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>Java</Text>
      </View>
      </View>
    </TouchableOpacity>


</View>
    </ScrollView>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10
  },
text:{
flexDirection:"row"
},
card:{
justifyContent:'space-between',
width:'100%',
flexDirection:'row',
padding:10,
},

forcard:{
width:'50%',
hight:'100%',
flexDirection:'column',
justifyContent:'space-between',
padding:5,

},

smallcard1:{
  width:'100%',
  backgroundColor:'#f33e52',
  borderRadius:10,
  flexDirection:'column',
  justifyContent:'space-between',
  padding:10,
  margin:5,
},

smallcard2:{
  width:'100%',
  backgroundColor:'#4d54e0',
  borderRadius:10,
  flexDirection:'column',
  justifyContent:'space-between',
  padding:10,
  margin:5,
},
smallcard3:{
  width:'100%',
  backgroundColor:'#41d5e2',
  borderRadius:10,
  flexDirection:'column',
  justifyContent:'space-between',
  padding:10,
  margin:5,
},
smallcard4:{
  width:'100%',
  backgroundColor:'#ff8e36',
  borderRadius:10,
  flexDirection:'column',
  justifyContent:'space-between',
  padding:10,
  margin:5,
},

});
