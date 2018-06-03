import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform /* , Alert, */
} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
// import {StackNavigator,} from 'react-navigation';
import RNExitApp from 'react-native-exit-app';
import Bottom from '../tab_pages/Bottom.js';

const calibrate = '1. Calibrate Compass';
const autoUpdate = '2. Auto Update when pointing';
const voiceAssist = '3. Voice Assistant (Disabled)';
const preferences = '4. Preferences';
const profile = '5. Profile';

export default class SetHome extends Component<{}> {
  constructor(props) {
    super(props);
  }
  _exitApp() {
    RNExitApp.exitApp(); // this doesn't work on the emulator but does on the real app
    //Alert.alert("How are you?");
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ActionBar
          containerStyle={styles.actionBarContainer}
          titleStyle={styles.actionTitle}
          title={'noam'}
          leftIconName={'location'}
          onLeftPress={() => console.log('Left!')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Settings</Text>

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('Calibrate')}
              title={calibrate}
              color="#111111"
              accessibilityLabel="Tap to calibrate compass"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('AutoUpdate')}
              title={autoUpdate}
              color="#111111"
              accessibilityLabel="Tap for auto-update settings"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('Voice')}
              title={voiceAssist}
              color="#111111"
              accessibilityLabel="Tap on Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('Personal')}
              title={preferences}
              color="#111111"
              accessibilityLabel="Tap on Me"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('Profile')}
              title={profile}
              color="#111111"
              accessibilityLabel="Tap on Me"
            />
          </View>
        </View>
        <View style={styles.bottomRow}>
          <Bottom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: '#FDFDFD'
  },
  actionBarContainer: {
    backgroundColor: '#330077'
  },
  actionTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  contentContainer: {
    flex: 18
  },
  titleText: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
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
  },
  bottomRow: {
    flex: 2
  }
});
