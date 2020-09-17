//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
const Card = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={{width:width-20, height:height/4}} source={{uri:'https://media1.popsugar-assets.com/files/thumbor/huLkVuxNB9_jiyjJixO4QLxBpiQ/731x0:4187x3456/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/14/087/n/1922283/9a5d6fee5df58716248f10.68957960_/i/harry-styles-fine-line-los-angeles-concert-review.jpg'}} >
                <View>
                    <Text style={[styles.cardTxt]} >hello</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'flex-end',
        height: height/4,
    },
    cardTxt:{
        fontSize:25,
        fontWeight:'bold',
    }
});

//make this component available to the app
export default Card;
