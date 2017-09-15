import * as actionTypes from './actionTypes';

// Action Creators
export function addUser(user) {
  return {
    type: actionTypes.ADD_USER,
    payload: user,
  };
}

export function addUsers(users) {
  return {
    type: actionTypes.ADD_USERS,
    payload: users,
  };
}
