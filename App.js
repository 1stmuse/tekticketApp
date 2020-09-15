import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeTab from './components/tabs/HomeTab'
import TicketTab from './components/tabs/TicketTab'
import ProfileTab from './components/tabs/ProfileTab'
import NotificationTab from './components/tabs/NotificationTab'


const tabs = createBottomTabNavigator()


const App= () =>  {
  return (
    <>
      <StatusBar backgroundColor='red' />
      <SafeAreaView style={{flex:1}} >
        <View style={styles.main} >
          <NavigationContainer>
            <tabs.Navigator
              tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'grey',
                style:{height:60},
                labelStyle:{
                  fontSize:18,
                  paddingVertical:5,
                  fontWeight:'bold'
                }
              }}
            >
              <tabs.Screen name='home' component={HomeTab}
                options={{
                  tabBarLabel:'Home',
                  tabBarIcon:({color, size})=>(
                    <Ionicons name='md-home' size={40} color={color}/> 
                  ),
                }}
              />
              <tabs.Screen name='Ticket' component={TicketTab}
                options={{
                  tabBarLabel:'ticket',
                  tabBarIcon:({color, size})=>(
                    <Entypo name='ticket' size={40} color={color}/> 
                  )
                }}
              />
              <tabs.Screen name='notification' component={NotificationTab}
                options={{
                  tabBarLabel:'Notification',
                  tabBarIcon:({color, size})=>(
                    <MaterialIcons name='notifications-none' size={40} color={color}/> 
                  )
                }}
              />
              <tabs.Screen name='profile' component={ProfileTab}
                options={{
                  tabBarLabel:'Profile',
                  tabBarIcon:({color, size})=>(
                    <Entypo name='user' size={40} color={color}/> 
                  )
                }}
              />
            </tabs.Navigator>
          </NavigationContainer>
        </View>
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
