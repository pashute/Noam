// Import package from node modules
import * as types from '../types';
import { AsyncStorage } from 'react-native';

export const setAllBeaconsPlacesRelation = beaconPlaceRelation => {
  // console.log('dbg.dataActions.bcnPlcRel', beaconPlaceRelation);
  return {
    type: types.SET_BEACON_PLACE_RELATION_BEACON,
    beaconPlaceRelation: beaconPlaceRelation
  };
};

export const setCurrentPlacesData = currentPlacesData => {
  // console.log('dbg.dataAction placesData', currentPlacesData);
  return {
    type: types.SET_CURRENT_PLACES_DATA,
    currentPlacesData: currentPlacesData
  };
};

export const setCurrentLanguage = language => {
  // console.log('dbg.dataActions.language', language);
  return {
    type: types.SET_CURRENT_LANGUAGE,
    language: language
  };
};

export const setCurrentPlace = place => {
  // console.log('dbg.dataActions. set currentplace', place);
  return {
    type: types.SET_CURRENT_PLACE,
    place: place
  };
};

export const setCurrentBeacon = beacon => {
  // console.log('dbg.dataActions. setCurrentBeacon', beacon);
  return {
    type: types.SET_CURRENT_BEACON,
    beacon: beacon
  };
};

export const setIsInMainPage = isInMainPage => {
  // console.log('dbg.dataActions. setIsInMainPage', isInMainPage);
  return {
    type: types.SET_IS_IN_MAINPAGE,
    isInMainPage: isInMainPage
  };
};
