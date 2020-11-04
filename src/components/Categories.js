//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

// const data = [
//     {key:'1', name:'Music'},
//     {key:'2', name:'Comedy' },
//     {key:'3', name:'Sport'},
//     {key:'4', name:'Art'},
//     {key:'5', name:'Movies'}
// ]
const Categories = ({menus}) => {
    const navigation = useNavigation()

    return (
            <ScrollView horizontal style={{marginTop:10, paddingLeft:10}} showsHorizontalScrollIndicator={false}  >
                {menus.length && menus.map((menu)=>(
                    <TouchableOpacity key={menu.id} onPress={() => {
                        navigation.navigate('Events', {categories:menu, headerTitle:menu.name})
                    } }> 
                        <View style={styles.buttons} >
                            <Ionicons name='home' size={25} color='white' />
                            <Text style={{marginLeft:5, fontSize:15}} style={styles.colorList} >{menu.name} </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row',
        backgroundColor:'#00d',
        color: 'white',
        elevation:1,
        alignItems:'center',
        justifyContent:'space-around',
        elevation:1,
        borderColor:'grey',
        minWidth:100,
        // width:130,
        padding:10,
        // paddingHorizontal:20,
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
