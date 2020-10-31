//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card'
// import Concert from './Concert'

// import FirstSelect from './Details/FirstSelect'

// const {width, height} = Dimensions.get('window')
const swiperImages=[
    require('../Images/african.jpg'),
    require('../Images/opera.jpg'),
    require('../Images/laugh.jpg'),
    require('../Images/guitar.jpg'),
    require('../Images/opera.jpg'),
    require('../Images/laugh.jpg'),
]

const PopularConcerts = () => {
    const navigation = useNavigation()
     const {width, height} = Dimensions.get('window');
     
    return (
        <View style={styles.container} style={{  }}>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // decelerationRate={1}
                contentContainerStyle={{paddingLeft:20}}
            >
                {swiperImages.map((image, index)=>(
                    <Card key={index} image={image} height={200} width={width* 0.8} />
                ))}
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
});

//make this component available to the app
export default PopularConcerts;
