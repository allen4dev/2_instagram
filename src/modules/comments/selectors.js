import { createSelector } from 'reselect';
import { NAME } from './constants';

import photos from './../photos';

export function getAll(state) {
  return state[NAME].entities;
}

export const getPhotoComments = createSelector(
  [getAll, photos.selectors.getComments],
  (comments, commentIds) => commentIds.map(id => comments[id])
);

// function mapStateToProps(state, { match }) {
//   const commentIds = state.photos.comments[match.params.id] || [];

//   return {
//     photoComments: commentIds.map(id => state.comments.entities[id]),
//     photo: state.photos.entities[match.params.id],
//   };
// }
