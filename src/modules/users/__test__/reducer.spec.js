import reducer from './../reducer';
import * as actions from './../actions';

import fixtures from './fixtures';

const INITIAL_STATE = {
  entities: {},
  currentUser: '',
  photos: {},
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('users entities', () => {
  test('should handle ADD_USER action', () => {
    const user = fixtures.getUser();
    const firebaseGoogleUser = {
      uid: user.id,
      displayName: user.info.fullname,
      email: user.social.email,
    };

    expect(reducer({}, actions.addUser(firebaseGoogleUser))).toEqual({
      ...INITIAL_STATE,
      entities: {
        [firebaseGoogleUser.uid]: firebaseGoogleUser,
      },
    });

    const anotherUser = fixtures.getUser();
    const anotherFirebaseGoogleUser = {
      uid: anotherUser.id,
      displayName: anotherUser.info.fullname,
      email: anotherUser.social.email,
    };

    expect(
      reducer(
        {
          entities: {
            [firebaseGoogleUser.uid]: firebaseGoogleUser,
          },
        },
        actions.addUser(anotherFirebaseGoogleUser)
      )
    ).toEqual({
      ...INITIAL_STATE,
      entities: {
        [firebaseGoogleUser.uid]: firebaseGoogleUser,
        [anotherFirebaseGoogleUser.uid]: anotherFirebaseGoogleUser,
      },
    });
  });

  test('should handle ADD_USERS action', () => {
    const users = fixtures.getUsers(3);

    expect(reducer({}, actions.addUsers(users))).toEqual({
      ...INITIAL_STATE,
      entities: users,
    });
  });
});

describe('users currentUser', () => {
  test('should handle SET_CURRENT_USER action', () => {
    const { uid } = fixtures.getUser();

    expect(reducer({}, actions.setCurrentUser(uid))).toEqual({
      ...INITIAL_STATE,
      currentUser: uid,
    });
  });
});
