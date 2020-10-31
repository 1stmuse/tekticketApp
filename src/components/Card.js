import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export default function Card({image, height, width}) {
    return (
        <ImageBackground
            style={{ height, width, borderRadius: 15, margin: 10,  }}
            imageStyle={{ borderRadius: 15 }}
            source={image}
        >
            <View style={{ position: 'absolute', top: 110, left: 0, right: 0, bottom: 0, }}>
                <Text style={styles.userStyle}>
                    Tasha Cobbs
                        </Text>
                <Text style={styles.userStyleSub} numberOfLines={1}>
                    2 Sept 2020 Isreal-Bethlehem
                        </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    userStyle:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        top: 5,
        paddingLeft: 9
        
    },
    userStyleSub:{
        fontSize:16,
        color:'white',
        top: 5,
        paddingLeft: 9
            
    },
})

