import { NAME } from './constants';

export function getAll(state) {
  return state[NAME].entities;
}

export function getCurrentUser(state) {
  return state[NAME].currentUser;
}

export function getUser(state) {
  const user = getCurrentUser(state);
  return state[NAME].entities[user];
}

export function getPhotos(state) {
  const user = getCurrentUser(state);
  return state.users.photos[user] || [];
}

export const dummieSelector2 = 'b';
