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
// import RNExitApp from 'react-native-exit-app';
import Bottom from '../tab_pages/Bottom.js';

import { languageDataCtx } from '../../App';

// todo data: take from AppData.json
const txtToCalibrate = '1. Calibrate Compass';
const txtToAutoUpdate = '2. Auto Update when pointing';
const txtToVoiceAssist = '3. Voice Assistant (Disabled)';
const txtToPreferences = '4. Preferences';
const txtToProfile = '5. Profile';

const txtDone = 'Done';

// todo data: take from stylesData
const colorButtonShadow = '#181818';

export default class SetHome extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, goBack, replace, popToTop } = this.props.navigation;
    return (
      <languageDataCtx.Consumer>
        {({ stylesData }) => {
          // console.log("stylesData:", stylesData);
          return (
            <View style={styles.mainContainer}>
              <ActionBar
                containerStyle={styles.actionBarContainer}
                titleStyle={styles.actionTitle}
                title={'noam'}
                leftIconName={'location'}
                onLeftPress={() => console.log('Left!')}
              />
              <View style={[styles.contentContainer, styles.buttonContainer]}>
                <Text style={styles.titleText}>Settings</Text>

                <View style={stylesData.styles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Calibrate')}
                    title={txtToCalibrate}
                    color="#111111"
                    accessibilityLabel="Tap to calibrate compass"
                  />
                </View>
                <View style={stylesData.styles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('AutoUpdate')}
                    title={txtToAutoUpdate}
                    color="#111111"
                    accessibilityLabel="Tap for auto-update settings"
                  />
                </View>
                <View style={stylesData.styles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Voice')}
                    title={txtToVoiceAssist}
                    color="#111111"
                    accessibilityLabel="Tap for setting up voice assist"
                  />
                </View>
                <View style={stylesData.styles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Preferences')}
                    title={txtToPreferences}
                    color="#111111"
                    accessibilityLabel="Tap for preferences"
                  />
                </View>
                <View style={stylesData.styles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Profile')}
                    title={txtToProfile}
                    color="#111111"
                    accessibilityLabel="Tap on Me"
                  />
                </View>
              </View>
              <View style={styles.bottomNavRow}>
                <Text onPress={() => {}} style={styles.navButton}>
                  {txtDone}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <Bottom />
              </View>
            </View>
          );
        }}
      </languageDataCtx.Consumer>
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
    flex: 16
  },
  titleText: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonDecorator: {
    backgroundColor: '#444444',
    borderRadius: 10,
    padding: 3,
    shadowColor: colorButtonShadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3, //10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
  },
  bottomNavRow: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between'
  },
  navButton: {
    textDecorationLine: 'underline',
    fontSize: 22
  },
  bottomRow: {
    flex: 2
  }
});
