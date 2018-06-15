import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

const Demo1 = props => (
  <TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>
);

Demo1.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};
Demo1.defaultProps = {
  onPress: () => {},
};

export { Demo1 as default };
