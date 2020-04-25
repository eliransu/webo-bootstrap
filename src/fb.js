import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDwKBCoxLBjwABSCs4MwbxruChDQXnLU8M",
  authDomain: "webopromotions.firebaseapp.com",
  databaseURL: "https://webopromotions.firebaseio.com/",
  projectId: "webopromotions",
  // storageBucket: 'gs://cpame-c8227.appspot.com',
  // appId: "1:579768872904:web:2517e343c9b43047"
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
