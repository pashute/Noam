/* cSpell:disable */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View /*, Alert*/ } from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';

// import { Constants } from 'expo';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import '@expo/vector-icons';
import { ButtonGroup } from 'react-native-elements';

import NearBy from './tab_pages/NearBy';
import ThisWay from './tab_pages/ThisWay';
import InPlace from './tab_pages/InPlace';
import Menu from './Menu';
const earIcon = require('../assets/icons/ear1.png');

import { languageDataCtx } from '../App';

export const placeDataCtx = React.createContext(languageDataCtx);

// taken from appData
// const strExit = 'Exits';
// const strCall = 'Call';

const pointPlaceName = 'Big Fashion';
const pointBeaconLocation = 'South gate (Bank Leumi)';
const pointPlaceIconName = 'bold';

const strThis = 'This';
const strWay = 'way';
const strNearby = 'Nearby';
const strInplace = 'In building';

// tab texts and icons:
const nearbyButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strNearby}</Text>
  </View>
);
const thatwayButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strThis} </Text>
    <FontAwesome name="arrow-up" size={14} />
    <Text style={styles.tabText}>{' ' + strWay}</Text>
  </View>
);
const inplaceButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strInplace}</Text>
  </View>
);

export default class AppMain extends Component<{}> {
  constructor(props) {
    super(props);
    // fix: txt from constants and then from data
    this.state = {
      placeIndex: 0,
      beaconIndex: 0,
      beaconUid: 12,
      tabIndex: 2,
      drawerClosed: true
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.updateTabIndex = this.updateTabIndex.bind(this);
    // console.log('dbg.appMain.screenprops:', this.props.screenProps);
  }

  updateTabIndex = tabIndex => {
    // console.log("dbg.AppMain.tab index: " + tabIndex);
    this.setState({ tabIndex });
  };

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
    const { navigate } = this.props.navigation;
    return (
      <languageDataCtx.Consumer>
        {({ placesData, appData, stylesData }) => {
          // console.log('dbg.AppMain.placesData:', placesData);
          // console.log('dbg.AppMain.appData:', appData);
          // console.log('dbg.AppMain.stylesData:', stylesData);
          return (
            <placeDataCtx.Provider
              value={placesData.places[this.state.placeIndex].place}
            >
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
                    containerStyle={styles.actionBarContainer}
                    titleStyle={styles.actionTitle}
                    title={'noam'}
                    leftIconImage={earIcon}
                    onLeftPress={() => console.log('Talk Icon pressed.')}
                    rightIcons={[
                      {
                        name: 'menu',
                        onPress: this.toggleDrawer
                      }
                    ]}
                  />
                  <View style={styles.topPlaceRow}>
                    <View style={styles.placeBar}>
                      <Text style={styles.placeMsg}>{pointPlaceName}</Text>
                      <FontAwesome
                        name={pointPlaceIconName}
                        size={30}
                        color="#000000"
                      />
                    </View>
                    <Text style={styles.beaconTxt}>{pointBeaconLocation}</Text>
                  </View>
                  <View style={styles.separator} />
                  <ButtonGroup
                    containerBorderRadius={40}
                    onPress={this.updateTabIndex}
                    selectedIndex={this.state.tabIndex}
                    selectedButtonStyle={styles.tabSelected}
                    buttons={[
                      { element: nearbyButton },
                      { element: thatwayButton },
                      { element: inplaceButton }
                    ]}
                    containerStyle={{ height: 30 }}
                  />

                  <TabbedPage
                    selectedIndex={this.state.tabIndex}
                    pointingDirection={this.props.screenProps.pointingTo}
                    heading={this.props.screenProps.heading}
                    beaconIndex={this.state.beaconIndex}
                  />
                </DrawerLayout>
              </View>
            </placeDataCtx.Provider>
          );
        }}
      </languageDataCtx.Consumer>
    );
  }
}

const TabbedPage = ({
  selectedIndex,
  pointingDirection,
  heading,
  beaconIndex
}) => {
  //console.log(pointingDirection);
  //console.log(heading);
  // console.log('tab: ' + selectedIndex + '  beaconIndex:' + beaconIndex);
  switch (selectedIndex) {
    case 0:
      return (
        <NearBy
          pointingDirection={pointingDirection}
          heading={heading}
          beaconIndex={beaconIndex}
        />
      );

    case 1:
      return (
        <ThisWay
          pointingDirection={pointingDirection}
          heading={heading}
          beaconIndex={beaconIndex}
        />
      );

    case 2:
    default:
      return <InPlace />;
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
    backgroundColor: '#FDFDFD'
  },
  actionBarContainer: {
    backgroundColor: '#330077'
  },
  actionTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  /* tabs */
  tabButton: {
    flexDirection: 'row'
  },
  tabText: {
    fontSize: 14
  },
  /* tabSelecteButtonStyle:{}, */
  tabSelected: {
    backgroundColor: '#FFFFFF'
  },
  topPlaceRow: {
    /* */
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 5
  },
  placeBar: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40
  },
  placeMsg: {
    lineHeight: 20,
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'center'
  },
  placeIcon: {
    fontSize: 24,
    color: '#111145',
    marginLeft: 5
  },
  beaconTxt: {
    textAlign: 'center',
    fontSize: 18
  },
  buttonDecorator: {
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
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  }
});
