import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import {StackNavigator,} from 'react-navigation';

const title = "1. Calibrating Compass";
const str_wait = "Please point the top of your device forward ...";
const str_turn = "then turn it\n" +
                 "in a large figure eight\n"+ "to calibrate the compass";
const str_back = '< Back';
const str_toc = "TOC"
const str_next = 'Next >'
export default class Calibrate extends Component<{}> {
  constructor(props) {
    super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container} onPress={this._onPressMainPage}>
              <ActionBar
                        containerStyle={styles.bar}
                        titleStyle={styles.title}
                        title={'Noam'}
                        
                        leftIconName={'location'}
                        
                        onLeftPress={() => console.log('Left!')}
                        
                    />
                       
             <Text style={styles.assistant}>
                Settings            
            </Text>
            <Text style={styles.instructions}>
                {title}
            </Text>
            <Text style={styles.describe}>
                {str_wait}
            </Text>

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View>
                <Text style={styles.describe}>
                {str_turn}
                </Text>
                </View>
                <View>
                <Image
                    style={{width: 100, height: 100,marginLeft:20,}}
                    source={{uri: 'https://previews.123rf.com/images/donets/donets1601/donets160100046/51360120-north-direction-compass-icon-vector-Stock-Vector.jpg'}}
                    />
                </View>

            </View>
                <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                }}>
                    <Text onPress={() => navigate('SetHome')} style={styles.navbtn}>
                        {str_back}
                    </Text>
                    <Text onPress={() => navigate('TabPage')} style={styles.navbtn}>
                        {str_toc}
                    </Text>
                    <Text onPress={() => navigate('AutoUpdate')} style={styles.navbtn}>
                        {str_next}
                    </Text>
                </View>

                       
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#F5FCFF',
    },
    instructions: {
      marginTop: 25,
      textAlign: 'left',
      color: '#333333',
      marginBottom: 10,
      fontSize: 20,
      marginLeft: 25,
      marginRight: 25,
    },
    navbtn: {
        marginTop: 120,
        textAlign: 'left',
        color: '#333333',
        marginBottom: 10,
        fontSize: 20,
        marginLeft: 25,
        marginRight: 25,
      },
    describe: {
        marginTop: 10,
        textAlign: 'left',
        color: '#333333',
        marginBottom: 10,
        fontSize: 20,
        marginLeft: 25,
      },
    assistant:{
      fontSize: 30,
      marginTop: 60,
      marginLeft: 20,
      marginRight: 20,
  
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
      },
    buttonContainer: {
      backgroundColor: '#2E9298',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25,
      marginRight: 20,
      marginLeft: 20,
    },
  });
