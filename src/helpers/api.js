import { v4 } from 'uuid';

import { database, storage } from './../config/firebase';

const photosRef = database.ref('photos');
const usersRef = database.ref('users');

const api = {
  photos: {
    // should receibe userId
    async getSingle(id) {
      const snapshot = await photosRef.child(id).once('value');
      return snapshot.val();
    },

    async getUserPhotos(userId) {
      const ref = photosRef.child(userId);
      const snapshot = await ref.once('value');
      return snapshot.val() || {};
    },

    async savePhoto({ userId, src, description = '' }) {
      const newPhoto = photosRef.child(userId).push();
      const record = {
        id: newPhoto.key,
        description,
        src,
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
      const filterUser = { uid: user.uid, email: user.email, displayName: user.displayName };
      await usersRef.child(filterUser.uid).set(filterUser);
      return filterUser;
    },
  },
};

export default api;
