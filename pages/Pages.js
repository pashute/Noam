import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './setting_pages/Settings';
import Calibrate from './setting_pages/Calibrate';
import AutoUpdate from './setting_pages/AutoUpdate';
import Voice from './setting_pages/Voice';
import Preferences from './setting_pages/Preferences';
import Profile from './setting_pages/Profile';

const SettingsPages = StackNavigator(
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
    Settings: {
      screen: Settings,
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
    initialRouteName: 'Settings'
  }
);

export default Settings;
