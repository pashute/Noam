import React, { Component, PropTypes } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Navigator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigator } from "react-navigation";
import Main from "./Main";
import Splash from "./Splash";
const menuList = require("./MenuList");

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  goPage(name) {
    const { navigate } = this.props.nav;
    if (name == "Settings") {
      console.log(this.props.nav);
      this.props.nav("SetHome");
    } else {
      this.props.nav("Help");
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {menuList.MENU_LIST.map(item => (
            <TouchableOpacity
              key={item.index}
              onPress={() => this.goPage(item.name)}
            >
              <Text style={styles.listMenu}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5FCFF", // appbackground
    marginTop: 60
  },

  listMenu: {
    color: "white",
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12
  }
});
