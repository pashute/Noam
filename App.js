// This will load StorybookUI on Dev and App in Release
import StorybookUI from './storybook';
import AppRedux from './AppRedux';

// module.exports = __DEV__ ? StorybookUI : AppRedux;
module.exports = __DEV__ ? AppRedux : AppRedux;
