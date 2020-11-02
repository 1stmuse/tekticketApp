import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import { DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { Drawer, Title,Caption ,Avatar} from 'react-native-paper'
import AsyncStore from '@react-native-community/async-storage'
import { useDispatch} from 'react-redux'
import IonIcon from 'react-native-vector-icons/Ionicons'


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
            <DrawerContentScrollView {...props} style={{flex:1}} >
                {/* <DrawerItemList {...props} /> */}
                <View style={styles.imageIcon}>
                    <Avatar.Image
                        source={require('../Images/laugh.jpg')}
                        size={75}
                    />
                    <View style={{marginLeft:10, marginTop:10}}>
                        <Title style={{fontSize:18, fontWeight:'bold'}} numberOfLines={1}>Akinnagbe Oluwasegun</Title>
                        <Caption style={{fontSize:18,marginTop:5}}>ben123@example.com</Caption>
                    </View>
                </View>
                <Drawer.Section style={[{flex:1}]}>
                    <Drawer.Item
                        icon='home'
                        label="Home"
                    />
                    <Drawer.Item
                        icon='account'
                        label="Profile"
                    />
                    <Drawer.Item
                        icon='map-marker-radius'
                        label="Share"
                    />
                    <Drawer.Item
                        icon='account'
                        label="profile"
                    />
                    <Drawer.Item
                        icon='tools'
                        label="Settings"
                    />
                </Drawer.Section>
               
            </DrawerContentScrollView>
            <Drawer.Section style={styles.logut} >
                    <DrawerItem
                        icon={({size, color})=>(
                            <IonIcon name='log-out-outline' size={size} color={color}/>
                        )}
                        label="logout"
                        onPress={()=>logout()}
                    />
            </Drawer.Section>
        </View>
        
    );
}


const styles = StyleSheet.create({
    imageIcon:{
        paddingTop:30,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30,
        flex:1
    },
    logut:{
        flex:1,
        position:'absolute',
        bottom:10,
        width:'100%'
    }
})


export default CustomDrawerContent