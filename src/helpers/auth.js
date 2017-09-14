// Put this in a more "feature" structure.
import { auth } from './../config/firebase';

export function loginWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}
