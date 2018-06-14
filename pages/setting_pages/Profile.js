import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar
  /* , Switch, Alert, Button */
} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
import Bottom from '../tab_pages/Bottom.js';
import { languageDataCtx } from '../../App';

export default class Profile extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('preferences-username').then(value => {
      // console.log('dbg.profile AsyncStorage.username', value);
      if (value !== null) {
        this.setState({ username: value });
      }
    });

    AsyncStorage.getItem('preferences-email').then(value => {
      // console.log('dbg.profile AsyncStorage.email', value);
      if (value !== null) {
        this.setState({ email: value });
      }
    });

    AsyncStorage.getItem('preferences-password').then(value => {
      // console.log('dbg.profile AsyncStorage.password', value);
      if (value !== null) {
        this.setState({ password: value });
      }
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
                onLeftPress={() =>
                  console.log('dbg.pref.actionbar requested Voice-Assist!')
                }
              />
              <View style={stylesData.styles.sharedStyles.contentContainer}>
                <Text style={stylesData.styles.sharedStyles.titleText}>
                  {appData.appData.general.txtSettings}
                </Text>
                <Text style={stylesData.styles.sharedStyles.instructionsHeader}>
                  {appData.appData.screensSettings.profile.txtTitle}
                </Text>
                <View style={stylesData.styles.sharedStyles.instructionsView}>
                  <Text style={stylesData.styles.sharedStyles.instructions}>
                    {appData.appData.screensSettings.profile.txtInstructions}
                  </Text>
                  <View style={stylesData.styles.sharedStyles.inputsView}>
                    <TextInput
                      style={stylesData.styles.sharedStyles.inputText}
                      value={this.state.username}
                      placeholder={
                        appData.appData.screensSettings.profile.txtUsername
                      }
                      onChangeText={text => {
                        AsyncStorage.setItem(
                          'preferences-username',
                          text.toString()
                        );
                        this.setState({ username: text });
                      }}
                    />
                    <TextInput
                      style={stylesData.styles.sharedStyles.inputText}
                      value={this.state.email}
                      placeholder={
                        appData.appData.screensSettings.profile.txtEmail
                      }
                      onChangeText={text => {
                        AsyncStorage.setItem(
                          'preferences-email',
                          text.toString()
                        );
                        this.setState({ email: text });
                      }}
                    />
                    <TextInput
                      style={stylesData.styles.sharedStyles.inputText}
                      value={this.state.password}
                      secureTextEntry={true}
                      placeholder={
                        appData.appData.screensSettings.profile.txtPassword
                      }
                      onChangeText={text => {
                        AsyncStorage.setItem(
                          'preferences-password',
                          text.toString()
                        );
                        this.setState({ password: text });
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text
                  onPress={() => {
                    navigate('Preferences');
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
                    navigate('MainPage');
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
    marginTop: Platform.OS === 'ios' ? 0 : 0
  },
  separator60: { marginTop: 60 }
});
