// Import package from node modules
import * as types from '../types';
import { AsyncStorage } from 'react-native';

export const setAllBeaconsPlacesRelation = beaconPlaceRelation => {
  console.log('beaconPlaceRelation', beaconPlaceRelation);
  return {
    type: types.SET_BEACON_PLACE_RELATION_BEACON,
    beaconPlaceRelation: beaconPlaceRelation
  };
};

export const setCurrentPlacesData = currentPlacesData => {
  console.log('dbg.placesData', currentPlacesData);
  return {
    type: types.SET_CURRENT_PLACES_DATA,
    currentPlacesData: currentPlacesData
  };
};

export const setCurrentLanguage = language => {
  console.log('dbg.dataActions.language', language);
  return {
    type: types.SET_CURRENT_LANGUAGE,
    language: language
  };
};

export const setCurrentPlace = place => {
  console.log('dbg.dataactions. set currentplace', place);
  return {
    type: types.SET_CURRENT_PLACE,
    place: place
  };
};

export const setCurrentBeacon = beacon => {
  console.log('dbg.dataactions. setCurrentBeacon', beacon);
  return {
    type: types.SET_CURRENT_BEACON,
    beacon: beacon
  };
};
