import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

export default class StoryTabs extends React.Component {
  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>
          Main tabs (with nearby) page goes here
        </Text>
      </View>
    );
  }
} // .. class
StoryTabs.propTypes = {
  showApp: PropTypes.func
};
StoryTabs.defaultProps = {
  showApp: () => {}
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5FCFF', // appbackground
    marginTop: 60
  },
  header: {
    fontSize: 20
  }
});
