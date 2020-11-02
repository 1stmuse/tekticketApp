//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, StatusBar,TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../components/Categories'
import PopularConcerts from '../components/PopularConcerts'
import Added from '../components/Added'
const {width, height} = Dimensions.get('window')

const Home = (navigation) => {

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <StatusBar translucent backgroundColor='transparent' /> */}
                <View style={[styles.search,]}>
                    <View style={styles.searchIcon} >
                        <Ionicons name='search' size={28} color='grey' />
                    </View>
                    <View >
                        <TextInput placeholder='search for your events' style={styles.searchInput}  />       
                    </View>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'white'
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
        flexDirection:'row',
        paddingLeft:20,
        marginTop:50
    },
    searchInput:{
        borderBottomWidth:1,
        width: width * 0.8,
        fontSize:20,
        paddingBottom:0,
        paddingLeft:40
    },
    searchIcon:{
        position:'absolute',
        top:10,
        left:25
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
