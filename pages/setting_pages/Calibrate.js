import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image /* Alert, Button */
} from "react-native";
import {} from "react-native";
import ActionBar from "react-native-action-bar";
// import PropTypes from 'prop-types';
// import { StackNavigator } from 'react-navigation';
import Bottom from "../tab_pages/Bottom.js";

// Todo data: take from appData
const txtAppName = "Noam";
const txtBack = "< Back";
const txtTOC = "TOC";
const txtNext = "Next >";
const txtSettingsText = "Settings";
const txtTitleCompassCalib = "1. Calibrating Compass";
const txtInstructionsCompass = [
  "Please point the top of your device forward ...\n",
  "then turn it in a large figure eight\n",
  "to calibrate the compass"
];

export default class Calibrate extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ActionBar
          containerStyle={styles.actionBarContainer}
          titleStyle={styles.actionTitle}
          title={txtAppName}
          leftIconName={"location"}
          onLeftPress={() => console.log("Left!")}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{txtSettingsText}</Text>
          <Text style={styles.instructionHeader}>{txtTitleCompassCalib}</Text>
          <Text style={styles.instructions}>{txtInstructionsCompass}</Text>
          <View style={styles.imgCalibrateView}>
            <Image
              source={require("../../assets/icons/compass_calibration8.png")}
            />
          </View>
        </View>
        <View style={styles.bottomNavRow}>
          <Text
            onPress={() => {
              navigate("MainPage");
            }}
            style={styles.navButton}
          >
            {txtBack}
          </Text>
          <Text
            onPress={() => {
              navigate("SetHome");
            }}
            style={styles.navButton}
          >
            {txtTOC}
          </Text>
          <Text
            onPress={() => {
              navigate("AutoUpdate");
            }}
            style={styles.navButton}
          >
            {txtNext}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Bottom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: "#FDFDFD"
  },
  actionBarContainer: {
    backgroundColor: "#330077"
  },
  actionTitle: {
    textAlign: "center",
    fontSize: 20
  },
  contentContainer: {
    flex: 16
  },
  titleText: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  instructionHeader: {
    marginTop: 10,
    textAlign: "left",
    color: "#333333",
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 25,
    marginRight: 25
  },
  instructions: {
    marginTop: 25,
    textAlign: "left",
    color: "#333333",
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 25,
    marginRight: 25
  },
  imgCalibrateView: {
    justifyContent: "center",
    alignItems: "center"
  },
  bottomNavRow: {
    marginLeft: 15,
    marginRight: 15,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navButton: {
    textDecorationLine: "underline",
    fontSize: 22
  },
  bottomRow: {
    flex: 2
  }
});
