import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
  /*   Alert, */
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import { Dropdown } from 'react-native-material-dropdown';

txtProfilePageTitle = 'Profile';
const txtBack = '< Back';
const txtDone = 'Done';
const txtNextToPref = '4. Preferences';

export default class Profile extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
      font: 'Theme In Development',
      scale: 'Scaling In development'
    };
  }

  render() {
    let data = [
      {
        value: '100%'
      },
      {
        value: '200%'
      },
      {
        value: '300%'
      }
    ];
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          titleStyle={styles.title}
          title={'Noam'}
          leftIconName={'location'}
          onLeftPress={() => console.log('Left!')}
        />

        <Text style={styles.assistant}>Settings</Text>
        <Text style={styles.instructions}>{str_title}</Text>
        <View style={{ marginLeft: 200 }}>
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20
          }}
        >
          <CheckBox
            containerStyle={{ marginTop: 20 }}
            label="Large fonts"
            checked={true}
            onChange={checked => console.log('I am checked', checked)}
          />
          <Dropdown
            containerStyle={{ marginLeft: 30, width: 100 }}
            label="Large font"
            data={data}
          />
        </View>
        <CheckBox
          containerStyle={{ marginLeft: 20 }}
          label="Text only(no icons)"
          checked={true}
          onChange={checked => console.log('I am checked', checked)}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20
          }}
        >
          <Text style style={{ marginTop: 20 }}>
            Theme
          </Text>
          <Dropdown
            containerStyle={{ marginLeft: 30, width: 250 }}
            label="High contrast BW"
            data={data}
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
          onChange={checked => console.log('I am checked', checked)}
        />
        <CheckBox
          containerStyle={{ marginLeft: 20 }}
          label="Automatic launch near location"
          checked={false}
          onChange={checked => console.log('I am checked', checked)}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text onPress={() => navigate('Personal')} style={styles.navbtn}>
            {txtBack}
          </Text>

          <Text onPress={() => navigate('MainPage')} style={styles.navbtn}>
            {txtDone}
          </Text>
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
    flex: 18
  },
  titleText: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  navbtn: {
    marginTop: 35,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 25,
    marginRight: 25
  },
  instructions: {
    marginTop: 25,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 25,
    marginRight: 25
  },
  assistant: {
    fontSize: 24,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
  }
});
