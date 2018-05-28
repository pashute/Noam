/* cSpell:disable */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import NearBy from './tab_pages/NearBy';
import ThisWay from './tab_pages/ThisWay';
import InBuilding from './tab_pages/InBuilding';
import DrawerLayout from 'react-native-drawer-layout';
import Menu from './Menu';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from 'react-native-elements';
import '@expo/vector-icons';
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

// taken from settings
const str_exit = 'Exits';
const str_call = 'Call';
const ear_icon = require('../assets/icons/ear1.png');
const str_place = 'Big Fashion';
const str_beaconloc = 'South gate (Bank Leumi)';

const str_this = 'This';
const str_way = 'way';
const str_nearby = 'Nearby';
const str_inplace = 'In building';
const icon_Place = <Icon name="adjust" size={30} color="#900" />;

// tab texts and icons:
const nearbyButton = () => (
  <View style={styles.tabView}>
    <Text style={styles.tabText}>{str_nearby}</Text>
  </View>
);
const thatwayButton = () => (
  <View style={styles.tabView}>
    <Text style={styles.tabText}>This </Text>
    <FontAwesome name={'arrow-up'} size={12} color={'#6600FF'} />
    <Text style={styles.tabText}> way</Text>
  </View>
);
const inplaceButton = () => (
  <View style={styles.tabView}>
    <Text style={styles.tabText}>{str_inplace}</Text>
  </View>
);

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    // fix: txt from constants and then from data
    this.state = {
      titleText: 'noam ',
      bodyText: 'Your indoor assistant',
      drawerClosed: true,
      tabIndex: 2,
      beaconUid: 12
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.updateTabIndex = this.updateTabIndex.bind(this);
  }

  updateTabIndex = tabIndex => {
    console.log(tabIndex);
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

  _positionDetect() {}
  _positionDecide() {
    _positionDetect();
    // simulation
    let placeName = 'no beacon information';
    switch (this.state.beaconUid) {
      case 1:
        placeName = 'Big Fashion-Main Gate';
        break;
      case 12:
        placeName = 'Big Fashion: Elevator C3';
        break;
      case 33:
        placeName = 'Park Harova';
        break;

      default:
        break;
    }
    return placeName;
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
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
            containerStyle={styles.bar}
            titleStyle={styles.title}
            title={'noam'}
            leftIconName={'location'}
            onLeftPress={() => console.log('Left!')}
            rightIcons={[
              {
                name: 'menu',
                onPress: this.toggleDrawer
              }
            ]}
          />
          <View style={styles.topmsgView}>
            <View style={styles.placebar}>
              <Text style={styles.placemsg}>{str_place}</Text>
              <Text style={{ fontSize: 24, color: '#111145', marginLeft: 5 }}>
                BiG
              </Text>
            </View>
            <Text style={styles.beaconloc}>{str_beaconloc}</Text>
          </View>
          <ButtonGroup
            containerBorderRadius={40}
            selectedBackgroundColor="#FF0000"
            onPress={this.updateTabIndex}
            selectedIndex={this.state.tabIndex}
            buttons={[
              { element: nearbyButton },
              { element: thatwayButton },
              { element: inplaceButton }
            ]}
            containerStyle={{ height: 30 }}
          />

          <Tabpage
            selectedIndex={this.state.tabIndex}
            pointingDirection={this.props.screenProps.pointingDirection}
          />
        </DrawerLayout>
      </View>
    );
  }
}

const Tabpage = ({ selectedIndex, pointingDirection }) => {
  switch (selectedIndex) {
    case 0:
      return <NearBy pointingDirection={pointingDirection} />;

    case 1:
      return <ThisWay pointingDirection={pointingDirection} />;

    case 2:
    default:
      return <InBuilding pointingDirection={pointingDirection} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: '#F5F1FF'
  },
  welcome: {
    fontSize: 35,
    color: '#6600ff'
  },
  assistant: {
    lineHeight: 30,
    flex: 1,
    fontSize: 24
  },
  tabView: {
    flexDirection: 'row'
  },
  tabText: {
    fontSize: 14
  },
  topmsgView: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  placebar: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40
  },
  beaconloc: {
    justifyContent: 'center'
  },
  placemsg: {
    lineHeight: 20,
    flex: 1,
    fontSize: 20
  },
  instructions: {
    marginTop: 40,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20
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
  }
});
