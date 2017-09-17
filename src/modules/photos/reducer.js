import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  comments: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_PHOTOS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.ADD_PHOTO:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
}

function commentsReducer(state = INITIAL_STATE.comments, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_COMMENTS:
      return {
        ...state,
        [action.payload.photoID]: action.payload.commentIds,
      };

    case actionTypes.ADD_PHOTO_COMMENT:
      return {
        ...state,
        [action.payload.photoID]: [
          ...state[action.payload.photoID],
          action.payload.commentID,
        ],
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  comments: commentsReducer,
});

export default reducer;
