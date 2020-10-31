import React from 'react'
import {View, Image, Text} from 'react-native'
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStore from '@react-native-community/async-storage'
import { useDispatch} from 'react-redux'


function CustomDrawerContent(props) {
    const dispatch = useDispatch()

    const logout = async()=>{
        try {
            AsyncStore.removeItem('user')
            dispatch({type:'LOGOUT', payload:{user:null, loading:false}})
            // console.log('pressed')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{flex:1, paddingLeft:10}}>
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image
                        source={require('../Images/laugh.jpg')}
                        style={{width:80, height:80, borderRadius:40}}
                    />
                    <View style={{marginLeft:10, marginTop:10}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}} numberOfLines={1}>Akinnagbe Oluwasegun</Text>
                        <Text style={{fontSize:18,color:'grey',marginTop:5}}>ben123@example.com</Text>
                    </View>
                </View>
                <DrawerItem
                    icon={()=>(
                        <Ionicons name='home' size={28} color='grey' />
                    )}
                    label="Help"
                />
                <DrawerItem
                    icon={({size, color})=>(
                        <Ionicons name='settings' size={size} color={color} />
                    )}
                    label="Settings"
                />
                <DrawerItem
                    icon={()=>(
                        <Ionicons name='location' size={28} color='grey' />
                    )}
                    label="Share"
                />
                <DrawerItem
                    icon={()=>(
                        <Ionicons name='settings' size={28} color='grey' />
                    )}
                    label="Help"
                />
                <DrawerItem
                    icon={({size, color})=>(
                        <Ionicons name='settings' size={size} color={color} />
                    )}
                    label="Settings"
                />
                <DrawerItem
                    icon={()=>(
                        <Ionicons name='close' size={28} color='grey' />
                    )}
                    label="logout"
                    onPress={()=>logout()}
                />
            </DrawerContentScrollView>
        </View>
        
    );
}

export default CustomDrawerContent