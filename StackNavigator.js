// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/Onboarding';
import Home from './src/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Booking from './src/Booking';
import WatchList from './src/WatchList';
import Profile from './src/Profile';
import Detail from './src/Detail';

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:()=>(
                <Image source={require("./assets/homeicon.png")}/>
            ),
            tabBarIconStyle:{
                color:"blue"
            }
        }} />
        <Tab.Screen name="Booking" component={Booking}  options={{
            tabBarIcon:()=>(
                <Image source={require("./assets/bookingpic.png")}/>
            ),
            tabBarIconStyle:{
                color:"blue"
            }
        }}/>
        <Tab.Screen name="WatchList" component={WatchList}  options={{
            tabBarIcon:()=>(
                <Image source={require("./assets/watchlistpic.png")}/>
            ),
            tabBarIconStyle:{
                color:"blue"
            }
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon:()=>(
                <Image source={require("./assets/profilepic.png")}/>
            ),
            tabBarIconStyle:{
                color:"blue"
            }
        }}/>

      </Tab.Navigator>
    );
  }


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Home" component={MyTabs} options={{
            headerShown:false
        }}/>
        <Stack.Screen name="Detail" component={Detail} options={{
            headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;