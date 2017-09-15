import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        [action.payload.id]: action.payload,
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

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
