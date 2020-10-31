//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../components/Categories'
import PopularConcerts from '../components/PopularConcerts'
import Added from '../components/Added'
import Swiper from 'react-native-swiper'

const swiperImages=[
    require('../Images/african.jpg'),
    require('../Images/opera.jpg'),
    require('../Images/laugh.jpg'),
    require('../Images/guitar.jpg'),
]

const Home = (navigation) => {
    const {width, height} = Dimensions.get('window')
    return (
        // <ScrollView>
            <View style={styles.container}>
                <StatusBar translucent backgroundColor='transparent' />
                <View style={styles.sliderContainer}>
                    <Swiper autoplay horizontal={true} actveDotColor="#1A4A99">
                       {swiperImages.map((image,index)=>(
                            <View style={styles.slide} key={index} >
                                <ImageBackground
                                    resizeMode="center"
                                    style={styles.SliderImage}
                                    style={{ height: '100%',width: width, borderRadius: 15, }}
                                    source={image}
                                    resizeMode="cover">
                                    <View style={{ position: 'absolute', top: '50%', width, alignItems:'center' }}>
                                        <Text style={[styles.swiperTxt,]}>
                                            Dee Mr Joker
                                        </Text>
                                        <Text style={styles.swiperTxt} numberOfLines={1}>
                                            2 Oct 2020 Accra-Ghana
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                       ))}
                    </Swiper>
                </View>
                <View style={[styles.search,]}>
                    <TouchableOpacity>
                        <Ionicons name='search' size={28} color='white' />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View >
                        <Categories />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.Popular}>Popular Concerts</Text>
                        <PopularConcerts navigation={navigation} />
                    </View>
                    <View>
                        <View style={styles.show}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ paddingTop: 15, fontSize: 20, }}>Last added</Text>
                            </View>
                            <View style={{ flex: 2, }}>
                                <Text style={{ paddingTop: 15, fontSize: 20, textAlign: 'right', paddingRight: 15, color: '#00d', fontWeight: "bold" }}>Show all</Text>
                            </View>
                        </View>
                        <Added />

                    </View>
                </ScrollView>
            </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    Popular: {
        paddingTop: 15,
             fontSize: 20,
              marginLeft: 10,
            fontWeight: 'bold'
    },
    show:{
        flexDirection: "row",
        paddingLeft: 15,
        fontWeight: 'bold'

    },     

    search:{
        position:'absolute',
        right:10,
        top:40,
    },
    sliderContainer: {
        height: 240,
        width: '100%',
        position:'relative',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom:10
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,

    },
    SliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8

    },
    swiperTxt:{
        fontSize:22,
        opacity:0.8,
        color:'white',
        fontWeight:'bold',
        paddingLeft: 9   
    },
});

export default Home;
