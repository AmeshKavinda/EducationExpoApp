import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import * as React from 'react';
import { Octicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const Web = props=>{
  return (
    <View style={styles.root}>
      <ScrollView>
      <View style={styles.text}>
      <Text style={{ fontSize: 30,fontWeight:"bold",color:"gray"}}>Professional,</Text>
      <Text style={{ fontSize: 30,fontWeight:"bold",fontStyle:"italic",color:"#043F8D"}}>Certifications Courses.</Text>
      </View>

      <View>
        <Image style={{height:100, width: 370,borderRadius:30,marginTop:5}} source={require('./img/webpage.jpg')}/>
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
('https://www.youtube.com/watch?v=FbtYsQF7Ib0&list=PLWAgeLqk4SjDlN6nHs91rECgx4PbzfoZh&ab_channel=SLGeekSchool')}>
<View style={{backgroundColor:'rgb(247, 236, 9)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
    <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/html.png')}/>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>HTML</Text>
  </View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=LSJ-PHgk4bQ&list=PLXNgqM9ig24fvVI7DQZdJCR8Z8NqyvecA&ab_channel=UdithaSanjaya')}>
  <View style={{backgroundColor:'rgb(111, 237, 214)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
    <View>
    <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/css.png')}/>
    </View>

  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>CSS</Text>
  </View>
  </View>
</TouchableOpacity>

 </View>

 <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=fsE55CPE4Tk&ab_channel=ThripleBee')}>
<View style={{backgroundColor:'rgb(6, 255, 0)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
    <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/js.png')}/>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Javascript</Text>
  </View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=EkTA7klCoz0&list=PLcQPAs1DjFpc4NIeAd4QzxsZYs67UQq6c&ab_channel=DTKTV')}>
  <View style={{backgroundColor:'rgb(56, 147, 147)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
    <View>
    <Image style={{height:100, width: 100,borderRadius:20,}} source={require('./img/php.png')}/>
    </View>

  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>PHP</Text>
  </View>
  </View>
</TouchableOpacity>

 </View>

 <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>

<TouchableOpacity  onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=kA762-1NEfw&list=PLGm-1cbbBwUUJj8Dn5ItIWVfURnziH6tJ&ab_channel=FreestyleCoding')}>
<View style={{backgroundColor:'rgb(255, 178, 0)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
  <View>
    <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/vue.png')}/>
  </View>
  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',}}>Vue-js</Text>
  </View>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Linking.openURL
('https://www.youtube.com/watch?v=m3PQYfyCfzs&list=PLdRfLcb1DviwZ0lWHrtjK8a67E2ZUy8tg&ab_channel=CodeCampSriLanka')}>
  <View style={{backgroundColor:'rgb(166, 108, 255)',borderRadius:30,padding:20,justifyContent:'center',alignItems:'center',width:160,}}>
    <View>
    <Image style={{height:110, width: 100,borderRadius:20,}} source={require('./img/bootstrap.png')}/>
    </View>

  <View>
    <Text style={{fontWeight:'bold',fontSize:21,color:'rgb(22, 33, 62)',left:5}}>Bootstrap</Text>
  </View>
  </View>
</TouchableOpacity>

 </View>


      </ScrollView>
      
    </View>
  );
}
export default Web;
const styles = StyleSheet.create({
 root: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
  },

});
