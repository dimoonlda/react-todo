import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAB_9Kb7yU1WkrAOoTpEaALu3_hBEKP6jY",
    authDomain: "dimoon-todo-app.firebaseapp.com",
    databaseURL: "https://dimoon-todo-app.firebaseio.com",
    storageBucket: "dimoon-todo-app.appspot.com",
    messagingSenderId: "942382158902"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
