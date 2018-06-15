import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image /* Alert, Button */
} from 'react-native';
import {} from 'react-native';
import ActionBar from 'react-native-action-bar';
import { Constants } from 'expo';
// import PropTypes from 'prop-types';
// import { StackNavigator } from 'react-navigation';
import Bottom from '../tab_pages/Bottom.js';
import { languageDataCtx } from '../../AppMain';

export default class Calibrate extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, goBack, replace, popToTop } = this.props.navigation;
    return (
      <languageDataCtx.Consumer>
        {({ stylesData, appData }) => {
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
              <View style={stylesData.styles.sharedStyles.contentContainer}>
                <Text style={stylesData.styles.sharedStyles.titleText}>
                  {appData.appData.screensSettings.txtSettings}
                </Text>
                <Text style={stylesData.styles.sharedStyles.instructionHeader}>
                  {appData.appData.screensSettings.calibrate.txtTitle}
                </Text>
                <Text style={stylesData.styles.sharedStyles.instructions}>
                  {
                    appData.appData.screensSettings.calibrate
                      .txtInstructionsCompass
                  }
                </Text>
                <View style={styles.imgCalibrateView}>
                  <Image
                    source={require('../../assets/icons/compass_calibration8.png')}
                  />
                </View>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text
                  onPress={() => {
                    navigate('Settings');
                  }}
                  style={stylesData.styles.sharedStyles.navButton}
                >
                  {appData.appData.general.txtBack}
                </Text>
                <Text
                  onPress={() => {
                    navigate('Settings');
                  }}
                  style={stylesData.styles.sharedStyles.navButton}
                >
                  {appData.appData.general.txtTOC}
                </Text>
                <Text
                  onPress={() => {
                    navigate('AutoUpdate');
                  }}
                  style={stylesData.styles.sharedStyles.navButton}
                >
                  {appData.appData.general.txtNext}
                </Text>
                <Text
                  onPress={() => {
                    navigate('MainApp');
                  }}
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
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  imgCalibrateView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
