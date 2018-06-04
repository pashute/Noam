import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import DrawerLayout from 'react-native-drawer-layout';
const str_first =
  'Searching for accessibility\n' + 'information in the vicinity...';
const str_btn_first = 'Are you in Big Fashion?';
const str_help = 'Help';

export default class NoBeacon extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.assistant}>{str_first}</Text>
        <Text style={styles.welcome}>{str_btn_first}</Text>
        <Text style={styles.welcome}>{str_help}</Text>
        <View style={{ marginTop: 200 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    color: '#6600ff',
    marginTop: 20,
    paddingRight: 30,
    textAlign: 'right'
  },
  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20
  },
  assistant: {
    fontSize: 24,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  }
});
