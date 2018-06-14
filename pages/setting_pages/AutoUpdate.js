import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import { Constants } from 'expo';
// import PropTypes from 'prop-types';
// import { StackNavigator } from 'react-navigation';
import Bottom from '../tab_pages/Bottom.js';
import { languageDataCtx } from '../../App';

export default class AutoUpdate extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      autoupdateStatus: false,
      headingchangedWarn: false
    };
  }

  _turnOnAutoUpdate() {
    Alert.alert('demo mode only');
    this.setateState({
      autoupdateStatus: !this.state.autoupdateStatus
    });
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
                <Text style={stylesData.styles.sharedStyles.instructionsHeader}>
                  {appData.appData.screensSettings.autoUpdate.txtTitle}
                </Text>
                <View style={stylesData.styles.sharedStyles.instructionsView}>
                  <Text style={stylesData.styles.sharedStyles.instructions}>
                    {appData.appData.screensSettings.autoUpdate.txtInstructions}
                  </Text>
                  <Text style={stylesData.styles.sharedStyles.instructions}>
                    {appData.appData.screensSettings.autoUpdate.txtAutoUpdateIs}
                    {': '}
                    {this.state.autoupdateStatus
                      ? appData.appData.general.txtOn
                      : appData.appData.general.txtOff}
                  </Text>
                  <View style={stylesData.styles.sharedStyles.buttonDecorator}>
                    <Button
                      onPress={this._turnOnAutoUpdate}
                      title={
                        appData.appData.screensSettings.autoUpdate
                          .txtAutoUpdateTurn +
                        ' ' +
                        appData.appData.general.txtOn
                      }
                      color="#333333"
                      accessibilityLabel={
                        this.state.autoupdateStatus
                          ? appData.appData.screensSettings.autoUpdate
                              .txtAutoUpdateAccessTurnOn
                          : appData.appData.screensSettings.autoUpdate
                              .txtAutoUpdateAccessTurnOff
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text
                  onPress={() => {
                    navigate('Calibrate');
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
                    navigate('Voice');
                  }}
                  style={stylesData.styles.sharedStyles.navButton}
                >
                  {appData.appData.general.txtNext}
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
  }
});
