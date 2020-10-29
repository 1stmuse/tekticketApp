//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from './Categories'
import Added from './Added'
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
                  <View style={[styles.row, {marginTop:30, marginLeft:30, borderBottomWidth:0.5}]}>
                <Ionicons name='search' size={30} color='grey' />
                <Text style={{fontSize:20, color:'grey', marginLeft:10}} >Search</Text>
            </View>
            
            <View >
                <Categories/>
            </View>
            <ScrollView
             horizontal={true}
             scrollEnabled
              showsHorizontalScrollIndicator={false}
              >

                <TouchableOpacity onPress={()=>navigation.navigate('concert')}>
                <ImageBackground
                style={{height: imageHeight, width: imageWidth, borderRadius: 15, margin: 10, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/comedy.jpg")}
                >
                        <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0,}}>
                        <Text style={styles.userStyle}>       
                        Dee Mr Joker
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
                source= {require("./Images/trick.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                       Joker Man
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        12 Oct 2020 Peru-Candu
                        </Text>
                    </View>
                </ImageBackground>
                  <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/laugh.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Laugh it Out 
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        14 Oct 2020 Los-Angelos
                        </Text>
                    </View>
                </ImageBackground>
                 <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/time.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Time to Laugh
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        19 Oct 2020 Canada
                        </Text>
                    </View>
                </ImageBackground>
                  <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/stand.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Stand Up Night
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        20 Oct 2020 Jamaica
                        </Text>
                    </View>
                </ImageBackground>
                 <ImageBackground
                style={{height: imageHeight, width: imageWidth , borderRadius: 15, margin: 10, width: 300  }}
                imageStyle={{ borderRadius: 15 }}
                source= {require("./Images/ticket.jpg")}
                >
                    <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Make You Laugh
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        2 Sept 2020 Isreal-Bethlehem
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
            <View style=  {styles.show}>
                <View style={{flex: 1}}>
                <Text style= {{ paddingTop: 15, fontSize: 20, marginLeft: 10, }}>Last added</Text>

                </View>
                <View style={{flex: 2,}}>
                <Text style= {{ paddingTop: 15, fontSize: 20,  textAlign: 'right', paddingRight: 15, color: '#00d', fontWeight: "bold"}}>Show all</Text>
                </View>
                </View>
            <View>
                <Added/>
            </View>
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
    show:{
        flexDirection: "row",
        paddingLeft: 15,
        fontWeight: 'bold'

    },
});

//make this component available to the app
export default CategoryDetail;
