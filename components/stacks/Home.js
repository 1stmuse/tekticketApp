//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../Categories'
import Card from '../Card'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row, {marginTop:30, marginLeft:30, borderBottomWidth:0.5}]}>
                <Ionicons name='search' size={30} color='grey' />
                <Text style={{fontSize:20, color:'grey', marginLeft:10}} >Search</Text>
            </View>
            <View >
                <Categories/>
            </View>
            <View>
                <Text>Popular Concerts</Text>
                <Card/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    row:{flexDirection:'row', alignItems:'center'}
});

export default Home;
