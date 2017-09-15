import { combineReducers } from 'redux';

import photos from './modules/photos';
import users from './modules/users';

const rootReducer = combineReducers({
  [photos.constants.NAME]: photos.reducer,
  [users.constants.NAME]: users.reducer,
});

export default rootReducer;
