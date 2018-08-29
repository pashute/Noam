import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
// import { connect } from 'react-redux';
import ActionBar from 'react-native-action-bar';
import { Button } from 'react-native';

export default class HelpFirstTime extends Component {
  //<{}> {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('helpfirsttime-firstTime').then(value => {
      console.log('helpfirsttime:', value);
      if (value === 'true') {
        const { replace } = this.props.navigation;
        replace('SplashPage');
      } else {
        AsyncStorage.setItem('helpfirsttime-firstTime', 'true');
      }
    });
  }

  render() {
    const { replace } = this.props.navigation;
    // const { placesData, stylesData, appData } = this.props.currentLanguage;
    // console.log("dbg.help1stTime.styles ", stylesData);
 return (
      <View style={styles.container}>
        <ActionBar
          containerStyle={styles.bar}
          titleStyle={styles.title}
          title={'Noam'}
          leftIconName={'location'}
          onLeftPress={() => console.log('dbg.help1stTm.actionbar requested Voice-Assist')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.instructionsHeader}>
            app 1st time header
          </Text>
          <View style={styles.instructionsView}>
            <Text style={styles.instructions}>
              "First time msg line 1\nFirst time msg line 2\nFirst time msg line 3\nFirst time msg etc etc"
            </Text>
          </View>

          <View style={styles.buttonDecorator}>
            <Button
              onPress={() => {
                replace('SplashPage');
              }}
              title={'Continue to app'}
              color="#111111"
              accessibilityLabel={'Tap on Me to '}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    flex: 16
  },
  welcome: {
    fontSize: 35,
    color: '#6600ff'
  },
  instructionsHeader: {
    marginTop: 10,
    textAlign: "left",
    color: "#333333",
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 25,
    marginRight: 25
  },
  instructionsView: {
    flex: 1,
    flexDirection: "column"
  },

  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20,
    fontStyle: 'normal'
  },
  assistant: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonDecorator: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    margin: 10
  }
});
