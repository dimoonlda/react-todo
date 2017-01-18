import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAB_9Kb7yU1WkrAOoTpEaALu3_hBEKP6jY",
  authDomain: "dimoon-todo-app.firebaseapp.com",
  databaseURL: "https://dimoon-todo-app.firebaseio.com",
  storageBucket: "dimoon-todo-app.appspot.com",
  messagingSenderId: "942382158902"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
      name: 'Todo App',
      version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'DiMoon',
    age: 37
  }
});

firebaseRef.on('value', (snapshot) => {
    console.log('Got value', snapshot.val());
});

firebaseRef.child('app').update({
    name: 'Todo Application'
});

firebaseRef.child('user').update({
    name: 'Nastia'
});

firebaseRef.child('user/age').remove();

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.push({
    text: 'todo 1',
    completed: true
});
todosRef.push({
    text: 'todo 2',
    completed: false
});

firebaseRef.once('value', function(snapshot1) {
    snapshot1.forEach(function(childSnapshot1) {
        var childKey = childSnapshot1.key;
        var childData = childSnapshot1.val();
        console.log('DATA: ', childKey, childData);
    });
});
//firebaseRef.off();