/* cSpell:disable */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View /*, Alert*/ } from "react-native";
import { TabNavigator } from "react-navigation";
import NearBy from "./tab_pages/NearBy";
import ThisWay from "./tab_pages/ThisWay";
import InPlace from "./tab_pages/InPlace";
import DrawerLayout from "react-native-drawer-layout";
import Menu from "./Menu";
import ActionBar from "react-native-action-bar";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from "react-native-elements";
import "@expo/vector-icons";
import { Constants } from "expo";
import { languageDataCtx } from "../App";

export const placeDataCtx = React.createContext(languageDataCtx);

// taken from settings
// const strExit = 'Exits';
// const strCall = 'Call';

const ear_icon = require("../assets/icons/ear1.png");
const pointPlaceName = "Big Fashion";
//const icon_Place = <Icon name="adjust" size={30} color="#900" />;
const pointBeaconLocation = "South gate (Bank Leumi)";
const pointPlaceIconName = "bold";

const strThis = "This";
const strWay = "way";
const strNearby = "Nearby";
const strInplace = "In building";

// tab texts and icons:
const nearbyButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strNearby}</Text>
  </View>
);
const thatwayButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>This </Text>
    <FontAwesome name="arrow-up" size={14} />
    <Text style={styles.tabText}> way</Text>
  </View>
);
const inplaceButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strInplace}</Text>
  </View>
);

export default class AppMain extends React.Component {
  constructor(props) {
    super(props);
    // fix: txt from constants and then from data
    this.state = {
      indexPlace: 0,
      drawerClosed: true,
      tabIndex: 2,
      beaconUid: 12
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.updateTabIndex = this.updateTabIndex.bind(this);
  }

  updateTabIndex = tabIndex => {
    console.log("tab index: " + tabIndex);
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
        {({ placesData }) => {
          //console.log(placesData);
          return (
            <placeDataCtx.Provider
              value={{
                currentPlace: placesData.places[this.state.indexPlace].place
              }}
            >
              <View style={styles.topContainer}>
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
                    containerStyle={styles.actionBar}
                    titleStyle={styles.actionTitle}
                    title={"noam"}
                    leftIconName={"location"}
                    onLeftPress={() => console.log("Left!")}
                    rightIcons={[
                      {
                        name: "menu",
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
                        color="black"
                      />
                      {/*<Text style={styles.placeIcon}>BiG</Text>*/}
                    </View>
                    <Text style={styles.beaconLocTxt}>
                      {pointBeaconLocation}
                    </Text>
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
                    pointingDirection={this.props.screenProps.pointingDirection}
                    heading={this.props.screenProps.heading}
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

const TabbedPage = ({ selectedIndex, pointingDirection, heading }) => {
  console.log("tab: ");
  switch (selectedIndex) {
    case 0:
      return <NearBy pointingDirection={pointingDirection} />;

    case 1:
      return (
        <ThisWay pointingDirection={pointingDirection} heading={heading} />
      );

    case 2:
    default:
      return <InPlace pointingDirection={pointingDirection} />;
  }
};

const styles = StyleSheet.create({
  topContainer: {
    /* place and tabs */
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    backgroundColor: "#F5F1FF"
  },
  actionBar: {
    /* ear appname and menu */
    backgroundColor: "#330077"
  },
  actionTitle: {
    textAlign: "center",
    fontSize: 20
  },
  /* tabs */
  tabButton: {
    flexDirection: "row"
  },
  tabText: {
    fontSize: 16
  },
  /* tabSelecteButtonStyle:{}, */
  tabSelected: {
    backgroundColor: "white"
  },
  topPlaceRow: {
    /* */
    flexDirection: "column",
    justifyContent: "center"
  },
  placeBar: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40
  },
  placeMsg: {
    lineHeight: 20,
    flex: 1,
    fontSize: 18,
    textAlignVertical: "center"
  },
  placeIcon: {
    fontSize: 24,
    color: "#111145",
    marginLeft: 5
  },
  beaconLocTxt: {
    textAlign: "center",
    fontSize: 20
  },
  buttonContainer: {
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
  },
  separator: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1
  }
});
