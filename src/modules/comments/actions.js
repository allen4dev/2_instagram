import * as actionTypes from './actionTypes';

import api from './../../helpers/api';

// Action creators
export function addComment(photoID, comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: { photoID, comment },
  };
}

export function addComments(comments) {
  return {
    type: actionTypes.ADD_COMMENTS,
    payload: comments,
  };
}

// Async actions
export function fetchPhotoComments(photoID) {
  return async dispatch => {
    const comments = await api.photos.getComments(photoID);
    dispatch(addComments(comments));

    return Object.keys(comments);
  };
}

export function postComment(photoID, comment) {
  return async dispatch => {
    const result = await api.comments.saveComment(photoID, comment);
    dispatch(addComment(photoID, result));

    return result;
  };
}
