/* cSpell:disable */

//#region imports
import React from "react";
import {
  AsyncStorage,
  View,
  DeviceEventEmitter,
  Alert,
  I18nManager,
  Platform /* StyleSheet,  Text, View, Alert */
} from "react-native";
import PropTypes from "prop-types";
import { connect as reduxConnect } from "react-redux";
import { NavigationActions, StackNavigator } from "react-navigation";

// import { ButtonGroup } from 'react-native-elements';
// import ObjectPath from 'object-path';

import { YellowBox } from "react-native";

import Splash from "./pages/Splash";
import MainPage from "./pages/MainPage";
import AutoUpdate from "./pages/setting_pages/AutoUpdate";
import Calibrate from "./pages/setting_pages/Calibrate";
import Preferences from "./pages/setting_pages/Preferences";
import Profile from "./pages/setting_pages/Profile";
import Settings from "./pages/setting_pages/Settings";
import Voice from "./pages/setting_pages/Voice";
import Help from "./pages/Help";
import HelpFirstTime from "./pages/HelpFirstTime";
import { getLanguage, getLanguageCode } from "./data";

import {
  setAllBeaconsPlacesRelation,
  setCurrentPlacesData,
  setCurrentLanguage,
  setCurrentPlace,
  setCurrentBeacon,
  setIsInMainPage
} from "./redux/actions";

import Kontakt from "react-native-kontaktio";
const {
  connect,
  configure,
  disconnect,
  startScanning,
  setBeaconRegions,
  setEddystoneNamespace,
  IBEACON,
  EDDYSTONE,
  // Configurations
  scanMode,
  scanPeriod,
  activityCheckConfiguration,
  forceScanConfiguration,
  monitoringEnabled,
  monitoringSyncInterval
} = Kontakt;

// import HockeyApp from 'react-native-hockeyapp';
//#endregion imports

//#region setup
I18nManager.allowRTL(false);

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated"
]);

const HOCKEY_APP_ID = "4d90883bb99743b4967fc2de72ef170c"; // as defined in manifest placeholder

const Nav = StackNavigator({
  HelpFirstTime: {
    screen: HelpFirstTime,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  SplashPage: {
    screen: Splash,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  AutoUpdate: {
    screen: AutoUpdate,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Calibrate: {
    screen: Calibrate,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Preferences: {
    screen: Preferences,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Voice: {
    screen: Voice,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  }
});
//#endregion setup
class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.checkNav = this.checkNav.bind(this);
    this.setKontaktIo = this.setKontaktIo.bind(this);
    this.lostBeacon = this.lostBeacon.bind(this);
    this.checkNewBeacon = this.checkNewBeacon.bind(this);
    this.checkSavedData = this.checkSavedData.bind(this);
    this.checkServerData = this.checkServerData.bind(this);
    this.checkSavedLanguage = this.checkSavedLanguage.bind(this);
    this.state = {
      isRTL: false, // I18nManager.isRTL,
      fontLoaded: false,
      data: {},
      currentLanguage: "en",
      pointingTo: "not set",
      heading: {},
      scanning: false,
      inMainPage: false
    };
    // hockeyapp
    // moved from componentWillMount and hope this works
    // HockeyApp.configure(HOCKEY_APP_ID, true);
  }

  /*
    kontakt uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e'
    No.	ID	Model	Battery	Location	TX Power	Major	Minor	
    1.	V36R (Kontakt)	67%		3	55462	32576	EDIT
    2.	V7fs (Kontakt)	66%		3	23922	38338	EDIT
    3.	WNeD (Kontakt)	71%		3	57356	52537	EDIT
    4.	Z055 (Kontakt)	94%		3	38979	49687	EDIT
    5.	uWWf (Kontakt)	71%		3	28999	64381	EDIT
  */
  setKontaktIo() {
    const regionKontakt = {
      identifier: "Noam Kontakt Beacons",
      uuid: "f7826da6-4fa2-4e98-8024-bc5b71e0893e"
      // major: 1  no major, all majors will be detected
      // no minor provided: will detect all minors
    };

    const noamKontaktApiKey = "CJPwKLLQewygcKuzAIcOTDQbwVfDsiru";

    connect(
      noamKontaktApiKey,
      [IBEACON, EDDYSTONE]
    )
      .then(() =>
        configure({
          scanMode: scanMode.BALANCED,
          scanPeriod: scanPeriod.create({
            activePeriod: 6000,
            passivePeriod: 20000
          }),
          activityCheckConfiguration: activityCheckConfiguration.DEFAULT,
          forceScanConfiguration: forceScanConfiguration.MINIMAL,
          monitoringEnabled: monitoringEnabled.TRUE,
          monitoringSyncInterval: monitoringSyncInterval.DEFAULT
        })
      )
      .then(() => setBeaconRegions([regionKontakt]))
      .then(() => setEddystoneNamespace())
      .then(() => {
        // console.log('dbg.appmain scanning start');
        return startScanning();
      })
      .catch(error => console.log("appmain.Andr.kontakt error: \n", error));

    // Beacon listeners
    DeviceEventEmitter.addListener(
      "beaconDidAppear",
      ({ beacon: newBeacon, region }) => {
        console.log("dbg.Appmain.beaconDidAppear detected", newBeacon);
        console.log(
          "dbg.Appmain.bcnDid propsBcnRel",
          this.props.beaconPlaceRelation
        );
        console.log("dbg.Appmain.bcnDid curbcn", this.props.currentBeacon);
        this.checkNewBeacon(newBeacon);
      }
    );
    DeviceEventEmitter.addListener(
      "beaconDidDisappear",
      ({ beacon: lostBeacon, region }) => {
        console.log("beaconDidDisappear", lostBeacon, region);
        this.lostBeacon(lostBeacon);
      }
    );
  }

  lostBeacon(lostBeacon) {
    if (this.props.currentBeacon.major === lostBeacon.major) {
      Alert.alert(
        "Leaving point",
        "You have left " + this.props.currentBeacon.fullName,
        [{ text: "OK" }],
        { cancelable: true }
      );
    }
  }

  checkNewBeacon(newBeacon) {
    console.log("dbg.Appmain.checkNewBeacon ", newBeacon);
    if (
      this.props.currentBeacon === {} ||
      this.props.currentBeacon.ktid !== newBeacon.uniqueId
    ) {
      // console.log('dbg.Appmain.bcnDid bcnPlcFind');
      const tempBeaconRelation = this.props.beaconPlaceRelation.find(
        beaconRelation => {
          return beaconRelation.major === newBeacon.major;
          // newBeacon: uniqueId: "uWWf",major,minor, uuid: f7826da6-4fa2-4e98-8024-bc5b71e0893e
        }
      );
      // console.log('dbg.Appmain.bcnDid tempbcnRel', tempBeaconRelation);
      if (tempBeaconRelation !== undefined && tempBeaconRelation !== null) {
        let finalBeacon = undefined;
        let finalPlace = undefined;
        // console.log('dbg.appmain.bcnDid finding point in', this.props.currentPlacesData);
        const currentPlace = this.props.currentPlacesData.places.find(place => {
          return place.place.id === tempBeaconRelation.placeId;
        });
        if (currentPlace !== undefined && currentPlace !== null) {
          finalPlace = currentPlace.place;
          if (finalPlace !== undefined && finalPlace !== null) {
            const tempBeacon = finalPlace.nearby.find(beacon => {
              // console.log('dbg.Appmain.bcnDid.bcnPoint bcn.bcn', beacon.beacon);
              return beacon.beacon.ktid === tempBeaconRelation.ktid;
            });
            // console.log('dbg.Appmain.bcnDid.beaconPoint tempBeacon', tempBeacon);
            if (tempBeacon !== undefined && tempBeacon !== null) {
              finalBeacon = tempBeacon.beacon;
              // console.log('dbg.AppMain.bcnDid finalbcn', finalBeacon);
              if (this.props.currentPlace.id !== tempBeaconRelation.placeId) {
                this.props.setCurrentPlace(finalPlace);
              }
              this.props.setCurrentBeacon(finalBeacon);
              // console.log(`new beacon ${finalBeacon.fullName}`);
              if (this.props.isInMainPage === true)
                Alert.alert(
                  "New point reached",
                  `You are at ${finalBeacon.fullName} in ${
                    finalPlace.fullName
                  }`,
                  [{ text: "OK" }],
                  { cancelable: true }
                );
            }
          }
        }
      }
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("preferences-language")
      .then(value => {
        console.log("success.AppMain.componentDidMount", value);
        let selectedValue = value == null ? "en" : value;
        this.checkSavedData(selectedValue);
      })
      .catch(error => {
        console.log("error.AppMain.scanPlaceAndPoint", error);
      });

    // HockeyApp.start();
    // HockeyApp.checkForUpdate(); optional
    // right to left
    I18nManager.forceRTL(false);
    this.setState({ isRTL: false });
    this.setState({ fontLoaded: true });
  }

  checkServerData(languageCode) {
    const GitHubUrl =
      "https://raw.githubusercontent.com/omarvgdev/noamjsons/master/" +
      languageCode.toUpperCase() +
      "/";

    console.log("success.AppMain.checkServerData.URL", GitHubUrl);
    AsyncStorage.getItem(languageCode + "_languageversion")
      .then(value => {
        return fetch(GitHubUrl + "index.json")
          .then(reponseVersion => reponseVersion.json())
          .then(reponseVersionJSON => {
            console.log(
              "success.AppMain.checkServerData.fetchVersion",
              reponseVersionJSON
            );
            if (value === null || value < reponseVersionJSON.version) {
              return fetch(GitHubUrl + "appData.json")
                .then(responseApp => responseApp.json())
                .then(responseAppJSON => {
                  console.log(
                    "success.AppMain.checkServerData.fetchApp",
                    responseAppJSON
                  );
                  return fetch(GitHubUrl + "placesData.json")
                    .then(responsePlaces => responsePlaces.json())
                    .then(responsePlacesJSON => {
                      console.log(
                        "success.AppMain.checkServerData.fetchPlaces",
                        responsePlacesJSON
                      );
                      return fetch(GitHubUrl + "stylesData.json")
                        .then(responseStyles => responseStyles.json())
                        .then(responseStylesJSON => {
                          console.log(
                            "success.AppMain.checkServerData.fetchStyles",
                            responseStylesJSON
                          );
                          const fromServer = {
                            appData: responseAppJSON,
                            placesData: responsePlacesJSON,
                            stylesData: responseStylesJSON
                          };
                          console.log(
                            "success.AppMain.checkServerData.finalFetch",
                            fromServer
                          );
                          this.checkSavedLanguage(languageCode, fromServer);
                          AsyncStorage.setItem(
                            languageCode + "_languageversion",
                            reponseVersionJSON.version
                          );
                        })
                        .catch(error => {
                          console.error(error);
                        });
                    })
                    .catch(error => {
                      console.error(error);
                    });
                })
                .catch(error => {
                  console.error(error);
                });
            }
          })
          .catch(error => {
            console.error(error);
          });
        //Check Saved Version
        /*
        api.GetVersionFor(languageCode).then(response => {
          //Compare versions
          if(value === null || value < response){
            api.GetLanguage(languageCode).then(response => {
              //Check the language from server
              this.checkSavedLanguage(languageCode, response.data);
              //Save the new Version
               AsyncStorage.setItem(languageCode + "_languageversion", response.version)
            })
          }
        })
        */
      })
      .catch(error => {
        console.log("error.AppMain.checkServerData", error);
      });
  }

  checkSavedData(languageCode) {
    //Check Version
    AsyncStorage.getItem(languageCode + "_languagedata")
      .then(value => {
        console.log("success.AppMain.checkSavedData", value);
        //Check Server no matter what
        this.checkServerData(languageCode);
        //Local Data
        let savedLanguage = getLanguage(languageCode).data;
        if (value !== null) {
          //Saved stringify Data
          savedLanguage = JSON.parse(value);
        }
        this.checkSavedLanguage(languageCode, savedLanguage);
      })
      .catch(error => {
        console.log("error.AppMain.checkSavedData", error);
      });
  }

  checkSavedLanguage(languageCode, savedLanguage) {
    console.log("success.AppMain.checkSavedLanguage", languageCode);
    console.log("success.AppMain.checkSavedLanguage", savedLanguage);
    let places = [];
    this.setState({ language: savedLanguage });
    const { placesData } = savedLanguage;
    places = placesData.places;
    // console.log('dbg.AppMain.savedLanguage: ', savedLanguage);
    this.props.setCurrentLanguage(savedLanguage);
    this.props.setCurrentPlacesData(placesData);
    this.props.setCurrentPlace(places[0].place);

    const finalBeaconRelation = [];
    for (let i = 0; i < places.length; i++) {
      let tempPlace = places[i];
      // console.log('dbg.appmain.finalBcnRel tempPlace i', tempPlace, i);
      let nearbyBeacons = tempPlace.place.nearby;
      for (let b = 0; b < nearbyBeacons.length; b++) {
        let tempBeacon = nearbyBeacons[b];
        if (tempBeacon.beacon !== undefined) {
          // console.log('dbg.appmain.bcnDid nrby tempBeacon', tempBeacon);
          const tempRelation = {
            ktid: tempBeacon.beacon.ktid,
            major: tempBeacon.beacon.major,
            placeId: tempPlace.place.id
          };
          finalBeaconRelation.push(tempRelation);
        }
      }
    }
    console.log("dbg.appmain.finalBcnRel finalbcnrel", finalBeaconRelation);
    this.props.setAllBeaconsPlacesRelation(finalBeaconRelation);
    this.setKontaktIo();
    /*
    TEST FIRST BEACON IN THE REALATION
    */
    const beaconTest = {
      uniqueId: finalBeaconRelation[0].ktid,
      major: finalBeaconRelation[0].major
    };
    this.checkNewBeacon(beaconTest);
    //Set the new language
    const strinifyLanguage = JSON.stringify(savedLanguage);
    console.log("success.AppMain.checkSavedLanguage", strinifyLanguage);
    AsyncStorage.setItem(languageCode + "_languagedata", strinifyLanguage);
  }

  // onCompassUpdate = pointingTo => this.setState({ pointingTo });

  componentWillUnmount() {
    // Disconnect beaconManager and set to it to null
    try {
      disconnect();
    } catch (error) {
      console.log("info: cannot disconnect.\n", error);
    }
    try {
      DeviceEventEmitter.removeAllListeners();
    } catch (error) {
      console.log("info: AppMain cannot remove listeners.\n", error);
    }
  }

  checkNav() {
    const prevGetStateForAction = Nav.router.getStateForAction;

    Nav.router.getStateForAction = (action, state) => {
      // console.log('dbg.checkNav action and state:', action, state);
      if (state !== undefined && action.type === "Navigation/NAVIGATE") {
        const screenToGo = action.routeName;
        let navigateTo = action;
        let prevScreen = "none";
        let currentScreen = "none";

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

    return (
      <Nav
        screenProps={{
          checkNav: this.checkNav,
          pointingTo: this.state.pointingTo,
          heading: this.state.heading
        }}
      />
    );
  }
}
const mapStateToProps = ({ data }) => {
  const {
    currentBeacon,
    currentPlace,
    beaconPlaceRelation,
    currentPlacesData,
    isInMainPage
  } = data;
  // console.log('dbg.Appmain.mapStt currentBeacon:', currentBeacon);
  return {
    currentBeacon,
    currentPlace,
    beaconPlaceRelation,
    currentPlacesData,
    isInMainPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLanguage: languages => {
      dispatch(setCurrentLanguage(languages));
    },
    setCurrentPlacesData: currentPlacesData => {
      dispatch(setCurrentPlacesData(currentPlacesData));
    },
    setAllBeaconsPlacesRelation: beaconPlaceRelation => {
      dispatch(setAllBeaconsPlacesRelation(beaconPlaceRelation));
    },
    setCurrentPlace: place => {
      dispatch(setCurrentPlace(place));
    },
    setCurrentBeacon: beacon => {
      dispatch(setCurrentBeacon(beacon));
    },
    setIsInMainPage: isInMainPage => {
      dispatch(setIsInMainPage(isInMainPage));
    }
  };
};

AppMain.propTypes = {
  currentPlacesData: PropTypes.object,
  beaconPlaceRelation: PropTypes.array,
  currentBeacon: PropTypes.object,
  currentPlace: PropTypes.object,
  isInMainPage: PropTypes.bool,

  setCurrentPlace: PropTypes.any,
  setCurrentLanguage: PropTypes.any,
  setCurrentPlacesData: PropTypes.any,
  setCurrentBeacon: PropTypes.any,
  setAllBeaconsPlacesRelation: PropTypes.any,
  setIsInMainPage: PropTypes.any
};

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppMain);
