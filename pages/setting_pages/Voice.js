import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Switch,
  Alert /* , Button */
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
const txtNext = 'Next >';

const txtOn = 'on';
const txtOff = 'off';

const txtTitleVoice = '3. Voice Assistant';
const txtAssistantIs = 'Voice assistant is currently set ';
const txtAssistantTurn = 'Turn voice assistant ';

const txtChooseVoice = 'Choose voice';
const txtVoiceMale = 'Male  ';
const txtVoiceFemale = 'Female';

const txtInstrcutionsVoiceAssist = [
  'If you trun this option on\n',
  'you can talk freely with the app\n',
  'Just say Hey Noam!\n',
  'and ask about this place in your own words.'
];

// todo data: make this dynamic
const radioVoiceOptions = [
  { label: txtVoiceMale, value: 0 },
  { label: txtVoiceFemale, value: 1 }
];

export default class Voice extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      voiceAssistOn: false,
      voiceChoice: 0
    };
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
          <Text style={styles.instructionsHeader}>{txtTitleVoice}</Text>
          <View style={styles.insturctionsView}>
            <Text style={styles.instructions}>
              {txtInstrcutionsVoiceAssist}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.instructions}>
                {txtAssistantIs}
                {':'}
              </Text>
              <Switch
                value={false}
                onValueChange={Alert.alert(
                  'Personal voice assist soon to be available'
                )}
                disabled={true}
                activeText={txtOn}
                inActiveText={txtOff}
                circleSize={30}
                barHeight={1}
                circleBorderWidth={3}
                backgroundActive={'#181818'}
                backgroundInactive={'#898989'}
                circleActiveColor={'#232323'}
                circleInactiveColor={'#575757'}
              />
            </View>
            <Text style={styles.instructions}>{txtChooseVoice}</Text>
            <RadioForm
              style={{ marginLeft: 25 }}
              radio_props={radioVoiceOptions}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#131313'}
              buttonSize={5}
              selectedButtonColor={'#131313'}
              animation={true}
              onPress={value => {
                this.setState({ voiceChoice: value });
              }}
            />
            <View style={{ marginBottom: 25 }} />
          </View>
          <View style={styles.bottomNavRow}>
            <Text
              onPress={() => navigate('AutoUpdate')}
              style={styles.navButton}
            >
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
