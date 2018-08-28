import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ActionBar from 'react-native-action-bar';
import { Button } from 'react-native';
// import { languageDataCtx } from '../../AppMain';

class HelpFirstTime extends Component {
  //<{}> {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('helpfirsttime-firstTime').then(value => {
      console.log('helpfirsttime:', value);
      if (value === 'true') {
        const { replace } = this.props.navigation;
        replace('SplashPage');
      } else {
        AsyncStorage.setItem('helpfirsttime-firstTime', 'true');
      }
    });
  }

  render() {
    const { replace } = this.props.navigation;
    const { placesData, stylesData, appData } = this.props.currentLanguage;
    console.log("dbg.help1stTime.styles ", stylesData);
    return (
      <View
        style={[stylesData.styles.sharedStyles.mainContainer, styles.topMargin]}
      >
        <ActionBar
          containerStyle={stylesData.styles.sharedStyles.actionBarContainer}
          titleStyle={stylesData.styles.sharedStyles.actionTitle}
          title={appData.appData.general.txtAppNameOnActionBar}
          leftIconName={'location'}
          onLeftPress={() =>
            console.log('dbg.help1stTm.actionbar requested Voice-Assist!')
          }
        />
        <View style={stylesData.styles.sharedStyles.contentContainer}>
          <Text style={stylesData.styles.sharedStyles.instructionsHeader}>
            {appData.appData.screensSettings.screenFirstTime.txtFirstTimeHeader}
          </Text>
          <View style={stylesData.styles.sharedStyles.instructionsView}>
            <Text style={stylesData.styles.sharedStyles.instructions}>
              {appData.appData.screensSettings.screenFirstTime.txtFirstTimeMsg}
            </Text>
          </View>
          <View style={stylesData.styles.sharedStyles.buttonDecorator}>
            <Button
              onPress={() => {
                replace('SplashPage');
              }}
              title={'Continue to app'}
              color="#111111"
              accessibilityLabel={'Tap on Me to '}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { currentLanguage } = data;
  return { currentLanguage };
};

export default connect(mapStateToProps, {})(HelpFirstTime);
