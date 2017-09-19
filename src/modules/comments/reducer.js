// @flow

import { combineReducers } from 'redux';

// import * as actionTypes from './actionTypes';

import type { Action } from './model';

const INITIAL_STATE = {
  entities: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action: Action) {
  switch (action.type) {
    // Fix: Using actionTypes module breacks flow
    case 'comments/ADD_COMMENTS':
      return {
        ...state,
        ...action.payload,
      };

    case 'comments/ADD_COMMENT':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
