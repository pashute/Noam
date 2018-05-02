import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";

//x import { TabNavigator } from 'react-navigation'; // 1.5.11
import { StackNavigator } from "react-navigation";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Tab from "./pages/Tab";
import AutoUpdate from "./pages/setting_pages/AutoUpdate";
import Calibrate from "./pages/setting_pages/Calibrate";
import Personal from "./pages/setting_pages/Personal";
import Profile from "./pages/setting_pages/Profile";
import SetHome from "./pages/setting_pages/SetHome";
import Voice from "./pages/setting_pages/Voice";
import Help from "./pages/Help";

import { ButtonGroup } from "react-native-elements";
//import ObjectPath from "object-path";
import "@expo/vector-icons";
import { Constants } from "expo";

import { YellowBox } from "react-native";

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
    screen: Main,
    navigationOptions: {
      headermode: "screen",
      header: null
    }
  },
  TabPage: {
    screen: Tab,
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
  Personal: {
    screen: Personal,
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

// this will be removed
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "b to reload shake or menu for dev"
});

// this too will be removed
type Props = {};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //   componentDidMount async () {
  //       const data = await fetch("noamdata.json");
  //       console.log({data});
  //       this.setState(data);
  //   }

  setWelcomeColor = color => {
    let newState = { ...this.state };
    ObjectPath.set(newState, "styles.welcomeStyles.welcomeColor", color);
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
    return <Nav screenProps={{ welcomeColor: "#FF9900" }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
