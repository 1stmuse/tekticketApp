import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,StyleSheet,StatusBar,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './components/stacks/Home'
import TicketStack from './components/stacks/TicketStack'
import ProfileStack from './components/stacks/ProfileStack'
import NotificationStack from './components/stacks/NotificationStack'
import AuthStack from './components/AuthStack'


const tabs = createBottomTabNavigator()
const stack = createStackNavigator()

const options = {
  headerShown:false
}

const homestack = ()=>{
  return(
    <stack.Navigator>
      <stack.Screen name='home' component={HomeStack}
       options={{...options}}
      />
    </stack.Navigator>
  )
}

const ticketstack = ()=>{
  return(
    <stack.Navigator>
      <stack.Screen name='ticket' component={TicketStack}  
        options={{...options}}
      />
    </stack.Navigator>
  )
}
const notistack = ()=>{
  return(
    <stack.Navigator>
      <stack.Screen name='notification' component={NotificationStack} 
        options={{...options}} 
      />
    </stack.Navigator>
  )
}
const profilestack = ()=>{
  return(
    <stack.Navigator>
      <stack.Screen name='profile' component={ProfileStack} 
        options={{...options}} 
      />
    </stack.Navigator>
  )
}

const App= () =>  {
  return (
    <>
      <StatusBar backgroundColor='blueviolet' barStyle='invert' />
      <SafeAreaView style={{flex:1}} >
        <AuthStack/>
          {/* <NavigationContainer>
            <tabs.Navigator
              tabBarOptions={{
                activeTintColor: '#1A4A99',
                inactiveTintColor: 'grey',
                tabStyle:{backgroundColor:'transparent'},
                style:{height:60, paddingVertical:5, elevation:0, backgroundColor:'none'},
                labelStyle:{
                  fontSize:18,
                  fontWeight:'bold'
                }
              }}
            >
              <tabs.Screen name='homeTab' children={homestack}
                options={{
                  tabBarLabel:'Home',
                  tabBarIcon:({color, size})=>(
                    <Ionicons name='md-home' size={30} color={color}/> 
                  ),
                }}
              />
              <tabs.Screen name='ticketTab' children={ticketstack}
                options={{
                  tabBarLabel:'ticket',
                  tabBarIcon:({color, size})=>(
                    <Entypo name='ticket' size={30} color={color}/> 
                  )
                }}
              />
              <tabs.Screen name='notificationTab' children={notistack}
                options={{
                  tabBarLabel:'Notification',
                  tabBarIcon:({color, size})=>(
                    <MaterialIcons name='notifications-none' size={30} color={color}/> 
                  )
                }}
              />
              <tabs.Screen name='profileTab' children={profilestack}
                options={{
                  tabBarLabel:'Profile',
                  tabBarIcon:({color, size})=>(
                    <Entypo name='user' size={30} color={color}/> 
                  ),
                }}
              />
            </tabs.Navigator>
          </NavigationContainer> */}
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
  }
});

export default App;
