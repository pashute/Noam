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


//const str_welcome ='Welcome to Big Fashion';
//const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30 - 21:00\n' + 'Friday 8:30 - 13:00';
//const str_pos = 'You are at the main gate \n' + 'There is an ATM outside';
const str_title = 'towards South West:';
const str_des = 'You are on the first floor \n' 
               + 'near the south gate \n' + 'and bank Leumi';
const SECTIONS = [
    {
      title: 'Superpharm',
      content: '10 meters ahead Entrance is 2 meters to your right.'
    },
    {
      title: 'Stairs',
      content: 'Lorem ipsum 1...'
    },
    {
        title: 'Toilets',
        content: 'Walk ahead 30 meters  \n' 
                + 'turn half left and another 20 meters \n'
                + 'the first door to the right is for disabled \n'
                + 'the second door is the womens \n'
                + 'and the third is the men\'s room'
    },
    {
        title: 'To bus station',
        content: 'Lorem ipsum 3...'
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
        return (
          <View style={styles.container}> 
     

            <Text style={styles.assistant}>
            {str_des}
            </Text>

            <Text style={styles.dirtitle}>
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
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 20,
      },
      dirtitle: {
        fontSize:20,
        textAlign:'left'
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      headerText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
      },
      content: {
        padding: 20,
        backgroundColor: '#fff',
        
      },
    assistant:{
        marginBottom: 20,
        fontSize: 20,
      textAlign: 'center',
  
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
