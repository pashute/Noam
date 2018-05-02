import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import {StackNavigator,} from 'react-navigation';

const set1 = '1. This Help';
const set2 = '2. That Help';
const set3 = '3. Some Other Help';


export default class Help extends Component{ //<{}> {
  constructor(props) {
    super(props);
    }

    render() {
      const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
              <ActionBar
                        containerStyle={styles.bar}
                        titleStyle={styles.title}
                        title={'Noam'}
                        
                        leftIconName={'location'}
                        
                        onLeftPress={() => console.log('Left!')}
                        
                    />
                       
             <Text style={styles.assistant}>
                Help
            </Text>

            <View style={styles.buttonContainer}>
              <Button title={set1} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
            <View style={styles.buttonContainer}>
              <Button title={set2} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
              </View>
            <View style={styles.buttonContainer}>
              <Button title={set3} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 35,
      color: '#6600ff',
  
    },
    instructions: {
      marginTop: 40,
      textAlign: 'center',
      color: '#333333',
      marginBottom: 80,
      fontSize: 20,
      fontStyle: 'normal',
    },
    assistant:{
      fontSize: 30,
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 30,
  
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
      },
    buttonContainer: {
      backgroundColor: '#2E9298',
      borderRadius: 10,
      padding: 5,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 10,
      shadowOpacity: 0.25,
      margin: 10,
      

    },
  });
