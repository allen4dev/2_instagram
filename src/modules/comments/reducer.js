import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_COMMENTS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        [action.payload.photoID]: action.payload.comment,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
