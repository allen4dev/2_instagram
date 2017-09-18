// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

// Thunk Actions
export type PromiseAction = Promise<Action>;
export type GetState = () => State;
/* eslint-disable */
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
