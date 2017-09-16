import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  currentUser: '',
  photos: {},
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

function photosReducer(state = INITIAL_STATE.photos, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_USER_PHOTO:
      return {
        ...state,
        [action.payload.uid]: [
          ...state[action.payload.uid],
          action.payload.photoId,
        ],
      };

    case actionTypes.ADD_USER_PHOTOS:
      return {
        ...state,
        [action.payload.uid]: action.payload.photoIds,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  currentUser: currentUserReducer,
  photos: photosReducer,
});

export default reducer;
