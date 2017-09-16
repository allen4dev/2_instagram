import * as actionTypes from './actionTypes';

import api from './../../helpers/api';

import photos from './../photos';

// Action Creators
export function addUser(user) {
  return {
    type: actionTypes.ADD_USER,
    payload: user,
  };
}

export function addUsers(users) {
  return {
    type: actionTypes.ADD_USERS,
    payload: users,
  };
}

export function setCurrentUser(uid) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: uid,
  };
}

export function addUserPhoto(uid, photoId) {
  return {
    type: actionTypes.ADD_USER_PHOTO,
    payload: { uid, photoId },
  };
}

export function addUserPhotos(uid, photoIds) {
  return {
    type: actionTypes.ADD_USER_PHOTOS,
    payload: { uid, photoIds },
  };
}

// Async actions
export function fetchUserPhotos(uid) {
  return async dispatch => {
    const response = await api.photos.getUserPhotos(uid);
    dispatch(photos.actions.addPhotos(response));
    dispatch(addUserPhotos(uid, Object.keys(response)));
    return Object.keys(response);
  };
}
