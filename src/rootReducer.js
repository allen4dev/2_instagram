import { combineReducers } from 'redux';

import photos from './modules/photos';
import users from './modules/users';
import comments from './modules/comments';

const rootReducer = combineReducers({
  [photos.constants.NAME]: photos.reducer,
  [users.constants.NAME]: users.reducer,
  [comments.constants.NAME]: comments.reducer,
});

export default rootReducer;
