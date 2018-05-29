import React, { Component } from 'react';
import { /* Platform, */ StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
const str_back = '< Back';
const str_toc = 'TOC';
const str_next = 'Next >';
const str_title = '2.Auto Updating by pointing';
const str_description1 =
  'If you turn this option\n' +
  'the lists and instructions will\n' +
  'automatically change as you\n' +
  'change your direction';
const str_description2 =
  'To refresh the list of manually\n' +
  'point the top of phone in\n' +
  'the direction you want\n' +
  'instructions for and press the\n' +
  'This WAT Tab';
const str_status = 'Auto-update is currently OFF';
const str_on = 'Turn auto-update on';

export default class AutoUpdate extends Component<{}> {
  constructor(props) {
    super(props);
  }

  _turnOnAutoUpdate() {
    Alert.alert('TOC');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} onPress={this._onPressMainPage}>
        <ActionBar
          containerStyle={styles.bar}
          titleStyle={styles.title}
          title={'Noam'}
          leftIconName={'location'}
          onLeftPress={() => console.log('Left!')}
        />

        <Text style={styles.assistant}>Settings</Text>
        <Text style={styles.instructions}>{str_title}</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'column'
          }}
        >
          <Text style={styles.describe}>{str_description1}</Text>
          <Text style={styles.describe}>{str_description2}</Text>
          <Text style={styles.describe}>{str_status}</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._turnOnAutoUpdate}
              title={str_on}
              color="#FFFFFF"
              accessibilityLabel="Tap on Me"
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text onPress={() => navigate('Calibrate')} style={styles.navbtn}>
            {str_back}
          </Text>
          <Text onPress={() => navigate('MainPage')} style={styles.navbtn}>
            {str_toc}
          </Text>
          <Text onPress={() => navigate('Personal')} style={styles.navbtn}>
            {str_next}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF'
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

  navbtn: {
    marginTop: 150,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 25,
    marginRight: 25
  },
  describe: {
    marginTop: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 20
  },
  assistant: {
    fontSize: 30,
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
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    marginRight: 60,
    marginLeft: 60
  }
});
