/* cSpell:disable */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView
  /* Platform, Alert, Button */
} from "react-native";
//import { Font, AppLoading } from 'expo';
import WayPoints from "./pointLists/WayPoints";
import Bottom from "./Bottom";
import { languageDataCtx } from "../../App";

export default class ThisWay extends Component<{}> {
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
    // console.log({ placesData, appData });
    return (
      <languageDataCtx.Consumer>
        {({ appData }) => {
          // aconsole.log('dbg.ThisWay.appData', appData);
          return (
            <View style={styles.mainContainer}>
              <Text style={styles.pointingTo}>
                {`${appData.appData.screenMainApp.txtPointingTo}: ${
                  this.props.pointingDirection
                }`}
              </Text>
              <View style={styles.pointsContainer}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                  <WayPoints beaconIndex={this.props.beaconIndex} />
                </ScrollView>
              </View>
              <View style={styles.bottomRow}>
                <Bottom />
              </View>
            </View>
          );
        }}
      </languageDataCtx.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDFDFD",
    flex: 1
  },
  pointsContainer: {
    backgroundColor: "#FDFDFD",
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
  scrollView: { padding: 0 },
  pointingTo: {
    margin: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#111111" /*thisWayStyles.color,*/,
    fontWeight: "500" /*thisWayStyles.fontWeight*/
  },
  bottomRow: {
    flex: 2
  }
});
