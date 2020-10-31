import React from 'react';
import {View, Text, StyleSheet,ImageBackground, ScrollView,TouchableOpacity,Button} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TicketStack from './stacks/TicketStack'
import { useNavigation } from '@react-navigation/native';

const TicketPrice = ({item}) => {
 const navigation = useNavigation()
    return (
      // <View > 
      <ImageBackground
                style={styles.images,styles.container}
                
                source={{uri:'https://media1.popsugar-assets.com/files/thumbor/huLkVuxNB9_jiyjJixO4QLxBpiQ/731x0:4187x3456/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/14/087/n/1922283/9a5d6fee5df58716248f10.68957960_/i/harry-styles-fine-line-los-angeles-concert-review.jpg'}}>
                     <View style={{position: 'absolute', top:20, left: 20, right: 0, bottom: 0,flexDirection: 'row' }}>
                     <Text>
                      
                      <AntDesign name="arrowleft" onPress={() => navigation.goBack()} style={{fontSize: 25, color:"#fff", flex: 1, flexDirection: 'row', justifyContent:"space-between",alignItems:'flex-end', borderWidth: 5, borderColor: 'black', borderRadius: 20, bottom: 300}}/>

                          
                    {/* <TicketStack /> */}
                      </Text>
                      <Text style={styles.ticketTitle}>Artist Name</Text>
                      <Text>
                      
                      <AntDesign name="dash" onPress={() => navigation.goBack()} style={{fontSize: 25, color:"#fff", flex: 2, }}/>

                          
                    {/* <TicketStack /> */}
                      </Text>
                    </View>
                </ImageBackground>
       
        //  </View>
    );
  }


export default TicketPrice;

const styles= StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 420,
    height: 280, 
    resizeMode: "cover",

  },
  ticketTitle: {
   color: '#fff',
   flex: 1,
   justifyContent: 'center',
   alignItems: "flex-end",
  //  left: 120
  fontSize: 20,
  paddingHorizontal: 100
  },
  images:{
    width: 'auto',
     height: 180, 
    //   borderRadius: 50,
       margin: 10,
       resizeMode: "cover",
       backgroundColor: 'black',
        opacity: 0.8,
}
})