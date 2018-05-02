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
import { NavigationHelper, Screen } from 'rn-stack-router';



export default class Main extends Component{ //<{}> {
  constructor(props) {
    super(props);
    }
    render() {
        return (
          <View style={styles.container} onPress={this._onPressMainPage}>
              <ActionBar
                        containerStyle={styles.bar}
                         
                        
                        leftIconName={'star'}
                        
                        onLeftPress={() => console.log('Left!')}
                        
                        rightIcons={[
                            {
                                name: 'menu',
                                onPress: () => console.log('Right Star !'),
                            },
                        ]}
                    />

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
    },
    assistant:{
      fontSize: 24,
      marginTop: 60,
      marginLeft: 20,
      marginRight: 20,
  
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
