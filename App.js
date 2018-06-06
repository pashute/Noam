/* cSpell:disable */

import React from "react";
import {
  StyleSheet,
  I18nManager /*Platform, Text, View, Alert*/
} from "react-native";

//x import { TabNavigator } from 'react-navigation'; // 1.5.11
import { NavigationActions, StackNavigator } from "react-navigation";

// import { ButtonGroup } from 'react-native-elements';
import ObjectPath from "object-path";
import "@expo/vector-icons";
import {
  /* Constants, AppLoading, */ AppLoading,
  Font,
  Permissions,
  Location,
  SecureStore
} from "expo";

import { YellowBox } from "react-native";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import Splash from "./pages/Splash";
import AppMain from "./pages/AppMain";
import AutoUpdate from "./pages/setting_pages/AutoUpdate";
import Calibrate from "./pages/setting_pages/Calibrate";
import Preferences from "./pages/setting_pages/Preferences";
import Profile from "./pages/setting_pages/Profile";
import SetHome from "./pages/setting_pages/SetHome";
import Voice from "./pages/setting_pages/Voice";
import Help from "./pages/Help";
import { getLanguage, getLanguageCode } from "./data";

/*
This contex contains: appData.json, placesData.json and stylesData.json
of the current language (by default is en)
*/
export const languageDataCtx = React.createContext(getLanguage("en"));

I18nManager.allowRTL(true);

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated"
]);

const Nav = StackNavigator({
  SplashPage: {
    screen: Splash,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  MainPage: {
    screen: AppMain,
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
  SetHome: {
    screen: SetHome,
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkNav = this.checkNav.bind(this);
    this.state = {
      isRTL: false, // I18nManager.isRTL,
      fontLoaded: false,
      data: {},
      currentLanguage: "en",
      pointingTo: "North West",
      heading: {}
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync("preferences-language").then(value => {
      console.log(value);
      if (value !== null) {
        this.setState({ language: getLanguageCode(value) });
      }
    });
    this._asyncFonts();
    I18nManager.forceRTL(false);
    this.setState({ isRTL: false });
  }

  _asyncFonts = async () => {
    try {
      await Font.loadAsync(MaterialIcons.font, FontAwesome.font);
      this.setState({ fontLoaded: true });
      this._getHeadingAsync();
    } catch (error) {
      console.error("error loading icon fonts", error);
    }
  };

  _getHeadingAsync = async () => {
    let { locationServicesEnabled } = await Location.getProviderStatusAsync();
    if (locationServicesEnabled === false) {
      this.setState({
        pointingTo: "Please enable Location"
      });
    } else {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        this.setState({
          pointingTo: "Permission to access location was denied"
        });
      } else {
        console.log(status);
        Location.watchHeadingAsync(this.onHeadingChange);
      }
    }
  };

  onHeadingChange = heading => {
    const degree = 360 / 8;
    const angle = heading.trueHeading + degree / 2;
    let pointingTo = "North";
    if (angle >= 0 * degree && angle < 1 * degree) pointingTo = "North";
    if (angle >= 1 * degree && angle < 2 * degree) pointingTo = "North East";
    if (angle >= 2 * degree && angle < 3 * degree) pointingTo = "East";
    if (angle >= 3 * degree && angle < 4 * degree) pointingTo = "South East";
    if (angle >= 4 * degree && angle < 5 * degree) pointingTo = "South";
    if (angle >= 5 * degree && angle < 6 * degree) pointingTo = "South West";
    if (angle >= 6 * degree && angle < 7 * degree) pointingTo = "West";
    if (angle >= 7 * degree && angle < 8 * degree) pointingTo = "North West";
    this.setState({ heading, pointingTo });
  };

  // onCompassUpdate = pointingTo => this.setState({ pointingTo });

  setNoamColor = color => {
    let newState = { ...this.state };
    ObjectPath.set(newState, "styles.welcomeStyles.welcomeColor", color);
    this.setState(newState);
  };

  checkNav() {
    const prevGetStateForAction = Nav.router.getStateForAction;

    Nav.router.getStateForAction = (action, state) => {
      console.log(action);
      console.log(state);
      if (state !== undefined && action.type === "Navigation/NAVIGATE") {
        const screenToGo = action.routeName;
        let navigateTo = action;
        let prevScreen = "none";
        let currentScreen = "none";
        const currentRutes = state.routes;
        if (currentRutes.length > 1) {
          prevScreen = currentRutes[currentRutes.length - 2].routeName;
        }
        if (currentRutes.length > 0) {
          currentScreen = currentRutes[currentRutes.length - 1].routeName;
        }
        console.log(prevScreen);
        console.log(currentScreen);
        console.log(screenToGo);

        return prevGetStateForAction(action, state);

        if (currentScreen === screenToGo) {
          return null;
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
      return <AppLoading />;
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
                : "#FF0000"
          }}
        />
      </languageDataCtx.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
