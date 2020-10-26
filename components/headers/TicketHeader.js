import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


 

  export default class  TicketHeader extends Component {

    render(){
      return(
        <View style={{backgroundColor: '#000'}}>
         <View style={styles.container}>
        <Text style={styles.arrowContainer}>
         <AntDesign name="arrowleft" onPress={() => navigation.goBack()} style={styles.arrow}/>
         </Text>
         <Text style={styles.content}>
            My Orders
            </Text>
            </View>
      </View>
      )
      };
    }
const styles = StyleSheet.create({
    container: {
       backgroundColor: '#0268D6',
       flexDirection: 'row',
       paddingVertical: 20,
       padding: 10

    },
    arrowContainer:{
        paddingHorizontal: 20,
        flex: 2,        
    },
    arrow: {
        fontSize: 25,
        color:"#fff",
        // justifyContent:"space-between"  
    },
    content: {
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 20,
        flex: 1
    }
  })

