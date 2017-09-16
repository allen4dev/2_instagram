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
});
