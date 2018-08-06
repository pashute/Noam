import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class MainSplash extends React.Component {
  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }
  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Splash page goes here</Text>
      </View>
    );
  }
} // .. class
MainSplash.propTypes = {
  showApp: PropTypes.func
};
MainSplash.defaultProps = {
  showApp: () => {}
};
