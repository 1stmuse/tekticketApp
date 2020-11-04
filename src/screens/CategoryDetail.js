//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView,StatusBar, Dimensions } from 'react-native';
import Card from '../components/Card'

// import FirstSelect from './Details/FirstSelect'

// const {width, height} = Dimensions.get('window')
const CategoryDetail = ({ navigation, route}) => {
    let dimension = Dimensions.get('window');
    let imageHeight =  Math.round((dimension.width *  10) / 20);
    let imageWidth = dimension.width; 
    const {categories} = route.params.categories
    const [selectedId, setSelectedId]= useState(categories[0].id)
    
    const categoryPress =(id)=>{
        setSelectedId(id)
    }
     
    return (
        <View style={styles.container} style={{padding: 10}}>
        {/* <StatusBar translucent backgroundColor='royalblue' /> */}
            <View>
                <View><Text style={{fontSize:22, fontWeight:'bold', color:'#a9a9a9'}}>Categories</Text></View>
                <View style={styles.categoryContainer}>
                    {categories.map(category=>(
                        <TouchableOpacity key={category.id}
                            onPress={()=>categoryPress(category.id)}
                            style={[styles.categoryText, {backgroundColor:category.id == selectedId ? 'royalblue' : '#a9a9a9'}]}>
                            <View>
                                <Text style={{color:'white'}}>{category.name} </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            {/* <ScrollView
             horizontal={true}
             scrollEnabled
              showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity onPress={() => navigation.navigate('concert')}>
                    <ImageBackground
                        style={{ height: imageHeight, width: imageWidth, borderRadius: 15, margin: 10, width: 300 }}
                        imageStyle={{ borderRadius: 15 }}
                        source={require("../Images/stand.jpg")}
                    >
                        <View style={{ position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                            <Text style={styles.userStyle}>
                                Stand Up Night
                        </Text>
                            <Text style={styles.userStyleSub} numberOfLines={1}>
                                20 Oct 2020 Jamaica
                        </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    categoryText:{
        minWidth:100,
        borderRadius:10,
        alignItems:'center',
        margin:5,
        padding:10
    },
    cardTxt:{
        fontSize:25,
        fontWeight:'bold',
    },
    userStyle:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        // textAlign: 'center',
        top: 5,
        paddingLeft: 9
        
    },
    userStyleSub:{
        fontSize:16,
        color:'white',
     
        // textAlign: 'center',
        top: 5,
        paddingLeft: 9
            
    },
    show:{
        flexDirection: "row",
        paddingLeft: 15,
        fontWeight: 'bold'

    },
});

//make this component available to the app
export default CategoryDetail;
