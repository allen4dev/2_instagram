import reducer from './../reducer';
import * as actions from './../actions';

import fixtures from './fixtures';

const INITIAL_STATE = {
  entities: {},
  comments: {},
};

// Refactor: Move the hardcoded key (entities) to other file
// maybe constants and use in both, reducer and tests
test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('photos entities', () => {
  test('should handle ADD_PHOTO', () => {
    const photo = fixtures.getPhoto();

    expect(reducer({}, actions.addPhoto(photo))).toEqual({
      ...INITIAL_STATE,
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
      ...INITIAL_STATE,
      entities: {
        [photo.id]: photo,
        [newPhoto.id]: newPhoto,
      },
    });
  });

  test('should handle ADD_COMMENTS', () => {
    const photoID = fixtures.getPhoto().id;
    const comments = fixtures.getComments(3);
    // console.log(comments);

    expect(
      reducer({ comments: {} }, actions.addComments(photoID, Object.keys({})))
    ).toEqual({
      ...INITIAL_STATE,
      comments: {
        [photoID]: [],
      },
    });

    expect(
      reducer(
        { comments: {} },
        actions.addComments(photoID, Object.keys(comments))
      )
    ).toEqual({
      ...INITIAL_STATE,
      comments: {
        [photoID]: Object.keys(comments),
      },
    });
  });

  test('should handle ADD_COMMENT', () => {
    const photoID = fixtures.getPhoto().id;
    const commentID = fixtures.getComment().id;

    // reducer({ comments: {} }, actions.addComments(photoID, Object.keys({})));

    expect(
      reducer(
        { comments: { [photoID]: [] } },
        actions.addComment(photoID, commentID)
      )
    ).toEqual({
      ...INITIAL_STATE,
      comments: {
        [photoID]: [commentID],
      },
    });
  });
});
