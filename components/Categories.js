//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const data = [
    {key:'1', name:'music'},
    {key:'2', name:'all'},
    {key:'3', name:'sport'},
    {key:'4', name:'art'},
    {key:'5', name:'movies'}
]
const Categories = () => {
    return (
            <ScrollView horizontal style={{marginTop:30, paddingLeft:10}} >
                {data.map(({name, key})=>(
                    <TouchableOpacity key={key}  >
                        <View style={styles.buttons} >
                            <Ionicons name='home' size={25} />
                            <Text style={{marginLeft:5, fontSize:15}} >{name} </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        backgroundColor:'yellow',
        elevation:1,
        alignItems:'center',
        justifyContent:'space-around',
        elevation:1,
        borderColor:'grey',
        width:100,
        padding:10,
        marginRight:10,
        borderRadius:10
    }
});

export default Categories;
