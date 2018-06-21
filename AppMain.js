/* cSpell:disable */

import React from 'react';
import {
  View, 
  AsyncStorage,
  I18nManager /* , DeviceEventEmitter, StyleSheet, Platform, Text, Alert */
} from 'react-native';

import { NavigationActions, StackNavigator } from 'react-navigation';

// import { ButtonGroup } from 'react-native-elements';
// import ObjectPath from 'object-path';

import { YellowBox } from 'react-native';

import Splash from './pages/Splash';
import MainPage from './pages/MainPage';
import AutoUpdate from './pages/setting_pages/AutoUpdate';
import Calibrate from './pages/setting_pages/Calibrate';
import Preferences from './pages/setting_pages/Preferences';
import Profile from './pages/setting_pages/Profile';
import Settings from './pages/setting_pages/Settings';
import Voice from './pages/setting_pages/Voice';
import Help from './pages/Help';
import HelpFirstTime from './pages/HelpFirstTime';
import { getLanguage, getLanguageCode } from './data';

// import Kontakt from 'react-native-kontaktio';
// const { connect, startScanning } = Kontakt;

/*
This contex contains: appData.json, placesData.json and stylesData.json
of the current language (by default is en)
*/
export const languageDataCtx = React.createContext(getLanguage('en'));

I18nManager.allowRTL(true);

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated'
]);

const Nav = StackNavigator({
  HelpFirstTime: {
    screen: HelpFirstTime,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  SplashPage: {
    screen: Splash,
    navigationOptions: {
      headermode: 'screen',
      header: null
    }
  },
  MainPage: {
    screen: MainPage,
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
  Preferences: {
    screen: Preferences,
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
  Settings: {
    screen: Settings,
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

export default class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.checkNav = this.checkNav.bind(this);
    this.state = {
      isRTL: false, // I18nManager.isRTL,
      fontLoaded: false,
      data: {},
      currentLanguage: 'en',
      pointingTo: 'not set',
      heading: {}
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('preferences-language').then(value => {
      if (value !== null) {
        this.setState({ language: getLanguageCode(value) });
      }
    });

    // // see: https://www.npmjs.com/package/react-native-kontaktio
    // // kontakt io for android...
    // connect()
    //   .then(() => startScanning())
    //   .catch(error => console.log('error', error));

    //   DeviceEventEmitter.addListener(
    //     'beaconsDidUpdate',
    //     ({ beacons, region }) => {
    //       console.log('beaconsDidUpdate', beacons, region);
    //     }
    // );

    // right to left
    I18nManager.forceRTL(false);
    this.setState({ isRTL: false });
    this.setState({ fontLoaded: true });
  }

  // onCompassUpdate = pointingTo => this.setState({ pointingTo });

  // setNoamColor = color => {
  //   let newState = { ...this.state };
  //   ObjectPath.set(newState, 'styles.welcomeStyles.welcomeColor', color);
  //   this.setState(newState);
  // };

  checkNav() {
    const prevGetStateForAction = Nav.router.getStateForAction;

    Nav.router.getStateForAction = (action, state) => {
      // console.log('dbg.checkNav action:', action);
      // console.log('dbg.checkNav state:', state);
      if (state !== undefined && action.type === 'Navigation/NAVIGATE') {
        const screenToGo = action.routeName;
        let navigateTo = action;
        let prevScreen = 'none';
        let currentScreen = 'none';

        const currentRoutes = state.routes;
        if (currentRoutes.length > 1) {
          prevScreen = currentRoutes[currentRoutes.length - 2].routeName;
        }
        if (currentRoutes.length > 0) {
          currentScreen = currentRoutes[currentRoutes.length - 1].routeName;
        }

        // console.log('dbg.prevScreen:', prevScreen);
        // console.log('dbg.curScreen:', currentScreen);
        // console.log('dbg.screenToGo', screenToGo);
        // return prevGetStateForAction(action, state);

        if (currentScreen === screenToGo) {
          // x return null;
        }
        if (prevScreen === screenToGo) {
          navigateTo = NavigationActions.back();
        }
        return prevGetStateForAction(navigateTo, state);
      } else {
        return null;
      }
    };
  }

  render() {
    if (!this.state.fontLoaded) {
      return <View />;
    }

    // return (
    //   <Nav
    //     screenProps={{
    //       setWelcomeColor: this.setWelcomeColor,
    //       welcomeColor: this.state.styles.welcomeStyles.welcomeColor
    //     }}
    //   />
    // );
    return (
      <languageDataCtx.Provider
        value={getLanguage(this.state.currentLanguage).data}
      >
        <Nav
          screenProps={{
            checkNav: this.checkNav,
            pointingTo: this.state.pointingTo,
            heading: this.state.heading,
            noamColor:
              this.state.data && this.state.data.styles
                ? this.state.data.styles.stylesSplash.noamColor
                : '#FF0000'
          }}
        />
      </languageDataCtx.Provider>
    );
  }
}
