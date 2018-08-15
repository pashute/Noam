// This will load StorybookUI on Dev and App in Release
// import { module } from 'react-native';
import StorybookUI from './storybook';
import AppRedux from './AppRedux';
import HockeyApp from 'react-native-hockeyapp';

componentWillMount() {
    HockeyApp.configure(HOCKEY_APP, true);
}

componentDidMount() {
    HockeyApp.start();
    HockeyApp.checkForUpdate();
    HockeyApp.start();
}

module.exports = __DEV__ ? AppRedux : AppRedux;

// // Export the one you want
// import AppMain from './AppMain'; // Main-App
// import AppStorybook from './storybook'; // Storybook view
// import AppSwitch from './AppSwitch'; // Dev: storybook, Prod: Main-App

// export default AppSwitch;
