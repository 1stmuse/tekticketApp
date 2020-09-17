import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {Header} from '@react-navigation/stack'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'

// create a component
const Register = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior='padding' style={{flex:1}}keyboardVerticalOffset={Header.height} >
            <View style={styles.container}>
                <View style={styles.logTop} >
                    <Text style={styles.logTxt} >LOGIN !</Text>
                </View>
                <View style={styles.logBot}>
                    <View style={styles.bottomContent} >
                        <View>
                            <Text style={{marginBottom:7, fontSize:20}} >Email</Text>
                            <View style={{flexDirection:'row', alignItems:'center', borderWidth:1,marginBottom:20, backgroundColor:'#EBF5FF', borderRadius:10, paddingLeft:10}}>
                                <IonIcon name='person' size={20} />
                                <TextInput
                                style={{width:'100%', paddingLeft:5}}
                                    keyboardType='default'
                                    placeholder='Fullname'
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginBottom:7, fontSize:20}} >Email</Text>
                            <View style={{flexDirection:'row', alignItems:'center', borderWidth:1,marginBottom:20, backgroundColor:'#EBF5FF', borderRadius:10, paddingLeft:10}}>
                                <Entypo name='email' size={20} />
                                <TextInput
                                style={{width:'100%', paddingLeft:5}}
                                    keyboardType='email-address'
                                    placeholder='Email'
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{marginBottom:7, fontSize:20}} >Password</Text>
                            <View style={{flexDirection:'row', alignItems:'center', borderWidth:1, backgroundColor:'#EBF5FF', borderRadius:10, paddingLeft:10}}>
                                <EvilIcon name='lock' size={20} />
                                <TextInput
                                style={{width:'100%', paddingLeft:5}}
                                    keyboardType='default'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.loginBtn} >
                            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}} >Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20, alignItems:'center',padding:4}} onPress={()=>navigation.navigate('login')} >
                            <Text style={{fontSize:18, color:'blueviolet'}} >Have an account? Login !!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'blueviolet'
    },
    logTop:{
        flex:1,
    },
    logTxt:{
        fontSize:50,
        color:'white',
        marginTop:120,
        marginLeft:40
    },
    logBot:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    bottomContent:{
        padding:20,
        marginTop:30,
    },
    loginBtn:{
        backgroundColor:'blueviolet',
        alignItems:'center',
        padding:10,
        marginTop:30,
        borderRadius:20
    }
});


//make this component available to the app
export default Register;
