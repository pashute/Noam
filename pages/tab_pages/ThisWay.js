import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from "react-native";
import { Button } from "react-native";
//import { List, ListItem } from "react-native-elements";
import ActionBar from "react-native-action-bar";
import PropTypes from "prop-types";
import { TabNavigator } from "react-navigation";
import DrawerLayout from "react-native-drawer-layout";
//import { Font, AppLoading } from 'expo';
import Menu from "../Menu";
import Bottom from "./Bottom";
import NoBeacon from "./body/NoBeacon";
import ThiswayView from "./body/ThiswayView";
import { stylesData, placesData, settingsData } from "../../data/en";

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
//   'Warning: componentWillUpdate is deprecated'
// ]);

export default class ThisWay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerClosed: true
    };

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

  render() {
    console.log({ placesData, settingsData });

    const thisWayStyles = stylesData.styles.thisWayStyles;

    return (
      <View style={styles.container}>
        <Text
          style={{
            margin: 10,
            fontSize: 16,
            textAlign: "center",
            color: thisWayStyles.color,
            fontWeight: thisWayStyles.fontWeight
          }}
        >
          {/* {`Pointing: ${this.props.pointingDirection}`} */}
          {`Heading: ${this.props.heading.trueHeading}`}
        </Text>
        <View
          style={{
            borderLeftWidth: 1,
            borderLeftColor: "#000000",
            borderRightWidth: 1,
            borderRightColor: "#000000",
            borderTopWidth: 1.0,
            borderTopColor: "#000000",
            borderBottomWidth: 1,
            borderBottomColor: "#000000",
            margin: 10,
            padding: 0,
            backgroundColor: "#F5FCFF",
            flex: 18
          }}
        >
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* // <NoBeacon/> */}
            <ThiswayView />
          </ScrollView>
        </View>
        <View style={{ flex: 2 }}>
          <Bottom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5FCFF"
  },
  contentContainer: { padding: 0 },
  welcome: {
    fontSize: 30,
    color: "#6600ff",
    marginTop: 20,
    paddingRight: 30,
    textAlign: "right"
  },
  instructions: {
    marginTop: 40,
    textAlign: "center",
    color: "#333333",
    marginBottom: 80,
    fontSize: 20
  },
  assistant: {
    fontSize: 24,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center"
  },
  buttonContainer: {
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
  }
});
