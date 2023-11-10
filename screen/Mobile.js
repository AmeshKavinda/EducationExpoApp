import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import * as React from 'react';
import * as Linking from 'expo-linking';
import { Octicons } from '@expo/vector-icons';

const Mobile = props=> {
  return (
    <View style={styles.root}>
    <ScrollView>
    <View style={styles.text}>
    <Text style={{ fontSize: 30,fontWeight:"bold",color:"gray"}}>Professional,</Text>
    <Text style={{ fontSize: 30,fontWeight:"bold",fontStyle:"italic",color:"#043F8D"}}>Certifications Courses.</Text>
    </View>

    <View>
      <Image style={{height:100, width: 370,borderRadius:30,marginTop:5}} source={require('./img/mobilepage.jpg')}/>
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

<TouchableOpacity  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=wmYreORjF3E&ab_channel=SinhalaWebScience')}>
<View style={{backgroundColor:'rgb(255, 30, 0)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/react.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>React Native</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=PDtM6myvpCk&list=PLDndH6maPcZKmWO-EZB_cxO2hpWtbJrEb&ab_channel=Geekpranee')}>
<View style={{backgroundColor:'rgb(234, 229, 9)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/kotlin.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>Kotlin</Text>
</View>
</View>
</TouchableOpacity>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=Pg2wVaNz05s&ab_channel=FreestyleCoding')}>
<View style={{backgroundColor:'rgb(73, 255, 0)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/ionic.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Ionic</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=YM5VGVun3mA&ab_channel=MicrosoftStudentChampsSriLanka')}>
<View style={{backgroundColor:'rgb(166, 240, 198)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/xamarin.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>xamarin</Text>
</View>
</View>
</TouchableOpacity>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=NvrRQwF3VRs&ab_channel=CodeCampSriLanka')}>
<View style={{backgroundColor:'rgb(246, 255, 164)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
<View>
  <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/flutter.png')}/>
</View>
<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Flutter</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=M8CLAqO2koE&ab_channel=SLGeekSchool')}>
<View style={{backgroundColor:'rgb(255, 168, 168)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
  <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/swift.png')}/>
  </View>

<View>
  <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>Swift</Text>
</View>
</View>
</TouchableOpacity>

</View>


    </ScrollView>
    
  </View>
  );
}
export default Mobile;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,

  },
});
