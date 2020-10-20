import React from 'react'
import EventStack from './EventStack'
import AboutStack from './AboutStack'
import {View, Text, StyleSheet,Button } from 'react-native'




class ConcertDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        EventStack: "true",
        AboutStack: "false",
        tabName: "event",

    };
    this.changeComponent = this.changeComponent.bind(this);
  }
  getBtnId = (e) => {
    if(e.target && e.target.nodeName === " BUTTON") {
        this.setState({
            panelIndex: Number(e.target.id)
        });
    }
}
 
        changeComponent(name){
            switch(name) {
                case "EventStack" : 
                this.setState({
                  EventStack : !this.state.EventStack
                });
                    break;
                    case "AboutStack" : 
                    this.setState({
                      AboutStack : !this.state.AboutStack
                    });
                    break;
                    default : 
            }
        }
  render(){
    return ( 
      <View style={styles.container}>
        <View style={styles.btnOne}>
        <Button
     onPress={() => this.setState({ tabName: 'event' }) }
     title="Event">
       </Button>
        </View>
        <View style={styles.btnTwo}>
        <Button
     onPress={() => this.changeComponent() }
     title="About">
       </Button>
        </View>
      </View>
    );
};
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  btnOne : {
    // flex: 2
  },
  btnTwo : {
    // flex: 2
  },
});

export default ConcertDetails