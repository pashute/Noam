import React, { Component } from 'react';
import { AsyncStorage, Platform, StyleSheet, Text, View, Alert } from 'react-native';
import ActionBar from 'react-native-action-bar';
import { Button } from 'react-native';

export default class HelpFirstTime extends Component {
  //<{}> {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('helpfirsttime-firstTime').then(value => {
      console.log(value);
      if (value === 'true') {
        const { replace } = this.props.navigation;
        replace('SplashPage');
      } else {
        AsyncStorage.setItem('helpfirsttime-firstTime', 'true');
      }
    });
  }

  render() {
    const { replace } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          titleStyle={styles.title}
          title={'Noam'}
          leftIconName={'location'}
          onLeftPress={() => console.log('Left!')}
        />
        <View style={styles.buttonDecorator}>
          <Button
            onPress={() => {
              replace('SplashPage');
            }}
            title={'Continue to app'}
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
  buttonDecorator: {
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
