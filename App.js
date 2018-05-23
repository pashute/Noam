/* cSpell:disable */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';

//x import { TabNavigator } from 'react-navigation'; // 1.5.11
import { StackNavigator } from 'react-navigation';

import { ButtonGroup } from 'react-native-elements';
import ObjectPath from 'object-path';
import '@expo/vector-icons';
import { Constants, AppLoading } from 'expo';

import { YellowBox } from 'react-native';

import Splash from './pages/Splash';
import Main from './pages/Main';
import Tab from './pages/Tab';
import AutoUpdate from './pages/setting_pages/AutoUpdate';
import Calibrate from './pages/setting_pages/Calibrate';
import Personal from './pages/setting_pages/Personal';
import Profile from './pages/setting_pages/Profile';
import SetHome from './pages/setting_pages/SetHome';
import Voice from './pages/setting_pages/Voice';
import Help from './pages/Help';

//import placesData from "./data/placesData.json";
//import settingsData from "./data/settingsData.json";
//import stylesData from "./data/stylesData.json";

const data = {
  styles: {
    stylesSplash: {
      noamColor: '6600FF',
      noamFont: 'TBD'
    }
  }
};

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated'
]);

const Nav = StackNavigator({
  SplashPage: {
    screen: Splash,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  MainPage: {
    screen: Main,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  TabPage: {
    screen: Tab,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },

  AutoUpdate: {
    screen: AutoUpdate,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  Calibrate: {
    screen: Calibrate,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  Personal: {
    screen: Personal,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  SetHome: {
    screen: SetHome,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },

  Voice: {
    screen: Voice,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      pointingTo: 'North West'
    };
  }

  // onCompassUpdate = pointingTo => this.setState({ pointingTo });

  setNoamColor = color => {
    let newState = { ...this.state };
    ObjectPath.set(newState, 'styles.welcomeStyles.welcomeColor', color);
    this.setState(newState);
  };

  render() {
    // return (
    //   <Nav
    //     screenProps={{
    //       setWelcomeColor: this.setWelcomeColor,
    //       welcomeColor: this.state.styles.welcomeStyles.welcomeColor
    //     }}
    //   />
    // );
    return (
      <Nav
        screenProps={{
          pointingTo: this.state.pointingTo,
          noamColor:
            this.state.data && this.state.data.styles
              ? this.state.data.styles.stylesSplash.noamColor
              : '#FF0000'
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
