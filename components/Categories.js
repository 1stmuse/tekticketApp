//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const data = [
    {key:'1', name:'Music'},
    {key:'2', name:'Comedy' },
    {key:'3', name:'Sport'},
    {key:'4', name:'Art'},
    {key:'5', name:'Movies'}
]
const Categories = () => {
    const navigation = useNavigation()

    return (
            <ScrollView horizontal style={{marginTop:30, paddingLeft:10}} >
                {data.map(({name, key})=>(
                    <TouchableOpacity key={key} onPress={() => {
                        navigation.navigate('categorydetail')
                    } }> 
                        <View style={styles.buttons} >
                            <Ionicons name='home' size={25} />
                            <Text style={{marginLeft:5, fontSize:15}} style={styles.colorList} >{name} </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttons:{
   
        flexDirection:'row',
        backgroundColor:'#1A4A99',
        color: 'white',
        elevation:1,
        alignItems:'center',
        justifyContent:'space-around',
        elevation:1,
        borderColor:'grey',
        width:100,
        padding:10,
        marginRight:10,
        borderRadius:10
    },
    colorList: {
        ...Platform.select({
            ios: {
                color: '#1A4A99'
              },
              android: {
                color: 'white'
              },
              default: {
                //other platforms, web for example
                color: 'white'
              },        
             fontWeight: "bold"
        })
    }
});

export default Categories;
