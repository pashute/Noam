/* cSpell:disable */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
// import * as Animatable from 'react-native-animatable';
// import PropTypes from 'prop-types';
import { FontAwesome } from "@expo/vector-icons";
// import { Dropdown } from 'react-native-material-dropdown';
import { placeDataCtx } from "../../AppMain";

const firstTimeMsg =
  "Opening hours:\n" +
  "Sunday - Thursday 8:30 - 21:00\n" +
  "Friday 8:30 - 13:00";
const atPointDesc = "You are at the main gate\n" + "There is an ATM outside";

export default class NearPoints extends Component<{}> {
  constructor(props) {
    super(props);

    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderHeader(section, index, isActive, dummy) {
    let iconName = "angle-down";
    if (isActive === true) {
      iconName = "angle-up";
    }
    // console.log(section.point.title);
    return (
      <View style={styles.accordArea}>
        <View style={styles.itemTitle}>
          {/* if (this.props.useIcons)
              <Text>here goes icon</Text>
          */}
          <View style={styles.itemTitleRow}>
            <Text style={styles.itemTitleText}>
              {"  "}
              {section.point.title}
            </Text>
            <Text style={styles.itemTitleDir}>
              {"Direction: "}
              {section.point.direction}
            </Text>
          </View>
          <View style={styles.iconOpenColapse}>
            <FontAwesome name={iconName} size={20} color="gray" />
          </View>
        </View>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.itemDetails}>
        <Text style={styles.itemDetailsText}>{section.point.instructions}</Text>
      </View>
    );
  }

  render() {
    // console.log('rendering placePoints');
    return (
      <placeDataCtx.Consumer>
        {place => {
          let curBcnIdx = this.props.beaconIndex;
          // console.log('beacon index: ' + curBcnIdx);
          // let points = currentPlace.thisWay[curBcnIdx].beacon.points;
          // console.log('thisway points ' + points);
          return (
            <View style={styles.container}>
              {/* <Text style={styles.firstTimeMsg}>{getFirstTimeMsg()}</Text> */}
              <Text style={styles.atPointDesc}>{atPointDesc}</Text>

              {/*<Text style={styles.headingTo}>{getTextFromCurHeading()}</Text>*/}
              <Accordion
                sections={place.nearby[curBcnIdx].beacon.points}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
              />
            </View>
          );
        }}
      </placeDataCtx.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FDFDFD"
  },
  atPointDesc: {
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 20
    /* textAlign: 'center'*/
  },
  // headingTo: {
  //   fontSize: 24,
  //   textAlign: 'left'
  // },
  firstTimeMessage: {
    fontSize: 20,
    marginLeft: 20
  },
  nearbyMessage: {
    fontSize: 20,
    marginLeft: 20
  },
  accordArea: {
    width: "100%",
    backgroundColor: "#FFFFFF", // '#F5FCFF'
    padding: 3,
    borderBottomColor: "#E7E7E7",
    borderBottomWidth: 2
  },
  itemTitle: {
    flex: 1,
    width: "100%",
    height: 35,
    flexDirection: "row",
    backgroundColor: "transparent",
    borderBottomColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20
  },
  itemTitleText: {
    // textAlign: 'center',
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "normal"
  },
  iconOpenColapse: {
    height: "100%",
    marginLeft: "auto",
    marginRight: 10,
    alignItems: "center"
  },
  itemDetails: {
    padding: 20,
    backgroundColor: "#fff"
  },
  itemDetailsText: {
    fontSize: 16,
    fontWeight: "200",
    fontStyle: "normal"
  }
});
