import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Switch,
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import {StackNavigator,} from 'react-navigation';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const str_back = '< Back';
const str_toc = "TOC"
const str_next = 'Next >'
const str_title = '3.Personal Assistant'
const str_status = "Assistant is currently OFF"
const str_on = 'Turn assistant on'
const str_choose = 'Choose voice'
const str_male = 'Male'
const str_Female = 'Female'
const str_description = 'If you trun this option on\n' + 'you can talk freely with the\n'+ 'app. Just say Hey Noam!\n'+'and ask about the building.\n'+'in your own words.'
const radio_props = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];

export default class Personal extends Component<{}> {
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
                        
                        leftIconName={'star'}
                        
                        onLeftPress={() => console.log('Left!')}
                        
                    />
                       
             <Text style={styles.assistant}>
                Settings
            </Text>
            <Text style={styles.instructions}>
                       {str_title}
              </Text>

              <View style={{
                flex: 1,
                flexDirection: 'column',
                
                alignItems: 'center',
                }}>
                    <Text style={styles.describe}>
                            {str_description}
                    </Text>

                        <Text style={styles.describe}>
                            {str_status}
                    </Text>
                    <Switch
                        
                        value={false}
                        onValueChange={(val) => console.log(val)}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={30}
                        barHeight={1}
                        circleBorderWidth={3}
                        backgroundActive={'green'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#30a566'}
                        circleInActiveColor={'#000000'}
                    />
                    <Text style={styles.describe}>
                            {str_choose}
                    </Text>             
                    <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={true}
                    onPress={(value) => {this.setState({value:value})}}
                    />              
                </View>  

            
            <View style={{
                   flex: 1,
                   flexDirection: 'row',
                   justifyContent: 'space-between',
                   }}>
                   <Text onPress={() => navigate('AutoUpdate')}style={styles.navbtn}>
                       {str_back}
                   </Text>
                   <Text onPress={() => navigate('TabPage')}style={styles.navbtn}>
                       {str_toc}
                   </Text>
                   <Text onPress={() => navigate('Profile')}style={styles.navbtn}>
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
    navbtn: {
        marginTop: 150,
        textAlign: 'left',
        color: '#333333',
        marginBottom: 10,
        fontSize: 20,
        marginLeft: 25,
        marginRight: 25,
        
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
    describe: {
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
        fontSize: 20,
        

      },
    assistant:{
      fontSize: 24,
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
