import React from 'react'
import EventStack from '../EventStack'
import AboutStack from '../AboutStack'
import {View, Text, StyleSheet,Button } from 'react-native'
import { Fragment } from 'react'




class ConcertDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        OpenEvent: "true",
        OpenAbout: "false",
        tabName: "event",


    };
    this.changeComponent = this.changeComponent.bind(this);
  }
  getBtnId = (e) => {
    if(e.target && e.target.nodeName === " Button") {
        this.setState({
            panelIndex: Number(e.target.id)
        });
    }
}
 
  changeComponent(name) {
    switch (name) {
      case "OpenEvent":
        this.setState({
          OpenEvent: !this.state.OpenEvent
        });
        break;
      case "OpenAbout":
        this.setState({
          OpenAbout: !this.state.OpenAbout
        });
        break;
      default:
    }
  }
  render(){
    return ( 
      <>
        <View >
          <View style={styles.container}>
            <Button
              onPress={() => this.setState({ tabName: 'event' })}
              title="Event"
              color="#0268D6"
              style={styles.btnOne}
            />

            <Button
              onPress={() => this.setState({ tabName: 'about' })}
              title="About"
              color="#0268D6"
              style={styles.btnTwo}
            />
          </View>
          <View style={{ padding: 6 }}>
            <Text>
              {this.state.tabName === 'event' ? <EventStack /> : ''}
            </Text>
          </View>
          <View>
            <Text>
              {this.state.tabName === 'about' ? <AboutStack /> : ''}
            </Text>
          </View>


        </View>
      </>
    );
};
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderStyle: "solid", 
    flexGrow: 1,
    padding: 7,
    borderRadius: 20,
    backgroundColor:"white",
    justifyContent: "center",
    width: 300,
    left: 55   
  },
  btnOne : {
    flex: 1, 
    width: 100,
    borderStyle: "solid", 
    flexGrow: 1,
    padding: 5,
    borderRadius: 20,
    backgroundColor:"white",
    justifyContent: "center",
    borderWidth: 50,
    borderColor: 'black'


  },
  btnTwo : {
    flex: 1,
    // color: '#000'
  }
});

export default ConcertDetails