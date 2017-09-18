// @flow
import * as actionTypes from './actionTypes';

import api from './../../helpers/api';

import photos from './../photos';

// Action creators
export function addComment(comment: Comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: comment,
  };
}

export function addComments(comments: Array<Comment>) {
  return {
    type: actionTypes.ADD_COMMENTS,
    payload: comments,
  };
}

// Async actions
export function fetchPhotoComments(photoID: string): ThunkAction {
  return async dispatch => {
    const comments = await api.photos.getComments(photoID);

    dispatch(photos.actions.addComments(photoID, Object.keys(comments)));
    dispatch(addComments(comments));

    return Object.keys(comments);
  };
}

export function postComment(photoID: string, comment: Comment) {
  return async () => {
    const result = await api.comments.saveComment(photoID, comment);

    // dispatch(addComment(result));
    // dispatch(photos.actions.addPhotoComment(photoID, result.id));

    return result;
  };
}
