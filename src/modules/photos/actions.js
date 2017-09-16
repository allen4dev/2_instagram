import * as actionTypes from './actionTypes';

import api from './../../helpers/api';

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
export function fetchSingle(uid, id) {
  return async dispatch => {
    const snapshot = await api.photos.getSingle(uid, id);

    dispatch(addPhoto(snapshot));

    return snapshot;
  };
}

// export function postPhoto(userId, photo, description) {
export function postPhoto(photo, info) {
  return async dispatch => {
    const snapshot = await api.photos.savePhotoToStorage(photo);
    const newPhoto = await api.photos.savePhoto({
      ...info,
      src: snapshot.downloadURL,
    });

    dispatch(addPhoto(newPhoto));

    return newPhoto;
  };
}
