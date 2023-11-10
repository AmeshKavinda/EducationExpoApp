import * as React from 'react';
import { View,Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screen/LR';
import Register from './screen/Register';
import Log from './screen/Log';
import Home from './screen/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Web from './screen/Web';
import Standalone from './screen/Standalone';
import Mobile from './screen/Mobile';
import { Entypo, MaterialCommunityIcons, MaterialIcons,AntDesign } from '@expo/vector-icons';
import Profile from './screen/Profile';
import Notifications from './screen/Notifications';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



function Drw() {
	return (
	  
		<Drawer.Navigator initialRouteName="Home" screenOptions={{
			headerTintColor: 'white',
			headerStyle: { backgroundColor: '#043F8D' },
		  }} >
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <Entypo name="home" size={25} color="#ffd700" />}} name="Home" component={Home} />
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <MaterialIcons name="notifications-active" size={25} color="blue" />}} name="Notifications" component={Notifications} />
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <MaterialCommunityIcons name="face-man-profile" size={25} color="#ee82ee" />}} name="Profile" component={Profile} />
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <MaterialCommunityIcons size={25} name="web" color="#f33e52"/>}} name="Web" component={Web} />
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <AntDesign name="mobile1" size={25} color="#4d54e0" />}} name="Mobile" component={Mobile} />
		  <Drawer.Screen options = {{drawerIcon: config => 
		  <MaterialCommunityIcons size={25} name="application-brackets" color="#41d5e2"></MaterialCommunityIcons>}} 
		  name="Standalone" component={Standalone} />
		</Drawer.Navigator>
	  
	);
  }
 function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName='Main'>
		<Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
		<Stack.Screen options={{ headerShown: false}} name="Home" component={Drw} />
		<Stack.Screen options={{ headerShown: false}} name="Register" component={Register} />
		<Stack.Screen options={{ headerShown: false}} name="Log" component={Log} />
		<Stack.Screen options={{ headerShown: false}} name="Web" component={Web} />
		<Stack.Screen options={{ headerShown: false}} name="Standalone" component={Standalone} />
		<Stack.Screen options={{ headerShown: false}} name="Mobile" component={Mobile} />
		<Stack.Screen options={{ headerShown: false}} name="Notifications" component={Notifications} />
		<Stack.Screen options={{ headerShown: false}} name="profile" component={Profile} />
		</Stack.Navigator>
	</NavigationContainer>
	);
}
export default App;
