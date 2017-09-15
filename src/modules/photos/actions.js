import * as actionTypes from './actionTypes';

// Action Creators
export function addPhoto(photo) {
  return {
    type: actionTypes.ADD_PHOTO,
    payload: photo,
  };
}

export function addPhotos(photos) {
  return {
    type: actionTypes.ADD_PHOTOS,
    payload: photos,
  };
}

// Async Actions
