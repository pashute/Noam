import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native";
import ActionBar from "react-native-action-bar";
// import PropTypes from 'prop-types';
// import { StackNavigator } from 'react-navigation';
import Bottom from "../tab_pages/Bottom.js";

// Todo add context autoUpdate state and decide on status accordingly

// Todo data: take from appData
const txtAppName = "Noam";
const txtSettingsTitle = "Settings";
const txtBack = "< Back";
const txtTOC = "TOC";
const txtNext = "Next >";

const txtTitleAutoUpdate = "2. Auto Update by pointing";

const txtInstructionAutoUpdate = [
  "If you turn this option on the lists\n",
  "will automatically change as you\n",
  "change your direction\n",
  "\n",
  "To refresh the list manually\n",
  "point the top of your phone in\n",
  "the direction you want instructions for\n",
  "and press the This Way tab"
];

const txtAutoUpdateIs = "Auto-update is currently set ";
const txtAutoUpdateTurn = "Turn auto-update ";
const txtOn = "on";
const txtOff = "off";

// Todo data: get from stylesData
const colorButtonShadow = "#181818"; // was '#00000F' 181818 is dark

export default class AutoUpdate extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      autoupdateStatus: "off",
      headingchangedWarn: "off"
    };
  }

  _turnOnAutoUpdate() {
    Alert.alert("demo mode only");
    this.setateState({
      autoupdateStatus: this.state.autoupdateStatus == txtOff ? txtOn : txtOff
    });
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
          <Text style={styles.titleText}>{txtSettingsTitle}</Text>
          <Text style={styles.instructionsHeader}>{txtTitleAutoUpdate}</Text>
          <View style={styles.instructionsView}>
            <Text style={styles.instructions}>{txtInstructionAutoUpdate}</Text>
            <Text style={styles.instructions}>
              {txtAutoUpdateIs}
              {": "}
              {this.state.autoupdateStatus}
            </Text>
            <View style={styles.buttonDecorator}>
              <Button
                onPress={this._turnOnAutoUpdate}
                title={txtAutoUpdateTurn + " " + txtOn}
                color="#333333"
                accessibilityLabel="Tap to turn on auto update"
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomNavRow}>
          <Text
            onPress={() => {
              navigate("Calibrate");
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
              navigate("Voice");
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
  instructionsHeader: {
    marginTop: 10,
    textAlign: "left",
    color: "#333333",
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "400",
    marginLeft: 25,
    marginRight: 25
  },
  instructionsView: {
    flex: 1,
    flexDirection: "column"
  },
  instructions: {
    marginTop: 25,
    textAlign: "left",
    color: "#333333",
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 25,
    marginRight: 25
  },
  buttonDecorator: {
    backgroundColor: "#444444", // colorBgDark,//'#454545', // '#2E9298',
    borderRadius: 10,
    padding: 3,
    shadowColor: colorButtonShadow, //'#454545', // '#000000'
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3, //10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
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
