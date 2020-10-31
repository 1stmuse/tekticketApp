import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,View,Text,StatusBar,} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './starting/Login'
import Register from './starting/Register'

// create a component
const stack = createStackNavigator()
const AuthStack = () => {
    return (
            <stack.Navigator headerMode='none'>
                <stack.Screen name='login' component={Login}/>
                <stack.Screen name='register' component={Register}/>
            </stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AuthStack;
