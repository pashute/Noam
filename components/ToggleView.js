import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';

export default class ToggleView extends React.Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }

      toggleHidden (){
          this.setState({
              isHidden:!this.sate.isHidden
          })
      }

      render() {
          return (
               <View>
               
               </View>

          )
      }
}