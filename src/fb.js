import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_DOMAIN",
  databaseURL: "YOUR_FIREBASE_DB",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);


export const database = firebase.database();
export const { auth } = firebase;
export const storage = firebase.storage();

const provider = new auth.GoogleAuthProvider();

export function login() {
  return auth().signInWithPopup(provider).then(async (result) => {
    const { displayName, email, photoURL, uid } = result.user;
    const authUser = { displayName, email, photoURL, uid };
    return authUser;
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error;
      const { credential } = error;
      console.log(errorCode, errorMessage, email, credential);
      throw new Error();
    });
}
