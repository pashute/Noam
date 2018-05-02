import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
const exit = "Exits";
const call= "Call";

export default class Bottom extends Component<{}> {
    constructor(props) {
        super(props);
      }
    render() {
        return (
          <View style={styles.container}> 
          <View style={{flexDirection:'row', marginLeft:10}}> 
            <Image
              style={{width: 30, height: 30, padding:10}}
              source={{uri: 'https://png.icons8.com/metro/540/exit.png'}}
            />
            <Text style={styles.assistant}>
            {exit}
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image
              style={{width: 30, height: 30}}
              source={{uri: 'https://cdn4.iconfinder.com/data/icons/computer-and-web/80/Computer_and_web_icons-04-512.png'}}
            />
              <Text style={styles.assistant}>
              {call}
              </Text>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#F5FCFF',
      
      
    },
    assistant:{
      fontSize: 24,
      marginLeft:4,
      marginRight: 20,
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
