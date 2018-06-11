import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
  /* , Switch, Alert, Button */
} from 'react-native';
import { /* Util, */ SecureStore, Constants } from 'expo';
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
    SecureStore.getItemAsync('preferences-username').then(value => {
      // console.log('dbg.profile secureStore.username', value);
      if (value !== null) {
        this.setState({ username: value });
      }
    });
  
    SecureStore.getItemAsync('preferences-email').then(value => {
      // console.log('dbg.profile secureStore.email', value);
      if (value !== null) {
        this.setState({ email: value });
      }
    });
  
    SecureStore.getItemAsync('preferences-password').then(value => {
      // console.log('dbg.profile secureStore.password', value);
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
          return(
            <View style={[
              stylesData.styles.sharedStyles.mainContainer,
              styles.topMargin
            ]}>
              <ActionBar
                containerStyle={stylesData.styles.sharedStyles.actionBarContainer}
                titleStyle={stylesData.styles.sharedStyles.actionTitle}
                title={appData.appData.general.txtAppNameOnActionBar}
                leftIconName={'location'}
                onLeftPress={() => console.log('dbg.pref.actionbar requested Voice-Assist!')}
              />
              <View style={stylesData.styles.sharedStyles.contentContainer}>
                <Text style={stylesData.styles.sharedStyles.titleText}>{appData.appData.general.txtSettings}</Text>
                <Text style={stylesData.styles.sharedStyles.instructionsHeader}>{appData.appData.screensSettings.profile.txtTitle}</Text>
                <View style={stylesData.styles.sharedStyles.insturctionsView}>
                  <Text style={stylesData.styles.sharedStyles.instructions}>{appData.appData.screensSettings.profile.txtInstrcutions}</Text>
                  <View style={styles.inputsView}>
                    <TextInput
                      style={stylesData.styles.sharedStyles.inputText}
                      value={this.state.username}
                      placeholder="Username"
                      onChangeText={text => {
                        SecureStore.setItemAsync('preferences-username', text.toString());
                        this.setState({ username: text })
                      }}
                    />
                    <TextInput
                      style={{ height: 40, fontSize: 25 }}
                      value={this.state.email}
                      placeholder="email"
                      onChangeText={text => {
                        SecureStore.setItemAsync('preferences-email', text.toString());
                        this.setState({ email: text })
                      }}
                    />
                    <TextInput
                      style={{ height: 40, fontSize: 25 }}
                      value={this.state.password}
                      secureTextEntry={true}
                      placeholder="password"
                      onChangeText={text => {
                        SecureStore.setItemAsync('preferences-password', text.toString());
                        this.setState({ password: text })
                      }}
                    />
                    <View style={styles.separator60} />
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
                      navigate('SetHome');
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
  separator60: { marginTop: 60 }
});
