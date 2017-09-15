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
};

export default fixtures;
