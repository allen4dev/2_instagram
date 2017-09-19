// @flow

// Normally you will use this file fow types (typescripr, flow)
// and utility functions for the feature

import * as actionTypes from './actionTypes';

export type Comment = {
  id: string,
  avatar: string,
  body: string,
  displayName: string,
  uid: string,
};

export type Comments = { [id: string]: Comment };

// Actions

export type ADD_COMMENT = {
  type: 'comments/ADD_COMMENT',
  payload: Comment,
};

export type ADD_COMMENTS = {
  type: 'comments/ADD_COMMENTS',
  payload: Comments,
};

export type Action = ADD_COMMENT | ADD_COMMENTS;
