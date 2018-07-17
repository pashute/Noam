/* cSpell:disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View /*, Alert*/
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';
import ActionBar from 'react-native-action-bar';
// import PropTypes from 'prop-types';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from 'react-native-elements';
import RNSimpleCompass from 'react-native-simple-compass';

import NearBy from './tab_pages/NearBy';
import ThisWay from './tab_pages/ThisWay';
import InPlace from './tab_pages/InPlace';
import Menu from './Menu';
const earIcon = require('../assets/icons/ear1.png');

import { setCurrentPlace } from '../redux/actions';

// taken from appData
// const strExit = 'Exits';
// const strCall = 'Call';

const pointPlaceName = 'Big Fashion';
const pointBeaconLocation = 'South gate (Bank Leumi)';
const pointPlaceIconName = 'bold';

const strThis = 'this';
const strWay = 'way';
const strNearby = 'nearby';
const strInplace = 'In building';

// tab texts and icons:
const nearbyButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strNearby}</Text>
  </View>
);
const thatwayButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strThis} </Text>
    <Icon name="arrow-up" size={14} />
    <Text style={styles.tabText}>{' ' + strWay}</Text>
  </View>
);
const inplaceButton = () => (
  <View style={styles.tabButton}>
    <Text style={styles.tabText}>{strInplace}</Text>
  </View>
);

class MainPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      heading: 0,
      pointingTo: 'not set',
      placeIndex: 0,
      beaconIndex: 0,
      beaconUid: 12,
      tabIndex: 2,
      drawerClosed: true
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.updateTabIndex = this.updateTabIndex.bind(this);
  }

  componentDidMount() {
    const degree_update_rate = 10; // Number of degrees changed before the callback is triggered
    RNSimpleCompass.start(degree_update_rate, degree => {
      const fullDegree = 360 / 8;
      const angle = degree + fullDegree / 2;
      let pointingTo = 'North';
      if (angle >= 0 * fullDegree && angle < 1 * fullDegree)
        pointingTo = 'North';
      if (angle >= 1 * fullDegree && angle < 2 * fullDegree)
        pointingTo = 'North East';
      if (angle >= 2 * fullDegree && angle < 3 * fullDegree)
        pointingTo = 'East';
      if (angle >= 3 * fullDegree && angle < 4 * fullDegree)
        pointingTo = 'South East';
      if (angle >= 4 * fullDegree && angle < 5 * fullDegree)
        pointingTo = 'South';
      if (angle >= 5 * fullDegree && angle < 6 * fullDegree)
        pointingTo = 'South West';
      if (angle >= 6 * fullDegree && angle < 7 * fullDegree)
        pointingTo = 'West';
      if (angle >= 7 * fullDegree && angle < 8 * fullDegree)
        pointingTo = 'North West';
      this.setState({ heading: degree, pointingTo });
    });
  }

  updateTabIndex = tabIndex => {
    // console.log("dbg.MainPage.tab index: " + tabIndex);
    this.setState({ tabIndex });
  };

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  toggleDrawer = () => {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { placesData, stylesData, appData } = this.props.currentLanguage;
    return (
      <View style={styles.mainContainer}>
        <DrawerLayout
          drawerWidth={200}
          ref={drawerElement => {
            this.DRAWER = drawerElement;
          }}
          drawerPosition={DrawerLayout.positions.Right}
          onDrawerOpen={this.setDrawerState}
          onDrawerClose={this.setDrawerState}
          renderNavigationView={() => <Menu nav={navigate} />}
        >
          <ActionBar
            containerStyle={styles.actionBarContainer}
            titleStyle={styles.actionTitle}
            title={'noam'}
            leftIconImage={earIcon}
            onLeftPress={() => console.log('Talk Icon pressed.')}
            rightIcons={[
              {
                name: 'menu',
                onPress: this.toggleDrawer
              }
            ]}
          />
          <View style={styles.topPlaceRow}>
            <View style={styles.placeBar}>
              <Text style={styles.placeMsg}>
                {this.props.currentPlace.fullName}
              </Text>
              <Icon name={pointPlaceIconName} size={30} color="#000000" />
            </View>
            <Text style={styles.beaconTxt}>
              {this.props.currentBeacon.fullName}
            </Text>
          </View>
          <View style={styles.separator} />
          <ButtonGroup
            containerBorderRadius={40}
            onPress={this.updateTabIndex}
            selectedIndex={this.state.tabIndex}
            selectedButtonStyle={styles.tabSelected}
            buttons={[
              { element: nearbyButton },
              { element: thatwayButton },
              { element: inplaceButton }
            ]}
            containerStyle={{ height: 30 }}
          />

          <TabbedPage
            selectedIndex={this.state.tabIndex}
            pointingDirection={this.state.pointingTo}
            heading={this.state.heading}
            beaconIndex={this.state.beaconIndex}
          />
        </DrawerLayout>
      </View>
    );
  }
}

const TabbedPage = ({
  selectedIndex,
  pointingDirection,
  heading,
  beaconIndex
}) => {
  //console.log(pointingDirection);
  //console.log(heading);
  // console.log('tab: ' + selectedIndex + '  beaconIndex:' + beaconIndex);
  switch (selectedIndex) {
    case 0:
      return (
        <NearBy
          pointingDirection={pointingDirection}
          heading={heading}
          beaconIndex={beaconIndex}
        />
      );

    case 1:
      return (
        <ThisWay
          pointingDirection={pointingDirection}
          heading={heading}
          beaconIndex={beaconIndex}
        />
      );

    case 2:
    default:
      return <InPlace />;
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor: '#FDFDFD'
  },
  actionBarContainer: {
    backgroundColor: '#330077'
  },
  actionTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  /* tabs */
  tabButton: {
    flexDirection: 'row'
  },
  tabText: {
    fontSize: 14
  },
  /* tabSelecteButtonStyle:{}, */
  tabSelected: {
    backgroundColor: '#FFFFFF'
  },
  topPlaceRow: {
    /* */
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 5
  },
  placeBar: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40
  },
  placeMsg: {
    lineHeight: 20,
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'center'
  },
  placeIcon: {
    fontSize: 24,
    color: '#111145',
    marginLeft: 5
  },
  beaconTxt: {
    textAlign: 'center',
    fontSize: 18
  },
  buttonDecorator: {
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
    marginLeft: 20
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  }
});

const mapStateToProps = ({ data }) => {
  const { currentLanguage, currentPlace, currentBeacon } = data;
  return { currentLanguage, currentPlace, currentBeacon };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPlace: place => {
      dispatch(setCurrentPlace(place));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
