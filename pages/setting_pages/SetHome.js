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
import RNExitApp from 'react-native-exit-app';
const set1 = '1. Calibrate Compass';
const set2 = '2. Auto Update when pointing';
const set3 = '3. Voice Assistant';
const set4 = '4. Personal Preference';
const set5 = '5. Profile';

export default class SetHome extends Component<{}> {
  constructor(props) {
    super(props);
    }
    _exitApp()
    {
       RNExitApp.exitApp();
      //Alert.alert("How are you?");
    }
    render() {
      const { navigate } = this.props.navigation;
        return (
          <View style={styles.container} onPress={this._onPressMainPage}>
              <ActionBar
                        containerStyle={styles.bar}
                        titleStyle={styles.title}
                        title={'noam'}
                        
                        leftIconName={'location'}
                        
                        onLeftPress={() => console.log('Left!')}
                        
                    />
                       
             <Text style={styles.assistant}>
                Settings
            </Text>

            <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Calibrate')} title={set1} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('AutoUpdate')} title={set2} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
              </View>
            <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Voice')} title={set3} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={() => navigate('Personal')} title={set4} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
            </View>
            <View style={styles.buttonContainer}>
            <Button onPress={() => navigate('Profile')} title={set5} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </View>
            <Text onPress={this._exitApp}style={styles.instructions}>
                  Close
            </Text>
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
