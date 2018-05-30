/* cSpell:disable */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
  /* Button,   Platform,   Text,   Alert */
} from 'react-native';

// import ActionBar from 'react-native-action-bar';
// import PropTypes from "prop-types";
// import { TabNavigator } from 'react-navigation';
// import DrawerLayout from 'react-native-drawer-layout';
// import Menu from "../Menu";
import Place from './body/Place';
import Bottom from './Bottom';

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
    console.log('render inplace');
    return (
      <View style={styles.mainContainer}>
        <View style={styles.floorContainer}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* // <NoBeacon/> */}
            <Place />
          </ScrollView>
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
    backgroundColor: '#FDFDFD',
    flex: 1
  },
  floorContainer: {
    backgroundColor: '#FDFDFD',
    borderLeftWidth: 1,
    borderLeftColor: '#000000',
    borderRightWidth: 1,
    borderRightColor: '#000000',
    borderTopWidth: 1.0,
    borderTopColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    margin: 10,
    padding: 0,
    flex: 18
  },
  contentContainer: {
    padding: 0
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20
  },
  bottomRow: {
    flex: 2
  }
});
