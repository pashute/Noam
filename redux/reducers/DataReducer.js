import * as types from '../types';

const INITIAL_STATE = {
  currentLanguage: {},
  currentPlace: {},
  currentBeacon: {},
  currentPlacesData: {},
  beaconPlaceRelation: []
  //current beacon
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_LANGUAGE: {
      return { ...state, currentLanguage: action.language };
    }
    case types.SET_CURRENT_PLACE: {
      return { ...state, currentPlace: action.place };
    }
    case types.SET_CURRENT_BEACON: {
      return { ...state, currentBeacon: action.beacon };
    }
    case types.SET_BEACON_PLACE_RELATION_BEACON: {
      return { ...state, beaconPlaceRelation: action.beaconPlaceRelation };
    }
    case types.SET_CURRENT_PLACES_DATA: {
      return { ...state, currentPlacesData: action.currentPlacesData };
    }
    default: {
      return state;
    }
  }
};
