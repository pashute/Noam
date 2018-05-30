/* cSpell:disable */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView
  /* Button,   Platform,   Text,   Alert */
} from "react-native";

// import ActionBar from 'react-native-action-bar';
import PropTypes from "prop-types";
// import { TabNavigator } from 'react-navigation';
// import DrawerLayout from 'react-native-drawer-layout';
import Menu from "../Menu";
import Bottom from "./Bottom";
// import NoBeacon from './body/NoBeacon';
// import Body from './body/Body';
import Place from "./body/Place";

export default class InPlace extends Component<{}> {
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
    return (
      <View style={styles.mainContainer}>
        <View style={styles.floorContainer}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* // <NoBeacon/> */}
            <Place />
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
  mainContainer: {
    backgroundColor: "#770000", // '#F5FCFF',
    flex: 1
  },
  floorContainer: {
    backgroundColor: "#000077", // '#F5FCFF',
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
    flex: 18
  },
  contentContainer: {
    backgroundColor: "#00FC00", // remove?
    padding: 0
  },
  buttonContainer: {
    backgroundColor: "#2E9298", // remove?
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
