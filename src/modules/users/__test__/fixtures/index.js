import { v4 } from 'uuid';

/* eslint-disable */
const fixtures = {
  getUser() {
    return {
      uid: v4(),
      username: 'allen4dev',
      social: {
        email: 'allen4dev@gmail.com',
        twitter: 'https://twitter.com/@allen4dev',
        facebook: 'https://facebook.com/allen4dev',
        instagram: 'https://instagram.com/allen4dev',
        web: 'https://allen4dev.com',
      },
      info: {
        fullname: 'Alan Aliaga',
        description: 'Alan Aliaga user description',
        age: 23,
      },
      meta: {
        posts: 2579,
        followers: 9123812,
        following: 712,
      },
    };
  },

  getUsers(n) {
    let users = {};
    while (n-- > 0) {
      const newUser = this.getUser();
      users = { ...users, [newUser.id]: newUser };
    }

    return users;
  },
};

export default fixtures;
