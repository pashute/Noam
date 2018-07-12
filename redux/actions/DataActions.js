// Import package from node modules
import * as types from '../types';
import { AsyncStorage } from 'react-native';

export const setCurrentLanguage = language => {
  console.log(language);
  return {
    type: types.SET_CURRENT_LANGUAGE,
    language: language
  };
};

export const setCurrentPlace = place => {
  console.log(place);
  return {
    type: types.SET_CURRENT_PLACE,
    place: place
  };
};

export const setCurrentBeacon = beacon => {
  console.log(beacon);
  return {
    type: types.SET_CURRENT_BEACON,
    beacon: beacon
  };
};
