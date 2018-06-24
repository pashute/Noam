import { YellowBox } from 'react-native';
// // This will load StorybookUI on Dev and App in Release
// import StorybookUI from './storybook';
import AppRedux from './AppRedux';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

// module.exports = __DEV__ ? StorybookUI : AppRedux;
module.exports = AppRedux;
