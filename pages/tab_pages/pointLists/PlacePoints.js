/* cSpell:disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
  /* Platform, Alert, ScrollView, Button */
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
//import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import { placeDataCtx } from '../../MainPage';
// fix: use redux instead of props: see issue: 23
// https://github.com/pashute/Noam/issues/23
// 

//const str_welcome ='Last place: South Elevators floor 1';
//const str_open= 'Opening hours:\n' + 'Sunday - Thursday 8:30-21:00\n';
//const str_pos = 'You are at the main gate \nThere is an ATM outside';
const floorNumbers = [{ value: '1' }, { value: '2' }, { value: 'All Floors' }];

const strFirstTimeData = '';
// const strDes = 'Opening hours\n' + 'Sunday-Thursday 8:15-17:30';

class PlacePoints extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      floorFilter: floorNumbers[2].value
    };
    this._renderHeader = this._renderHeader.bind(this);
    this._onFloorChangeFilter = this._onFloorChangeFilter.bind(this);
  }

  _onFloorChangeFilter(text) {
    // console.log('dbg.PlacePoints.onChngFloorFilter.txt', text);
    this.setState({ floorFilter: text });
  }

  _renderHeader(section, index, isActive, dummy) {
    let iconName = 'angle-down';
    if (isActive === true) {
      iconName = 'angle-up';
    }

    let canRender = true;
    if (this.state.floorFilter !== floorNumbers[2].value) {
      if (section.point.floor.toString() !== this.state.floorFilter) {
        canRender = false;
      }
    }
    if (canRender === false) {
      return <View><Text>No data for chosen floor</Text></View>;
    }
    return (
      <View style={styles.accordArea}>
        <View style={styles.itemTitle}>
          {/* if (this.props.useIcons)
              <Text>here goes icon</Text>
          */}
          <View>
            <Text style={styles.itemTitleText}>
              {'  '}
              {section.point.title}
            </Text>
          </View>
          <View style={styles.iconOpenColapse}>
            <Icon name={iconName} size={20} color="gray" />
          </View>
        </View>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.itemDetails}>
        <Text style={styles.itemDetailsText}>{section.point.content}</Text>
      </View>
    );
  }

  render() {
    // console.log('dbg.placePoints rendering: ', this.props);
    const place = this.props.currentPlace;
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
              onChangeText={this._onFloorChangeFilter}
            />
          </View>
        </View>
        <Text style={styles.firstTimeData}>{strFirstTimeData}</Text>
        <Accordion
          sections={place.inPlace}
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
    marginTop: 5,
    height: '100%',
    justifyContent: 'center'
  },
  floorLabel: {
    marginTop: 35,
    fontSize: 18,
    textAlign: 'left'
  },
  floorDropdownView: {
    height: '100%',
    justifyContent: 'center'
  },
  floorDropdown: {
    marginTop: 5,
    marginLeft: 30,
    width: 100
  },
  firstTimeData: {
    fontSize: 20,
    marginLeft: 20
  },
  accordArea: {
    width: '100%',
    backgroundColor: '#FFFFFF', // '#F5FCFF'
    padding: 3,
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 2
  },
  itemTitle: {
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
  itemTitleText: {
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
  itemDetailsText: {
    fontSize: 16,
    fontWeight: '200',
    fontStyle: 'normal'
  }
});

const mapStateToProps = ({ data }) => {
  const { currentPlace } = data;
  return { currentPlace };
};

export default connect(
  mapStateToProps,
  {}
)(PlacePoints);
