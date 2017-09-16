import { v4 } from 'uuid';

import { database, storage } from './../config/firebase';

const photosRef = database.ref('photos');

const api = {
  photos: {
    // should receibe userId
    async getSingle(id) {
      const snapshot = await photosRef.child(id).once('value');
      return snapshot.val();
    },

    async getUserPhotos() {
      const snapshot = await photosRef.once('value');
      return snapshot.val();
    },

    async savePhoto({ src, description = '' }) {
      const newPhoto = photosRef.push();
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
};

export default api;
