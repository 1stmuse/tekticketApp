//import liraries
import React, { useState } from 'react';
import {Avatar, Title, Caption, } from 'react-native-paper'
import { View, Text, StyleSheet,StatusBar,Switch } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons'

// create a component
const ProfileStack = () => {
    const [location, setLocation] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent'/>
            <View style={styles.profileHeader}>
                <View style={{marginTop:60}}>
                    <Text style={{fontSize:25, color:'white',fontWeight:'bold'}}>Account</Text>
                </View>
            </View>
            <View style={styles.profileBody}>
                <View style={styles.profilePic}>
                    <View style={{}}>
                        <Avatar.Image
                        source={require('../Images/duba.jpg')}
                            size={130}
                        />
                    </View>
                    <View style={{alignItems:'center', marginTop:10}}>
                        <Title style={{fontSize:25}}>Ben Morrison</Title>
                        <Caption style={{fontSize:15}}>FullStack Software DEveloper</Caption>
                    </View>

                </View>
                <View style={styles.profileContent}>
                    <View style={styles.location}>
                        <Text style={{fontSize:18, color:'grey'}}>Use my Current Location</Text>
                        <Switch value={location} onValueChange={()=>setLocation(!location)}/>
                    </View>
                    <View style={styles.location}>
                        <Text style={{fontSize:18, color:'grey'}}>Tickets Purchased</Text>
                        <IonIcon name='arrow-forward' size={25} color='grey'/>
                    </View>
                    <View style={styles.location}>
                        <Text style={{fontSize:18, color:'grey'}}>Tickets Purchased</Text>
                        <IonIcon name='arrow-forward' size={25} color='grey'/>
                    </View>
                    <View style={styles.location}>
                        <Text style={{fontSize:18, color:'grey'}}>Tickets Purchased</Text>
                        <IonIcon name='arrow-forward' size={25} color='grey'/>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileHeader:{
        height:120,
        backgroundColor:'royalblue',
        justifyContent:'center',
        alignItems:'center'
    },
    profileBody:{
        flex:1,
        backgroundColor:'white'
    },
    profilePic:{
        alignItems:'center',
        marginVertical:10,
    },
    profileContent:{
        marginTop:30
    },
    location:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between',
        borderWidth:1,
        elevation:2,
        backgroundColor:'white',
        borderColor:'white',
        height:50,
        marginBottom:5
    }
});

//make this component available to the app
export default ProfileStack ;
