import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

const Demo1 = props => (
  <TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
);

Demo1.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
Demo1.defaultProps = {
  onPress: () => {},
};

export { Demo1 as default };
