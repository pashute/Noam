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

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 35,
    color: '#6600ff'
  },
  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20,
    fontStyle: 'normal'
  },
  assistant: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  buttonDecorator: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    margin: 10
  }
});

const mapStateToProps = ({ data }) => {
  const { currentLanguage } = data;
  return { currentLanguage };
};

export default connect(mapStateToProps, {})(HelpFirstTime);
