import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image } from 'react-native';
import * as React from 'react';
import * as Linking from 'expo-linking';
import { Octicons } from '@expo/vector-icons';

const Standalone = props=> {
  return (
    <View style={styles.root}>
    <ScrollView>
    <View style={styles.text}>
    <Text style={{ fontSize: 30,fontWeight:"bold",color:"gray"}}>Professional,</Text>
    <Text style={{ fontSize: 30,fontWeight:"bold",fontStyle:"italic",color:"#043F8D"}}>Certifications Courses.</Text>
    </View>

    <View>
      <Image style={{height:100, width: 370,borderRadius:30,marginTop:5}} source={require('./img/1.png')}/>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:3}} >
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

  {/* card */}
  <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=4OuKhqbu4vg&list=PL495mke12zYC-ZUbzd1Z0Y6WteuvsMf7Z&ab_channel=CodePROLK')}>
<View style={{backgroundColor:'rgb(125, 206, 19)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/python.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Python</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=aIzgMFQK0ro&list=PLrt6XmRYOYuB5TNaM2Mw8t4WlIOb3s6KR&ab_channel=ShanakaWijerathna')}>
<View style={{backgroundColor:'rgb(234, 229, 9)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/java.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>Java</Text>
</View>
</View>
</TouchableOpacity>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=t_ispmWmdjY&ab_channel=freeCodeCamp.org')}>
<View style={{backgroundColor:'rgb(154, 220, 255)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/ruby.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Ruby</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=t0kEwfxhY3w&list=PLYoyKxGqKo6uc4fg19782BWXbjhGe0JjC&ab_channel=kpcoding')}>
<View style={{backgroundColor:'rgb(36, 161, 156)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/cprogramming.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>C</Text>
</View>
</View>
</TouchableOpacity>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=BGXS1kUDEPk&list=PL2i17lRog5pBu9YED6gAUbkggEl4aSYaL&ab_channel=Sciber')}>
<View style={{backgroundColor:'rgb(161, 73, 250)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/c.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>C++</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=QR1Lj03eB_I&list=PLcQPAs1DjFpdc0RIYalWXP3W13XLm6w5-&ab_channel=DTKTV')}>
<View style={{backgroundColor:'rgb(192, 178, 54)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/csharp.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>C#</Text>
</View>
</View>
</TouchableOpacity>

</View>


    </ScrollView>
    
  </View>
  );
}
export default Standalone;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,

  },
});
