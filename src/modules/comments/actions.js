import * as actionTypes from './actionTypes';

import api from './../../helpers/api';

import photos from './../photos';

// Action creators
export function addComment(comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: comment,
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

    dispatch(photos.actions.addComments(photoID, Object.keys(comments)));
    dispatch(addComments(comments));

    return Object.keys(comments);
  };
}

export function postComment(photoID, comment) {
  return async () => {
    const result = await api.comments.saveComment(photoID, comment);

    // dispatch(addComment(result));
    // dispatch(photos.actions.addPhotoComment(photoID, result.id));

    return result;
  };
}
