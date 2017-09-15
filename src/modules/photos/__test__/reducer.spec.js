import reducer from './../reducer';
import * as actions from './../actions';

import fixtures from './fixtures';

// Refactor: Move the hardcoded key (entities) to other file
// maybe constants and use in both, reducer and tests
test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({ entities: {} });
});

describe('entities', () => {
  test('should handle ADD_PHOTO', () => {
    const photo = fixtures.getPhoto();

    expect(reducer({}, actions.addPhoto(photo))).toEqual({
      entities: {
        [photo.id]: photo,
      },
    });

    const newPhoto = fixtures.getPhoto();

    expect(
      reducer(
        {
          entities: {
            [photo.id]: photo,
          },
        },
        actions.addPhoto(newPhoto)
      )
    ).toEqual({
      entities: {
        [photo.id]: photo,
        [newPhoto.id]: newPhoto,
      },
    });
  });
});
