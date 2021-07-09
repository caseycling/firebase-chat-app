import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAXxoMcMMIFqUIR47GPUT95NEvGJO1gQmI',
    authDomain: 'unichat-d0cf9.firebaseapp.com',
    projectId: 'unichat-d0cf9',
    storageBucket: 'unichat-d0cf9.appspot.com',
    messagingSenderId: '702035796111',
    appId: '1:702035796111:web:65c12cf6004c81bad010fa',
  })
  .auth();
