import React from 'react';
 import {View, Text, ScrollView} from 'react-native'
 
 
 

// create a component
function About(){
    return (
        <ScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
     
          <Text>
            Hello About
          </Text>
        </View>
        
       
        </ScrollView>
    );
};

//make this component available to the app
export default About;
