import { v4 } from 'uuid';

const fixtures = {
  getPhoto() {
    return {
      id: v4(),
      description: 'an #awesome photo with #tags #anime',
      url: `https://minigram.test/${v4()}.jpg`,
      likes: 0,
      user: v4(),
    };
  },

  getComment() {
    return {
      avatar: `https://example.test.${v4}.jpg`,
      body: 'A comment about an awesome photo',
      displayName: 'Alan Aliaga',
      id: `commentID-${v4()}`,
      uid: `userID-${v4()}`,
    };
  },

  getComments(n) {
    let comments = {};
    /* eslint-disable */
    while (n-- > 0) {
      const newComment = this.getComment();
      comments = { ...comments, [newComment.id]: newComment };
    }

    return comments;
  },
};

export default fixtures;
