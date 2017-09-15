// import * as firebase from 'firebase';
import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBB1De_LL6wREXVKTlRhf6CqmEpw9GnNuU',
  authDomain: 'instagram-41d86.firebaseapp.com',
  databaseURL: 'https://instagram-41d86.firebaseio.com',
  projectId: 'instagram-41d86',
  storageBucket: 'instagram-41d86.appspot.com',
  messagingSenderId: '44786242670',
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage;
export const auth = firebase.auth;
