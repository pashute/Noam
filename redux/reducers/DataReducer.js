import * as types from '../types';

const INITIAL_STATE = { currentLanguage: {}, currentPlace: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_LANGUAGE: {
      return { ...state, currentLanguage: action.language };
    }
    case types.SET_CURRENT_PLACE: {
      return { ...state, currentPlace: action.place };
    }
    default: {
      return state;
    }
  }
};
