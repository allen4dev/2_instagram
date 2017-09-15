import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

test('should create an action to add a photo', () => {
  const photo = {
    id: 'firebaseId',
    src: 'https://example.test',
    description: 'An awesome photo',
  };

  const expectedAction = {
    type: actionTypes.ADD_PHOTO,
    payload: photo,
  };

  expect(actions.addPhoto(photo)).toEqual(expectedAction);
});
