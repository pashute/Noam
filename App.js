/* cSpell:disable */

import React from "react";
import { StyleSheet /*Platform, Text, View, Alert*/ } from "react-native";

//x import { TabNavigator } from 'react-navigation'; // 1.5.11
import { StackNavigator } from "react-navigation";

// import { ButtonGroup } from 'react-native-elements';
import ObjectPath from "object-path";
import "@expo/vector-icons";
import {
  /* Constants, AppLoading, */ AppLoading,
  Font,
  Permissions,
  Location
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
import Languages from "./data";

export const languageDataCtx = React.createContext(Languages.en.data);

//import placesData from "./data/placesData.json";
//import appData from "./data/appData.json";
//import stylesData from "./data/stylesData.json";

// const data = {
//   styles: {
//     stylesSplash: {
//       noamColor: '6600FF',
//       noamFont: 'TBD'
//     }
//   }
// };

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

    this.state = {
      fontLoaded: false,
      data: {},
      currentLanguage: Languages.en.data,
      pointingTo: "North West",
      heading: {}
    };
  }

  componentDidMount() {
    this._asyncFonts();
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
      <languageDataCtx.Provider value={this.state.currentLanguage}>
        <Nav
          screenProps={{
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
