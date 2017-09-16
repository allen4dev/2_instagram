import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

import fixtures from './fixtures';

describe('action creators', () => {
  test('should create an action to add a single user', () => {
    const user = fixtures.getUser();

    const expectedAction = {
      type: actionTypes.ADD_USER,
      payload: user,
    };

    expect(actions.addUser(user)).toEqual(expectedAction);
  });

  test('should create an action to add multiple users', () => {
    const users = fixtures.getUsers(3);

    const expectedAction = {
      type: actionTypes.ADD_USERS,
      payload: users,
    };

    expect(actions.addUsers(users)).toEqual(expectedAction);
  });

  test('should create an action to set a current user', () => {
    const user = fixtures.getUser();

    const firebaseGoogleUser = { uid: user.id, displayName: user.info.fullname, email: user.social.email };

    const expectedAction = {
      type: actionTypes.SET_CURRENT_USER,
      payload: firebaseGoogleUser,
    };

    expect(actions.setCurrentUser(firebaseGoogleUser)).toEqual(expectedAction);
  });
});
