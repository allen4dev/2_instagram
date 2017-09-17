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

export function addComments(photoID, commentIds) {
  return {
    type: actionTypes.ADD_COMMENTS,
    payload: { photoID, commentIds },
  };
}

export function addPhotoComment(photoID, commentID) {
  return {
    type: actionTypes.ADD_PHOTO_COMMENT,
    payload: { photoID, commentID },
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
  return async () => {
    const snapshot = await api.photos.savePhotoToStorage(photo);
    const newPhoto = await api.photos.savePhoto({
      ...info,
      src: snapshot.downloadURL,
    });

    return newPhoto;
  };
}
