import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch
  /* Alert, Button */
} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
import RadioForm from 'react-native-simple-radio-button';
/* RadioButton,
  RadioButtonInput,
  RadioButtonLabel */
import Bottom from '../tab_pages/Bottom.js';

const txtAppName = 'Noam';
const txtSettingsText = 'Settings';
const txtBack = '< Back';
const txtTOC = 'TOC';
// const txtNext = 'Next >';
const txtDone = 'Done';
const txtOn = 'on';
const txtOff = 'off';

const txtTitlePreferences = '5. Profile';
const txtChooseStyle = 'Choose style';
// const txtVoiceMale = 'Male';
// const txtVoiceFemale = 'Female';

const txtInstrcutionsProfile = [
  'Optionally you can save a username and password.'
];

// todo data: make this dynamic
const radioVoiceOptions = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 }
];

export default class Profile extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ActionBar
          containerStyle={styles.actionBarContainer}
          titleStyle={styles.actionTitle}
          title={txtAppName}
          leftIconName={'location'}
          onLeftPress={() => console.log('Left!')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{txtSettingsText}</Text>
          <Text style={styles.instructionsHeader}>{txtTitlePreferences}</Text>
          <View style={styles.insturctionsView}>
            <Text style={styles.instructions}>{txtInstrcutionsProfile}</Text>
            <View style={styles.inputsView}>
              <TextInput
                style={{ height: 40 }}
                placeholder="Username"
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                style={{ height: 40 }}
                placeholder="email"
                onChangeText={text => this.setState({ text })}
              />
            </View>
          </View>
          <View style={styles.bottomNavRow}>
            <Text
              onPress={() => navigate('Preferences')}
              style={styles.navButton}
            >
              {txtBack}
            </Text>
            <Text onPress={() => navigate('SetHome')} style={styles.navButton}>
              {txtTOC}
            </Text>
            <Text onPress={() => navigate('MainPage')} style={styles.navButton}>
              {txtDone}
            </Text>
          </View>
          <View style={styles.bottomRow}>
            <Bottom />
          </View>
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
    flex: 16
  },
  titleText: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  instructionsHeader: {
    marginTop: 10,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '400',
    marginLeft: 25,
    marginRight: 25
  },
  instructionsView: {
    flex: 1,
    flexDirection: 'column'
  },
  instructions: {
    marginTop: 25,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 25,
    marginRight: 25
  },
  inputsView: {
    marginLeft: 35,
    marginRight: 35
  },
  buttonContainer: {
    backgroundColor: '#444444',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#454545',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    marginRight: 60,
    marginLeft: 60
  },
  bottomNavRow: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
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
