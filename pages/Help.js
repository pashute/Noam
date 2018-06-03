import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';

const hlpGettingStarted = 'Getting Started';
const hlpTroubleShooting = 'Troubleshooting';
const hlpFAQ = 'FAQ';
//const hlpHowTo

export default class Help extends Component {
  //<{}> {
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

        <Text style={styles.assistant}>Help</Text>

        <View style={styles.buttonContainer}>
          <Button
            title={hlpGettingStarted}
            color="#111111"
            accessibilityLabel="Tap on Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={hlpFAQ}
            color="#111111"
            accessibilityLabel="Tap on Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={hlpTroubleShooting}
            color="#111111"
            accessibilityLabel={'Tap on Me to '}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 35,
    color: '#6600ff'
  },
  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20,
    fontStyle: 'normal'
  },
  assistant: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20
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
    margin: 10
  }
});
