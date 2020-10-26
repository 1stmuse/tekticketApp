import React from 'react';
 import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


 
 
 

// create a component
function About(){
    return (
         
          <ScrollView style={{paddingLeft: 20, flex: 1, flexDiretion: 'row',}}>
         <View>
          <Text style={styles.title}>
           Dee Moe Joker
          </Text>
          </View>
          <View>
          <Text style={{paddingTop: 5, color: 'grey',fontSize: 16,}}>
              OPERA
            </Text>
          </View>
          <View style={{paddingTop: 5 }}>
            <Text >
            <FontAwesome name='star' style={{fontSize: 20, color:"#0268D6", paddingRight: 40}} />
            <FontAwesome name='star' style={{fontSize: 20, color:"#0268D6",}} />           
            <FontAwesome name='star-half-empty' style={{fontSize: 20, color:"#0268D6",}} />             
            <FontAwesome name='star-o' style={{fontSize: 20, color:"#0268D6",}} />             
            <FontAwesome name='star-o' style={{fontSize: 20, color:"#0268D6",}} />             
               <Text style={{fontSize: 18,right: 70,  justifyContent: 'center', fontWeight: 'bold', color: "#0268D6", paddingVertical: 40}}>2.7</Text>
            </Text>
          </View>
          <View style={{paddingTop: 5  }}>
            <Text >
              <Entypo name='calendar' style={{fontSize: 30,  color: 'grey',}} /> 
              <Text style={{fontSize: 18,right: 70,  justifyContent: 'center', }}>December 14, January 2020</Text>
            </Text>
             <View style={{flex: 1}}>
               <Text style={{fontSize: 16, padding: 5, left: 30}}>Amyway Stadium, orlando FL</Text>
             </View>
             <View style={{flex: 1}}>
               <Text style={{fontSize: 16, padding: 5, left: 30}}>7:00PM</Text>
             </View>
          </View>
          <View style={{ }}>
            <Text >
              <Entypo name='ticket' style={{fontSize: 30,  color: 'black',}} /> 
              <Text style={{fontSize: 18,right: 70,  justifyContent: 'center', fontWeight: 'bold'}}>Price Range</Text>
            </Text>
             <View style={{flex: 1}}>
               <Text style={{fontSize: 16, padding: 5, left: 30}}> $ 100 USD  - $ 2,000 USD</Text>
             </View>
            
          </View>
          <View style={{ }}>
            <Text >
              <MaterialIcons name='description' style={{fontSize: 30, top: 100,  color: 'black', paddingRight: 15}} /> 
              <Text style={{fontSize: 18,right: 70,  justifyContent: 'center', fontWeight: 'bold'}}>Description</Text>
            </Text>
             {/* <ScrollView > */}
               <View style={{flex: 1}}>
               <Text style={{fontSize: 16, left: 30}}>Lorem Ipsum is simply dummy text of the printing </Text>
               <Text style={{fontSize: 16, left: 30}}>Lorem Ipsum s simply dummy text of the printing </Text>
               <Text style={{fontSize: 16, padding: 5, left: 30}}>Lorem Ipsum is simply dummy text of the printing </Text>


               </View>
             {/* </ScrollView> */}
            
          </View>
        </ScrollView>
        
       
 
    );
};

//make this component available to the app
export default About;

const styles = StyleSheet.create({
  title: {
  fontSize: 20,
  fontWeight: 'bold'
  },
  genres:{

  }
})
