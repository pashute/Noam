import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
// import Splash from '../../../pages/Splash';

export default class MainSplash extends React.Component {
  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }
  render() {
    return (
      <View>
        <Text>just changed a Splash again</Text>
        <Text>and some more texst</Text>
      </View>
    );
  }
} // .. class
MainSplash.propTypes = {
  showApp: PropTypes.func
};
MainSplash.defaultProps = {
  showApp: () => {
    console.log('mainSplash using default');
  }
};
