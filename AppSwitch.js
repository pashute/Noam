// This will load StorybookUI on Dev and App in Release
// import { module } from 'react-native';
import StorybookUI from './storybook';
import AppMain from './AppMain';

module.exports = __DEV__ ? StorybookUI : AppMain;