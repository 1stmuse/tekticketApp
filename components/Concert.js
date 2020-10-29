import React from 'react';
 import {View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions} from 'react-native'
 import ConcertDetials from './ConcertDetails'
import { useNavigation } from '@react-navigation/native';

import Swiper from 'react-native-swiper'

 
 

// create a component
const Concert = () => {
  const navigation = useNavigation()
  let dimension = Dimensions.get('window');
  let imageHeight =  Math.round((dimension.width *  10) / 15);
  let imageWidth = dimension.width;
    return (
        <ScrollView style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper autoplay horizontal = {true} actveDotColor="#1A4A99">
                  <View style={styles.slide}>
                        <ImageBackground
                        resizeMode="center"
                        style={styles.SliderImage}
                                style={{height: imageHeight, width: imageWidth, borderRadius: 15, width: 430 }}
                              source= {require ("./Images/african.jpg")}
                              resizeMode = "cover">
                            <View style={{position: 'absolute', top: 180, left: 0, right: 0, bottom: 0,}}>
                        <Text style={styles.userStyle}>       
                        Dee Mr Joker
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        2 Oct 2020 Accra-Ghana
                        </Text>
                    </View>
                        </ImageBackground> 
                    </View>
        <View style={styles.slide}>
                <ImageBackground
                style={styles.SliderImage}   
                        style={{height: imageHeight, width: imageWidth, borderRadius: 15, width: 430 }}
                      source= {require ("./Images/duba.jpg")}
                      resizeMode = "cover">

                </ImageBackground> 
        </View> 
        </Swiper>
        </View> 
        <View style={styles.ConcertDetails}>
          <ConcertDetials/>
        </View>
     
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff'
  },
  sliderContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,

  },
  SliderImage: {
    height: '1 00%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8

  },
  ConcertDetails:{
    color: 'black'
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
export default Concert;
