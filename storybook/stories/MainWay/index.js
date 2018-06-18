import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MainWay extends React.Component {
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
MainWay.propTypes = {
  showApp: PropTypes.func
};
MainWay.defaultProps = {
  showApp: () => {}
};
