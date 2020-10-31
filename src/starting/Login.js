import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import AysncStore from '@react-native-community/async-storage'
import {useSelector, useDispatch} from 'react-redux'
import {Header} from '@react-navigation/stack'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

import {headers} from '../../utils'

// create a component
const { width} = Dimensions.get('window')
const Login = ({navigation}) => {
    const [details, setDetails] =useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const handleLogin= async()=>{
        const form = new FormData()
        form.append('email', details.email)
        form.append('password', details.password)
        try {
            const response= await fetch("https://tektickets.com/api/user/login", {
                headers,
                method:'POST',
                body:form
            })
            const data = await response.json()
            if(data.user){
                const user = JSON.stringify(data.user)
                await AysncStore.setItem('user', user)
                dispatch({type:'LOGIN', payload:{user, loading:false}})
            }else{
                alert('error')
            }
        } catch (error) {
            console.log('error', error)
        }
    }
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
                                <Entypo name='email' size={20} />
                                <TextInput
                                style={{width:'100%', paddingLeft:5}}
                                    keyboardType='email-address'
                                    placeholder='Email'
                                    placeholderTextColor='black'
                                    value={details.email}
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    autoCompleteType ='off'
                                    returnKeyType='next'
                                    onChangeText={(text)=>setDetails({...details, email:text})}
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
                                    value={details.password}
                                    onChangeText={(text)=>setDetails({...details, password:text})}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} >
                            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{position:'absolute', bottom:10, flexDirection:'row', justifyContent:'center', width}} >
                        <TouchableOpacity style={{padding:4,}} onPress={()=>navigation.navigate('register')} >
                                <Text style={{fontSize:18, color:'blueviolet'}} >Don't have an account? Register !!</Text>
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
        backgroundColor:'blueviolet',
        position:'relative'
    },
    logTop:{
        flex:1,
    },
    logTxt:{
        fontSize:20,
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
        marginTop:50,
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
export default Login;
