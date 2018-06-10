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
const txtSettings = 'Settings';

const txtDone = 'Done';

// todo data: take from stylesData
// const colorButtonShadow = '#181818';

export default class SetHome extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, goBack, replace, popToTop } = this.props.navigation;
    return (
      <languageDataCtx.Consumer>
        {({ stylesData, appData }) => {
          // console.log("stylesData:", stylesData);
          return (
            <View style={[stylesData.styles.sharedStyles.mainContainer, styles.topMargin]}>
              <ActionBar
                containerStyle={stylesData.styles.sharedStyles.actionBarContainer}
                titleStyle={stylesData.styles.sharedStyles.actionTitle}
                title={'noam'}
                leftIconName={'location'}
                onLeftPress={() => console.log('Left!')}
              />
              <View style={[stylesData.styles.sharedStyles.contentContainer,styles.buttonContainer]}>
                <Text style={stylesData.styles.sharedStyles.titleText}>{txtSettings}</Text>

                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Calibrate')}
                    title={txtToCalibrate}
                    color="#111111"
                    accessibilityLabel="Tap to calibrate compass"
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('AutoUpdate')}
                    title={txtToAutoUpdate}
                    color="#111111"
                    accessibilityLabel="Tap  to go to auto-update settings"
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Voice')}
                    title={txtToVoiceAssist}
                    color="#111111"
                    accessibilityLabel="Tap to go to voice-assist settings"
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Preferences')}
                    title={txtToPreferences}
                    color="#111111"
                    accessibilityLabel="Tap to go to preferences"
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Profile')}
                    title={txtToProfile}
                    color="#111111"
                    accessibilityLabel="Tap to go to profile"
                  />
                </View>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text onPress={() => {console.log('dbg.settingsDone')}} style={stylesData.styles.sharedStyles.navButton}>
                  {txtDone}
                </Text>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomRow}>
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
  topMargin: {
    marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
