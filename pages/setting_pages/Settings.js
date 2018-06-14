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

export default class Settings extends Component<{}> {
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
            <View
              style={[
                stylesData.styles.sharedStyles.mainContainer,
                styles.topMargin
              ]}
            >
              <ActionBar
                containerStyle={
                  stylesData.styles.sharedStyles.actionBarContainer
                }
                titleStyle={stylesData.styles.sharedStyles.actionTitle}
                title={appData.appData.general.txtAppNameOnActionBar}
                leftIconName={'location'}
                onLeftPress={() => console.log('Left!')}
              />
              <View
                style={[
                  stylesData.styles.sharedStyles.contentContainer,
                  styles.buttonContainer
                ]}
              >
                <Text style={stylesData.styles.sharedStyles.titleText}>
                  {appData.appData.screensSettings.txtSettings}
                </Text>

                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Calibrate')}
                    titleStyle={stylesData.styles.sharedStyles.buttonText}
                    title={appData.appData.screensSettings.txtToCalibrate}
                    color={stylesData.styles.sharedStyles.buttonStyle.color}
                    accessibilityLabel={
                      appData.appData.screensSettings.txtToGoTo +
                      appData.appData.screensSettings.calibrate.textTitle
                    }
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('AutoUpdate')}
                    titleStyle={stylesData.styles.sharedStyles.buttonText}
                    title={appData.appData.screensSettings.txtToAutoUpdate}
                    color={stylesData.styles.sharedStyles.buttonStyle.color}
                    accessibilityLabel={
                      appData.appData.screensSettings.txtToGoTo +
                      appData.appData.screensSettings.autoUpdate.textTitle
                    }
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Voice')}
                    titleStyle={stylesData.styles.sharedStyles.buttonText}
                    title={appData.appData.screensSettings.txtToVoiceAssist}
                    color={stylesData.styles.sharedStyles.buttonStyle.color}
                    accessibilityLabel={
                      appData.appData.screensSettings.txtToGoTo +
                      appData.appData.screensSettings.voiceAssist.textTitle
                    }
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Preferences')}
                    titleStyle={stylesData.styles.sharedStyles.buttonText}
                    title={appData.appData.screensSettings.txtToPreferences}
                    color={stylesData.styles.sharedStyles.buttonStyle.color}
                    accessibilityLabel={
                      appData.appData.screensSettings.txtToGoTo +
                      appData.appData.screensSettings.preferences.textTitle
                    }
                  />
                </View>
                <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                  <Button
                    onPress={() => navigate('Profile')}
                    titleStyle={stylesData.styles.sharedStyles.buttonText}
                    title={appData.appData.screensSettings.txtToProfile}
                    color={stylesData.styles.sharedStyles.buttonStyle.color}
                    accessibilityLabel={
                      appData.appData.screensSettings.txtToGoTo +
                      appData.appData.screensSettings.profile.textTitle
                    }
                  />
                </View>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text
                  onPress={() => navigate('MainPage')}
                  style={stylesData.styles.sharedStyles.navButton}
                >
                  {appData.appData.general.txtDone}
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
    marginTop: Platform.OS === 'ios' ? 0 : 0
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
