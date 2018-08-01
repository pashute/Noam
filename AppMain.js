/* cSpell:disable */

import React from 'react';
import {
  AsyncStorage,
  View,
  DeviceEventEmitter,
  Alert,
  I18nManager,
  Platform,
  NativeEventEmitter /* , DeviceEventEmitter, StyleSheet,  Text, View, Alert */
} from 'react-native';

import { connect as reduxConnect } from 'react-redux';
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

import {
  setCurrentLanguage,
  setCurrentPlace,
  setCurrentBeacon
} from './redux/actions';

import Kontakt, { KontaktModule } from 'react-native-kontaktio';
const { init, startDiscovery } = Kontakt; // for ios
const kontaktEmitter = new NativeEventEmitter(KontaktModule); // for ios

/*
// const { //   init,//   configure,//   requestAlwaysAuthorization,//   disconnect,//   startScanning,//   setBeaconRegions,//   setEddystoneNamespace,
//   IBEACON,//   EDDYSTONE,//   // Configurations//   scanMode,//   scanPeriod,//   activityCheckConfiguration,//   forceScanConfiguration,//   monitoringEnabled,
//   monitoringSyncInterval// } = Kontakt;
*/

/*
This contex contains: appData.json, placesData.json and stylesData.json
of the current language (by default is en)
*/

I18nManager.allowRTL(false);

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

class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.checkNav = this.checkNav.bind(this);
    this.setKontaktIo = this.setKontaktIo.bind(this);
    this.state = {
      isRTL: false, // I18nManager.isRTL,
      fontLoaded: false,
      data: {},
      currentLanguage: 'en',
      pointingTo: 'not set',
      heading: {},
      scanning: false
    };
  }

  setKontaktIo() {
    // const regionKontakt = {
    //   identifier: 'Noam Kontakt Beacons',
    //   uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e'
    //   // major: 1  no major, all majors will be detected
    //   // no minor provided: will detect all minors
    // };

    // // connect with api key (not necessary)
    // connect(
    //   'CJPwKLLQewygcKuzAIcOTDQbwVfDsiru',
    //   [IBEACON, EDDYSTONE]
    // )
    console.log('initializing ios beacon discovery');
    init()
      .then(() => startDiscovery())
      .catch(error => console.log('AppMain.IOS.StartDiscover.error:', error));

    // Beacon listeners
    kontaktEmitter.addListener('didDiscoverDevices', ({ beacons }) => {
      console.log('ios.didDiscoverDevices', beacons);
      if (
        beacons != null &&
        beacons.length > 0 &&
        this.props.currentBeacon.beaconID !== beacons[0].uniqueId
      ) {
        const tempBeacon = this.props.currentPlace.xsnearby.find(beacon => {
          beacon.beacon.beaconID === beacons[0].uniqueId;
        });
        if (tempBeacon !== undefined && tempBeacon !== null) {
          console.log('setting currentBeacon to found point in data');
          this.props.setCurrentBeacon(tempBeacon.beacon);
        }
      }
    });
    // DeviceEventEmitter.addListener(
    //         'beaconDidDisappear',
    //   ({ beacon: lostBeacon, region }) => {
    //     console.log('beaconDidDisappear', lostBeacon, region);
    //     if (this.props.currentBeacon.beaconID === lostBeacon.uniqueId) {
    //       Alert.alert(
    //         'Beacon Disappear',
    //         'You left: ' + this.props.currentBeacon.msg,
    //         [{ text: 'OK' }],
    //         { cancelable: true }
    //       );
    //     }
    //   }
    // );
  }

  // startKontaktIoScan = () => {
  //   console.log('startKontaktIoScan called');
  //   startScanning()
  //     .then(() => console.log('started scanning'))
  //     .catch(error => console.log('[startScanning] error:\n', error));
  // };

  componentDidMount() {
    AsyncStorage.getItem('preferences-language').then(value => {
      if (value !== null) {
        const savedLanguage = getLanguage('value').data;
        this.setState({ language: savedLanguage });
        const { placesData } = savedLanguage;
        console.log('dbg.AppMain.savedLanguage: ', savedLanguage);
        this.props.setCurrentLanguage(savedLanguage);
        // console.log('dbg.AppMain.placesData: ', placesData);
        this.props.setCurrentPlace(placesData.places[0].place);
      } else {
        const tempLanguage = getLanguage('en').data;
        const { placesData } = tempLanguage;
        console.log('dbg.AppMain.tempLanguage: ', tempLanguage);
        this.props.setCurrentLanguage(tempLanguage);
        // console.log('dbg.AppMain.placesData: ', placesData);
        this.props.setCurrentPlace(placesData.places[0].place);
      }
    });

    this.setKontaktIo();
    // this.startKontaktIoScan();

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

  componentWillUnmount() {
    // Disconnect beaconManager and set to it to null
    // disconnect();
    NativeEventEmitter.removeAllListeners();
  }

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
    );
  }
}
const mapStateToProps = ({ data }) => {
  const { currentBeacon, currentPlace } = data;
  console.log('dbg.mapStateToProps currentBeacon:', currentBeacon);
  return { currentBeacon, currentPlace };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLanguage: languages => {
      dispatch(setCurrentLanguage(languages));
    },
    setCurrentPlace: place => {
      dispatch(setCurrentPlace(place));
    },
    setCurrentBeacon: beacon => {
      dispatch(setCurrentBeacon(beacon));
    }
  };
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppMain);
