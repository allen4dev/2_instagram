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
export function fetchSingle(id) {
  return async dispatch => {
    const snapshot = await api.photos.getSingle(id);

    dispatch(addPhoto(snapshot));

    return snapshot;
  };
}

export function postPhoto(userId, photo, description) {
  return async dispatch => {
    const snapshot = await api.photos.savePhotoToStorage(photo);
    const newPhoto = await api.photos.savePhoto({
      userId,
      description,
      src: snapshot.downloadURL,
    });

    dispatch(addPhoto(newPhoto));

    return newPhoto;
  };
}
