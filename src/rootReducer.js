import { combineReducers } from 'redux';

import photos from './modules/photos';

const rootReducer = combineReducers({
  [photos.constants.NAME]: photos.reducer,
});

export default rootReducer;
