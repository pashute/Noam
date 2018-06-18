import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MainNearby extends React.Component {
  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }
  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Nearby page goes here</Text>
      </View>
    );
  }
} // .. class
MainNearby.propTypes = {
  showApp: PropTypes.func
};
MainNearby.defaultProps = {
  showApp: () => {}
};
