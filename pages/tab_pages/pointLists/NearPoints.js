import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
// import * as Animatable from 'react-native-animatable';
// import PropTypes from 'prop-types';


const firstTimeMsg = 'Opening hours:\n' + 'Sunday - Thursday 8:30 - 21:00\n' + 'Friday 8:30 - 13:00';
const atPlaceDesc  = 'You are at the main gate\n' + 'There is an ATM outside';
const str_title = 'Nearby:';


export default class NearPoints extends Component<{}> {
    constructor(props) {
        super(props);
      }

      _renderHeader(section) {//, index, isActive, sections) {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      }

      _renderContent(section) { //index, isActive, sections) {
        return (
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        );
      }
    
    render() {
        return (
          <View style={styles.container}> 

            <Text style={styles.assistant}>
            {str_open}
            </Text>
            <Text style={styles.assistant}>
            {str_pos}
            </Text>
            <Text style={styles.sectionHead}>
            {str_title}
            </Text>
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
    width: '100%',
    backgroundColor: '#FDFDFD'
  },
  atPointDesc: {
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 20,
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
  nearbyMessage:  {
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
  }
});
