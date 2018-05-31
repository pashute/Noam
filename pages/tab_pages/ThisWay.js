import React, { Component } from 'react';
import {
  /* Platform,*/
  StyleSheet,
  Text,
  View,
  /* Alert, Button */
  ScrollView
} from 'react-native';
//import { Font, AppLoading } from 'expo';
import WayPoints from './pointLists/WayPoints';
import Bottom from './Bottom';

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
    // console.log({ placesData, settingsData });
    // const thisWayStyles = stylesData.styles.thisWayStyles;
    console.log('thisway.props.curbe: ' + this.props.beaconIndex);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.pointingTo}>
          {/* {`Pointing: ${this.props.pointingDirection}`} */}
          {`Heading: ${this.props.heading.trueHeading}`}
        </Text>
        <View style={styles.pointsContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {/* // <NoBeacon/> */}
            <WayPoints beaconIndex={this.props.beaconIndex} />
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
    color: '#0000FF' /*thisWayStyles.color,*/,
    fontWeight: '500' /*thisWayStyles.fontWeight*/
  },
  bottomRow: {
    flex: 2
  }
});
