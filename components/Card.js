//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Concert from './Concert'

// import FirstSelect from './Details/FirstSelect'

// const {width, height} = Dimensions.get('window')
const Card = () => {
    const navigation = useNavigation()
     let dimension = Dimensions.get('window');
     let imageHeight =  Math.round((dimension.width *  10) / 20);
     let imageWidth = dimension.width;
     
    return (
        <View style={styles.container} style={{padding: 10,}}>

            <ScrollView horizontal={true}>
                <TouchableOpacity onPress={()=>navigation.navigate('concert')}>
                <ImageBackground
                style={{height: imageHeight, width: imageWidth, borderRadius: 15, margin: 10, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/african.jpg")}
                >
                        <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0,}}>
                        <Text style={styles.userStyle}>       
                        Susan Baker
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        2 Oct 2020 Accra-Ghana
                        </Text>
                    </View>
                </ImageBackground>
                </TouchableOpacity>
                 <ImageBackground
                style={{height: imageHeight, width: imageWidth,  borderRadius: 15, margin: 10, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/guitar.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Danger Drang
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        12 Oct 2020 Peru-Candu
                        </Text>
                    </View>
                </ImageBackground>
                  <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/opera.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Rockers
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        14 Oct 2020 Los-Angelos
                        </Text>
                    </View>
                </ImageBackground>
                 <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/lead.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Dreamers
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        19 Oct 2020 Canada
                        </Text>
                    </View>
                </ImageBackground>
                  <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/duba.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Dready
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        20 Oct 2020 Jamaica
                        </Text>
                    </View>
                </ImageBackground>
                 <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/african.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Tasha Cobbs
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        2 Sept 2020 Isreal-Bethlehem
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
            {/* <ImageBackground style={{width:width-20, height:height/4}} source={{uri:'https://media1.popsugar-assets.com/files/thumbor/huLkVuxNB9_jiyjJixO4QLxBpiQ/731x0:4187x3456/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/14/087/n/1922283/9a5d6fee5df58716248f10.68957960_/i/harry-styles-fine-line-los-angeles-concert-review.jpg'}} >
                
                <View>
                    <Text style={[styles.cardTxt]} >Hello</Text>
                </View>
            </ImageBackground> */}
            
            
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
});

//make this component available to the app
export default Card;
