import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';
// import {StackNavigator,} from 'react-navigation';
// import RNExitApp from 'react-native-exit-app';
import Bottom from './tab_pages/Bottom.js';
import { languageDataCtx } from '../AppMain';

class Help extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, goBack, replace, popToTop } = this.props.navigation;
    const { stylesData, appData } = this.props.currentLanguage;
    return (
      <View
        style={[stylesData.styles.sharedStyles.mainContainer, styles.topMargin]}
      >
        <ActionBar
          containerStyle={stylesData.styles.sharedStyles.actionBarContainer}
          titleStyle={stylesData.styles.sharedStyles.actionTitle}
          title={appData.appData.general.txtAppNameOnActionBar}
          leftIconName={'location'}
          onLeftPress={() => console.log('Help page left pressed!')}
        />
        <View
          style={[
            stylesData.styles.sharedStyles.contentContainer,
            styles.buttonContainer
          ]}
        >
          <Text style={stylesData.styles.sharedStyles.titleText}>
            {appData.appData.screensHelp.txtHelp}
          </Text>

          <View style={stylesData.styles.sharedStyles.buttonDecorator}>
            <Button
              onPress={() => navigate('HelpGettingStarted')}
              titleStyle={stylesData.styles.sharedStyles.buttonText}
              title={appData.appData.screensHelp.txtGettingStarted}
              color={stylesData.styles.sharedStyles.buttonStyle.color}
              accessibilityLabel={
                appData.appData.screensSettings.txtToGoTo +
                appData.appData.screensHelp.gettingStarted.textTitle
              }
            />
          </View>
          <View style={stylesData.styles.sharedStyles.buttonDecorator}>
            <Button
              onPress={() => navigate('HelpTroubleshooting')}
              titleStyle={stylesData.styles.sharedStyles.buttonText}
              title={appData.appData.screensHelp.txtTroubleshooting}
              color={stylesData.styles.sharedStyles.buttonStyle.color}
              accessibilityLabel={
                appData.appData.screensSettings.txtToGoTo +
                appData.appData.screensHelp.troubleshooting.textTitle
              }
            />
          </View>
          <View style={stylesData.styles.sharedStyles.buttonDecorator}>
            <Button
              onPress={() => navigate('HelpFAQ')}
              titleStyle={stylesData.styles.sharedStyles.buttonText}
              title={appData.appData.screensHelp.txtFaq}
              color={stylesData.styles.sharedStyles.buttonStyle.color}
              accessibilityLabel={
                appData.appData.screensSettings.txtToGoTo +
                appData.appData.screensHelp.faq.textTitle
              }
            />
          </View>
        </View>
        <View style={stylesData.styles.sharedStyles.bottomNavRow}>
          <Text
            onPress={() => navigate('MainPage')}
            style={stylesData.styles.sharedStyles.navButton}
          >
            {appData.appData.general.txtDone}
          </Text>
        </View>
        <View style={stylesData.styles.sharedStyles.bottomRow}>
          <Bottom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topMargin: {
    marginTop: Platform.OS === 'ios' ? 0 : 0
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

const mapStateToProps = ({ data }) => {
  const { currentLanguage } = data;
  return { currentLanguage };
};

export default connect(
  mapStateToProps,
  {}
)(Help);
