//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../Categories'
import Card from '../Card'
import Added from '../Added'

const Home = (navigation) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={[styles.row, {marginTop:30, marginLeft:30, borderBottomWidth:0.5}]}>
                <Ionicons name='search' size={30} color='grey' />
                <Text style={{fontSize:20, color:'grey', marginLeft:10}} >Search</Text>
            </View>
            <View >
                <Categories/>
            </View>
            <View style=  {{flex:1}}>
                <Text style= {styles.Popular}>Popular Concerts</Text>
                <Card navigation={navigation}/>
            </View>
                <View>
            <View style=  {styles.show}>
                <View style={{flex: 1}}>
                <Text style= {{ paddingTop: 15, fontSize: 20, marginLeft: 10, }}>Last added</Text>

                </View>
                <View style={{flex: 2,}}>
                <Text style= {{ paddingTop: 15, fontSize: 20,  textAlign: 'right', paddingRight: 15, color: '#00d', fontWeight: "bold"}}>Show all</Text>
                </View>
                </View>
                <Added/>

            </View>
            
        </View>
        </ScrollView>
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

    row:{flexDirection:'row', alignItems:'center'}
});

export default Home;
