import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, 
         ScrollView 
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
//import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native';
import PropTypes from 'prop-types';


const str_welcome ='Welcome to Big Fashion';
const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30 - 21:00\n' + 'Friday 8:30 - 13:00';
const str_pos = 'You are at the main gate\n' + 'There is an ATM outside';
const str_title = 'Nearby:';

const SECTIONS = [
    {
      title: 'Accessible Toilets',
      content: '10 meters ahead Entrance is 2 meters to your right.'
    },
    {
      title: 'Bank Discount',
      content: 'Lorem ipsum a...'
    },
    {
        title: 'ATM',
        content: 'Lorem ipsum b...'
    },
    {
        title: 'To Parking Lot',
        content: 'Lorem ipsum c...'
     },

  ];

export default class Body extends Component<{}> {
    constructor(props) {
        super(props);
      }

      _renderHeader(section) {//, index, isActive, sections) {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      }

      _renderContent(section) { //index, isActive, sections) {
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
            {str_open}
            </Text>
            <Text style={styles.assistant}>
            {str_pos}
            </Text>
            <Text style={styles.sectionHead}>
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
      //borderRadius: 10,
      padding: 10,
    },
    sectionHead: {
      fontSize: 20,
      //fontWeight: '500',
    },
    headerText: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    assistant:{
        marginBottom: 20,
        fontSize: 18,
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
