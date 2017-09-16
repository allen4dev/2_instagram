import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  currentUser: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        [action.payload.uid]: action.payload,
      };

    case actionTypes.ADD_USERS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function currentUserReducer(state = INITIAL_STATE.currentUser, action = {}) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return action.payload;

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  currentUser: currentUserReducer,
});

export default reducer;
