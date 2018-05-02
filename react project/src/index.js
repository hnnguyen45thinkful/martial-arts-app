import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAvyFu5C27a8EWrvKNVnvsGNxaXveajzwk",
    authDomain: "martial-arts-app.firebaseapp.com",
    databaseURL: "https://martial-arts-app.firebaseio.com",
    storageBucket: "martial-arts-app.appspot.com",
    messagingSenderId: "874567922394"
  };

firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
