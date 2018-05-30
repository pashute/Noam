import React, { Component } from "react";
import {
  // Platform,
  StyleSheet,
  Text,
  View //,
  // Alert,
  // ScrollView,
  // Button
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { MaterialDesign } from "react-native-vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { List, ListItem } from "react-native-elements";
//import PropTypes from 'prop-types';
import { Dropdown } from "react-native-material-dropdown";

//const str_welcome ='Last place: South Elevators floor 1';
//const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30-21:00\n';
//const str_pos = 'You are at the main gate \nThere is an ATM outside';
const floorNumbers = [{ value: "1" }, { value: "2" }];

const strTitle = "";
// const strDes = 'Opening hours\n' + 'Sunday-Thursday 8:15-17:30';
const SECTIONS = [
  {
    id: 1,
    title: "Amanda the matchmaker",
    subtitle: "office",
    content:
      "2nd floor \nNear elevator C3 (south)\n" +
      "Staff specializes in disabilities\n" +
      "and we are hiring."
  },
  {
    id: 2,
    title: "Brake out room",
    subtitle: "activity",
    content: "2nd floor\n" + " near elevator C3"
  },
  {
    id: 3,
    title: "Cazino",
    subtitle: "activity",
    content: "Lorem ipsum..."
  },
  {
    id: 4,
    title: "Dahan driving school",
    subtitle: "ofice",
    content: "Lorem ipsum..."
  }
];

export default class Place extends Component {
  constructor(props) {
    super(props);
  }

  _renderHeader(content, index, isActive, sections) {
    let iconName = "angle-down";
    if (isActive === true) {
      iconName = "angle-up";
    }
    // for rn elements listitem:
    // rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
    return (
      <View style={styles.accordArea}>
        {/*
        <ListItem
          key={section.id}
          title={section.title}
          subtitle={section.subtitle}
        />*/}
        <View style={styles.itemHeader}>
          {/* if (this.props.useIcons)
              <Text>here goes icon</Text>
          */}
          <View>
            <Text style={styles.itemHeaderText}>
              {"  "}
              {content.title}
            </Text>
          </View>
          <View style={styles.iconItem}>
            <FontAwesome name={iconName} size={20} color="gray" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#F5FCFF",
            borderBottomWidth: 1
          }}
        />
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.itemDetails}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.floorView}>
          <Text style={styles.assistant}>Floor</Text>
          <Dropdown
            containerStyle={{ marginLeft: 30, width: 100 }}
            label="Floor"
            data={floorNumbers}
          />
        </View>
        <Text style={{ fontSize: 28 }}>{strTitle}</Text>
        <Accordion
          sections={SECTIONS}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F5FCFF"
  },
  accordArea: {
    width: "100%",
    backgroundColor: "#FFFFFF", // '#F5FCFF'
    padding: 3
  },
  itemHeader: {
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
  itemHeaderText: {
    // textAlign: 'center',
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "normal"
  },
  iconItem: {
    height: "100%",
    marginLeft: "auto",
    marginRight: 10,
    alignItems: "center"
  },
  itemDetails: {
    padding: 20,
    backgroundColor: "#fff"
  },
  desc: {
    marginBottom: 5,
    fontSize: 14,
    textAlign: "center"
  },
  assistant: {
    marginBottom: 20,
    fontSize: 24,
    textAlign: "left"
  },
  buttonContainer: {
    backgroundColor: "#2E9298",
    borderRadius: 5,
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
  floorView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  }
});
