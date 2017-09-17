import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

import fixtures from './fixtures';

describe('photos action creators', () => {
  test('should create an action to add a photo', () => {
    const photo = fixtures.getPhoto();

    const expectedAction = {
      type: actionTypes.ADD_PHOTO,
      payload: photo,
    };

    expect(actions.addPhoto(photo)).toEqual(expectedAction);
  });

  test('should create an action to add comments ids for a photo', () => {
    const photoID = fixtures.getPhoto().id;

    const expectedAction = {
      type: actionTypes.ADD_COMMENTS,
      payload: { photoID, commentIds: [1, 2, 3] },
    };

    expect(actions.addComments(photoID, [1, 2, 3])).toEqual(expectedAction);
  });

  test('should create an action to add a comment id for a photo', () => {
    const photoID = fixtures.getPhoto().id;
    const commentID = fixtures.getComment().id;

    const expectedAction = {
      type: actionTypes.ADD_COMMENT,
      payload: { photoID, commentID },
    };

    expect(actions.addComment(photoID, commentID)).toEqual(expectedAction);
  });
});
