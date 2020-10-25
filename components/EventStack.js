import React, {Component} from 'react';
 import {View, Text, StyleSheet, ScrollView, Dimensions,TouchableOpacity} from 'react-native'
 import { useNavigation } from '@react-navigation/native';
 import Entypo from 'react-native-vector-icons/Entypo'



 
 const {height, width} = Dimensions.get('screen');
 const ConcertList = [
   {id: '1',
    month:"may ",
     date: "19",
     day: 'Mon',
    time: "3:30PM",
  title: "PGE Norway Stadium" 
  },
    {id: '2',
    month:"june ",
    day: 'Tue',
    date: "1",
    time: "12:30PM",
  title: "Creamy Berlin Stadium"
  },
    {id: '3',
    month:"june ",
    day: 'Wed',
    date: "2",
    time: "3:30PM",
    title: "United Kingdom Stadium" 
  },
    {id: '4',
    month:"june ",
    day: 'Thur',
    date: "3",
    time: "3:30PM",
    title: "Germary Stadium" 
  },
    {id: '5',
    month:"june ",
    day: 'Fri',
    date: "4",
    time: "3:30PM",
    title: "PGE Norway Stadium" 
  },
    {id: '6',
    month:"Sat ",
    day: 'mon',
    date: "5",
    time: "3:30PM",
    title: "PGE Norway Stadium"
  },
    {id: '7',
    month:"june ",
    date: "6",
    day: 'Sun',
    time: "3:30PM",
    title: "PGE Norway Stadium" 
  },  
    {id: '8',
    month:"june ",
    day: 'Mon',
    date: "7",
    time: "3:30PM",
    title: "PGE Norway Stadium" 
  },
 ]

// create a component

export default class  EventStack extends Component {

  renderList(item){
 const {useNavigation} =(this.props)
    return(
    <View key={ `ConcertList=${item.id}`} style={styles.lists}>
      <TouchableOpacity onPress={() => navigation.navigate('ticketprice')}>
      <View style={{flex: 1, padding: 3}}>
        <Text>
          {item.month}  {item.day} {item.time} 
        </Text>
      </View>
      <View>
        <Text style={styles.below, {marginLeft: 5, fontWeight: "bold", padding: 3, fontSize: 17}}>
          {item.date} {item.title} 
          <Entypo name='chevron-right'  style={{fontSize: 20, color:"#0268D6", flex: 1, flexDirection: 'row', justifyContent:"space-between",alignItems:'flex-end', borderWidth: 5, borderColor: 'black', borderRadius: 20}}/> 
        </Text>
      </View>
      </TouchableOpacity>
    </View>
    )
  }
  renderLists(){
    return(
      <ScrollView vertical style={styles.list}>
          <View style={styles.itemList}>
            {ConcertList.map (ConcertList =>this.renderList (ConcertList))}  
          </View>
      </ScrollView>
    )
  }
  render(){
    return (
        <View 
            style={{justifyContent: 'center', alignItems: 'center',  flexDiretion: 'row' }}>
              <Text>  {this.renderLists()} </Text>
        </View>
     
    );
};
}
// define your styles for eventstack here
const styles = StyleSheet.create({
  event: {
    fontSize: 30,
    color: 'black',
    borderColor: 'black',
  },
    lists:{
      flex: 1,
      borderRadius: 6,
      width: width - (24 * 2),
      marginHorizontal: 20,
      backgroundColor: 'white',
      margin: 3,
      padding: 15,
      paddingTop: 15
  }, 
      list : {
        position: 'absolute'
    },
  itemList: {
 
  },
  below: {
    fontWeight: '900',
    fontSize: 17,
  }
 

})

//make this component available to the app

