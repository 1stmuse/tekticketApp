//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Concert from './Concert'

// import FirstSelect from './Details/FirstSelect'

// const {width, height} = Dimensions.get('window')
const CategoryDetail = ({ }) => {
    const navigation = useNavigation()
     let dimension = Dimensions.get('window');
     let imageHeight =  Math.round((dimension.width *  10) / 20);
     let imageWidth = dimension.width;
     
    return (
        <View style={styles.container} style={{padding: 10,}}>
            <ScrollView
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
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
        // height: height/4,
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
