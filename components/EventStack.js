import React from 'react';
 import {View, Text, ScrollView, StyleSheet} from 'react-native'
 
 
 

// create a component
function  EventStack(){
    return (
        <ScrollView>
        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Hello Concerts lorem lorem oloreSdfd gvncdcfmxv jf cmy name is kyel a
          </Text>
        </View>
        </ScrollView>
    );
};

// define your styles for eventstack here
const styles = StyleSheet.create({
  event: {
    fontSize: 30,
    color: 'black',
    padding: 10,
    width: 40,
  },

})

//make this component available to the app
export default EventStack;

