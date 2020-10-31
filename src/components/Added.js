//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,ScrollView,} from 'react-native';

const Card = () => {
    
    return (
        <View style={styles.container} style={{ padding: 10, }}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ImageBackground
                    style={styles.images}
                    source={require("../../src/Images/african.jpg")}
                >
                    <View style={{ position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>
                            Kimmy Skota
                    </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>
                            2 Dec 2020 VGC, Lagos
                    </Text>
                    </View>
                </ImageBackground>
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
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        // textAlign: 'center',
        top: 5,
        paddingLeft: 9
        
    },
    userStyleSub:{
        fontSize:14,
        color:'white',
     
        // textAlign: 'center',
        top: 5,
        paddingLeft: 9
            
    },
images:{
    width: 150,
     height: 180, 
    //   borderRadius: 50,
       margin: 10,
       resizeMode: "cover",
       backgroundColor: 'black',
        opacity: 0.8,
}

});

//make this component available to the app
export default Card;
