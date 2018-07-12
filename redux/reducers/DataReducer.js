import * as types from '../types';

const INITIAL_STATE = {
  currentLanguage: {},
  currentPlace: {},
  currentBeacon: {} //current beacon
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
    default: {
      return state;
    }
  }
};
