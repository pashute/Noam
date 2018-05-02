import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';

//const str_welcome ='Last place: South Elevators floor 1';
//const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30-21:00\n';
//const str_pos = 'You are at the main gate \nThere is an ATM outside';
const str_title = '';
const str_des = 'Opening hours\n'+"Sunday-Thursday 8:15-17:30";
const SECTIONS = [
    {
      title: 'Amanda matchmaker',
      content: '2nd floor \nNear elevator C3 (south)\n' 
               + 'Staff specializes in disabilities\n'
               +'and we are hiring.'
    },
    {
      title: 'Brake out room',
      content: '2nd floor\n' + ' near elevator C3'
    },
    {
        title: 'Cazino',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Dahan driving school',
        content: 'Lorem ipsum...'
     },

  ];

export default class Elevator extends Component<{}> {
    constructor(props) {
        super(props);
      }

      _renderHeader(section) {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      }

      _renderContent(section) {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      }
    
    render() {
        let data = [{
            value: '1',
          }, {
            value: '2',
          }
  ];
        return (
          <View style={styles.container}> 
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems:'center',
                    marginLeft:20
                    
                    }}>
                    <Text style={styles.assistant}>
                        Floor
                    </Text>
                            <Dropdown
                              containerStyle = {{marginLeft:30,width:100}}
                              label='Floor'
                              data={data}
                            />

                    
                    </View>
            <Text style={{fontSize:28}}>
            {str_title}
            </Text>
            <Accordion
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
      />

          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',

      marginLeft: 20,
      marginRight: 20,
    
      
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    desc: {
      marginBottom: 5,
      fontSize: 14,
      textAlign: 'center'
    },
    assistant:{
      marginBottom: 20,
      fontSize: 24,
      textAlign: 'left',
  
    },
    buttonContainer: {
      backgroundColor: '#2E9298',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25,
      marginRight: 20,
      marginLeft: 20,
    },
  });
