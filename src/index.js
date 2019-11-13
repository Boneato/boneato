import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './comps/App';
import * as serviceWorker from './serviceWorker';

var config = {
    apiKey: "AIzaSyA18aSKV9qp66x5s0FL6y_xcdjlBeBRVng",
    authDomain: "bonito-collab.firebaseapp.com",
    databaseURL: "https://bonito-collab.firebaseio.com",
    projectId: "bonito-collab",
    storageBucket: "bonito-collab.appspot.com",
    messagingSenderId: "49830494344",
    appId: "1:49830494344:web:f4a868b361ec362f571f3d",
    measurementId: "G-683YLNRKFH"
  };

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
