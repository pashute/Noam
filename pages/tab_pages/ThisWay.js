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
import ThiswayView from './body/ThiswayView';
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

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.pointingTo}>
          {/* {`Pointing: ${this.props.pointingDirection}`} */}
          {`Heading: ${this.props.heading.trueHeading}`}
        </Text>
        <View style={styles.places}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* // <NoBeacon/> */}
            <ThiswayView />
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
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  contentContainer: { padding: 0 },
  pointingTo: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#0000FF', /*thisWayStyles.color,*/
    fontWeight: '500' /*thisWayStyles.fontWeight*/
  },
  places: {
    backgroundColor: '#0000FF', /* '#F5FCFF', */
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
  welcome: {
    fontSize: 30,
    color: '#6600ff',
    marginTop: 20,
    paddingRight: 30,
    textAlign: 'right'
  },
  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20
  },
  assistant: {
    fontSize: 24,
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
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
