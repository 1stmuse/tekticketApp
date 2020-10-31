import React from 'react'
import {View, Image, Text} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{paddingLeft:20}}>
            {/* <DrawerItemList {...props} /> */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image
                    source={require('../Images/laugh.jpg')}
                    style={{width:80, height:80, borderRadius:40}}
                />
                <View style={{marginLeft:20, marginTop:10}}>
                    <Text style={{fontSize:18}}>Akinnagbe</Text>
                    <Text style={{fontSize:18}}>Oluwasegun</Text>
                </View>
            </View>
            <DrawerItem
            label="Help"
            />
            <DrawerItem
                label="Help"
            />
            <DrawerItem
                label="Settings"
            />
            <DrawerItem
                label="Share"
            />
        </DrawerContentScrollView>
        
    );
}

export default CustomDrawerContent