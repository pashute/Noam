import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
  /* TextInput,  Alert, Button*/
} from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import { Dropdown } from 'react-native-material-dropdown';

const txtAppName = 'Noam';
const txtPreferencesTitle = 'Preferences';
const txtBack = '< Back';
const txtDone = 'Done';
// const txtToPreferences = '4. Preferences';

export default class Preferences extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
      useLargeFont: false,
      scale: '100%',
      theme: 'HighContrast'
    };
  }
  render() {
    let scalingOptions = [
      { value: '100%' },
      { value: '200%' },
      { value: '300%' }
    ];
    let themeOptions = [
      { value: 'High Contrast' },
      { value: 'Android Normal' }
    ];
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ActionBar
          containerStyle={styles.actionBarContainer}
          titleStyle={styles.actionTitle}
          title={txtAppName}
          leftIconName={'location'}
          onLeftPress={() =>
            console.log('requested: Pref actionbar voice assist!')
          }
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{txtSettingsText}</Text>
          <Text style={styles.instructionsHeader}>{txtPreferencesTitle}</Text>
          <View style={styles.scalingView}>
            <CheckBox
              containerStyle={{ marginTop: 20 }}
              label="Use large fonts"
              checked={true}
              onChange={checked =>
                console.log('todo: setAppState useLargeFonts true', checked)
              }
            />
            <Dropdown
              containerStyle={{ marginLeft: 30, width: 100 }}
              label="Scaling options"
              data={scalingOptions}
              onValueChange={console.log(
                'todo: setAppState scalingOption selected'
              )}
            />
            {/* todo: dropdown onChange should setAppState scalingOption... */}
          </View>
          <CheckBox
            containerStyle={{ marginLeft: 20 }}
            label="Text only(no icons)"
            checked={true}
            onChange={checked =>
              console.log('todo: setAppState checked', checked)
            }
          />
          <View style={styles.themeView}>
            <Text style={{ marginTop: 20 }}>Theme</Text>
            <Dropdown
              containerStyle={{ marginLeft: 30, width: 250 }}
              label="Theme"
              data={this.themeOptions}
            />
          </View>
          <CheckBox
            containerStyle={{ marginLeft: 20 }}
            label="Show outlines"
            checked={true}
            onChange={checked => console.log('I am checked', checked)}
          />
          <CheckBox
            containerStyle={{ marginLeft: 20 }}
            label="Notifications on"
            checked={false}
            onChange={checked => console.log('Notifications set ', checked)}
          />
          <CheckBox
            containerStyle={{ marginLeft: 20 }}
            label="Automatic launch near location"
            checked={false}
            onChange={checked =>
              console.log('Auto launch near location ', checked)
            }
          />
        </View>
        <View style={styles.bottomNavRow}>
          <Text onPress={() => navigate('Voice')} style={styles.navButton}>
            {txtBack}
          </Text>
          <Text onPress={() => navigate('SetHome')} style={styles.navButton}>
            {txtTOC}
          </Text>
          <Text onPress={() => navigate('Profile')} style={styles.navButton}>
            {txtNext}
          </Text>
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
