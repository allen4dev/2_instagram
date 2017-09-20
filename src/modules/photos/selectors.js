// Use this to create selectors to handle the feature state
// with reselect library
import { createSelector } from 'reselect';
import { NAME } from './constants';

import users from './../users';

// Selector inputs
export function getAll(state) {
  return state[NAME].entities;
}

export function getPhoto(state, props) {
  return state[NAME].entities[props.id];
}

export function getComments(state, props) {
  return state[NAME].comments[props.id] || [];
}

// Memoized selectors
export const getUserPhotos = createSelector(
  [getAll, users.selectors.getPhotos],
  (photos, photoIds) => photoIds.map(id => photos[id]).reverse()
);
