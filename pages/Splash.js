import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native";
import ActionBar from "react-native-action-bar";
import PropTypes from "prop-types";
import { StackNavigator } from "react-navigation";
import Main from "./Main";
import DrawerLayout from "react-native-drawer-layout";
import Menu from "./Menu";
import Tab from "./Tab";
import { FontAwesome } from "@expo/vector-icons";

const txtIosinstruct =
  "Welcome to Noam,\n" +
  "your indoor assistant\n" +
  "for accessible buildings\n\n" +
  "We can tell you what's in\n" +
  "the building and where";

const txtAndroinstruct =
  "Welcome to Noam,\n" +
  "your indoor assistant\n" +
  "for accessible buildings\n\n" +
  "We can tell you what's in\n" +
  "the building and where";

const txtSplashTitle = "noam";

const txtSplashBody = " you're indoor assistant";

const colorBgDark = "#181818"; // was '#00000F'

const instructions = Platform.select({
  ios: txtIosinstruct,
  android: txtAndroinstruct
});

export default class Splash extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      titleText: txtSplashTitle,
      bodyText: txtSplashBody,
      drawerClosed: true
    };
    // in text style array...
    // { color: this.props.screenProps.welcomeColor }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  toggleDrawer = () => {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  };
  isLastUserplace() {
    // real:  return( userLastPlaceID  == currentPlaceID)
    return true; // for wireframe  version
  }
  isBluetoothOn() {
    // real:  return compassAPI.hasBlootooth() // or something like this
    return false; // for wireframe  version
  }
  _turnOnBluetooth() {
    console.log("bluetooth");
    Alert.alert("Please turn on your bluetooth!");
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <DrawerLayout
          drawerWidth={200}
          ref={drawerElement => {
            this.DRAWER = drawerElement;
          }}
          drawerPosition={DrawerLayout.positions.Right}
          onDrawerOpen={this.setDrawerState}
          onDrawerClose={this.setDrawerState}
          renderNavigationView={() => <Menu nav={navigate} />}
        >
          <ActionBar
            headerStyle={styles.actbar}
            containerStyle={styles.bar}
            titleStyle={styles.title}
            title={"noam"}
            leftIconName={"location"}
            onLeftPress={() => console.log("Left!")}
            rightIcons={[
              {
                name: "menu",
                onPress: this.toggleDrawer
              }
            ]}
          />

          <Text style={(styles.assistant, styles.textCentered)}>
            {"\n\n\n\n"}
            <FontAwesome name={"arrow-up"} size={25} color={"#6600FF"} />
            <Text style={[styles.welcome]}> {this.state.titleText}</Text>
            <Text onPress={() => navigate("TabPage")}>
              {this.state.bodyText}
            </Text>
          </Text>

          <Text style={styles.instructions}>{instructions}</Text>

          <View style={styles.buttonContainer}>
            {/* the bluetooth button */}
            <Button
              onPress={this._turnOnBluetooth}
              title="Press here to turn bluetooth on"
              color="#242424"
              accessibilityLabel="Tap on Me"
            />
          </View>
        </DrawerLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: "#F5FCFF"
  },
  actbar: {
    backgroundColor: "#FF00FF",
    color: "#FF00FF" // hi
  },
  welcome: {
    fontSize: 35,
    color: "#6600FF" // purple
  },
  instructions: {
    marginTop: 40,
    textAlign: "center",
    color: "#333333",
    marginBottom: 80,
    fontSize: 20
  },
  assistant: {
    fontSize: 22,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20
  },
  textCentered: {
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: "#444444", // colorBgDark,//'#454545', // '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: colorBgDark, //'#454545', // '#000000'
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3, //10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
  }
});
