import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
  /* TextInput,  Alert, Button*/
} from 'react-native';
import { Util, SecureStore, Constants } from 'expo';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import { Dropdown } from 'react-native-material-dropdown';
// import PropTypes from 'prop-types';
// import { StackNavigator } from 'react-navigation';
import Bottom from '../tab_pages/Bottom.js';
import { languageDataCtx } from '../../App';
import Languages from '../../data';

export default class Preferences extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      language: 'English',
      useLargeFont: false,
      scale: '100%',
      theme: 'High Contrast',
      textOnly: false,
      outlines: true,
      notifications: false,
      autoLaunch: false
    };
  }

  UNSAFE_componentWillMount() {
    SecureStore.getItemAsync('preferences-useLargeFont').then(value => {
      console.log('dbg.pref secureStore.uselargefont', value);
      if (value !== null) {
        this.setState({ useLargeFont: value });
      }
    });

    SecureStore.getItemAsync('preferences-scale').then(value => {
      console.log('dbg.pref secureStore.fontScale',value);
      if (value !== null) {
        this.setState({ scale: value });
      }
    });

    SecureStore.getItemAsync('preferences-language').then(value => {
      console.log('dbg.pref secureStore.language', value);
      if (value !== null) {
        this.setState({ language: value });
      }
    });

    SecureStore.getItemAsync('preferences-textOnly').then(value => {
      console.log('dbg.pref secureStore.textOnly', value);
      if (value !== null) {
        this.setState({ textOnly: value });
      }
    });

    SecureStore.getItemAsync('preferences-theme').then(value => {
      console.log('dbg.pref secureStore.theme', value);
      if (value !== null) {
        this.setState({ theme: value });
      }
    });

    SecureStore.getItemAsync('preferences-outlines').then(value => {
      console.log('dbg.pref secureStore.outlines', value);
      if (value !== null) {
        this.setState({ outlines: value });
      }
    });

    SecureStore.getItemAsync('preferences-notifications').then(value => {
      console.log('dbg.pref secureStore.notifications', value);
      if (value !== null) {
        this.setState({ notifications: value });
      }
    });

    SecureStore.getItemAsync('preferences-autoLaunch').then(value => {
      console.log('dbg.pref secureStore.autoLaunch', value);
      if (value !== null) {
        this.setState({ autoLaunch: value });
      }
    });
  }

  render() {
    const { navigate, goBack, replace, popToTop } = this.props.navigation;
    return (
      <languageDataCtx.Consumer>
        {({ stylesData, appData }) => {
          let scalingOptions = [
            { value: '100%' },
            { value: '200%' },
            { value: '300%' }
          ];
          let themeOptions = [
            {
              value:
                appData.appData.screensSettings.preferences.txtThemeHighContrast
            },
            {
              value: appData.appData.screensSettings.preferences.txtThemeDefault
            }
          ];
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
                onLeftPress={value => {
                  console.log('requested: Pref actionbar voice assist!');
                }}
              />
              <View style={stylesData.styles.sharedStyles.contentContainer}>
                <Text style={stylesData.styles.sharedStyles.titleText}>
                  {appData.appData.generaltxtSettings}
                </Text>
                <Text style={stylesData.styles.sharedStyles.instructionsHeader}>
                  {appData.appData.screensSettings.preferences.txtTitle}
                </Text>
                <View style={styles.scalingView}>
                  <CheckBox
                    containerStyle={{ marginTop: 20 }}
                    label={appData.appData.screensSettings.preferences.txtLabelUseLargeFonts}
                    checked={this.state.useLargeFont}
                    onChange={() => { // was: checked => {
                      const stringChecked = !this.state.useLargeFont;
                      SecureStore.setItemAsync(
                        'preferences-useLargeFont',
                        stringChecked.toString()
                      );
                      this.setState({ useLargeFont: !this.state.useLargeFont });
                    }}
                  />
                  <Dropdown
                    containerStyle={{ marginLeft: 30, width: 100 }}
                    label={appData.appData.screensSettings.preferences.txtLabelScalingOptions}
                    data={scalingOptions}
                    value={this.state.scale}
                    onChangeText={value => {
                      SecureStore.setItemAsync(
                        'preferences-scale',
                        value.toString()
                      );
                      this.setState({ scale: value });
                      // console.log('dbg.Pref.scale.val', value);
                      // todo: dropdown onChange should setAppState scalingOption...
                    }}
                  />
                </View>
                <Dropdown
                  containerStyle={{ marginLeft: 30, width: 100 }}
                  label={appData.appData.screensSettings.preferences.txtLanguage}
                  data={Languages}
                  value={this.state.language}
                  onChangeText={value => {
                    Alert.alert(
                      appData.appData.screensSettings.preferences.txtAlertLangchangeTitle,
                      appData.appData.screensSettings.preferences.txtAlertLangchangeText + value,
                      [
                        {
                          text: 'Cancel',
                          onPress: () => {
                            console.log(
                              'dbg.pref.changeLangue: Cancel Pressed'
                            );
                          },
                          style: 'cancel'
                        },
                        {
                          text: 'OK',
                          onPress: () => {
                            console.log('dbg.pref.changeLangue: OK Pressed');
                            // Q? dont I have to set state?
                            SecureStore.setItemAsync(
                              'preferences-language',
                              value.toString()
                            );
                            Util.reload();
                          }
                        }
                      ],
                      { cancelable: true }
                    );
                    //console.log("todo: setAppState scalingOption selected");
                  }}
                />
                <CheckBox
                  containerStyle={{ marginLeft: 20 }}
                  label={appData.appData.screensSettings.preferences.txtLabelTextOnly}
                  checked={this.state.textOnly}
                  onChange={checked => {
                    SecureStore.setItemAsync('preferences-textOnly', checked.toString());
                    this.setState({ textOnly: checked });
                  }}
                />
                <View style={styles.themeView}>
                  <Text style={{ marginTop: 20 }}>{appData.appData.screensSettings.preferences.txtLabelTheme}</Text>
                  <Dropdown
                    containerStyle={{ marginLeft: 30, width: 250 }}
                    label={appData.appData.screensSettings.preferences.txtLabelTheme}
                    data={themeOptions}
                    value={this.state.theme}
                    onChangeText={value => {
                      SecureStore.setItemAsync('preferences-theme', value.toString());
                      this.setState({ theme: value });
                    }}
                  />
                </View>
                <CheckBox
                  containerStyle={{ marginLeft: 20 }}
                  label={appData.appData.screensSettings.preferences.txtLabelShowOutlines}
                  checked={true}
                  onChange={() => { // was checked => {
                    // console.log('dbg.Pref showOutlines changed', checked);
                    let showOutlines = !this.state.outlines;
                    SecureStore.setItemAsync('preferences-outlines', showOutlines.toString());
                    this.setState({ outlines: showOutlines });
                  }}
                />
                <CheckBox
                  containerStyle={{ marginLeft: 20 }}
                  label={appData.appData.screensSettings.preferences.txtLabelNotifications}
                  checked={false}
                  onChange={() => { // was: checked => {
                    let showNotifications = !this.state.notifications;
                    SecureStore.setItemAsync('preferences-notifications', showNotifications.toString());
                    this.setState({ notifications: showNotifications });
                  }}
                />
                <CheckBox
                  containerStyle={{ marginLeft: 20 }}
                  label={appData.appData.screensSettings.preferences.txtLabelAutoLaunch}
                  checked={false}
                  onChange={() => { // was: checked => {
                    let autoLaunch = !this.state.autoLaunch;
                    SecureStore.setItemAsync('preferences-autoLaunch', autoLaunch.toString());
                    this.setState({ autoLaunch: autoLaunch });
                  }}
                />
              </View>
              <View style={stylesData.styles.sharedStyles.bottomNavRow}>
                <Text
                  onPress={() => {
                    navigate('Voice');
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
                    navigate('Profile');
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
  },
  scalingView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  themeView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  }
});
