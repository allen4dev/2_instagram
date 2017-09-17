import { v4 } from 'uuid';

import { database, storage } from './../config/firebase';

const commentsRef = database.ref('comments');
const photosRef = database.ref('photos');
const usersRef = database.ref('users');

const api = {
  photos: {
    // should receibe userId
    async getSingle(uid, id) {
      const snapshot = await photosRef.child(uid).child(id).once('value');
      return snapshot.val();
    },

    async getUserPhotos(userId) {
      const ref = photosRef.child(userId);
      const snapshot = await ref.once('value');
      return snapshot.val() || {};
    },

    async getComments(id) {
      const snapshot = await commentsRef.child(id).once('value');
      return snapshot.val() || {};
    },

    async savePhoto(info) {
      const newPhoto = photosRef.child(info.uid).push();
      const record = {
        id: newPhoto.key,
        ...info,
      };

      await newPhoto.set(record);
      return record;
    },
    async savePhotoToStorage(photo) {
      const photosStorage = storage().ref(`photos/${photo.name}_${v4()}`);
      const task = await photosStorage.put(photo);

      return task;
    },
  },

  users: {
    async saveUser(user) {
      const filterUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        avatar: user.photoURL,
      };
      await usersRef.child(filterUser.uid).set(filterUser);
      return filterUser;
    },
  },

  comments: {
    async saveComment(photoID, comment) {
      const newComment = await commentsRef.child(photoID).push();
      const record = {
        id: newComment.key,
        ...comment,
      };

      await newComment.set(record);
      return record;
    },
  },
};

export default api;
