import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SetHome from './setting_pages/SetHome';
import Calibrate from './setting_pages/Calibrate';
import AutoUpdate from './setting_pages/AutoUpdate';
import Voice from './setting_pages/Voice';
import Preferences from './setting_pages/Preferences';
import Profile from './setting_pages/Profile';

const Settings = StackNavigator(
  {
    AutoUpdate: {
      screen: AutoUpdate,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    },
    Calibrate: {
      screen: Calibrate,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    },
    Preferences: {
      screen: Preferences,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    },
    SetHome: {
      screen: SetHome,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    },

    Voice: {
      screen: Voice,
      navigationOptions: {
        headermode: 'screen',
        header: null
      }
    }
  },

  {
    initialRouteName: 'SetHome'
  }
);

export default Settings;
