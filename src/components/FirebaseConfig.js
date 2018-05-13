import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC1OKe-IO0s9EoAgFXth6N4QilSqvo22ik",
  authDomain: "schoolbnb-5d1da.firebaseapp.com",
  databaseURL: "https://schoolbnb-5d1da.firebaseio.com",
  projectId: "schoolbnb-5d1da",
  storageBucket: "schoolbnb-5d1da.appspot.com",
  messagingSenderId: "54371637468"
};
export const firebaseApp = firebase.initializeApp(config);