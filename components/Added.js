//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground,ScrollView,} from 'react-native';

const Card = () => {
    
    return (
        <View style={styles.container} style={{padding: 10,}}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ImageBackground
                style={styles.images}
                
                source={{uri:'https://media1.popsugar-assets.com/files/thumbor/huLkVuxNB9_jiyjJixO4QLxBpiQ/731x0:4187x3456/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/14/087/n/1922283/9a5d6fee5df58716248f10.68957960_/i/harry-styles-fine-line-los-angeles-concert-review.jpg'}}>
                     <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Morgan
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        20 Oct 2020 South Afirca
                        </Text>
                    </View>
                </ImageBackground>
                 <ImageBackground
                style={styles.images}
                source= {require("./Images/guitar.jpg")}
                >
                <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                    <Text style={styles.userStyle}>       
                    David Luizon
                    </Text>
                    <Text style={styles.userStyleSub} numberOfLines={1}>       
                    15 Oct 2020 London, UK
                    </Text>
                </View>
                </ImageBackground>
                  <ImageBackground
                style={styles.images}
                source= {require("./Images/opera.jpg")}
                >
                  <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>

                    <Text style={styles.userStyle}>       
                    Hymers
                    </Text>
                    <Text style={styles.userStyleSub} numberOfLines={1}>       
                    2 Sept 2020 Cancun, Columbia
                    </Text>
                </View>
             </ImageBackground>
                 <ImageBackground
                style={styles.images}
                source= {require("./Images/lead.jpg")}
                >
                         <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                        <Text style={styles.userStyle}>       
                        Spencers
                        </Text>
                        <Text style={styles.userStyleSub} numberOfLines={1}>       
                        1 Sept 2020 NGE, Nabaway
                        </Text>
                        </View>
                </ImageBackground>

                  <ImageBackground
                style={styles.images}
                source= {require("./Images/duba.jpg")}
                >
                <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                    <Text style={styles.userStyle}>       
                    Duka
                    </Text>
                    <Text style={styles.userStyleSub} numberOfLines={1}>       
                    2 Sept 2020 Cancun, Columbia
                    </Text>
                </View>
                </ImageBackground>
                 <ImageBackground
                style={styles.images}
                source= {require("./Images/african.jpg")}
                >
                <View style={{position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                    <Text style={styles.userStyle}>       
                    Kimmy Skota
                    </Text>
                    <Text style={styles.userStyleSub} numberOfLines={1}>       
                    2 Dec 2020 VGC, Lagos
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
