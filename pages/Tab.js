import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, 
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import NearBy from './tab_pages/NearBy';
import ThisWay from './tab_pages/ThisWay';
import InBuilding from './tab_pages/InBuilding'
import DrawerLayout from 'react-native-drawer-layout';
import Menu from './Menu';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from 'react-native-elements';
import "@expo/vector-icons";

const str_exit='Exits'
const str_call='Call'
const ear_icon = require('../assets/icons/ear1.png')
const str_welcome ='Big Fashion\n\nSouth gate (Bank Leumi)';

const icon_Place = (<Icon name="adjust" size={30} color="#900" />)

export default class Tab extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
          titleText: "noam ",
          bodyText: "You're indoor assistant",
          drawerClosed: true,
          tabIndex: 1,
        };
    
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.setDrawerState = this.setDrawerState.bind(this);
      }

      updateTabIndex = (tabIndex) => {
        this.setState({tabIndex})
      }

      setDrawerState(){
        this.setState({
          drawerClosed: !this.state.drawerClosed,
        });
      }
    
      toggleDrawer = () => {
        if(this.state.drawerClosed)
        {
          this.DRAWER.openDrawer();
        } else {
          this.DRAWER.closeDrawer();
        }
      }
      _positionDetect()
      {

      }
      _positionDecide(){
        _positionDetect();
        if(isBigFashion == true){
          return "Big Fashion-Main Gate";
        }
        if(isElevator == true){
          return "Big Fashion: Elevator C3 "
        }
        if(isPark == true){
          return "Park Harova"
        }
      }
      render() {
        const { navigate } = this.props.navigation;
      
        return (
          <View style={styles.container}>
            <DrawerLayout
              drawerWidth={200}
              ref={drawerElement => {
                this.DRAWER = drawerElement;
              }}
              drawerPosition={DrawerLayout.positions.Right}
              onDrawerOpen={this.setDrawerState}
              onDrawerClose={this.setDrawerState}
              renderNavigationView={() => <Menu nav = {navigate}/>} 
            >
              <ActionBar
                containerStyle={styles.bar}
                titleStyle={styles.title}
                title={'noam'}
                leftIconName={'location'}
                onLeftPress={() => console.log('Left!')}
                rightIcons={[
                    {
                        name: 'menu',
                        onPress: this.toggleDrawer,
                    },
                ]}
              />
              <View style={{ flexDirection:'row', marginTop:10,marginLeft:40, marginRight:40}}>
                <Text style={styles.placemsg}>{/*.assistance*/}
                  {str_welcome}
                </Text> 
                <Text style={{fontSize:24,color:'#111145', marginLeft:5}}>
                  BiG
                </Text>
            </View> 
            <ButtonGroup
              selectedBackgroundColor="pink"
              onPress={this.updateIndex}
              selectedIndex={this.state.tabIndex}
              buttons={['Nearby', 'That  way','In Building']}
              containerStyle={{height: 30}} />

              <Tabpage/>
              </DrawerLayout>
            </View>
        );
      }

}

const Tabpage = TabNavigator({
  NearByPage: {
    screen: NearBy,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: 'NearBy'
    },
  },
  ThisWayPage: {
    screen: ThisWay,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: 'ThisWay'
    },
  },
  InBuildingPage: {
    screen: InBuilding,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: 'In Building'
    },
  },
  },
  {
      initialRouteName: 'ThisWayPage',
      tabBarPosition: 'top',
      tabBarOptions: {
        backgroundColor: '#FFFFFF',
        activeTintColor: '#555555',
        labelStyle: {
          fontSize: 10,
        },
      },
  },
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: (Platform.OS === 'ios') ? 0 : 
          Expo.Constants.statusBarHeight,
      backgroundColor: '#F5F1FF',
    },
    welcome: {
      fontSize: 35,
      color: '#6600ff',
  
    },
    assistant:{
      lineHeight: 30,
      flex: 1,
      fontSize: 24,
    },
    placemsg:{
      lineHeight: 20,
      flex: 1,
      fontSize: 20,
    },
    instructions: {
      marginTop: 40,
      textAlign: 'left',
      color: '#333333',
      marginBottom: 80,
      fontSize: 20,
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

