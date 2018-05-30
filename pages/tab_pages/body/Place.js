import React, { Component } from 'react';
import {
  // Platform,
  StyleSheet,
  Text,
  View //,
  // Alert,
  // ScrollView,
  // Button
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
// import { MaterialDesign } from "react-native-vector-icons";
import { FontAwesome } from '@expo/vector-icons';
// import { List, ListItem } from "react-native-elements";
//import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import { placeDataCtx } from '../../AppMain';

//const str_welcome ='Last place: South Elevators floor 1';
//const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30-21:00\n';
//const str_pos = 'You are at the main gate \nThere is an ATM outside';
const floorNumbers = [{ value: '1' }, { value: '2' }, { value: 'All Floors' }];

const strFirstTimeData = '';
// const strDes = 'Opening hours\n' + 'Sunday-Thursday 8:15-17:30';

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorFilter: floorNumbers[2].value
    };
    this._renderHeader = this._renderHeader.bind(this);
    this._onChangeFilter = this._onChangeFilter.bind(this);
  }

  _onChangeFilter(text) {
    console.log(text);
    this.setState({ floorFilter: text });
  }

  _renderHeader(content, index, isActive, dummy) {
    let iconName = 'angle-down';
    if (isActive === true) {
      iconName = 'angle-up';
    }

    let canRender = true;
    if (this.state.floorFilter !== floorNumbers[2].value) {
      if (content.point.floor.toString() !== this.state.floorFilter) {
        canRender = false;
      }
    }
    if (canRender === false) {
      return <View />;
    }
    // for rn elements listitem:
    // rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
    return (
      <View style={styles.accordArea}>
        <View style={styles.itemHeader}>
          {/* if (this.props.useIcons)
              <Text>here goes icon</Text>
          */}
          <View>
            <Text style={styles.itemHeaderText}>
              {'  '}
              {content.point.title}
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
        <Text>{section.point.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <placeDataCtx.Consumer>
        {({ currentPlace }) => {
          //console.log(currentPlace);
          return (
            <View style={styles.container}>
              <View style={styles.floorViewContainer}>
                <View style={styles.floorView}>
                  <Text style={styles.floorLabel}>Floor:</Text>
                </View>
                <View style={styles.floorDropdownView}>
                  <Dropdown
                    label={''}
                    labelFontSize={0}
                    containerStyle={styles.floorDropdown}
                    value={floorNumbers[2].value}
                    data={floorNumbers}
                    onChangeText={this._onChangeFilter}
                  />
                </View>
              </View>
              <Text style={{ fontSize: 20 }}>{strFirstTimeData}</Text>
              <Accordion
                sections={currentPlace.inPlace}
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
    width: '100%',
    backgroundColor: '#FDFDFD'
  },
  floorViewContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 20
  },
  floorLabelView: {
    height: '100%',
    justifyContent: 'center',
    marginTop: 10
  },
  floorLabel: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'left'
  },
  floorDropdownView: {
    height: '100%',
    justifyContent: 'center'
  },
  floorDropdown: {
    marginBottom: 5,
    marginLeft: 30,
    width: 100
  },
  accordArea: {
    width: '100%',
    backgroundColor: '#FFFFFF', // '#F5FCFF'
    padding: 3,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 2
  },
  itemHeader: {
    flex: 1,
    width: '100%',
    height: 35,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20
  },
  itemHeaderText: {
    // textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'normal'
  },
  iconOpenColapse: {
    height: '100%',
    marginLeft: 'auto',
    marginRight: 10,
    alignItems: 'center'
  },
  itemDetails: {
    padding: 20,
    backgroundColor: '#fff'
  },
  desc: {
    marginBottom: 5,
    fontSize: 14,
    textAlign: 'center'
  },
  buttonContainer: {
    borderRadius: 5,
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
