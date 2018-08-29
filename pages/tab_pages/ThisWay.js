/* cSpell:disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
  /* Platform, Alert, Button */
} from 'react-native';
import WayPoints from './pointLists/WayPoints';
import Bottom from './Bottom';
import { languageDataCtx } from '../../AppMain';

class ThisWay extends Component<{}> {
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
    // console.log("dbg.way heading", this.props.heading);
    const { placesData, stylesData, appData } = this.props.currentLanguage;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.pointingTo}>
          {`${appData.appData.screenMainApp.txtPointingTo}: ${
            this.props.pointingDirection
          }`}
        </Text>
        <View style={styles.pointsContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <WayPoints
              heading={this.props.heading}
              beaconIndex={this.props.beaconIndex}
            />
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
  pointsContainer: {
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
  scrollView: { padding: 0 },
  pointingTo: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#111111' /*thisWayStyles.color,*/,
    fontWeight: '500' /*thisWayStyles.fontWeight*/
  },
  bottomRow: {
    flex: 2
  }
});

const mapStateToProps = ({ data }) => {
  const { currentLanguage } = data;
  return { currentLanguage };
};

export default connect(
  mapStateToProps,
  {}
)(ThisWay);
