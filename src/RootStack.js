import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './rootStacksScreens/Home'
import Concert from './components/Concert'
import CategoryDetail from './screens/CategoryDetail'
import TicketStack from './rootStacksScreens/TicketStack'
import ProfileStack from './rootStacksScreens/ProfileStack'
import NotificationStack from './rootStacksScreens/NotificationStack'
import ConcertDetails from './screens/ConcertDetails';
import CustomDrawer from './components/CustomDrawer'

// import { createDrawerNavigator } from '@react-navigation/drawer';

const tabs = createBottomTabNavigator()
const stack = createStackNavigator()
const drawer = createDrawerNavigator()

const options = {
  headerShown:false
}

const homestack = ()=>{
    return(
      <stack.Navigator>
        <stack.Screen name='home' component={HomeStack}
          options={{ ...options }}
        />
        <stack.Screen name="concert" component={Concert}
        />
        <stack.Screen name="categorydetail" component={CategoryDetail}
        />
        <stack.Screen name="concertdetails" component={ConcertDetails} options={{ ...options }} />
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

// create a component
const drawerRoot = () => {
    return (
        <tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#9932cc',
          inactiveTintColor: '#483d8b',
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
    );
};

const RootStack =()=>{
  return(
  <drawer.Navigator drawerContent={props => <CustomDrawer {...props} /> }>
        <drawer.Screen name="Home" component={drawerRoot} />
    </drawer.Navigator>
  )
}

//make this component available to the app
export default RootStack;
