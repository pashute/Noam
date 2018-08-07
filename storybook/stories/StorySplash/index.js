import React from 'react';
import { View, Text, StyleSheet /*, Platform */ } from 'react-native';
import PropTypes from 'prop-types';

// const colorButtonShadow = '#181818'; // was '#00000F' 181818 is dark

export default class StorySplash extends React.Component {
  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Splash page goes here</Text>
      </View>
    );
  }
} // .. class
StorySplash.propTypes = {
  showApp: PropTypes.func
};
StorySplash.defaultProps = {
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
