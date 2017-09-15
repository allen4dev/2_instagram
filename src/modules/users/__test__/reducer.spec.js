import reducer from './../reducer';
import * as actions from './../actions';

import fixtures from './fixtures';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({ entities: {} });
});

describe('users entities', () => {
  test('should handle ADD_USER action', () => {
    const user = fixtures.getUser();

    expect(reducer({}, actions.addUser(user))).toEqual({
      entities: {
        [user.id]: user,
      },
    });

    const anotherUser = fixtures.getUser();

    expect(
      reducer(
        {
          entities: {
            [user.id]: user,
          },
        },
        actions.addUser(anotherUser),
      ),
    ).toEqual({
      entities: {
        [user.id]: user,
        [anotherUser.id]: anotherUser,
      },
    });
  });

  test('should handle ADD_USERS action', () => {
    const users = fixtures.getUsers(3);

    expect(reducer({}, actions.addUsers(users))).toEqual({
      entities: users,
    });
  });
});
